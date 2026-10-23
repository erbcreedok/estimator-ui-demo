import{_ as fe}from"./groups-table-SMxKwff6.js";import{j as n,Y as E,a0 as H,bt as ye,bu as ve,bv as be,Z as L,bh as le,bD as xe,bi as ie,bH as Fe,bj as ce,b4 as Re,b5 as Me,r as w,S as Se,ai as p,l,am as u,y as N,h as D,u as F,at as m,ap as W,al as g,ar as de,ac as V,N as Ce,au as q,J as he,X as Pe,c as C,b as P,M as k,s as T,f as ke,d as Te,e as je}from"./products-CTiDOXRn.js";import{G as Ae}from"./groups-scene-ClqtEPWL.js";import{N as _e}from"./node-pager-WHE38C50.js";import{a as K}from"./people-DY4ww1HD.js";import{u as G}from"./readout-BMzIH4Db.js";import{h as j,p as ue,H as we}from"./handlers-DXU2ZPok.js";const Ie=`import {
	TableCore,
	columnFilteringFeature,
	createColumnHelper,
	createFilteredRowModel,
	filterFn_includesString,
	tableFeatures,
	type ColumnFiltersState,
	type OnChangeFn,
	type RowsMoveHandler,
} from '@pnl-simulation/table-core'

import type { Person } from '../../data/people'

// A filter takes rows out of the table and brings them back: the rows that stay
// change place, and the table says so (\`onRowsMove\`, cause \`filter\`).
const features = tableFeatures({
	columnFilteringFeature,
	filteredRowModel: createFilteredRowModel(),
	filterFns: { includesString: filterFn_includesString },
})

const helper = createColumnHelper<typeof features, Person>()
const columns = helper.columns([
	helper.accessor('name', { header: 'Name' }),
	helper.accessor('team', { header: 'Team' }),
	helper.accessor('level', { header: 'Level' }),
])

type Props = {
	rows: Person[]
	/** The filters: the screen's own (a field of its own sets them). */
	columnFilters: ColumnFiltersState
	onColumnFiltersChange: OnChangeFn<ColumnFiltersState>
	/** Rows changed place: what moved and why. */
	onRowsMove?: RowsMoveHandler
}

export const FilterTable = ({
	rows,
	columnFilters,
	onColumnFiltersChange,
	onRowsMove,
}: Props) => (
	<TableCore
		features={features}
		data={rows}
		columns={columns}
		getRowId={(person) => person.id}
		state={{ columnFilters }}
		onColumnFiltersChange={onColumnFiltersChange}
		onRowsMove={onRowsMove} // ← new
	/>
)
`,Oe=`import {
	TableCore,
	createColumnHelper,
	createPaginatedRowModel,
	createSortedRowModel,
	rowPaginationFeature,
	rowSortingFeature,
	sortFn_text,
	tableFeatures,
	type RowsMoveHandler,
	type TableCoreUiProps,
} from '@pnl-simulation/table-core'

import type { Person } from '../../data/people'
import { NodePager } from '../../kit/node-pager'

// Pages: a page shows other rows, so none of the rows of the old one has a place
// to move to, and there is nothing to say.
const features = tableFeatures({
	rowSortingFeature,
	rowPaginationFeature,
	sortedRowModel: createSortedRowModel(),
	paginatedRowModel: createPaginatedRowModel(),
	sortFns: { text: sortFn_text },
})

const helper = createColumnHelper<typeof features, Person>()
const columns = helper.columns([
	helper.accessor('name', { header: 'Name', sortFn: 'text' }),
	helper.accessor('team', { header: 'Team', sortFn: 'text' }),
	helper.accessor('level', { header: 'Level', sortFn: 'text' }),
])

const pager: TableCoreUiProps['toolbar'] = (table) => (
	<NodePager table={table} />
)

export const PagedTable = ({
	rows,
	onRowsMove,
}: {
	rows: Person[]
	onRowsMove?: RowsMoveHandler
}) => (
	<TableCore
		features={features}
		data={rows}
		columns={columns}
		getRowId={(person) => person.id}
		initialState={{
			sorting: [{ id: 'level', desc: false }],
			pagination: { pageIndex: 0, pageSize: 25 },
		}}
		toolbar={pager}
		onRowsMove={onRowsMove} // ← new
	/>
)
`,$e=`import {
	TableCore,
	cellKeyboardFeature,
	cellSelectionFeature,
	createColumnHelper,
	createSortedRowModel,
	rowSortingFeature,
	sortFn_text,
	tableFeatures,
	type RowsMoveHandler,
} from '@pnl-simulation/table-core'

import type { Person } from '../../data/people'

// The data changes under the user's hands (the server sent new Levels): the rows
// move, and the one the user was on is the anchor: the cell with the focus.
const features = tableFeatures({
	rowSortingFeature,
	cellSelectionFeature,
	cellKeyboardFeature,
	sortedRowModel: createSortedRowModel(),
	sortFns: { text: sortFn_text },
})

const helper = createColumnHelper<typeof features, Person>()
const columns = helper.columns([
	helper.accessor('name', { header: 'Name', sortFn: 'text' }),
	helper.accessor('team', { header: 'Team', sortFn: 'text' }),
	helper.accessor('level', { header: 'Level', sortFn: 'text' }),
])

export const PushTable = ({
	rows,
	onRowsMove,
}: {
	rows: Person[]
	onRowsMove?: RowsMoveHandler
}) => (
	<TableCore
		features={features}
		data={rows}
		columns={columns}
		getRowId={(person) => person.id}
		initialState={{ sorting: [{ id: 'level', desc: false }] }}
		onRowsMove={onRowsMove} // ← new
	/>
)
`,Ee=H({columnFilteringFeature:ve,filteredRowModel:be(),filterFns:{includesString:ye}}),R=L(),He=R.columns([R.accessor("name",{header:"Name"}),R.accessor("team",{header:"Team"}),R.accessor("level",{header:"Level"})]),Le=({rows:e,columnFilters:t,onColumnFiltersChange:a,onRowsMove:o})=>n.jsx(E,{features:Ee,data:e,columns:He,getRowId:r=>r.id,state:{columnFilters:t},onColumnFiltersChange:a,onRowsMove:o}),Ne=H({rowSortingFeature:ie,rowPaginationFeature:xe,sortedRowModel:ce(),paginatedRowModel:Fe(),sortFns:{text:le}}),M=L(),We=M.columns([M.accessor("name",{header:"Name",sortFn:"text"}),M.accessor("team",{header:"Team",sortFn:"text"}),M.accessor("level",{header:"Level",sortFn:"text"})]),Ve=e=>n.jsx(_e,{table:e}),qe=({rows:e,onRowsMove:t})=>n.jsx(E,{features:Ne,data:e,columns:We,getRowId:a=>a.id,initialState:{sorting:[{id:"level",desc:!1}],pagination:{pageIndex:0,pageSize:25}},toolbar:Ve,onRowsMove:t}),Ke=H({rowSortingFeature:ie,cellSelectionFeature:Me,cellKeyboardFeature:Re,sortedRowModel:ce(),sortFns:{text:le}}),S=L(),Ge=S.columns([S.accessor("name",{header:"Name",sortFn:"text"}),S.accessor("team",{header:"Team",sortFn:"text"}),S.accessor("level",{header:"Level",sortFn:"text"})]),Be=({rows:e,onRowsMove:t})=>n.jsx(E,{features:Ke,data:e,columns:Ge,getRowId:a=>a.id,initialState:{sorting:[{id:"level",desc:!1}]},onRowsMove:t}),ze=48,B=({hint:e,readoutNode:t,startRow:a,children:o})=>{const r=w.useRef(null);return w.useLayoutEffect(()=>{var i;const s=(i=r.current)==null?void 0:i.querySelector("[role=table], [role=grid]");s&&(s.scrollTop=a*ze)},[a]),n.jsx(Se,{maxHeight:480,hint:n.jsxs(n.Fragment,{children:[e,t]}),children:n.jsx("div",{ref:r,style:{display:"contents"},children:o})})},De=({hint:e,handler:t})=>{var c;const[a]=w.useState(()=>K(300)),[o,r]=w.useState([]),{onRowsMove:s,readoutNode:i}=G(t,"event");return n.jsx(B,{hint:n.jsxs(n.Fragment,{children:[e,n.jsxs("div",{style:{margin:"8px 0"},children:["Team contains"," ",n.jsx("input",{"aria-label":"Team contains","data-filter":!0,value:String(((c=o[0])==null?void 0:c.value)??""),onChange:d=>r(d.target.value?[{id:"team",value:d.target.value}]:[])})]})]}),readoutNode:i,startRow:100,children:n.jsx(Le,{rows:a,columnFilters:o,onColumnFiltersChange:d=>r(h=>typeof d=="function"?d(h):d),onRowsMove:s})})},Ue=({hint:e,handler:t})=>{const[a]=w.useState(()=>K(300)),[o,r]=w.useState(0),{onRowsMove:s,readoutNode:i}=G(t,"event");return n.jsx(B,{hint:n.jsxs(n.Fragment,{children:[e,n.jsxs("p",{"data-events":!0,style:{margin:"4px 0"},children:["events so far: ",n.jsx("b",{children:o})]})]}),readoutNode:i,startRow:0,children:n.jsx(qe,{rows:a,onRowsMove:(c,d)=>{r(h=>h+1),s==null||s(c,d)}})})},Je=({hint:e,handler:t})=>{const[a,o]=w.useState(()=>K(300)),{onRowsMove:r,readoutNode:s}=G(t,"event");return n.jsx(B,{hint:n.jsxs(n.Fragment,{children:[e,n.jsx("div",{style:{margin:"8px 0"},children:n.jsx("button",{type:"button","data-push":!0,onClick:()=>o(i=>i.map((c,d)=>d%3===0?{...c,level:"C1"}:c)),children:"The server sends new data"})})]}),readoutNode:s,startRow:100,children:n.jsx(Be,{rows:a,onRowsMove:r})})},z={onRowsMove:"without a handler"},$=e=>new Set(e.map(({element:t})=>t.matches("[data-group-id]:is([data-group-row], [role=rowheader])")?"group":"row")),Xe=(e,t,a)=>{var o;return((o=he(e,t,a))==null?void 0:o.textContent)??""},Ye=async e=>{const t=e.canvasElement;await p(t);const a=async()=>{const s=W(t).find(({index:h})=>Xe(t,h,1)==="Payments"),i=g(t,s.id),c=de(t,"now"),d=await V(async()=>{await Ce(t.querySelector("[data-filter]"),"Payments"),await m(300),await q()});return c.stop(),{id:s.id,before:i,after:g(t,s.id),animated:d,gaps:c}},o=await a();l(u(t).includes("causes: filter"),`the cause is the filter: ${u(t)}`),l(o.after!==null&&Math.abs(o.after-o.before)<=1,`the row stays at its height: ${o.before} → ${o.after}`),l(o.animated.length>=3,`the rows slide: ${o.animated.length}`),l(o.gaps.worst()<=2,`no strip with no rows: ${o.gaps.worst()}px`),await N(e,z),await p(t);const r=await a();l(r.animated.length===0,"without a handler nothing slides"),l(r.after===null||Math.abs(r.after-r.before)>1,"and the row has gone with the others")},Ze=async e=>{const t=e.canvasElement;await p(t);const a=async()=>{const s=Pe(t).getBoundingClientRect(),i=Array.from(t.querySelectorAll("[role=row][data-group-row]")).filter(O=>O.getBoundingClientRect().top>=s.top+60).sort((O,ge)=>O.getBoundingClientRect().top-ge.getBoundingClientRect().top),c=W(t)[0],d=g(t,c.id),h=de(t,"now"),me=await V(async()=>{await F.click(i[1].querySelector('[aria-label="Collapse group"]')),await m(300),await q()});return h.stop(),{id:c.id,before:d,after:g(t,c.id),animated:me,gaps:h}},o=await a();l($(o.animated).has("group")&&$(o.animated).has("row"),`the groups and rows below slide: ${[...$(o.animated)]}`),l(o.after!==null&&Math.abs(o.after-o.before)<=1,`the row keeps its height: ${o.before} → ${o.after}`),l(o.gaps.worst()<=2,`no strip with no rows: ${o.gaps.worst()}px`),await N(e,z),await p(t);const r=await a();l(r.animated.length===0,"without a handler nothing slides")},Qe=async e=>{const t=e.canvasElement;await D(()=>t.querySelector("[data-node-pager]")&&t.querySelector("[data-cell]"),"the table and its pager are drawn");const a=()=>{var s;return(s=t.querySelector("[data-events] b"))==null?void 0:s.textContent};l(a()==="0",`no event yet: ${a()}`);const o=Array.from(t.querySelectorAll("button")).find(s=>s.textContent==="Next");await F.click(o),await D(()=>{var s,i;return(i=(s=t.querySelector("[data-page]"))==null?void 0:s.textContent)==null?void 0:i.includes("Page 2")},"the next page"),await m(300),l(a()==="0",`a new page says nothing: ${a()}`);const r=Array.from(t.querySelectorAll("button")).find(s=>s.textContent==="Previous");await F.click(r),await m(300),l(a()==="0",`nor does the page back: ${a()}`),l(u(t).includes("nothing moved yet"),`the readout has nothing: ${u(t)}`)},et=async e=>{const t=e.canvasElement;await p(t);const a=async()=>{const s=W(t)[2];await F.click(he(t,s.index,0)),await m(100);const i=g(t,s.id),c=await V(async()=>{await F.click(t.querySelector("[data-push]")),await m(400),await q()});return{id:s.id,before:i,after:g(t,s.id),animated:c}},o=await a();l(u(t).split(`
`)[0]==="causes: data",`the cause is the data, nobody edited: ${u(t)}`),l(u(t).includes(`anchor: ${o.id}`),`the anchor is the row with the focus: ${u(t)}`),l(o.after!==null&&Math.abs(o.after-o.before)<=1,`the row keeps its height: ${o.before} → ${o.after}`),await N(e,z),await p(t);const r=await a();l(r.animated.length===0,"without a handler nothing slides"),l(r.after===null||Math.abs(r.after-r.before)>100,`and the row is carried away: ${r.before} → ${r.after}`)},A=e=>Object.values(e)[0],pe=A(Object.assign({"./filter-table.tsx":Ie})),tt=A(Object.assign({"../row-drag/groups-table.tsx":fe})),ot=A(Object.assign({"./paged-table.tsx":Oe})),nt=A(Object.assign({"./push-table.tsx":$e})),at={title:"Tables/Table Core/Features/Rows on the move/Other causes",id:"tables-table-core-features-rows-move-causes",...ke(pe)},U=["flipRows"],f=["flipRows","flipRows + keepAnchorInView"],_=e=>({onRowsMove:{...Te(ue(we,e))}}),I=e=>je({onRowsMove:ue(we,e)}),y={tags:["kb:rows-move-filter"],name:"13 · A filter",parameters:{...T(pe,"Filter",I(f)),summary:"A filter takes rows out and brings them back; the rows that stay change place (cause `filter`). With `keepAnchorInView()` the first row of the window that is still there stays at its height."},args:{onRowsMove:"flipRows + keepAnchorInView"},argTypes:_(f),render:e=>n.jsx(P,{args:e,children:n.jsx(De,{handler:j(e.onRowsMove),hint:n.jsx(k,{text:"300 people, the table opens in the middle. Type **Payments** in the field: every other team goes, and the Payments rows close up. With the handler the first Payments row you were looking at stays where it was, and the rest slide to it."})})}),play:async e=>{C(e)||await Ye(e)}},v={tags:["kb:rows-move-expand"],name:"14 · A group opened or closed",parameters:{...T(tt,"OpenAndClose",I(f)),summary:"Closing a group takes its rows out and the groups below move up (cause `expand`); `flipRows()` slides them, `keepAnchorInView()` keeps the first row of the window that is still there."},args:{onRowsMove:"flipRows + keepAnchorInView"},argTypes:_(f),render:e=>n.jsx(P,{args:e,children:n.jsx(Ae,{groupLayout:"rows",handler:j(e.onRowsMove),hint:n.jsx(k,{text:"Thirty teams of four. Close a team with the **−** of its band: its people go, the teams below move up. With the handler they slide, and the row you were looking at does not move."})})}),play:async e=>{C(e)||await Ze(e)}},b={tags:["kb:rows-move-pages"],name:"15 · A new page says nothing",parameters:{...T(ot,"Pages",I(U)),summary:"A page shows other rows: none of the rows of the old page has a place to move to, so the table says nothing and the handler is not called (`page` is a cause only along with another one that moves rows). What a screen does on a new page (scroll to the top) is its own."},args:{onRowsMove:"flipRows"},argTypes:_(U),render:e=>n.jsx(P,{args:e,children:n.jsx(Ue,{handler:j(e.onRowsMove),hint:n.jsx(k,{text:"25 of 300 on a page. **Next** and **Previous** bring other rows: the counter of events stays at 0, because no row of the old page is on the new one, and a handler of `onRowsMove` is never called. What a screen does on a new page (scroll to the top, say) is its own."})})}),play:async e=>{C(e)||await Qe(e)}},x={tags:["kb:rows-move-data"],name:"16 · New data from outside",parameters:{...T(nt,"FromOutside",I(f)),summary:"The data changes under the user (cause `data`, nobody edited): the anchor is the row with the focus, so `keepAnchorInView()` keeps the row the user was on."},args:{onRowsMove:"flipRows + keepAnchorInView"},argTypes:_(f),render:e=>n.jsx(P,{args:e,children:n.jsx(Je,{handler:j(e.onRowsMove),hint:n.jsx(k,{text:"Click a cell (it takes the focus), then **The server sends new data**: a third of the Levels change and the rows around yours go. The event says `data`, and that the **anchor** is the row with the focus; the handler keeps it where it stood, without it the row is carried away."})})}),play:async e=>{C(e)||await et(e)}};var J,X,Y;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['kb:rows-move-filter'],
  name: '13 · A filter',
  parameters: {
    ...sceneCodeWith(filterSource, 'Filter', codes(FLIP_KEEP)),
    summary: 'A filter takes rows out and brings them back; the rows that stay change place (cause \`filter\`). With \`keepAnchorInView()\` the first row of the window that is still there stays at its height.'
  },
  args: {
    onRowsMove: 'flipRows + keepAnchorInView'
  },
  argTypes: control(FLIP_KEEP),
  render: args => <Remount args={args}>
            <FilterScene handler={handlerFor(args.onRowsMove)} hint={<Md text="300 people, the table opens in the middle. Type **Payments** in the field: every other team goes, and the Payments rows close up. With the handler the first Payments row you were looking at stays where it was, and the rest slide to it." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await filterAct(ctx);
  }
}`,...(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,Q,ee;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['kb:rows-move-expand'],
  name: '14 · A group opened or closed',
  parameters: {
    ...sceneCodeWith(groupsSource, 'OpenAndClose', codes(FLIP_KEEP)),
    summary: 'Closing a group takes its rows out and the groups below move up (cause \`expand\`); \`flipRows()\` slides them, \`keepAnchorInView()\` keeps the first row of the window that is still there.'
  },
  args: {
    onRowsMove: 'flipRows + keepAnchorInView'
  },
  argTypes: control(FLIP_KEEP),
  render: args => <Remount args={args}>
            <GroupsMoveScene groupLayout="rows" handler={handlerFor(args.onRowsMove)} hint={<Md text="Thirty teams of four. Close a team with the **−** of its band: its people go, the teams below move up. With the handler they slide, and the row you were looking at does not move." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await expandAct(ctx);
  }
}`,...(ee=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var te,oe,ne;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`{
  tags: ['kb:rows-move-pages'],
  name: '15 · A new page says nothing',
  parameters: {
    ...sceneCodeWith(pagedSource, 'Pages', codes(FLIP)),
    summary: 'A page shows other rows: none of the rows of the old page has a place to move to, so the table says nothing and the handler is not called (\`page\` is a cause only along with another one that moves rows). What a screen does on a new page (scroll to the top) is its own.'
  },
  args: {
    onRowsMove: 'flipRows'
  },
  argTypes: control(FLIP),
  render: args => <Remount args={args}>
            <PagedScene handler={handlerFor(args.onRowsMove)} hint={<Md text="25 of 300 on a page. **Next** and **Previous** bring other rows: the counter of events stays at 0, because no row of the old page is on the new one, and a handler of \`onRowsMove\` is never called. What a screen does on a new page (scroll to the top, say) is its own." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await pageAct(ctx);
  }
}`,...(ne=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var ae,se,re;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  tags: ['kb:rows-move-data'],
  name: '16 · New data from outside',
  parameters: {
    ...sceneCodeWith(pushSource, 'FromOutside', codes(FLIP_KEEP)),
    summary: 'The data changes under the user (cause \`data\`, nobody edited): the anchor is the row with the focus, so \`keepAnchorInView()\` keeps the row the user was on.'
  },
  args: {
    onRowsMove: 'flipRows + keepAnchorInView'
  },
  argTypes: control(FLIP_KEEP),
  render: args => <Remount args={args}>
            <PushScene handler={handlerFor(args.onRowsMove)} hint={<Md text="Click a cell (it takes the focus), then **The server sends new data**: a third of the Levels change and the rows around yours go. The event says \`data\`, and that the **anchor** is the row with the focus; the handler keeps it where it stood, without it the row is carried away." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await pushAct(ctx);
  }
}`,...(re=(se=x.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};const st=["Filter","OpenAndClose","Pages","FromOutside"],wt=Object.freeze(Object.defineProperty({__proto__:null,Filter:y,FromOutside:x,OpenAndClose:v,Pages:b,__namedExportsOrder:st,default:at},Symbol.toStringTag,{value:"Module"}));export{wt as C};
