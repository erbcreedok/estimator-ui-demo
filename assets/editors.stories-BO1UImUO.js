import{j as a,Y as X,F as J,aZ as Y,bQ as K,a0 as ee,b3 as te,a_ as ae,b4 as ne,b5 as re,a6 as S,Z as oe,r as v,C as ct,S as se,bT as ot,dE as lt,dF as de,dG as ue,dH as he,dI as pe,dJ as dt,dK as ut,dL as ht,dM as pt,dN as yt,dO as mt,a1 as wt,bR as ye,bs as bt,bS as ft,bU as me,bV as Et,v as kt,c as j,O as q,Q as m,u as r,J as u,H as E,P as w,dP as f,l as s,w as O,bW as k,bX as L,h as d,N as le,G as Q,bq as z,dQ as we,I as x,dR as gt,dS as st,dT as vt,dU as Ct,dV as xt}from"./products-CTiDOXRn.js";import{u as it,b as St,N as Tt,l as At,a as Rt,m as Ot,w as jt,R as qt}from"./country-city-requests-Muz9l7yR.js";const Dt=`import {
	TableCore,
	cellEditingFeature,
	cellSelectionFeature,
	cellKeyboardFeature,
	cellKeyboardEditingFeature,
	createColumnHelper,
	metaHelper,
	tableFeatures,
	type CellEditingColumnMeta,
	type CellEditingTableMeta,
	editOn,
} from '@pnl-simulation/table-core'

import type { Employee } from '../../../data/employees'
import { Editor } from '../editor'

import { AutocompleteEditor, type LoadOptions } from './autocomplete-editor'

// 1. Cells can be edited. The table's \`meta\` carries the screen's own values.
const features = tableFeatures({
	cellSelectionFeature,
	cellKeyboardFeature,
	cellEditingFeature,
	cellKeyboardEditingFeature,
	tableMeta: metaHelper<CellEditingTableMeta & { projectId: string }>(),
	columnMeta: metaHelper<CellEditingColumnMeta>(),
})

const LEVELS = ['A1', 'A2', 'B1', 'B2', 'B3', 'C1', 'C2']

// 4. A request for the options: its parameters come from the row (team), the
// table (project) and a React context (region); the typed text is the query.
const loadRoles: LoadOptions<typeof features, Employee> = (load) =>
	load.env.request(
		'/api/roles',
		{
			team: load.row.original.team,
			project: load.table.options.meta?.projectId ?? '',
			region: load.env.user.region,
			q: load.query,
		},
		load.signal
	)

const helper = createColumnHelper<typeof features, Employee>()
const columns = helper.columns([
	helper.accessor('name', {
		header: 'Name',
		// 2. This column can be edited. 3. Its \`cell\` is the editor.
		meta: { editable: true, typeToEdit: true },
		cell: (info) => <Editor {...info} />,
	}),
	helper.accessor('team', { header: 'Team' }),
	helper.accessor('role', {
		header: 'Role',
		meta: { editable: true },
		cell: (info) => <AutocompleteEditor {...info} source={loadRoles} />,
	}),
	helper.accessor('level', {
		header: 'Level',
		meta: { editable: true },
		cell: (info) => <AutocompleteEditor {...info} source={LEVELS} />,
	}),
	helper.accessor('country', { header: 'Country' }),
])

type Props = {
	rows: Employee[]
	/** The screen saves what was picked or typed; a throw refuses it. */
	onEdit: (rowId: string, columnId: string, value: unknown) => Promise<void>
}

export const AutocompleteTable = ({ rows, onEdit }: Props) => (
	<TableCore
		startEditing={editOn.click} // these scenes open an editor by a click
		features={features}
		data={rows}
		columns={columns}
		getRowId={(employee) => employee.id}
		meta={{ projectId: 'PNL-7', onEdit }}
	/>
)
`,Ft=`import {
	TableCore,
	cellEditingFeature,
	cellSelectionFeature,
	cellKeyboardFeature,
	cellKeyboardEditingFeature,
	createColumnHelper,
	metaHelper,
	tableFeatures,
	type CellEditingColumnMeta,
	type CellEditingTableMeta,
	editOn,
} from '@pnl-simulation/table-core'

import { COUNTRIES, LEVELS, isCityOf } from '../../../data/places'
import type { Person } from '../../../data/people'
import { Editor } from '../editor'

import { AutocompleteEditor } from './autocomplete-editor'
import { NO_COUNTRY } from './country-city-rows'
import { loadCities, loadCountries } from './country-city-requests'

// 1. Cells can be edited.
const features = tableFeatures({
	cellSelectionFeature,
	cellKeyboardFeature,
	cellEditingFeature,
	cellKeyboardEditingFeature,
	tableMeta: metaHelper<CellEditingTableMeta>(),
	columnMeta: metaHelper<CellEditingColumnMeta>(),
})

// A value that is not on the list is refused with its reason.
const oneOf = (list: string[], what: string) => (text: string) =>
	list.includes(text) ? { value: text } : { error: \`\${text} is not \${what}\` }

const helper = createColumnHelper<typeof features, Person>()
const columns = helper.columns([
	helper.accessor('name', {
		header: 'Name',
		// 2. This column can be edited. 3. Its \`cell\` is the editor.
		meta: { editable: true, typeToEdit: true },
		cell: (info) => <Editor {...info} />,
	}),
	helper.accessor('level', {
		header: 'Level',
		meta: { editable: true, parse: oneOf(LEVELS, 'a level (A1–C5)') },
		cell: (info) => <AutocompleteEditor {...info} source={LEVELS} />,
	}),
	helper.accessor('country', {
		header: 'Country',
		meta: { editable: true, parse: oneOf(COUNTRIES, 'a country on the list') },
		cell: (info) => <AutocompleteEditor {...info} source={loadCountries} />,
	}),
	helper.accessor('city', {
		header: 'City',
		meta: {
			editable: true,
			// A city must be a city of the country of its row.
			parse: (text, cell) => {
				const { country } = cell.row.original as Person

				return isCityOf(country, text)
					? { value: text }
					: { error: \`\${text} is not a city of \${country}\` }
			},
		},
		cell: (info) => <AutocompleteEditor {...info} source={loadCities} />,
	}),
])

type Props = {
	rows: Person[]
	/** The screen saves what was picked, typed, pasted or filled. */
	onEdit: (rowId: string, columnId: string, value: unknown) => void
}

export const CountryCityTable = ({ rows, onEdit }: Props) => (
	<TableCore
		startEditing={editOn.click} // these scenes open an editor by a click
		features={features}
		data={rows}
		columns={columns}
		getRowId={(person) => person.id}
		meta={{ onEdit }}
		resolvers={{
			// A city needs the country of its row; the cell says so.
			getCanEdit: ({ column, row }) =>
				column.id === 'city' && !(row.original as Person).country
					? NO_COUNTRY
					: true,
		}}
	/>
)
`,Mt=`import {
	TableCore,
	cellEditingFeature,
	cellKeyboardEditingFeature,
	cellKeyboardFeature,
	cellSelectionFeature,
	columnSizingFeature,
	createColumnHelper,
	metaHelper,
	tableFeatures,
	type CellEditingColumnMeta,
	type CellEditingTableMeta,
	type CellSelectionColumnMeta,
	editOn,
} from '@pnl-simulation/table-core'

import { Editor } from '../editor'

import { RateEditor, rateMeta, rateProblem, type Rate } from './rate-editor'

// Tab has to go on to the next cell, so the keyboard features are in; the
// columns say their width (\`size\`), a rate is wide.
const features = tableFeatures({
	columnSizingFeature,
	cellSelectionFeature,
	cellKeyboardFeature,
	cellEditingFeature,
	cellKeyboardEditingFeature,
	tableMeta: metaHelper<CellEditingTableMeta>(),
	columnMeta: metaHelper<CellEditingColumnMeta & CellSelectionColumnMeta>(),
})

export type RateRow = { id: string; name: string; rate: Rate; level: string }

const helper = createColumnHelper<typeof features, RateRow>()
const columns = helper.columns([
	helper.accessor('name', { header: 'Name', size: 150 }),
	// One value, an object; the cell is three fields (the editor), and the column
	// says how a text becomes a rate, what is copied and what Delete writes.
	helper.accessor('rate', {
		header: 'Rate',
		size: 270,
		meta: rateMeta,
		cell: (info) => <RateEditor {...info} />,
	}),
	helper.accessor('level', {
		header: 'Level',
		size: 100,
		meta: { editable: true, typeToEdit: true },
		cell: (info) => <Editor {...info} />,
	}),
])

type Props = {
	rows: RateRow[]
	onEdit: (rowId: string, columnId: string, value: unknown) => void
}

export const RateTable = ({ rows, onEdit }: Props) => (
	<TableCore
		startEditing={editOn.click} // these scenes open an editor by a click
		features={features}
		data={rows}
		columns={columns}
		getRowId={(row) => row.id}
		rowHeight={44}
		meta={{ onEdit }}
		resolvers={{
			// A rate the screen already has can be wrong: the cell says so (the same rule the editor asks).
			getCellIssue: ({ column, row }) => {
				const problem =
					column.id === 'rate' && rateProblem((row.original as RateRow).rate)

				return problem ? { error: problem } : {}
			},
		}}
	/>
)
`,Lt=`import {
	TableCore,
	cellEditingFeature,
	cellSelectionFeature,
	cellKeyboardFeature,
	cellKeyboardEditingFeature,
	createColumnHelper,
	metaHelper,
	tableFeatures,
	type CellEditingColumnMeta,
	type CellEditingTableMeta,
	type CoreColumnMeta,
	editOn,
} from '@pnl-simulation/table-core'

import { Editor } from '../editor'

import { PeriodCell } from './period-cell'
import {
	MAX_DATE,
	MIN_DATE,
	parseDateText,
	parseRate,
	parseWorkload,
	planIssue,
	type Plan,
} from './plan-rules'

// 1. Cells can be edited.
const features = tableFeatures({
	cellSelectionFeature,
	cellKeyboardFeature,
	cellEditingFeature,
	cellKeyboardEditingFeature,
	tableMeta: metaHelper<CellEditingTableMeta>(),
	columnMeta: metaHelper<CoreColumnMeta & CellEditingColumnMeta>(),
})

const helper = createColumnHelper<typeof features, Plan>()
// A number shows with two decimals; the digits keyboard comes up on a phone.
const number = (by: number) =>
	({
		inputMode: 'decimal',
		step: { by, decimals: 2 },
		display: (value: string) => (value === '' ? '' : Number(value).toFixed(2)),
	} as const)

const columns = helper.columns([
	helper.accessor('name', { header: 'Name' }),
	// 2. These columns can be edited. 3. Start and End open a popover with a calendar.
	helper.accessor('start', {
		header: 'Start',
		meta: { editable: true, parse: parseDateText },
		cell: (info) => (
			<PeriodCell {...info} field="start" min={MIN_DATE} max={MAX_DATE} />
		),
	}),
	helper.accessor('end', {
		header: 'End',
		meta: { editable: true, parse: parseDateText },
		cell: (info) => (
			<PeriodCell {...info} field="end" min={MIN_DATE} max={MAX_DATE} />
		),
	}),
	helper.accessor((plan) => String(plan.workload ?? ''), {
		id: 'workload',
		header: 'Workload',
		meta: {
			editable: true,
			typeToEdit: true,
			align: 'right',
			parse: parseWorkload,
		},
		cell: (info) => <Editor {...info} {...number(0.05)} />,
	}),
	helper.accessor((plan) => String(plan.rate ?? ''), {
		id: 'rate',
		header: 'Rate',
		meta: {
			editable: true,
			typeToEdit: true,
			align: 'right',
			parse: parseRate,
		},
		cell: (info) => <Editor {...info} {...number(1)} />,
	}),
])

type Props = {
	rows: Plan[]
	/** The screen saves what was typed, picked or pasted. */
	onEdit: (rowId: string, columnId: string, value: unknown) => void
}

export const DatesTable = ({ rows, onEdit }: Props) => (
	<TableCore
		startEditing={editOn.click} // these scenes open an editor by a click
		features={features}
		data={rows}
		columns={columns}
		getRowId={(plan) => plan.id}
		meta={{ onEdit }}
		resolvers={{
			// What is wrong with a cell is the screen's to say (an error mark).
			getCellIssue: ({ column, row }) =>
				planIssue(column.id, row.original as Plan),
		}}
	/>
)
`,Pt=ee({cellSelectionFeature:re,cellKeyboardFeature:ne,cellEditingFeature:ae,cellKeyboardEditingFeature:te,tableMeta:S(),columnMeta:S()}),It=["A1","A2","B1","B2","B3","C1","C2"],Nt=t=>{var e;return t.env.request("/api/roles",{team:t.row.original.team,project:((e=t.table.options.meta)==null?void 0:e.projectId)??"",region:t.env.user.region,q:t.query},t.signal)},F=oe(),_t=F.columns([F.accessor("name",{header:"Name",meta:{editable:!0,typeToEdit:!0},cell:t=>a.jsx(Y,{...t})}),F.accessor("team",{header:"Team"}),F.accessor("role",{header:"Role",meta:{editable:!0},cell:t=>a.jsx(K,{...t,source:Nt})}),F.accessor("level",{header:"Level",meta:{editable:!0},cell:t=>a.jsx(K,{...t,source:It})}),F.accessor("country",{header:"Country"})]),Ht=({rows:t,onEdit:e})=>a.jsx(X,{startEditing:J.click,features:Pt,data:t,columns:_t,getRowId:n=>n.id,meta:{projectId:"PNL-7",onEdit:e}}),Ut={Platform:["Developer","Lead Developer","Architect","SRE"],Payments:["Analyst","Developer","Risk Analyst","QA"],Mobile:["QA","iOS Developer","Android Developer","Designer"],Data:["Lead Developer","Data Engineer","Data Scientist","Analyst"]},Bt=({args:t,hint:e})=>{const[n,c]=v.useState(()=>ct(12)),o=v.useRef(t);o.current=t;const{env:i,log:l}=it(o,(p,g)=>(Ut[g.team]??[]).filter(b=>b.toLowerCase().includes(g.q.toLowerCase()))),h=v.useCallback(async(p,g,b)=>{if(await new Promise(D=>{setTimeout(D,o.current.latency)}),o.current.failSave)throw new Error(`Not saved: the server refused "${b}"`);c(D=>D.map(ce=>ce.id===p?{...ce,[g]:b}:ce))},[]);return a.jsx(se,{hint:e,children:a.jsx(ot.Provider,{value:i,children:a.jsxs("div",{style:{display:"flex",gap:12},children:[a.jsx("div",{style:{flex:1,minWidth:0},children:a.jsx(Ht,{rows:n,onEdit:h})}),a.jsx(St,{entries:l})]})})})},$t=ee({cellSelectionFeature:re,cellKeyboardFeature:ne,cellEditingFeature:ae,cellKeyboardEditingFeature:te,tableMeta:S(),columnMeta:S()}),M=oe(),be=t=>({inputMode:"decimal",step:{by:t,decimals:2},display:e=>e===""?"":Number(e).toFixed(2)}),Wt=M.columns([M.accessor("name",{header:"Name"}),M.accessor("start",{header:"Start",meta:{editable:!0,parse:de},cell:t=>a.jsx(ue,{...t,field:"start",min:pe,max:he})}),M.accessor("end",{header:"End",meta:{editable:!0,parse:de},cell:t=>a.jsx(ue,{...t,field:"end",min:pe,max:he})}),M.accessor(t=>String(t.workload??""),{id:"workload",header:"Workload",meta:{editable:!0,typeToEdit:!0,align:"right",parse:dt},cell:t=>a.jsx(Y,{...t,...be(.05)})}),M.accessor(t=>String(t.rate??""),{id:"rate",header:"Rate",meta:{editable:!0,typeToEdit:!0,align:"right",parse:ut},cell:t=>a.jsx(Y,{...t,...be(1)})})]),Kt=({rows:t,onEdit:e})=>a.jsx(X,{startEditing:J.click,features:$t,data:t,columns:Wt,getRowId:n=>n.id,meta:{onEdit:e},resolvers:{getCellIssue:({column:n,row:c})=>lt(n.id,c.original)}}),Yt=({hint:t})=>{const[e,n]=v.useState(ht),c=v.useCallback((o,i,l)=>n(h=>h.map(p=>p.id===o?{...p,[i]:l}:p)),[]);return a.jsx(se,{hint:t,children:a.jsx(Kt,{rows:e,onEdit:c})})},zt=ee({columnSizingFeature:wt,cellSelectionFeature:re,cellKeyboardFeature:ne,cellEditingFeature:ae,cellKeyboardEditingFeature:te,tableMeta:S(),columnMeta:S()}),V=oe(),Vt=V.columns([V.accessor("name",{header:"Name",size:150}),V.accessor("rate",{header:"Rate",size:270,meta:yt,cell:t=>a.jsx(mt,{...t})}),V.accessor("level",{header:"Level",size:100,meta:{editable:!0,typeToEdit:!0},cell:t=>a.jsx(Y,{...t})})]),Zt=({rows:t,onEdit:e})=>a.jsx(X,{startEditing:J.click,features:zt,data:t,columns:Vt,getRowId:n=>n.id,rowHeight:44,meta:{onEdit:e},resolvers:{getCellIssue:({column:n,row:c})=>{const o=n.id==="rate"&&pt(c.original.rate);return o?{error:o}:{}}}}),Gt=[{rate:45,currency:"USD",type:"Hourly"},{rate:320,currency:"EUR",type:"Daily"},{rate:480,currency:"PLN",type:"Monthly"},{rate:60.5,currency:"USD",type:"Hourly"},{rate:900,currency:"EUR",type:"Daily"}],Qt=["Anna Kowalska","Piotr Nowak","Aigerim Sultanova","Nurlan Abenov","Marta Zielinska"],Xt=({hint:t})=>{const[e,n]=v.useState(()=>Qt.map((o,i)=>({id:`r${i+1}`,name:o,rate:Gt[i],level:["B1","B2","C1","B3","A2"][i]}))),c=v.useCallback((o,i,l)=>n(h=>h.map(p=>p.id===o?{...p,[i]:l}:p)),[]);return a.jsx(se,{hint:t,children:a.jsx(Zt,{rows:e,onEdit:c})})},Jt=ee({cellSelectionFeature:re,cellKeyboardFeature:ne,cellEditingFeature:ae,cellKeyboardEditingFeature:te,tableMeta:S(),columnMeta:S()}),fe=(t,e)=>n=>t.includes(n)?{value:n}:{error:`${n} is not ${e}`},P=oe(),ea=P.columns([P.accessor("name",{header:"Name",meta:{editable:!0,typeToEdit:!0},cell:t=>a.jsx(Y,{...t})}),P.accessor("level",{header:"Level",meta:{editable:!0,parse:fe(ye,"a level (A1–C5)")},cell:t=>a.jsx(K,{...t,source:ye})}),P.accessor("country",{header:"Country",meta:{editable:!0,parse:fe(ft,"a country on the list")},cell:t=>a.jsx(K,{...t,source:At})}),P.accessor("city",{header:"City",meta:{editable:!0,parse:(t,e)=>{const{country:n}=e.row.original;return bt(n,t)?{value:t}:{error:`${t} is not a city of ${n}`}}},cell:t=>a.jsx(K,{...t,source:Rt})})]),ta=({rows:t,onEdit:e})=>a.jsx(X,{startEditing:J.click,features:Jt,data:t,columns:ea,getRowId:n=>n.id,meta:{onEdit:e},resolvers:{getCanEdit:({column:n,row:c})=>n.id==="city"&&!c.original.country?Tt:!0}}),aa={current:{latency:Et,failLoad:!1}},na=({hint:t})=>{const[e,n]=v.useState(Ot),{env:c,log:o}=it(aa,(l,h)=>l==="/api/countries"?me({kind:"countries"},h.q):me({kind:"cities",country:h.country},h.q)),i=v.useCallback((l,h,p)=>n(g=>jt(g,l,h,String(p))),[]);return a.jsx(se,{hint:t,children:a.jsxs(ot.Provider,{value:c,children:[a.jsx(ta,{rows:e,onEdit:i}),a.jsx(qt,{entries:o})]})})},{useArgs:ra}=__STORYBOOK_MODULE_PREVIEW_API__,ie=t=>Object.values(t)[0],Ee=ie(Object.assign({"./autocomplete-table.tsx":Dt})),oa=ie(Object.assign({"./country-city-table.tsx":Ft})),sa=ie(Object.assign({"./rate-table.tsx":Mt})),ia=ie(Object.assign({"./dates-table.tsx":Lt})),ha={title:"Tables/Table Core/Features/Editing/Editors",id:"tables-table-core-features-editing-editors",decorators:[kt],render:function(e,{parameters:n}){const[,c]=ra();return a.jsx(Bt,{args:e,hint:gt(n.hint,e,c)})},args:{latency:600,failLoad:!1,failSave:!1},argTypes:{latency:{name:"server: latency, ms",control:{type:"range",min:0,max:3e3,step:100},table:{category:"fake server"}},failLoad:{name:"server: options fail",control:"boolean",table:{category:"fake server"}},failSave:{name:"server: save fails",control:"boolean",table:{category:"fake server"}}},parameters:{layout:"fullscreen",...z(Ee),docs:{...z(Ee).docs,codePanel:!0,story:{inline:!1,height:"600px"},description:{component:"**Editors**: the editor is the column's own cell (`cell.getIsEditing()`) — a text input, an autocomplete, a date picker. The table only says *when* a cell is edited (see Editing); what the editor shows and how a value is saved is the screen's.\n\n- **Anything the editor needs** is at hand: the **row** (`row.original`), the **table** (`table.options.meta` — the screen's callbacks and ids) and any **React context** above the table (API client, user).\n- **Async**: options can come from a request (debounced, the previous one aborted, stale answers ignored, loading / error with Retry); saving can be async too (pending, rolled back on failure)."}}}},I={tags:["kb:editing-autocomplete"],name:"1 · Autocomplete",parameters:{hint:a.jsxs(a.Fragment,{children:["Edit a ",a.jsx("b",{children:"Level"}),": a list opens, typing filters it, ↑ / ↓ and"," ",a.jsx("b",{children:"Enter"})," pick, a click picks too. The list is fixed — no request."," ","This scene opens an editor by a click (",a.jsx("code",{children:"startEditing=editOn.click"}),")."]})},play:async t=>{if(j(t))return;const{canvasElement:e}=t;await q(e),await r.click(u(e,0,3));const n=await E(e);k.change(n,{target:{value:"C"}}),await w(()=>s(!O(document.body).queryByRole("option",{name:"B1"}),"filtered")),await r.click(await L("C2")),await w(()=>s(m(e,0,3).startsWith("C2"),"picked")),s(f(e).length===0,"no request for a fixed list")}},N={tags:["kb:editing-async-options"],name:"2 · Async options: row, table, context",parameters:{hint:a.jsxs(a.Fragment,{children:["Edit a ",a.jsx("b",{children:"Role"}),": the options come from a request. See it in"," ",a.jsx("i",{children:"Requests"}),": ",a.jsx("code",{children:"team"})," is from the ",a.jsx("b",{children:"row"}),","," ",a.jsx("code",{children:"project"})," from the ",a.jsx("b",{children:"table"})," (",a.jsx("code",{children:"options.meta"}),"),"," ",a.jsx("code",{children:"region"})," from a ",a.jsx("b",{children:"React context"}),", ",a.jsx("code",{children:"q"})," is what you type. Rows of another team get other roles. This scene opens an editor by a click (",a.jsx("code",{children:"startEditing=editOn.click"}),")."]})},play:async t=>{if(j(t))return;const{canvasElement:e}=t;await q(e);const n=m(e,0,1),c=m(e,0,2);await r.click(u(e,0,2)),await E(e),await w(()=>{var h;const l=f(e)[0];s((l==null?void 0:l.dataset.status)==="ok","request answered"),s(((h=l.textContent)==null?void 0:h.includes(`team=${n}`))&&l.textContent.includes("project=PNL-7")&&l.textContent.includes("region=EU"),`params from row, table, context: ${l.textContent}`)},{timeout:4e3});const o=O(document.body).getAllByRole("option").find(l=>l.textContent!==c);s(o,"an option other than the current value");const i=(o==null?void 0:o.textContent)??"";await r.click(o),await w(()=>s(u(e,0,2).querySelector('[data-cell-mark="saving"]'),"saving")),await w(()=>{s(m(e,0,2)===i,"saved"),s(!u(e,0,2).querySelector("[data-cell-mark]"),"save finished")},{timeout:4e3})}},_={tags:["kb:editing-typing"],name:"3 · Typing: debounce and abort",args:{latency:1500},parameters:{hint:a.jsxs(a.Fragment,{children:["Edit a ",a.jsx("b",{children:"Role"})," and type quickly: a request goes out only after a pause (250 ms); when you type again, the running one is ",a.jsx("b",{children:"aborted"}),", and an old answer never replaces a newer one. This scene opens an editor by a click (",a.jsx("code",{children:"startEditing=editOn.click"}),")."]})},play:async t=>{if(j(t))return;const{canvasElement:e}=t;await q(e),await r.click(u(e,0,2));const n=await E(e);await w(()=>s(f(e).length===1,"first"),{timeout:3e3}),k.change(n,{target:{value:"de"}}),await w(()=>{var o;const c=f(e);s(c.some(i=>i.dataset.status==="aborted"),"the first one aborted"),s(c[0].dataset.status==="ok","the last one answered"),s((o=c[0].textContent)==null?void 0:o.includes("q=de"),"with the new query")},{timeout:5e3})}},H={tags:["kb:editing-failures"],name:"4 · Failures: load and save",args:{failLoad:!0,latency:300},parameters:{hint:(t,e)=>a.jsxs(a.Fragment,{children:["The server fails: editing a ",a.jsx("b",{children:"Role"})," says ",a.jsx("i",{children:"Could not load"})," with"," ",a.jsx("b",{children:"Retry"}),"."," ",a.jsx(we,{onClick:()=>e({failLoad:!1,failSave:!0}),children:"Options work, save fails"}),": a picked value shows, then rolls back with ⚠ and the reason on hover."," ",a.jsx(we,{onClick:()=>e({failLoad:!0,failSave:!1}),children:"Options fail"})," ","This scene opens an editor by a click (",a.jsx("code",{children:"startEditing=editOn.click"}),")."]})},play:async t=>{var o,i;if(j(t))return;const{canvasElement:e}=t;await q(e);const n=m(e,0,2);await r.click(u(e,0,2)),await E(e),await w(()=>s(document.querySelector("[data-load-error]"),"error with Retry shown"),{timeout:4e3}),s(((o=f(e)[0])==null?void 0:o.dataset.status)==="error","logged as error"),await r.click(O(e).getByRole("button",{name:"Options work, save fails"})),await r.click(u(e,0,2)),await E(e);const c=await w(()=>{const l=O(document.body).getAllByRole("option").find(h=>h.textContent!==n);if(!l)throw new Error("an option other than the current value");return l},{timeout:4e3});await r.click(c),await d(()=>u(e,0,2).querySelector('[data-cell-mark="failed"]'),"the refused save shows ⚠"),s((i=u(e,0,2).querySelector('[data-cell-mark="failed"]'))==null?void 0:i.getAttribute("aria-label"),"the reason is on hover"),s(m(e,0,2).startsWith(n),"the old value is back")}},R=(t,e)=>{const n=new DataTransfer;n.setData("text/plain",e),t.dispatchEvent(new ClipboardEvent("paste",{bubbles:!0,cancelable:!0,clipboardData:n}))},ca=t=>t.querySelector("[role=grid]"),ke=2,C=3,U={tags:["kb:editing-name-level-country-city"],name:"5 · Name, Level, Country and City",parameters:{...z(oa),hint:a.jsxs(a.Fragment,{children:[a.jsx("b",{children:"Click"})," a cell to edit it. ",a.jsx("b",{children:"Level"})," is a fixed list,"," ",a.jsx("b",{children:"Country"})," asks a server as you type, ",a.jsx("b",{children:"City"})," asks for the cities of the ",a.jsx("i",{children:"country of its row"}),". Changing a Country clears a City that is not in it; a row without a country says why its City cannot be edited. In an open list ",a.jsx("b",{children:"↑ ↓ Enter"})," are the list’s, ",a.jsx("b",{children:"Esc"})," ","closes it and a second ",a.jsx("b",{children:"Esc"})," cancels the edit, ",a.jsx("b",{children:"Tab"})," saves and moves on. A paste, Delete and Fill check the value against the row. This scene opens an editor by a click (",a.jsx("code",{children:"startEditing=editOn.click"}),")."]})},render:(t,{parameters:e})=>a.jsx(na,{hint:e.hint}),play:async t=>{var p,g;if(j(t))return;const e=t.canvasElement;await q(e);const n=getComputedStyle(u(e,0,1)).color;await r.click(u(e,0,1));const c=await E(e);s(getComputedStyle(c).color===n&&c.value==="B1",`the value stays as the cell showed it: ${c.value} in ${getComputedStyle(c).color}, the cell had ${n}`),k.change(c,{target:{value:"C"}}),await r.click(await L("C3")),await d(()=>m(e,0,1)==="C3","Level: picked C3"),s(f(e).length===0,"Level asks no one"),await r.click(u(e,0,ke));const o=await E(e);await d(()=>document.querySelector(".MuiAutocomplete-loading"),"Country: loading is shown"),await d(()=>{var b;return((b=f(e)[0])==null?void 0:b.dataset.status)==="ok"},"Country: the server answered"),k.change(o,{target:{value:"zzz"}}),await d(()=>O(document.body).queryByText("Nothing found"),"Country: nothing found says so"),k.change(o,{target:{value:"ger"}}),await r.click(await L("Germany")),await d(()=>m(e,0,ke)==="Germany","Country: picked"),await d(()=>m(e,0,C)==="","a City that is not in the new Country is cleared");const i=f(e).length;await r.click(u(e,0,C)),await E(e),await d(()=>f(e).length>i,"City: a request went out"),s((p=f(e)[0].textContent)==null?void 0:p.includes("country=Germany"),`City asks for the cities of the row’s country: ${f(e)[0].textContent}`),await r.click(await L("Berlin")),await d(()=>m(e,0,C)==="Berlin","City: picked Berlin"),s(!O(document.body).queryByRole("option",{name:"Krakow"}),"City: only the cities of Germany are offered"),await r.click(u(e,1,C));const l=await E(e);await L("Warsaw"),l.focus(),await r.keyboard("{Escape}"),await d(()=>!document.querySelector('[role="listbox"]')&&x(e),"the first Esc closes the list and keeps the edit"),await r.keyboard("{Escape}"),await d(()=>!x(e),"the second Esc cancels the edit"),s(m(e,1,C)==="Warsaw","Esc kept the old value"),await r.click(u(e,1,C));const h=await E(e);k.keyDown(h,{key:"Escape"}),k.keyDown(h,{key:"Escape"}),k.click(u(e,2,1)),await new Promise(b=>{setTimeout(b,300)}),await d(()=>u(e,2,1).getAttribute("data-editing")==="true"&&x(e),"after Esc, Esc the first click on another cell opens the edit and keeps it"),await r.keyboard("{Escape}"),await r.keyboard("{Escape}"),await d(()=>!x(e),"Level: Esc, Esc cancels the edit too"),await r.click(u(e,3,C)),s(!x(e),"City of a row without a country does not open"),s(((g=u(e,3,C).querySelector("[data-cannot-edit]"))==null?void 0:g.textContent)==="Choose a country first","the cell says why"),await r.click(u(e,1,1)),R(ca(e),"Z9"),await d(()=>{var b,D;return(D=(b=document.querySelector("[data-write-notice]"))==null?void 0:b.textContent)==null?void 0:D.includes("Z9 is not a level")},"the paste of Z9 into Level is refused with its reason"),s(m(e,1,1)!=="Z9","the refused value is not written")}},T=1,ge=2,Z=3,la=4,B=t=>st(vt(Ct(xt(new Date),t))),A=t=>O(document.querySelector("[data-period-popover]")).getByLabelText(t),ve=(t,e,n)=>u(t,e,n).querySelector("[data-cell-mark]"),$={tags:["kb:editing-dates-period-numbers"],name:"6 · Dates, period and numbers",parameters:{...z(ia),hint:a.jsxs(a.Fragment,{children:[a.jsx("b",{children:"Click"})," Start or End: a popover with two date fields and a calendar. Type ",a.jsx("b",{children:"Mar 05, 2027"})," or pick a day: after a Start the focus goes to End by itself. ",a.jsx("b",{children:"Esc"})," closes the popover, a second"," ",a.jsx("b",{children:"Esc"})," cancels; ",a.jsx("b",{children:"Tab"})," goes Start → End → the next cell."," ",a.jsx("b",{children:"Workload"})," is 0–1 (↑ ↓ step 0.05, outside is an error), ",a.jsx("b",{children:"Rate"})," ","is ",1,"–",500,". A paste takes ",a.jsx("b",{children:"MMM dd, yyyy"})," or ISO dates and numbers with a comma or a point, and refuses the rest with its reason. This scene opens an editor by a click (",a.jsx("code",{children:"startEditing=editOn.click"}),")."]})},render:(t,{parameters:e})=>a.jsx(Yt,{hint:e.hint}),play:async t=>{if(j(t))return;const e=t.canvasElement;await q(e),await r.click(u(e,0,T)),await w(()=>s(A("Start Date")===document.activeElement,"the cell’s own boundary has the focus")),k.change(A("Start Date"),{target:{value:B(8)}}),await d(()=>m(e,0,T)===B(8),"a whole date is taken as it is typed"),await d(()=>A("End Date")===document.activeElement,"after a Start the focus goes to End by itself"),k.change(A("End Date"),{target:{value:B(3)}}),await w(()=>{var i;return s(u(e,0,ge).dataset.issue==="error"&&((i=ve(e,0,ge))==null?void 0:i.getAttribute("aria-label"))==="End is before Start","End before Start is an error")},{timeout:3e3}),await r.keyboard("{Escape}"),await d(()=>!document.querySelector("[data-period-popover]")&&x(e),"the first Esc closes the popover and keeps the edit"),await r.keyboard("{Escape}"),await d(()=>!x(e),"the second Esc cancels the edit"),await r.click(u(e,1,T)),await w(()=>s(A("Start Date")===document.activeElement,"Start has the focus")),await r.keyboard("{Tab}"),await d(()=>A("End Date")===document.activeElement,"Tab goes from Start to End"),await r.keyboard("{Tab}"),await d(()=>!x(e)&&u(e,1,Z).getAttribute("data-selection")==="active","Tab from End leaves for the next cell"),await r.click(u(e,2,T)),await w(()=>s(A("Start Date")===document.activeElement,"Start has the focus"));const n=document.querySelectorAll("[data-day]:not([disabled])");s(n.length>10,"the calendar offers the days of the range");const c=n[n.length-1];await r.click(c),await d(()=>m(e,2,T)===st(c.dataset.day),"a click on a day sets the date"),await r.keyboard("{Escape}"),await r.keyboard("{Escape}"),await r.click(u(e,3,Z));const o=await E(e);s(o.inputMode==="decimal","a number has the digits keyboard"),await le(o,"1,2"),Q(o,"Enter"),await w(()=>{var i;return s(m(e,3,Z).startsWith("1.20")&&((i=ve(e,3,Z))==null?void 0:i.getAttribute("aria-label"))==="Workload must be between 0 and 1","Workload 1.2 is an error")},{timeout:3e3}),await r.click(u(e,4,T)),R(e.querySelector("[role=grid]"),B(5)),await d(()=>m(e,4,T)===B(5),"a pasted date in MMM dd, yyyy is taken"),await r.click(u(e,4,la)),R(e.querySelector("[role=grid]"),"abc"),await d(()=>{var i,l;return(l=(i=document.querySelector("[data-write-notice]"))==null?void 0:i.textContent)==null?void 0:l.includes("abc is not a number")},"a pasted word into Rate is refused with its reason")}},y=(t,e)=>t.querySelector(`[data-field="${e}"]`),Ce=t=>{const e=getComputedStyle(t);return[e.borderTopColor,e.borderTopWidth,e.height,e.fontSize,e.borderRadius].join(" ")},G=t=>t.querySelector("[role=grid]"),W={tags:["kb:editing-rate"],name:"7 · Rate: three fields in one cell",parameters:{...z(sa),summary:'One cell with three fields (a number, a currency, a type). A click on a field opens the edit with the focus in that field, Tab goes from field to field and on to the next cell, Enter saves it all, Esc cancels it; a paste takes "120 USD hourly" or "day/90/EUR" in any order.'},render:()=>a.jsx(Xt,{hint:a.jsxs(a.Fragment,{children:["The Rate cell is always three fields. Click the currency: the edit starts there. ",a.jsx("b",{children:"Tab"})," goes number → currency → type → the next cell, ",a.jsx("b",{children:"Enter"})," saves, ",a.jsx("b",{children:"Esc"})," cancels. Select the cell and paste ",a.jsx("code",{children:"120 USD hourly"})," or ",a.jsx("code",{children:"day/90/EUR"}),"; paste"," ",a.jsx("code",{children:"abc"})," and the notice says why it is refused. This scene opens an editor by a click (",a.jsx("code",{children:"startEditing=editOn.click"}),")."]})}),play:async t=>{if(j(t))return;const e=t.canvasElement;await q(e);const n=u(e,0,1),c=Ce(y(n,"currency"));await r.click(y(n,"currency")),await d(()=>n.getAttribute("data-editing")==="true","a click on the currency opens the edit"),s(y(n,"currency").contains(document.activeElement),"with the focus in the currency"),s(Ce(y(n,"currency"))===c,"the field looks the same shown and edited"),await r.keyboard("{Tab}"),s(y(n,"type").contains(document.activeElement)&&n.getAttribute("data-editing")==="true","Tab goes to the type, the edit goes on"),await r.keyboard("{Shift>}{Tab}{/Shift}"),s(y(n,"currency").contains(document.activeElement),"Shift+Tab goes back to the currency"),await r.keyboard("{Tab}{Tab}"),await d(()=>n.getAttribute("data-editing")==="false"&&u(e,0,2).getAttribute("data-selection")==="active","Tab from the last field leaves the cell for the next one"),await r.keyboard("{Shift>}{Tab}{/Shift}"),await d(()=>n.getAttribute("data-selection")==="active","Shift+Tab from the next cell comes back");const o=()=>y(n,"rate").textContent;await r.click(y(n,"rate")),await r.keyboard("{Escape}"),R(G(e),"120 USD hourly"),await d(()=>o()==="120.00"&&y(n,"currency").textContent==="USD"&&y(n,"type").textContent==="Hourly","“120 USD hourly” fills the three fields"),R(G(e),"day/90/EUR"),await d(()=>o()==="90.00"&&y(n,"currency").textContent==="EUR"&&y(n,"type").textContent==="Daily","“day/90/EUR” fills them in another order"),R(G(e),"abc"),await d(()=>{var h,p;return(p=(h=document.querySelector("[data-write-notice]"))==null?void 0:h.textContent)==null?void 0:p.includes("abc")},"“abc” is refused with its reason"),s(o()==="90.00","a refused paste leaves the cell as it was"),R(G(e),"900 PLN"),await d(()=>{var h,p;return(p=(h=document.querySelector("[data-write-notice]"))==null?void 0:h.textContent)==null?void 0:p.includes("Rate must be 1–500")},"a rate outside the range is refused with the rule (the one the editor asks)"),s(u(e,4,1).querySelector('[data-cell-mark="error"]')!==null,"a rate the screen already has, outside the range, is an error on its cell");const i=u(e,1,1);await r.click(y(i,"rate"));const l=y(i,"rate");await le(l,"600"),Q(l,"Enter"),await new Promise(h=>{setTimeout(h,200)}),s(i.getAttribute("data-editing")==="true"&&l.getAttribute("aria-invalid")==="true","a rate out of the range keeps the edit and says so"),await le(l,"75"),Q(l,"Enter"),await d(()=>y(i,"rate").textContent==="75.00","a right rate is saved by Enter"),await r.click(y(i,"currency")),await r.click(await L("PLN")),Q(i.querySelector('[aria-label="currency"]'),"Enter"),await d(()=>y(i,"currency").textContent==="PLN","a currency picked from the list is saved with Enter"),await r.click(y(n,"rate")),await r.keyboard("{Escape}"),await r.keyboard("{Delete}"),await d(()=>o()===""&&y(n,"currency").textContent===""&&y(n,"type").textContent==="","Delete clears all three parts")}};var xe,Se,Te,Ae,Re;I.parameters={...I.parameters,docs:{...(xe=I.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  tags: ['kb:editing-autocomplete'],
  name: '1 · Autocomplete',
  parameters: {
    hint: <>
                Edit a <b>Level</b>: a list opens, typing filters it, ↑ / ↓ and{' '}
                <b>Enter</b> pick, a click picks too. The list is fixed — no request.{' '}
                This scene opens an editor by a click (
                <code>startEditing=editOn.click</code>).
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    await userEvent.click(cell(canvasElement, 0, 3));
    const input = await openEditor(canvasElement);
    fireEvent.change(input, {
      target: {
        value: 'C'
      }
    });
    await waitFor(() => check(!within(document.body).queryByRole('option', {
      name: 'B1'
    }), 'filtered'));
    await userEvent.click(await option('C2'));
    await waitFor(() => check(text(canvasElement, 0, 3).startsWith('C2'), 'picked'));
    check(requests(canvasElement).length === 0, 'no request for a fixed list');
  }
}`,...(Te=(Se=I.parameters)==null?void 0:Se.docs)==null?void 0:Te.source},description:{story:"An autocomplete over a fixed list.",...(Re=(Ae=I.parameters)==null?void 0:Ae.docs)==null?void 0:Re.description}}};var Oe,je,qe,De,Fe;N.parameters={...N.parameters,docs:{...(Oe=N.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  tags: ['kb:editing-async-options'],
  name: '2 · Async options: row, table, context',
  parameters: {
    hint: <>
                Edit a <b>Role</b>: the options come from a request. See it in{' '}
                <i>Requests</i>: <code>team</code> is from the <b>row</b>,{' '}
                <code>project</code> from the <b>table</b> (<code>options.meta</code>),{' '}
                <code>region</code> from a <b>React context</b>, <code>q</code> is what
                you type. Rows of another team get other roles. This scene opens an
                editor by a click (<code>startEditing=editOn.click</code>).
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    const team = text(canvasElement, 0, 1);
    const before = text(canvasElement, 0, 2);
    await userEvent.click(cell(canvasElement, 0, 2));
    await openEditor(canvasElement);
    await waitFor(() => {
      const first = requests(canvasElement)[0];
      check(first?.dataset.status === 'ok', 'request answered');
      check(first.textContent?.includes(\`team=\${team}\`) && first.textContent.includes('project=PNL-7') && first.textContent.includes('region=EU'), \`params from row, table, context: \${first.textContent}\`);
    }, {
      timeout: 4000
    });
    const pick = within(document.body).getAllByRole('option').find(o => o.textContent !== before);
    check(pick, 'an option other than the current value');
    const value = pick?.textContent ?? '';
    await userEvent.click(pick as HTMLElement);
    await waitFor(() => check(cell(canvasElement, 0, 2).querySelector('[data-cell-mark="saving"]'), 'saving'));
    await waitFor(() => {
      check(text(canvasElement, 0, 2) === value, 'saved');
      check(!cell(canvasElement, 0, 2).querySelector('[data-cell-mark]'), 'save finished');
    }, {
      timeout: 4000
    });
  }
}`,...(qe=(je=N.parameters)==null?void 0:je.docs)==null?void 0:qe.source},description:{story:"Async options; the request takes params from the row, table and context.",...(Fe=(De=N.parameters)==null?void 0:De.docs)==null?void 0:Fe.description}}};var Me,Le,Pe,Ie,Ne;_.parameters={..._.parameters,docs:{...(Me=_.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  tags: ['kb:editing-typing'],
  name: '3 · Typing: debounce and abort',
  args: {
    latency: 1500
  },
  parameters: {
    hint: <>
                Edit a <b>Role</b> and type quickly: a request goes out only after a
                pause (250 ms); when you type again, the running one is <b>aborted</b>,
                and an old answer never replaces a newer one. This scene opens an editor
                by a click (<code>startEditing=editOn.click</code>).
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    await userEvent.click(cell(canvasElement, 0, 2));
    const input = await openEditor(canvasElement);
    // Wait for the first request to be on its way, then type.
    await waitFor(() => check(requests(canvasElement).length === 1, 'first'), {
      timeout: 3000
    });
    fireEvent.change(input, {
      target: {
        value: 'de'
      }
    });
    await waitFor(() => {
      const all = requests(canvasElement);
      check(all.some(r => r.dataset.status === 'aborted'), 'the first one aborted');
      check(all[0].dataset.status === 'ok', 'the last one answered');
      check(all[0].textContent?.includes('q=de'), 'with the new query');
    }, {
      timeout: 5000
    });
  }
}`,...(Pe=(Le=_.parameters)==null?void 0:Le.docs)==null?void 0:Pe.source},description:{story:"Typing fast: one request per pause, the older ones aborted.",...(Ne=(Ie=_.parameters)==null?void 0:Ie.docs)==null?void 0:Ne.description}}};var _e,He,Ue,Be,$e;H.parameters={...H.parameters,docs:{...(_e=H.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  tags: ['kb:editing-failures'],
  name: '4 · Failures: load and save',
  args: {
    failLoad: true,
    latency: 300
  },
  parameters: {
    hint: (args: Args, update: (next: Partial<Args>) => void) => <>
                The server fails: editing a <b>Role</b> says <i>Could not load</i> with{' '}
                <b>Retry</b>.{' '}
                <HintAction onClick={() => update({
        failLoad: false,
        failSave: true
      })}>
                    Options work, save fails
                </HintAction>
                : a picked value shows, then rolls back with ⚠ and the reason on hover.{' '}
                <HintAction onClick={() => update({
        failLoad: true,
        failSave: false
      })}>
                    Options fail
                </HintAction>{' '}
                This scene opens an editor by a click (
                <code>startEditing=editOn.click</code>).
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    const before = text(canvasElement, 0, 2);
    await userEvent.click(cell(canvasElement, 0, 2));
    await openEditor(canvasElement);
    await waitFor(() => check(document.querySelector('[data-load-error]'), 'error with Retry shown'), {
      timeout: 4000
    });
    check(requests(canvasElement)[0]?.dataset.status === 'error', 'logged as error');
    // EDIT-12: the options load, the save is refused: the value rolls back with ⚠ and the reason.
    await userEvent.click(within(canvasElement).getByRole('button', {
      name: 'Options work, save fails'
    }));
    // The click on the hint's button leaves the editor (a blur ends the edit): open it again, now the options load.
    await userEvent.click(cell(canvasElement, 0, 2));
    await openEditor(canvasElement);
    const pick = await waitFor(() => {
      const found = within(document.body).getAllByRole('option').find(o => o.textContent !== before);
      if (!found) throw new Error('an option other than the current value');
      return found;
    }, {
      timeout: 4000
    });
    await userEvent.click(pick);
    await until(() => cell(canvasElement, 0, 2).querySelector('[data-cell-mark="failed"]'), 'the refused save shows ⚠');
    check(cell(canvasElement, 0, 2).querySelector('[data-cell-mark="failed"]')?.getAttribute('aria-label'), 'the reason is on hover');
    check(text(canvasElement, 0, 2).startsWith(before), 'the old value is back');
  }
}`,...(Ue=(He=H.parameters)==null?void 0:He.docs)==null?void 0:Ue.source},description:{story:"Failures: options fail with Retry; a failed save rolls back.",...($e=(Be=H.parameters)==null?void 0:Be.docs)==null?void 0:$e.description}}};var We,Ke,Ye,ze,Ve;U.parameters={...U.parameters,docs:{...(We=U.parameters)==null?void 0:We.docs,source:{originalSource:`{
  tags: ['kb:editing-name-level-country-city'],
  name: '5 · Name, Level, Country and City',
  parameters: {
    ...sceneCodeOf(countryCitySource),
    hint: <>
                <b>Click</b> a cell to edit it. <b>Level</b> is a fixed list,{' '}
                <b>Country</b> asks a server as you type, <b>City</b> asks for the
                cities of the <i>country of its row</i>. Changing a Country clears a
                City that is not in it; a row without a country says why its City cannot
                be edited. In an open list <b>↑ ↓ Enter</b> are the list’s, <b>Esc</b>{' '}
                closes it and a second <b>Esc</b> cancels the edit, <b>Tab</b> saves and
                moves on. A paste, Delete and Fill check the value against the row. This
                scene opens an editor by a click (<code>startEditing=editOn.click</code>
                ).
            </>
  },
  render: (_, {
    parameters
  }) => <CountryCityScene hint={parameters.hint} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    await grid(c);

    // A fixed list: open, filter, pick; no request.
    const wasColour = getComputedStyle(cell(c, 0, 1)).color;
    await userEvent.click(cell(c, 0, 1));
    const level = await openEditor(c);
    check(getComputedStyle(level).color === wasColour && level.value === 'B1', \`the value stays as the cell showed it: \${level.value} in \${getComputedStyle(level).color}, the cell had \${wasColour}\`);
    fireEvent.change(level, {
      target: {
        value: 'C'
      }
    });
    await userEvent.click(await option('C3'));
    await until(() => text(c, 0, 1) === 'C3', 'Level: picked C3');
    check(requests(c).length === 0, 'Level asks no one');

    // A list over a request: loading, nothing found, a pick.
    await userEvent.click(cell(c, 0, COUNTRY));
    const country = await openEditor(c);
    await until(() => document.querySelector('.MuiAutocomplete-loading'), 'Country: loading is shown');
    await until(() => requests(c)[0]?.dataset.status === 'ok', 'Country: the server answered');
    fireEvent.change(country, {
      target: {
        value: 'zzz'
      }
    });
    await until(() => within(document.body).queryByText('Nothing found'), 'Country: nothing found says so');
    fireEvent.change(country, {
      target: {
        value: 'ger'
      }
    });
    await userEvent.click(await option('Germany'));
    await until(() => text(c, 0, COUNTRY) === 'Germany', 'Country: picked');
    await until(() => text(c, 0, CITY) === '', 'a City that is not in the new Country is cleared');

    // A list that depends on the row: the request carries its country.
    const before = requests(c).length;
    await userEvent.click(cell(c, 0, CITY));
    await openEditor(c);
    await until(() => requests(c).length > before, 'City: a request went out');
    check(requests(c)[0].textContent?.includes('country=Germany'), \`City asks for the cities of the row’s country: \${requests(c)[0].textContent}\`);
    await userEvent.click(await option('Berlin'));
    await until(() => text(c, 0, CITY) === 'Berlin', 'City: picked Berlin');
    check(!within(document.body).queryByRole('option', {
      name: 'Krakow'
    }), 'City: only the cities of Germany are offered');

    // Keys: Esc closes the list, a second Esc cancels the edit.
    await userEvent.click(cell(c, 1, CITY));
    const open = await openEditor(c);
    await option('Warsaw');
    open.focus();
    await userEvent.keyboard('{Escape}');
    await until(() => !document.querySelector('[role="listbox"]') && editor(c), 'the first Esc closes the list and keeps the edit');
    await userEvent.keyboard('{Escape}');
    await until(() => !editor(c), 'the second Esc cancels the edit');
    check(text(c, 1, CITY) === 'Warsaw', 'Esc kept the old value');
    // A user (or a script) that is quicker than the focus: Esc, Esc and a double click on another cell in one go. The edit opens and stays.
    await userEvent.click(cell(c, 1, CITY));
    const quick = await openEditor(c);
    fireEvent.keyDown(quick, {
      key: 'Escape'
    });
    fireEvent.keyDown(quick, {
      key: 'Escape'
    });
    fireEvent.click(cell(c, 2, 1));
    await new Promise(resolve => {
      setTimeout(resolve, 300);
    });
    await until(() => cell(c, 2, 1).getAttribute('data-editing') === 'true' && editor(c), 'after Esc, Esc the first click on another cell opens the edit and keeps it');
    await userEvent.keyboard('{Escape}');
    await userEvent.keyboard('{Escape}');
    await until(() => !editor(c), 'Level: Esc, Esc cancels the edit too');

    // A city without a country: it does not open, and says why.
    await userEvent.click(cell(c, 3, CITY));
    check(!editor(c), 'City of a row without a country does not open');
    check(cell(c, 3, CITY).querySelector('[data-cannot-edit]')?.textContent === 'Choose a country first', 'the cell says why');

    // A paste goes the same way as the editor: a level that does not exist is refused with its reason.
    await userEvent.click(cell(c, 1, 1));
    clipboardPaste(grid_(c), 'Z9');
    await until(() => document.querySelector('[data-write-notice]')?.textContent?.includes('Z9 is not a level'), 'the paste of Z9 into Level is refused with its reason');
    check(text(c, 1, 1) !== 'Z9', 'the refused value is not written');
  }
}`,...(Ye=(Ke=U.parameters)==null?void 0:Ke.docs)==null?void 0:Ye.source},description:{story:"The editors of a product's table: a field, a fixed list, a list over a request, a list over a request that depends on the row.",...(Ve=(ze=U.parameters)==null?void 0:ze.docs)==null?void 0:Ve.description}}};var Ze,Ge,Qe,Xe,Je;$.parameters={...$.parameters,docs:{...(Ze=$.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  tags: ['kb:editing-dates-period-numbers'],
  name: '6 · Dates, period and numbers',
  parameters: {
    ...sceneCodeOf(datesSource),
    hint: <>
                <b>Click</b> Start or End: a popover with two date fields and a
                calendar. Type <b>Mar 05, 2027</b> or pick a day: after a Start the
                focus goes to End by itself. <b>Esc</b> closes the popover, a second{' '}
                <b>Esc</b> cancels; <b>Tab</b> goes Start → End → the next cell.{' '}
                <b>Workload</b> is 0–1 (↑ ↓ step 0.05, outside is an error), <b>Rate</b>{' '}
                is {1}–{500}. A paste takes <b>MMM dd, yyyy</b> or ISO dates and numbers
                with a comma or a point, and refuses the rest with its reason. This
                scene opens an editor by a click (<code>startEditing=editOn.click</code>
                ).
            </>
  },
  render: (_, {
    parameters
  }) => <DatesScene hint={parameters.hint} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    await grid(c);

    // A date typed by its mask: taken as soon as it is whole, and the focus goes to End.
    await userEvent.click(cell(c, 0, START));
    await waitFor(() => check(field('Start Date') === document.activeElement, 'the cell’s own boundary has the focus'));
    fireEvent.change(field('Start Date'), {
      target: {
        value: inMonths(8)
      }
    });
    await until(() => text(c, 0, START) === inMonths(8), 'a whole date is taken as it is typed');
    await until(() => field('End Date') === document.activeElement, 'after a Start the focus goes to End by itself');

    // End before Start: the screen says so on the cell.
    fireEvent.change(field('End Date'), {
      target: {
        value: inMonths(3)
      }
    });
    await waitFor(() => check(cell(c, 0, END).dataset.issue === 'error' && mark(c, 0, END)?.getAttribute('aria-label') === 'End is before Start', 'End before Start is an error'), {
      timeout: 3000
    });

    // Esc closes the popover, a second Esc cancels the edit.
    await userEvent.keyboard('{Escape}');
    await until(() => !document.querySelector('[data-period-popover]') && editor(c), 'the first Esc closes the popover and keeps the edit');
    await userEvent.keyboard('{Escape}');
    await until(() => !editor(c), 'the second Esc cancels the edit');

    // Tab: Start → End → the next cell.
    await userEvent.click(cell(c, 1, START));
    await waitFor(() => check(field('Start Date') === document.activeElement, 'Start has the focus'));
    await userEvent.keyboard('{Tab}');
    await until(() => field('End Date') === document.activeElement, 'Tab goes from Start to End');
    await userEvent.keyboard('{Tab}');
    await until(() => !editor(c) && cell(c, 1, WORKLOAD).getAttribute('data-selection') === 'active', 'Tab from End leaves for the next cell');

    // A calendar day sets the boundary too.
    await userEvent.click(cell(c, 2, START));
    await waitFor(() => check(field('Start Date') === document.activeElement, 'Start has the focus'));
    const days = document.querySelectorAll<HTMLButtonElement>('[data-day]:not([disabled])');
    check(days.length > 10, 'the calendar offers the days of the range');
    const picked = days[days.length - 1];
    await userEvent.click(picked);
    await until(() => text(c, 2, START) === formatDate(picked.dataset.day as string), 'a click on a day sets the date');
    await userEvent.keyboard('{Escape}');
    await userEvent.keyboard('{Escape}');

    // A number outside 0..1 is the screen's error.
    await userEvent.click(cell(c, 3, WORKLOAD));
    const workload = await openEditor(c);
    check(workload.inputMode === 'decimal', 'a number has the digits keyboard');
    await typeInto(workload, '1,2');
    press(workload, 'Enter');
    await waitFor(() => check(text(c, 3, WORKLOAD).startsWith('1.20') && mark(c, 3, WORKLOAD)?.getAttribute('aria-label') === 'Workload must be between 0 and 1', 'Workload 1.2 is an error'), {
      timeout: 3000
    });

    // A paste goes the same way: a date as MMM dd, yyyy, a word in a number refused.
    await userEvent.click(cell(c, 4, START));
    clipboardPaste(c.querySelector('[role=grid]') as HTMLElement, inMonths(5));
    await until(() => text(c, 4, START) === inMonths(5), 'a pasted date in MMM dd, yyyy is taken');
    await userEvent.click(cell(c, 4, RATE));
    clipboardPaste(c.querySelector('[role=grid]') as HTMLElement, 'abc');
    await until(() => document.querySelector('[data-write-notice]')?.textContent?.includes('abc is not a number'), 'a pasted word into Rate is refused with its reason');
  }
}`,...(Qe=(Ge=$.parameters)==null?void 0:Ge.docs)==null?void 0:Qe.source},description:{story:"Dates by a mask and a calendar, a period of two dates, numbers with a step: the product's cells.",...(Je=(Xe=$.parameters)==null?void 0:Xe.docs)==null?void 0:Je.description}}};var et,tt,at,nt,rt;W.parameters={...W.parameters,docs:{...(et=W.parameters)==null?void 0:et.docs,source:{originalSource:`{
  tags: ['kb:editing-rate'],
  name: '7 · Rate: three fields in one cell',
  parameters: {
    ...sceneCodeOf(rateSource),
    summary: 'One cell with three fields (a number, a currency, a type). A click on a field opens the edit with the focus in that field, Tab goes from field to field and on to the next cell, Enter saves it all, Esc cancels it; a paste takes "120 USD hourly" or "day/90/EUR" in any order.'
  },
  render: () => <RateScene hint={<>
                    The Rate cell is always three fields. Click the currency: the edit
                    starts there. <b>Tab</b> goes number → currency → type → the next
                    cell, <b>Enter</b> saves, <b>Esc</b> cancels. Select the cell and
                    paste <code>120 USD hourly</code> or <code>day/90/EUR</code>; paste{' '}
                    <code>abc</code> and the notice says why it is refused. This scene
                    opens an editor by a click (<code>startEditing=editOn.click</code>).
                </>} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    await grid(c);
    const rate = cell(c, 0, 1);
    const before = lookOf(fieldOf(rate, 'currency'));
    await userEvent.click(fieldOf(rate, 'currency'));
    await until(() => rate.getAttribute('data-editing') === 'true', 'a click on the currency opens the edit');
    check(fieldOf(rate, 'currency').contains(document.activeElement), 'with the focus in the currency');
    check(lookOf(fieldOf(rate, 'currency')) === before, 'the field looks the same shown and edited');
    await userEvent.keyboard('{Tab}');
    check(fieldOf(rate, 'type').contains(document.activeElement) && rate.getAttribute('data-editing') === 'true', 'Tab goes to the type, the edit goes on');
    await userEvent.keyboard('{Shift>}{Tab}{/Shift}');
    check(fieldOf(rate, 'currency').contains(document.activeElement), 'Shift+Tab goes back to the currency');
    await userEvent.keyboard('{Tab}{Tab}');
    await until(() => rate.getAttribute('data-editing') === 'false' && cell(c, 0, 2).getAttribute('data-selection') === 'active', 'Tab from the last field leaves the cell for the next one');
    await userEvent.keyboard('{Shift>}{Tab}{/Shift}');
    await until(() => rate.getAttribute('data-selection') === 'active', 'Shift+Tab from the next cell comes back');

    // A paste takes the parts in any order.
    const rateField = () => fieldOf(rate, 'rate').textContent;
    await userEvent.click(fieldOf(rate, 'rate'));
    await userEvent.keyboard('{Escape}');
    clipboardPaste(keysOf(c), '120 USD hourly');
    await until(() => rateField() === '120.00' && fieldOf(rate, 'currency').textContent === 'USD' && fieldOf(rate, 'type').textContent === 'Hourly', '“120 USD hourly” fills the three fields');
    clipboardPaste(keysOf(c), 'day/90/EUR');
    await until(() => rateField() === '90.00' && fieldOf(rate, 'currency').textContent === 'EUR' && fieldOf(rate, 'type').textContent === 'Daily', '“day/90/EUR” fills them in another order');
    clipboardPaste(keysOf(c), 'abc');
    await until(() => document.querySelector('[data-write-notice]')?.textContent?.includes('abc'), '“abc” is refused with its reason');
    check(rateField() === '90.00', 'a refused paste leaves the cell as it was');
    clipboardPaste(keysOf(c), '900 PLN');
    await until(() => document.querySelector('[data-write-notice]')?.textContent?.includes('Rate must be 1–500'), 'a rate outside the range is refused with the rule (the one the editor asks)');
    check(cell(c, 4, 1).querySelector('[data-cell-mark="error"]') !== null, 'a rate the screen already has, outside the range, is an error on its cell');

    // The editor writes the value (not a text), by the same rule: a wrong rate keeps the edit, a right one saves.
    const second = cell(c, 1, 1);
    await userEvent.click(fieldOf(second, 'rate'));
    const typed = fieldOf(second, 'rate') as HTMLInputElement;
    await typeInto(typed, '600');
    press(typed, 'Enter');
    await new Promise(resolve => {
      setTimeout(resolve, 200);
    });
    check(second.getAttribute('data-editing') === 'true' && typed.getAttribute('aria-invalid') === 'true', 'a rate out of the range keeps the edit and says so');
    await typeInto(typed, '75');
    press(typed, 'Enter');
    await until(() => fieldOf(second, 'rate').textContent === '75.00', 'a right rate is saved by Enter');
    // A currency is picked from the same kind of list as the other editors.
    await userEvent.click(fieldOf(second, 'currency'));
    await userEvent.click(await option('PLN'));
    press(second.querySelector('[aria-label="currency"]') as HTMLInputElement, 'Enter');
    await until(() => fieldOf(second, 'currency').textContent === 'PLN', 'a currency picked from the list is saved with Enter');

    // The value is one object: copied as text, cleared by Delete.
    await userEvent.click(fieldOf(rate, 'rate'));
    await userEvent.keyboard('{Escape}');
    await userEvent.keyboard('{Delete}');
    await until(() => rateField() === '' && fieldOf(rate, 'currency').textContent === '' && fieldOf(rate, 'type').textContent === '', 'Delete clears all three parts');
  }
}`,...(at=(tt=W.parameters)==null?void 0:tt.docs)==null?void 0:at.source},description:{story:"A rate is three fields in one cell: Tab goes through them, a paste takes the parts in any order.",...(rt=(nt=W.parameters)==null?void 0:nt.docs)==null?void 0:rt.description}}};const pa=["Autocomplete","AsyncOptions","Typing","Failures","NameLevelCountryCity","DatesPeriodNumbers","RateThreeFields"];export{N as AsyncOptions,I as Autocomplete,$ as DatesPeriodNumbers,H as Failures,U as NameLevelCountryCity,W as RateThreeFields,_ as Typing,pa as __namedExportsOrder,ha as default};
