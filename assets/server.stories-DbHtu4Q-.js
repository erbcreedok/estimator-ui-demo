import{l as s,h as i,u as h,y as te,j as n,Y as oe,a0 as ne,ba as ae,bb as re,bc as se,bf as le,bg as ce,Z as de,r as Se,S as ie,z as ut,by as tt,b8 as ot,bI as nt,bu as ht,bE as at,c as y,b as P,M as b,p as rt,d as st,s as ue,e as lt,f as pt}from"./products-CTiDOXRn.js";import{e as k,g as M,t as ee,h as mt,p as wt,i as gt,j as ft,S as ct,b as he,k as yt}from"./scene-D--uP8Uf.js";const bt=`import {
	TableCore,
	columnGroupingFeature,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	groupRowsFeature,
	rowExpandingFeature,
	tableFeatures,
} from '@pnl-simulation/table-core'

import type { Person } from '../../data/people'
import type { CountsMode } from '../../data/server'

import type { ServerNodes } from './server-nodes'

// A group the server holds more of than the table has: it tells the table, in
// \`groupData(path)\`, how many nodes and how many leaves there are right under the
// group and in all under it. The table shows them without loading a thing, and
// works none out from the rows it holds: a number the server did not send is \`?\`.
const features = tableFeatures({
	columnGroupingFeature,
	rowExpandingFeature,
	groupRowsFeature,
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
})

const helper = createColumnHelper<typeof features, Person>()
const columns = helper.columns([
	helper.accessor('country', { header: 'Country' }),
	helper.accessor('team', { header: 'Team' }),
	helper.accessor('name', { header: 'Name' }),
	helper.accessor('role', { header: 'Role' }),
])

type Props = {
	/** What the server has given the table so far, and how to ask it for more. */
	server: ServerNodes
	/** How much of its answer the server gives. @default 'all four' */
	counts?: CountsMode
}

export const ServerCountsTable = ({ server, counts = 'all four' }: Props) => (
	<TableCore
		features={features}
		data={server.rows}
		columns={columns}
		getRowId={(person) => person.id}
		rowHeight={36}
		groupLayout="rows"
		autoResetExpanded={false}
		// The groups the table has no rows of yet.
		groupPaths={() => server.paths}
		// 1. What the server says of a node, by its path: four numbers, all optional.
		groupData={(path) => server.data(path, counts)} // ← new
		// 2. What a group and a row are called here.
		groupCountLabels={{ nodes: 'teams', leaves: 'people' }} // ← new
		// 3. A group was opened: ask for its first teams and people. Show more: the next ones.
		onGroupOpen={server.open} // ← new
		onGroupMore={server.more} // ← new
		initialState={{
			grouping: ['country', 'team'],
			expanded: server.expanded,
		}}
	/>
)
`,St=`import {
	TableBulkBar,
	TableCore,
	columnGroupingFeature,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	groupRowsFeature,
	rowExpandingFeature,
	rowSelectionFeature,
	tableFeatures,
	type TableCoreUiProps,
	rowCheckbox,
	createUtilityColumn,
} from '@pnl-simulation/table-core'

import type { Person } from '../../data/people'
import type { CountsMode } from '../../data/server'

import { queryReadout } from './query-readout'
import type { ServerNodes } from './server-nodes'

// A node ticked as a whole: all the leaves under it, the ones the table has and
// the ones the server holds. The table cannot list rows it does not have, so the
// selection is the node and what was taken out of it (\`state.nodeSelection\`), and
// the backend gets that (\`getSelectionQuery()\`), never a list of ids. v9's
// \`rowSelectionFeature\` stays for the rows ticked one by one and must be listed
// before \`groupRowsFeature\`, which takes the place of its calls for the rows
// under a node. Select all is the node at the top: its leaves are the server's
// \`leafCount\` of the whole table.
const features = tableFeatures({
	rowSelectionFeature, // ← new: before groupRowsFeature
	columnGroupingFeature,
	rowExpandingFeature,
	groupRowsFeature,
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
})

const helper = createColumnHelper<typeof features, Person>()
const columns = helper.columns([
	createUtilityColumn(helper, { parts: [rowCheckbox()] }), // ← new
	helper.accessor('country', { header: 'Country' }),
	helper.accessor('team', { header: 'Team' }),
	helper.accessor('name', { header: 'Name' }),
	helper.accessor('role', { header: 'Role' }),
])

const bulkBar: TableCoreUiProps['bulkBar'] = (table) => (
	<TableBulkBar table={table} getActions={() => []} />
)

type Props = {
	/** What the server has given the table so far, and how to ask it for more. */
	server: ServerNodes
	/** How much of its answer the server gives. @default 'all four' */
	counts?: CountsMode
	/** What a click on a group's checkbox does: 'nodes' selects the node as a whole, 'rows' only the rows that are here (v9's). @default 'nodes' */
	selection?: 'nodes' | 'rows'
}

export const ServerSelectTable = ({
	server,
	counts = 'all four',
	selection = 'nodes',
}: Props) => (
	<TableCore
		features={features}
		data={server.rows}
		columns={columns}
		getRowId={(person) => person.id}
		rowHeight={36}
		groupLayout="rows"
		autoResetExpanded={false}
		groupPaths={() => server.paths}
		groupData={(path) => server.data(path, counts)}
		groupCountLabels={{ nodes: 'teams', leaves: 'people' }}
		onGroupOpen={server.open}
		onGroupMore={server.more}
		enableNodeSelection={selection === 'nodes'} // ← new
		bulkBar={bulkBar}
		statusBar={queryReadout}
		initialState={{
			grouping: ['country', 'team'],
			expanded: server.expanded,
		}}
	/>
)
`,kt=`import {
	TableBulkBar,
	TableCore,
	columnFilteringFeature,
	columnGroupingFeature,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	groupRowsFeature,
	rowExpandingFeature,
	rowSelectionFeature,
	tableFeatures,
	type TableCoreUiProps,
	rowCheckbox,
	createUtilityColumn,
} from '@pnl-simulation/table-core'

import type { Person } from '../../data/people'
import type { CountsMode } from '../../data/server'

import { queryReadout } from './query-readout'
import type { ServerNodes } from './server-nodes'

// "All under a node" means all under the filters on the screen. The server does
// the filtering (\`manualFiltering\`): the table keeps the filter and tells it to the
// backend in \`getSelectionQuery().filters\`, next to the nodes.
const features = tableFeatures({
	rowSelectionFeature,
	columnFilteringFeature, // ← new
	columnGroupingFeature,
	rowExpandingFeature,
	groupRowsFeature,
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
})

const helper = createColumnHelper<typeof features, Person>()
const columns = helper.columns([
	createUtilityColumn(helper, { parts: [rowCheckbox()] }),
	helper.accessor('country', { header: 'Country' }),
	helper.accessor('team', { header: 'Team' }),
	helper.accessor('name', { header: 'Name' }),
	helper.accessor('role', { header: 'Role' }),
	helper.accessor('state', { header: 'State' }),
])

const bulkBar: TableCoreUiProps['bulkBar'] = (table) => (
	<TableBulkBar table={table} getActions={() => []} />
)

type Props = {
	/** What the server has given the table so far, and how to ask it for more. */
	server: ServerNodes
	/** How much of its answer the server gives. @default 'all four' */
	counts?: CountsMode
	/** The state the server filters by: the selection is "all under it". @default 'all states' */
	filter?: string
}

export const ServerFilterTable = ({
	server,
	counts = 'all four',
	filter = 'all states',
}: Props) => (
	<TableCore
		features={features}
		data={server.rows}
		columns={columns}
		getRowId={(person) => person.id}
		rowHeight={36}
		groupLayout="rows"
		autoResetExpanded={false}
		groupPaths={() => server.paths}
		groupData={(path) => server.data(path, counts)}
		groupCountLabels={{ nodes: 'teams', leaves: 'people' }}
		onGroupOpen={server.open}
		onGroupMore={server.more}
		manualFiltering // ← new
		enableNodeSelection
		bulkBar={bulkBar}
		statusBar={queryReadout}
		initialState={{
			grouping: ['country', 'team'],
			expanded: server.expanded,
			columnFilters:
				filter === 'all states' ? [] : [{ id: 'state', value: filter }], // ← new
		}}
	/>
)
`,O={none:{value:[],code:"[]"},"by Team":{value:["team"],code:"['team']"},"by Country, then Team":{value:["country","team"],code:"['country', 'team']"}},x=e=>i(()=>!!e.querySelector("[data-group-row]"),"the groups are drawn"),C=(e,t)=>e.querySelector(`[role=row][data-group-id="${t}"]`),r=e=>`country:${e}`,V=(e,t)=>`${r(e)}>team:${t}`,v=(e,t)=>{var o,a;return((a=(o=C(e,t))==null?void 0:o.querySelector("[data-group-count]"))==null?void 0:a.textContent)??""},R=(e,t)=>{var o,a;return((a=(o=C(e,t))==null?void 0:o.querySelector("[data-group-selected]"))==null?void 0:a.textContent)??""},f=(e,t)=>{var o;return(o=C(e,t))==null?void 0:o.querySelector("[role=checkbox]")},u=e=>{var t;return JSON.parse(((t=e.querySelector("[data-selection-query]"))==null?void 0:t.textContent)??"{}")},g=e=>{var t;return((t=e.querySelector("[role=toolbar]"))==null?void 0:t.textContent)??""},p=e=>e.replace(/\u00a0/g," "),D=(e,t)=>e.querySelectorAll("[role=row][data-row-id] [role=checkbox]")[t],dt=(e,t)=>{var o;return h.click((o=C(e,t))==null?void 0:o.querySelector('[aria-label="Expand group"]'))},vt=async e=>{var t,o;await x(e),s(p(v(e,r("Poland")))==="4 teams · 800 people",`a country: ${v(e,r("Poland"))}`),s(p(v(e,r("Germany")))==="4 teams · 400 people",`another: ${v(e,r("Germany"))}`),s(!e.querySelector("[data-node-status]"),"nothing is loading: the numbers came with the groups"),await dt(e,r("Poland")),await i(()=>!!C(e,V("Poland","Platform"))&&!!e.querySelector('[data-node-more-of="nodes"]'),"opening a country brings its first teams, with Show more for the rest"),s((o=(t=e.querySelector('[data-node-more-of="nodes"]'))==null?void 0:t.textContent)==null?void 0:o.includes("2 left"),"4 teams, 2 here")},xt=async e=>{const t=e.canvasElement;await x(t),s(p(v(t,r("Poland")))==="? teams · 800 people",`leaves only: ${v(t,r("Poland"))}`),await te(e,{counts:"none"}),await i(()=>p(v(t,r("Poland")))==="? teams · ? people","nothing sent: ? and ?")},Tt=async e=>{var a,l;await x(e);const t=e.querySelector('[data-node-more-of="nodes"]'),o=e.querySelector('[data-node-more-of="leaves"]');s((a=t==null?void 0:t.textContent)==null?void 0:a.includes("2 left"),`2 more teams: ${t==null?void 0:t.textContent}`),s((l=o==null?void 0:o.textContent)==null?void 0:l.includes("197 left"),`197 more people: ${o==null?void 0:o.textContent}`),await h.click(t==null?void 0:t.querySelector("[data-node-show-more]")),await i(()=>!e.querySelector('[data-node-more-of="nodes"]'),"the teams came"),s(!!e.querySelector('[data-node-more-of="leaves"]'),"the people are still to come")},Rt=async e=>{await x(e),await h.click(f(e,r("Poland"))),await i(()=>{var t;return((t=u(e).nodes)==null?void 0:t.length)===1},"the node is the selection"),s(JSON.stringify(u(e).nodes)===JSON.stringify([{path:["Poland"]}])&&u(e).rowIds.length===0,`the backend gets the node, no list of ids: ${JSON.stringify(u(e))}`),s(p(R(e,r("Poland")))==="selected 800 of 800",R(e,r("Poland"))),s(p(g(e)).includes("800 of 2 000 selected"),`the bar: ${g(e)}`),await dt(e,r("Poland")),await i(()=>!!C(e,V("Poland","Platform")),"the teams came"),s(f(e,V("Poland","Platform")).getAttribute("aria-checked")==="true","a team that came after the tick is selected"),await h.click(f(e,V("Poland","Platform"))),await i(()=>f(e,r("Poland")).getAttribute("aria-checked")==="mixed","the country shows a dash once a team is taken out"),s(p(R(e,r("Poland")))==="selected 600 of 800",`one team less: ${R(e,r("Poland"))}`)},Ct=async e=>{var o;await x(e),await h.click(f(e,r("Poland"))),await i(()=>{var a;return((a=u(e).nodes)==null?void 0:a.length)===1},"the country is ticked");const t=(o=D(e,0).closest("[data-row-id]"))==null?void 0:o.getAttribute("data-row-id");await h.click(D(e,0)),await i(()=>{var a,l,m;return((m=(l=(a=u(e).nodes)==null?void 0:a[0])==null?void 0:l.exceptRowIds)==null?void 0:m[0])===t},"the person is an exception, not a list of the others"),s(f(e,r("Poland")).getAttribute("aria-checked")==="mixed","the country shows a dash"),s(p(R(e,r("Poland")))==="selected 799 of 800",`one less: ${R(e,r("Poland"))}`)},Nt=async e=>{await x(e),await h.click(e.querySelector('[role=checkbox][aria-label="Select all rows"]')),await i(()=>JSON.stringify(u(e).nodes)===JSON.stringify([{path:[]}]),"select all is the node at the top"),s(p(g(e)).includes("2 000 of 2 000 selected"),`all: ${g(e)}`),await h.click(f(e,r("Germany"))),await i(()=>{var t,o,a;return((a=(o=(t=u(e).nodes)==null?void 0:t[0])==null?void 0:o.exceptPaths)==null?void 0:a.length)===1},"a country unticked is an exception"),s(p(g(e)).includes("1 600 of 2 000 selected"),`less its 400: ${g(e)}`)},Pt=async e=>{await x(e);const t=[0,1].map(o=>{var a;return(a=D(e,o).closest("[data-row-id]"))==null?void 0:a.getAttribute("data-row-id")});await h.click(D(e,0)),await h.click(D(e,1)),await h.click(f(e,r("Kazakhstan"))),await i(()=>{var o;return((o=u(e).nodes)==null?void 0:o.length)===1},"the country is ticked"),s(u(e).rowIds.join()===t.join()&&JSON.stringify(u(e).nodes)===JSON.stringify([{path:["Kazakhstan"]}]),`the rows alone and the node: ${JSON.stringify(u(e))}`),s(p(g(e)).includes("802 of 2 000 selected"),`800 and 2: ${g(e)}`)},Gt=async e=>{await x(e),await h.click(f(e,r("Poland"))),await i(()=>{var t;return((t=u(e).nodes)==null?void 0:t.length)===1},"ticked"),s(R(e,r("Poland"))==="all selected",R(e,r("Poland"))),s(g(e).includes("? of ? selected"),`the bar says ?: ${g(e)}`)},Ot=["Poland","Kazakhstan","Germany"],At=(e,t,o)=>{const a=k([t],o);return{got:p(v(e,r(t))),want:`${a.nodes} teams · ${a.allLeaves} people`}},Mt=async e=>{const t=e.canvasElement;await x(t);const o=Ot.map(l=>({name:l,of:k([l],"blocked"),all:k([l])}));s(o.every(({of:l})=>l.allLeaves>0)&&new Set(o.map(({of:l,all:m})=>l.allLeaves/m.allLeaves)).size===o.length,"blocked people are in every country, in a different share each"),s(o.some(({of:l,all:m})=>l.nodes<m.nodes),"under the filter a country has fewer teams: those with no match are not counted"),o.forEach(({name:l})=>{const{got:m,want:A}=At(t,l,"blocked");s(m===A,`${l} under the filter: ${m} (want ${A})`)}),await h.click(f(t,r("Poland"))),await i(()=>{var l;return((l=u(t).nodes)==null?void 0:l.length)===1},"the node is ticked"),s(JSON.stringify(u(t).filters.columnFilters)===JSON.stringify([{id:"state",value:"blocked"}]),`the filter is in the query: ${JSON.stringify(u(t).filters)}`);const a=`${k(["Poland"],"blocked").allLeaves} of ${k([],"blocked").allLeaves} selected`;s(p(g(t)).includes(a)&&k(["Poland"],"blocked").allLeaves<k([],"blocked").allLeaves,`the bar counts the blocked people, not everyone: ${g(t)} (want ${a})`),await te(e,{filter:"excluded"}),await i(()=>!C(t,r("Kazakhstan"))&&!!C(t,r("Poland")),"a country with no match (Kazakhstan has no excluded) is not on the screen"),s(k([],"excluded").nodes===2,"and the server counts two countries, not three"),await te(e,{filter:"all states"}),await i(()=>p(v(t,r("Poland")))==="4 teams · 800 people","with no filter the band counts all"),await h.click(f(t,r("Poland"))),await i(()=>JSON.stringify(u(t).filters.columnFilters)==="[]","with no filter the query has none")},Ft=ne({columnGroupingFeature:se,rowExpandingFeature:re,groupRowsFeature:ae,groupedRowModel:ce(),expandedRowModel:le()}),F=de(),Et=F.columns([F.accessor("country",{header:"Country"}),F.accessor("team",{header:"Team"}),F.accessor("name",{header:"Name"}),F.accessor("role",{header:"Role"})]),jt=({server:e,counts:t="all four"})=>n.jsx(oe,{features:Ft,data:e.rows,columns:Et,getRowId:o=>o.id,rowHeight:36,groupLayout:"rows",autoResetExpanded:!1,groupPaths:()=>e.paths,groupData:o=>e.data(o,t),groupCountLabels:{nodes:"teams",leaves:"people"},onGroupOpen:e.open,onGroupMore:e.more,initialState:{grouping:["country","team"],expanded:e.expanded}}),Ut={nodes:2,leaves:3},ke={nodes:2,leaves:5},Q=e=>e.join(">"),pe=({partial:e=!1,state:t}={})=>{const[o,a]=Se.useState(e?{[M()[0]]:{nodes:2,leaves:0},[`${M()[0]}>${ee(M()[0])[0]}`]:{nodes:0,leaves:3}}:{}),[l,m]=Se.useState([]),A=Object.entries(o).map(([c,d])=>({path:c.split(">"),own:d})),fe=(c,d)=>a(w=>{const S=Q(c),ye=w[S]??{nodes:0,leaves:0},be=k(c,t);return{...w,[S]:{nodes:Math.min(be.nodes,ye.nodes+d.nodes),leaves:Math.min(be.leaves,ye.leaves+d.leaves)}}}),[X]=M(t);return{rows:A.flatMap(({path:[c,d],own:w})=>d?wt(c,d,t).slice(0,w.leaves):[]),paths:[...M(t).map(c=>[c]),...A.flatMap(({path:[c,d],own:w})=>c&&!d?ee(c,t).slice(0,w.nodes).map(S=>[c,S]):[])],expanded:e?{[`country:${X}`]:!0,[`country:${X}>team:${ee(X)[0]}`]:!0}:{},data:(c,d)=>{const w=o[Q(c)],S=mt(c,d,t);return{...S,hasChildren:S.hasChildren||c.length>0&&!w||void 0,status:l.includes(Q(c))?"loading":void 0}},open:c=>{const d=Q(c);o[d]||(m(w=>[...w,d]),setTimeout(()=>{fe(c,Ut),m(w=>w.filter(S=>S!==d))},400))},more:(c,d)=>fe(c,{nodes:d==="nodes"?ke.nodes:0,leaves:d==="leaves"?ke.leaves:0})}},me=({hint:e,counts:t="all four",partial:o=!1})=>{const a=pe({partial:o});return n.jsx(ie,{hint:e,maxHeight:520,children:n.jsx(jt,{server:a,counts:t})})},it=e=>n.jsx(ut,{table:e,children:()=>n.jsx("code",{"data-selection-query":!0,style:{display:"block",padding:"6px 12px",fontSize:12,whiteSpace:"pre-wrap",wordBreak:"break-all"},children:JSON.stringify(e.getSelectionQuery())})}),$t=ne({rowSelectionFeature:at,columnFilteringFeature:ht,columnGroupingFeature:se,rowExpandingFeature:re,groupRowsFeature:ae,groupedRowModel:ce(),expandedRowModel:le()}),N=de(),qt=N.columns([ot(N,{parts:[nt()]}),N.accessor("country",{header:"Country"}),N.accessor("team",{header:"Team"}),N.accessor("name",{header:"Name"}),N.accessor("role",{header:"Role"}),N.accessor("state",{header:"State"})]),Bt=e=>n.jsx(tt,{table:e,getActions:()=>[]}),It=({server:e,counts:t="all four",filter:o="all states"})=>n.jsx(oe,{features:$t,data:e.rows,columns:qt,getRowId:a=>a.id,rowHeight:36,groupLayout:"rows",autoResetExpanded:!1,groupPaths:()=>e.paths,groupData:a=>e.data(a,t),groupCountLabels:{nodes:"teams",leaves:"people"},onGroupOpen:e.open,onGroupMore:e.more,manualFiltering:!0,enableNodeSelection:!0,bulkBar:Bt,statusBar:it,initialState:{grouping:["country","team"],expanded:e.expanded,columnFilters:o==="all states"?[]:[{id:"state",value:o}]}}),Lt=ne({rowSelectionFeature:at,columnGroupingFeature:se,rowExpandingFeature:re,groupRowsFeature:ae,groupedRowModel:ce(),expandedRowModel:le()}),G=de(),_t=G.columns([ot(G,{parts:[nt()]}),G.accessor("country",{header:"Country"}),G.accessor("team",{header:"Team"}),G.accessor("name",{header:"Name"}),G.accessor("role",{header:"Role"})]),Ht=e=>n.jsx(tt,{table:e,getActions:()=>[]}),zt=({server:e,counts:t="all four",selection:o="nodes"})=>n.jsx(oe,{features:Lt,data:e.rows,columns:_t,getRowId:a=>a.id,rowHeight:36,groupLayout:"rows",autoResetExpanded:!1,groupPaths:()=>e.paths,groupData:a=>e.data(a,t),groupCountLabels:{nodes:"teams",leaves:"people"},onGroupOpen:e.open,onGroupMore:e.more,enableNodeSelection:o==="nodes",bulkBar:Ht,statusBar:it,initialState:{grouping:["country","team"],expanded:e.expanded}}),we=e=>Object.values(e)[0],ge=we(Object.assign({"./nodes-counts-table.tsx":bt})),W=we(Object.assign({"./nodes-select-table.tsx":St})),Dt=we(Object.assign({"./nodes-filter-table.tsx":kt})),Wt={title:"Tables/Table Core/Features/Grouping/On the server",id:"tables-table-core-features-grouping-server",...pt(he)},E={tags:["kb:group-on-the-server"],name:"8 · On the server",parameters:{...ue(he,"OnTheServer",lt({initialGrouping:O})),summary:"`manualGrouping`: the groups come from the server, rows with `children` and their own count."},args:{initialGrouping:"none"},argTypes:{initialGrouping:st(O)},render:e=>n.jsx(P,{args:e,children:n.jsx(ct,{initialGrouping:rt(O,e.initialGrouping),hint:n.jsx(b,{text:"`manualGrouping`: click **Team** → **Group by Team**. The table writes the grouping and waits; it does not group the rows it has. The groups arrive as rows with `children` (`getSubRows`) and are drawn as lanes; each says how many rows the server has in it (`groupData(path).leafCount`), not how many it sent."})})}),play:async e=>{y(e)||(await gt(e.canvasElement),await ft(e))}},j={tags:["kb:group-tree-not-whole"],name:"9 · A tree whose groups are not whole",parameters:{...ue(he,"TreeNotWhole",lt({initialGrouping:O})),summary:"A group the server sent a few rows of says how many it has (`groupData`), and ends with Show more: the screen asks the server for the next rows (`onGroupMore`)."},args:{initialGrouping:"by Team"},argTypes:{initialGrouping:st(O)},render:e=>n.jsx(P,{args:e,children:n.jsx(ct,{showMore:!0,initialGrouping:rt(O,e.initialGrouping),hint:n.jsx(b,{text:"Each team came with **two of its rows** and says how many the server has: **Show more** asks for the next two (`onGroupMore`) and the server answers with the tree again."})})}),play:async e=>{y(e)||await yt(e.canvasElement)}},Y={control:{type:"radio"},options:["all four","leaves only","none"]},Jt={control:{type:"radio"},options:["nodes","rows"]},T=(e,t,o)=>({...ue(e,t),summary:o}),U={tags:["kb:group-node-counts"],name:"10 · Counts of a group, and groups that open on demand",parameters:T(ge,"NodeCounts","`groupData(path)` carries four numbers of a group, all optional; a group says them before a row of it is here, and opening it asks the screen (`onGroupOpen`) for its first teams and people."),args:{counts:"all four"},argTypes:{counts:Y},render:e=>n.jsx(P,{args:e,children:n.jsx(me,{counts:e.counts,hint:n.jsx(b,{text:"**Poland** has **4 teams** and **800 people**, and says so with nothing loaded: the numbers are the server’s (`groupData`), the words are the screen’s (`groupCountLabels`). **Open it**: its first two teams come, with a **Show more** for the rest."})})}),play:async e=>{y(e)||await vt(e.canvasElement)}},$={tags:["kb:group-node-unknown"],name:"11 · A number the server did not send",parameters:T(ge,"NodeUnknown","The table works out no number from the rows it holds for a group the server speaks of: what it did not send is shown as ?."),args:{counts:"leaves only"},argTypes:{counts:Y},render:e=>n.jsx(P,{args:e,children:n.jsx(me,{counts:e.counts,hint:n.jsx(b,{text:"The server sends only the people of each country, so the teams are **?**. Set `counts` to *none*: both are **?**. The table counts nothing it was not told."})})}),play:async e=>{y(e)||await xt(e)}},q={tags:["kb:group-node-show-more"],name:"12 · Show more: teams and people",parameters:T(ge,"NodeShowMore",'A group with more groups than are here ends with a Show more row, a group with more rows has another: each the server’s number less what is here (`onGroupMore(path, "nodes" | "leaves")`).'),args:{counts:"all four"},argTypes:{counts:Y},render:e=>n.jsx(P,{args:e,children:n.jsx(me,{partial:!0,counts:e.counts,hint:n.jsx(b,{text:"Poland shows **two of its four teams**, its first team **three of 200 people**. Two rows say what is left: **Show more teams · 2 left** and **Show more people · 197 left**. Each asks the screen for its own (`onGroupMore`)."})})}),play:async e=>{y(e)||await Tt(e.canvasElement)}},Kt=({hint:e,args:t,partial:o=!1})=>{const a=pe({partial:o});return n.jsx(ie,{hint:e,maxHeight:520,children:n.jsx(zt,{server:a,counts:t.counts,selection:t.selection})})},J=e=>n.jsx(P,{args:e.args,children:n.jsx(Kt,{...e})}),Z={counts:"all four",selection:"nodes"},K={counts:Y,selection:Jt},B={tags:["kb:group-node-select"],name:"13 · Select a group that is not loaded",parameters:T(W,"NodeSelect","A group’s checkbox selects all the rows under it, the ones the server holds too: the selection is the node, not a list of ids."),args:Z,argTypes:K,render:e=>n.jsx(J,{args:e,hint:n.jsx(b,{text:"Tick **Poland**: none of its 800 people is loaded, and all of them are selected. The line under the table is what the backend gets: **the node**, no ids (`getSelectionQuery()`). Then open it: the teams that come are selected too."})}),play:async e=>{y(e)||await Rt(e.canvasElement)}},I={tags:["kb:group-node-take-one-out"],name:"14 · Take one out",parameters:T(W,"NodeTakeOneOut","Unticking one row of a selected node does not list the others: the row is an exception of the node, the node shows a dash and counts one less."),args:Z,argTypes:K,render:e=>n.jsx(J,{partial:!0,args:e,hint:n.jsx(b,{text:"Tick **Poland**, then untick one person: it is an **exception** (`exceptRowIds`) of the node, which shows a dash and says **selected 799 of 800**. Every other person, loaded or not, stays selected."})}),play:async e=>{y(e)||await Ct(e.canvasElement)}},L={tags:["kb:group-node-select-all"],name:"15 · Select all is the top node",parameters:T(W,"NodeSelectAll","Select all in the header selects the node at the top (path []): all the rows the server holds. A group unticked after it is an exception."),args:Z,argTypes:K,render:e=>n.jsx(J,{args:e,hint:n.jsx(b,{text:"**Select all** is the node at the top: **2 000 of 2 000**, none of them loaded. Untick **Germany**: it is an exception (`exceptPaths`) and takes its 400 out of the count."})}),play:async e=>{y(e)||await Nt(e.canvasElement)}},_={tags:["kb:group-node-rows-and-nodes"],name:"16 · Rows and a group together",parameters:T(W,"NodeRowsAndNodes","Rows ticked one by one stay v9’s `rowSelection`; a node ticked as a whole is `nodeSelection`; the backend gets both."),args:Z,argTypes:K,render:e=>n.jsx(J,{partial:!0,args:e,hint:n.jsx(b,{text:"Tick **two people** and **Kazakhstan**: the query has `rowIds` for the two and a node for Kazakhstan, and the bar counts **802 of 2 000** (800 and 2). With `selection` set to *rows* a group that is not loaded has no checkbox: v9 selects only the rows it has."})}),play:async e=>{y(e)||await Pt(e.canvasElement)}},H={tags:["kb:group-node-select-unknown"],name:"17 · Selecting when the server sent no number",parameters:T(W,"NodeUnknownSelect","A node is selected as a whole whatever numbers the server sent; with none the counters say ? and the node says all selected."),args:{counts:"none",selection:"nodes"},argTypes:K,render:e=>n.jsx(J,{args:e,hint:n.jsx(b,{text:"The server sent **no number**. Tick a country: it is selected as a whole (**all selected**), and the bar says **? of ?**: the table counts nothing it was not told."})}),play:async e=>{y(e)||await Gt(e.canvasElement)}},Qt=({filter:e})=>n.jsx(ie,{maxHeight:520,hint:n.jsx(b,{text:"The server filters by **state**. Tick **Poland**: the query is the node **and the filter** (`filters.columnFilters`), so the backend selects the blocked people of Poland. The server answers under the filter: the numbers on the bands and in the bar are the blocked people’s, not all 800. Set the control to *all states* and the filter and the numbers go back."}),children:n.jsx(It,{server:pe({state:e==="all states"?void 0:e}),filter:e})}),z={tags:["kb:group-node-select-filter"],name:"18 · Select under a filter",parameters:T(Dt,"NodeUnderFilter","“All under a node” means all under the filters on the screen: the query carries them next to the nodes, and the server applies them."),args:{filter:"blocked"},argTypes:{filter:{control:{type:"radio"},options:["all states","blocked","excluded"]}},render:e=>n.jsx(P,{args:e,children:n.jsx(Qt,{filter:e.filter})}),play:async e=>{y(e)||await Mt(e)}};var ve,xe,Te;E.parameters={...E.parameters,docs:{...(ve=E.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  tags: ['kb:group-on-the-server'],
  name: '8 · On the server',
  parameters: {
    ...sceneCodeWith(source, 'OnTheServer', presetCodes({
      initialGrouping: GROUPINGS
    })),
    summary: '\`manualGrouping\`: the groups come from the server, rows with \`children\` and their own count.'
  },
  args: {
    initialGrouping: 'none'
  },
  argTypes: {
    initialGrouping: presetControl(GROUPINGS)
  },
  render: args => <Remount args={args}>
            <ServerScene initialGrouping={presetValue(GROUPINGS, args.initialGrouping)} hint={<Md text="\`manualGrouping\`: click **Team** → **Group by Team**. The table writes the grouping and waits; it does not group the rows it has. The groups arrive as rows with \`children\` (\`getSubRows\`) and are drawn as lanes; each says how many rows the server has in it (\`groupData(path).leafCount\`), not how many it sent." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await serverGroupAct(ctx.canvasElement);
    await startGroupingControlAct(ctx);
  }
}`,...(Te=(xe=E.parameters)==null?void 0:xe.docs)==null?void 0:Te.source}}};var Re,Ce,Ne;j.parameters={...j.parameters,docs:{...(Re=j.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  tags: ['kb:group-tree-not-whole'],
  name: '9 · A tree whose groups are not whole',
  parameters: {
    ...sceneCodeWith(source, 'TreeNotWhole', presetCodes({
      initialGrouping: GROUPINGS
    })),
    summary: 'A group the server sent a few rows of says how many it has (\`groupData\`), and ends with Show more: the screen asks the server for the next rows (\`onGroupMore\`).'
  },
  args: {
    initialGrouping: 'by Team'
  },
  argTypes: {
    initialGrouping: presetControl(GROUPINGS)
  },
  render: args => <Remount args={args}>
            <ServerScene showMore initialGrouping={presetValue(GROUPINGS, args.initialGrouping)} hint={<Md text="Each team came with **two of its rows** and says how many the server has: **Show more** asks for the next two (\`onGroupMore\`) and the server answers with the tree again." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await serverShowMoreAct(ctx.canvasElement);
  }
}`,...(Ne=(Ce=j.parameters)==null?void 0:Ce.docs)==null?void 0:Ne.source}}};var Pe,Ge,Oe;U.parameters={...U.parameters,docs:{...(Pe=U.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  tags: ['kb:group-node-counts'],
  name: '10 · Counts of a group, and groups that open on demand',
  parameters: nodeParameters(countsSource, 'NodeCounts', '\`groupData(path)\` carries four numbers of a group, all optional; a group says them before a row of it is here, and opening it asks the screen (\`onGroupOpen\`) for its first teams and people.'),
  args: {
    counts: 'all four'
  },
  argTypes: {
    counts: COUNTS
  },
  render: args => <Remount args={args}>
            <ServerCountsScene counts={args.counts} hint={<Md text="**Poland** has **4 teams** and **800 people**, and says so with nothing loaded: the numbers are the server’s (\`groupData\`), the words are the screen’s (\`groupCountLabels\`). **Open it**: its first two teams come, with a **Show more** for the rest." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await nodeCountsAct(ctx.canvasElement);
  }
}`,...(Oe=(Ge=U.parameters)==null?void 0:Ge.docs)==null?void 0:Oe.source}}};var Ae,Me,Fe;$.parameters={...$.parameters,docs:{...(Ae=$.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  tags: ['kb:group-node-unknown'],
  name: '11 · A number the server did not send',
  parameters: nodeParameters(countsSource, 'NodeUnknown', 'The table works out no number from the rows it holds for a group the server speaks of: what it did not send is shown as ?.'),
  args: {
    counts: 'leaves only'
  },
  argTypes: {
    counts: COUNTS
  },
  render: args => <Remount args={args}>
            <ServerCountsScene counts={args.counts} hint={<Md text="The server sends only the people of each country, so the teams are **?**. Set \`counts\` to *none*: both are **?**. The table counts nothing it was not told." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await nodeUnknownAct(ctx);
  }
}`,...(Fe=(Me=$.parameters)==null?void 0:Me.docs)==null?void 0:Fe.source}}};var Ee,je,Ue;q.parameters={...q.parameters,docs:{...(Ee=q.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  tags: ['kb:group-node-show-more'],
  name: '12 · Show more: teams and people',
  parameters: nodeParameters(countsSource, 'NodeShowMore', 'A group with more groups than are here ends with a Show more row, a group with more rows has another: each the server’s number less what is here (\`onGroupMore(path, "nodes" | "leaves")\`).'),
  args: {
    counts: 'all four'
  },
  argTypes: {
    counts: COUNTS
  },
  render: args => <Remount args={args}>
            <ServerCountsScene partial counts={args.counts} hint={<Md text="Poland shows **two of its four teams**, its first team **three of 200 people**. Two rows say what is left: **Show more teams · 2 left** and **Show more people · 197 left**. Each asks the screen for its own (\`onGroupMore\`)." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await nodeShowMoreAct(ctx.canvasElement);
  }
}`,...(Ue=(je=q.parameters)==null?void 0:je.docs)==null?void 0:Ue.source}}};var $e,qe,Be;B.parameters={...B.parameters,docs:{...($e=B.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  tags: ['kb:group-node-select'],
  name: '13 · Select a group that is not loaded',
  parameters: nodeParameters(selectSource, 'NodeSelect', 'A group’s checkbox selects all the rows under it, the ones the server holds too: the selection is the node, not a list of ids.'),
  args: selectArgs,
  argTypes: selectArgTypes,
  render: args => <SelectScene args={args} hint={<Md text="Tick **Poland**: none of its 800 people is loaded, and all of them are selected. The line under the table is what the backend gets: **the node**, no ids (\`getSelectionQuery()\`). Then open it: the teams that come are selected too." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await nodeSelectAct(ctx.canvasElement);
  }
}`,...(Be=(qe=B.parameters)==null?void 0:qe.docs)==null?void 0:Be.source}}};var Ie,Le,_e;I.parameters={...I.parameters,docs:{...(Ie=I.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  tags: ['kb:group-node-take-one-out'],
  name: '14 · Take one out',
  parameters: nodeParameters(selectSource, 'NodeTakeOneOut', 'Unticking one row of a selected node does not list the others: the row is an exception of the node, the node shows a dash and counts one less.'),
  args: selectArgs,
  argTypes: selectArgTypes,
  render: args => <SelectScene partial args={args} hint={<Md text="Tick **Poland**, then untick one person: it is an **exception** (\`exceptRowIds\`) of the node, which shows a dash and says **selected 799 of 800**. Every other person, loaded or not, stays selected." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await nodeTakeOneOutAct(ctx.canvasElement);
  }
}`,...(_e=(Le=I.parameters)==null?void 0:Le.docs)==null?void 0:_e.source}}};var He,ze,De;L.parameters={...L.parameters,docs:{...(He=L.parameters)==null?void 0:He.docs,source:{originalSource:`{
  tags: ['kb:group-node-select-all'],
  name: '15 · Select all is the top node',
  parameters: nodeParameters(selectSource, 'NodeSelectAll', 'Select all in the header selects the node at the top (path []): all the rows the server holds. A group unticked after it is an exception.'),
  args: selectArgs,
  argTypes: selectArgTypes,
  render: args => <SelectScene args={args} hint={<Md text="**Select all** is the node at the top: **2 000 of 2 000**, none of them loaded. Untick **Germany**: it is an exception (\`exceptPaths\`) and takes its 400 out of the count." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await nodeSelectAllAct(ctx.canvasElement);
  }
}`,...(De=(ze=L.parameters)==null?void 0:ze.docs)==null?void 0:De.source}}};var We,Je,Ke;_.parameters={..._.parameters,docs:{...(We=_.parameters)==null?void 0:We.docs,source:{originalSource:`{
  tags: ['kb:group-node-rows-and-nodes'],
  name: '16 · Rows and a group together',
  parameters: nodeParameters(selectSource, 'NodeRowsAndNodes', 'Rows ticked one by one stay v9’s \`rowSelection\`; a node ticked as a whole is \`nodeSelection\`; the backend gets both.'),
  args: selectArgs,
  argTypes: selectArgTypes,
  render: args => <SelectScene partial args={args} hint={<Md text="Tick **two people** and **Kazakhstan**: the query has \`rowIds\` for the two and a node for Kazakhstan, and the bar counts **802 of 2 000** (800 and 2). With \`selection\` set to *rows* a group that is not loaded has no checkbox: v9 selects only the rows it has." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await nodeRowsAndNodesAct(ctx.canvasElement);
  }
}`,...(Ke=(Je=_.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};var Qe,Ve,Ye;H.parameters={...H.parameters,docs:{...(Qe=H.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  tags: ['kb:group-node-select-unknown'],
  name: '17 · Selecting when the server sent no number',
  parameters: nodeParameters(selectSource, 'NodeUnknownSelect', 'A node is selected as a whole whatever numbers the server sent; with none the counters say ? and the node says all selected.'),
  args: {
    counts: 'none',
    selection: 'nodes'
  },
  argTypes: selectArgTypes,
  render: args => <SelectScene args={args} hint={<Md text="The server sent **no number**. Tick a country: it is selected as a whole (**all selected**), and the bar says **? of ?**: the table counts nothing it was not told." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await nodeUnknownSelectAct(ctx.canvasElement);
  }
}`,...(Ye=(Ve=H.parameters)==null?void 0:Ve.docs)==null?void 0:Ye.source}}};var Ze,Xe,et;z.parameters={...z.parameters,docs:{...(Ze=z.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  tags: ['kb:group-node-select-filter'],
  name: '18 · Select under a filter',
  parameters: nodeParameters(filterSource, 'NodeUnderFilter', '“All under a node” means all under the filters on the screen: the query carries them next to the nodes, and the server applies them.'),
  args: {
    filter: 'blocked'
  },
  argTypes: {
    filter: {
      control: {
        type: 'radio'
      },
      options: ['all states', 'blocked', 'excluded']
    }
  },
  render: args => <Remount args={args}>
            <Filtering filter={args.filter} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await nodeUnderFilterAct(ctx);
  }
}`,...(et=(Xe=z.parameters)==null?void 0:Xe.docs)==null?void 0:et.source}}};const Vt=["OnTheServer","TreeNotWhole","NodeCounts","NodeUnknown","NodeShowMore","NodeSelect","NodeTakeOneOut","NodeSelectAll","NodeRowsAndNodes","NodeUnknownSelect","NodeUnderFilter"],Xt=Object.freeze(Object.defineProperty({__proto__:null,NodeCounts:U,NodeRowsAndNodes:_,NodeSelect:B,NodeSelectAll:L,NodeShowMore:q,NodeTakeOneOut:I,NodeUnderFilter:z,NodeUnknown:$,NodeUnknownSelect:H,OnTheServer:E,TreeNotWhole:j,__namedExportsOrder:Vt,default:Wt},Symbol.toStringTag,{value:"Module"}));export{Xt as S};
