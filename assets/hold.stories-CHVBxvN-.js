import{t as M,h as R,ac as re,l as s,u as y,X as se,y as ee,at as te,am as j,as as q,ae,bY as de,cB as le,r as E,j as o,Y as ie,cf as B,aZ as W,a0 as he,bh as ce,ch as ue,bP as we,b4 as pe,b5 as ge,a_ as fe,ba as me,bb as ye,bc as be,bi as ve,a6 as D,bf as Re,bg as xe,bj as Te,Z as Ce,S as Fe,c as O,b as N,M as P,s as L,f as Ee}from"./products-CTiDOXRn.js";import{H as Se}from"./hold-notice-mmvAl10k.js";import{p as ke,a as He}from"./people-DY4ww1HD.js";import{u as Me}from"./readout-BMzIH4Db.js";import{S as Ae}from"./moves-scene-nOObvJbz.js";const je=`import { useEffect, useRef, useState } from 'react'

import {
	TableCore,
	cellEditingFeature,
	cellKeyboardFeature,
	cellSelectionFeature,
	columnGroupingFeature,
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
	rowSortingFeature,
	sortFn_text,
	tableFeatures,
	type CellEditingColumnMeta,
	type CellEditingTableMeta,
	type PlaceNewRows,
	type RowsMoveHandler,
	type TableCoreHandle,
	type TableCoreUiProps,
} from '@pnl-simulation/table-core'

import type { Person } from '../../data/people'
import { Editor } from '../editing/editor'

import { HoldNotice } from './hold-notice'

// A Level edited under a sort sends the row to the other end of the table: the
// user loses it. The screen can hold the order before it saves (\`holdOrder\`): the
// rows stay where they stand, the table counts the ones that no longer match
// (\`getOrderHold\`, the notice), and \`applyHeldOrder\` gives the sort back. The
// engine never holds by itself.
const features = tableFeatures({
	rowSortingFeature,
	columnGroupingFeature,
	rowExpandingFeature,
	groupRowsFeature,
	cellEditingFeature,
	cellSelectionFeature,
	cellKeyboardFeature,
	orderHoldFeature, // ← new
	rowInsertFeature, // ← new: the "+" between two rows
	sortedRowModel: createSortedRowModel(),
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
	sortFns: { text: sortFn_text },
	tableMeta: metaHelper<CellEditingTableMeta>(),
	columnMeta: metaHelper<CellEditingColumnMeta>(),
})

const helper = createColumnHelper<typeof features, Person>()
const columns = helper.columns([
	helper.accessor('name', { header: 'Name', sortFn: 'text' }),
	helper.accessor('team', {
		header: 'Team',
		sortFn: 'text',
		meta: { editable: true, typeToEdit: true },
		cell: (info) => <Editor {...info} />,
	}),
	helper.accessor('level', {
		header: 'Level',
		sortFn: 'text',
		meta: { editable: true, typeToEdit: true },
		cell: (info) => <Editor {...info} />,
	}),
])

const noticeRegion: TableCoreUiProps['toolbar'] = (table) => (
	<HoldNotice table={table} />
)

type Props = {
	rows: Person[]
	/** A cell was written: save it. */
	onEdit: (rowId: string, columnId: string, value: unknown) => void
	/** Rows or groups changed place (the order was let go, for one). */
	onRowsMove?: RowsMoveHandler
	/** The screen holds the order before it saves an edit. @default false */
	hold?: boolean
	/** The groups are drawn as rows, by Team. @default false */
	grouped?: boolean
	/** A button adds a position at the end, the + between two rows adds one right after the row above. The screen holds the order, the new row stands where it was asked for and is shown. @default false */
	adding?: boolean
	/** A position is added: save it. */
	onAdd?: (person: Person) => void
}

export const HoldTable = ({
	rows,
	onEdit,
	onRowsMove,
	hold = false,
	grouped = false,
	adding = false,
	onAdd,
}: Props) => {
	const handle = useRef<TableCoreHandle<typeof features, Person>>(null)
	/** A value is written: the screen keeps the order first when it holds it. */
	const save = (rowId: string, columnId: string, value: unknown) => {
		if (hold) handle.current?.table.holdOrder() // ← new: keep the order, then save
		onEdit(rowId, columnId, value)
	}
	/** Where the next new row stands: right after this row; none: at the end. */
	const after = useRef<string | null>(null)
	const [added, setAdded] = useState<string | null>(null)
	const placeNewRows: PlaceNewRows = (held, fresh) =>
		after.current // ← new: the screen says where a new row stands
			? placeNewRowsBy.after(after.current)(held, fresh)
			: placeNewRowsBy.atEnd(held, fresh)
	/** A position is added (empty Level): the order is held first, then the row comes. */
	const add = (afterId: string | null) => {
		const table = handle.current?.table
		const near = table
			?.getRowsInDisplayOrder()
			.find((row) => row.id === afterId)
		const draft: Person = {
			...rows[0],
			id: \`new-\${rows.length}\`,
			name: 'New position',
			team: near?.original.team ?? rows[0].team,
			level: '',
		}
		if (hold) table?.holdOrder() // ← new: keep the order, then add
		after.current = afterId
		onAdd?.(draft)
		setAdded(draft.id)
	}
	// The row is in the table: scroll to it and show it.
	useEffect(() => {
		if (!added) return
		handle.current?.highlightRow(added) // ← new: scroll to the row and flash it
		setAdded(null)
	}, [added])
	/** The first person on the screen goes to Cards: the value of their group changes. */
	const moveFirst = () => {
		const first = handle.current?.table
			.getRowsInDisplayOrder()
			.find((row) => !row.getIsGrouped())
		if (first) save(first.id, 'team', 'Cards')
	}

	return (
		<>
			{adding && (
				<div style={{ padding: '8px 16px' }}>
					<button type="button" data-add-position onClick={() => add(null)}>
						Add a position
					</button>
				</div>
			)}
			{grouped && (
				<div style={{ padding: '8px 16px' }}>
					<button type="button" data-move-first onClick={moveFirst}>
						Move the first person to Cards
					</button>
				</div>
			)}
			<TableCore
				ref={handle}
				features={features}
				data={rows}
				columns={columns}
				getRowId={(person) => person.id}
				meta={{ onEdit: save }}
				initialState={{
					// Sorted by Level; the groups stand in the order of their people.
					sorting: grouped ? [] : [{ id: 'level', desc: false }],
					grouping: grouped ? ['team'] : [],
					expanded: true,
				}}
				groupLayout="rows"
				toolbar={noticeRegion} // ← new: how many rows no longer match
				placeNewRows={placeNewRows}
				onRowInsert={adding ? (event) => add(event.afterRowId) : undefined}
				onRowsMove={onRowsMove}
			/>
		</>
	)
}
`,b=t=>t.querySelector("[data-hold-notice]"),m=t=>{var e;return((e=b(t))==null?void 0:e.querySelector("button"))??null},f=(t,e=6)=>ae(t).slice(0,e),Ie=async t=>{var h,p,c,d,a,l,g;const e=t.canvasElement;await M(e);const n=f(e);s(((h=b(e))==null?void 0:h.getAttribute("aria-live"))==="polite","the notice is a polite live region"),s(!m(e),"nothing to say yet"),await q(e,1,"A1"),s(f(e).join()===n.join(),`the order is held: ${f(e)} is ${n}`),s((c=(p=b(e))==null?void 0:p.textContent)==null?void 0:c.includes("1 row no longer matches the sort order."),`the notice counts the rows: ${(d=b(e))==null?void 0:d.textContent}`),s(((a=m(e))==null?void 0:a.textContent)==="Re-sort","and offers Re-sort"),await y.click(e.querySelector(`[role=row][data-row-id="${n[0]}"] [data-column-id="name"]`)),await y.keyboard("{ArrowDown}"),s(((g=(l=document.activeElement)==null?void 0:l.closest("[role=row]"))==null?void 0:g.getAttribute("data-row-id"))===n[1],"the arrow goes to the next row as it stands on the screen"),await y.click(m(e)),await R(()=>f(e)[0]===n[1],"Re-sort: the row with the new Level is first"),s(!m(e),"the notice is gone"),s(/causes:.*hold/.test(j(e)),`the event says why: ${j(e)}`),await ee(t,{hold:!1}),await M(e);const i=f(e);await q(e,2,"A1"),await te(200),s(f(e).join()!==i.join()&&!m(e),"without the hold the row goes at once, and there is nothing to say")},Oe=async t=>{var h,p,c,d;const e=t.canvasElement;await M(e);const n=()=>Array.from(e.querySelectorAll("[data-group-id]")).sort((a,l)=>a.getBoundingClientRect().top-l.getBoundingClientRect().top).map(a=>a.dataset.groupId),i=n();s(i.length>3,`groups are drawn: ${i.length}`),await y.click(e.querySelector("[data-move-first]")),await te(300),s(n().slice(0,4).join()===i.slice(0,4).join(),"the groups stand where they stood"),s(((p=(h=b(e))==null?void 0:h.textContent)==null?void 0:p.includes("Groups have changed."))&&((c=m(e))==null?void 0:c.textContent)==="Regroup",`the notice says the groups changed: ${(d=b(e))==null?void 0:d.textContent}`),await y.click(m(e)),await R(()=>n().slice(0,4).join()!==i.slice(0,4).join(),"Regroup: the groups go where their rule puts them"),s(j(e).includes("hold"),`the event says hold: ${j(e)}`)},Ne='[role=row][data-row-id^="new-"]',x=t=>Array.from(t.querySelectorAll(Ne)).map(e=>e.dataset.rowId),Pe=async t=>{var a,l,g;const e=t.canvasElement;await M(e);const n=f(e,4),i=le(),h=de();if(!h||!i)return;const c=e.querySelector(`[role=row][data-row-id="${n[1]}"]`).getBoundingClientRect();await h(c.left+200,c.bottom-2),await R(()=>e.querySelector("[data-row-insert-button]"),"the pointer at the boundary shows the + of the row above");const d=await re(async()=>{const w=e.querySelector("[data-row-insert-button]").getBoundingClientRect();await i(w.left+w.width/2,w.top+w.height/2,1),await R(()=>x(e).length===1,"the new row is drawn")});s(d.some(({element:w})=>w.dataset.rowId===x(e)[0]),"highlightRow flashes the new row"),s(f(e,4).join()===[n[0],n[1],x(e)[0],n[2]].join(),`the new row stands right after the second: ${f(e,4)}`),s((l=(a=b(e))==null?void 0:a.textContent)==null?void 0:l.includes("no longer match"),`the notice counts it: ${(g=b(e))==null?void 0:g.textContent}`),await y.click(e.querySelector("[data-add-position]")),await R(()=>x(e).includes("new-301"),"the second new row is scrolled to and drawn"),await y.click(m(e)),se(e).scrollTop=0,await R(()=>f(e,2).every(w=>w.startsWith("new-")),"Re-sort: the empty Levels sort first"),await ee(t,{hold:!1}),await M(e),await y.click(e.querySelector("[data-add-position]")),await R(()=>x(e).length===1&&x(e)[0]===f(e,1)[0],"without the hold the sort puts the empty Level first"),s(!m(e),"and there is nothing to say")},Le=he({rowSortingFeature:ve,columnGroupingFeature:be,rowExpandingFeature:ye,groupRowsFeature:me,cellEditingFeature:fe,cellSelectionFeature:ge,cellKeyboardFeature:pe,orderHoldFeature:we,rowInsertFeature:ue,sortedRowModel:Te(),groupedRowModel:xe(),expandedRowModel:Re(),sortFns:{text:ce},tableMeta:D(),columnMeta:D()}),A=Ce(),Ge=A.columns([A.accessor("name",{header:"Name",sortFn:"text"}),A.accessor("team",{header:"Team",sortFn:"text",meta:{editable:!0,typeToEdit:!0},cell:t=>o.jsx(W,{...t})}),A.accessor("level",{header:"Level",sortFn:"text",meta:{editable:!0,typeToEdit:!0},cell:t=>o.jsx(W,{...t})})]),_e=t=>o.jsx(Se,{table:t}),$e=({rows:t,onEdit:e,onRowsMove:n,hold:i=!1,grouped:h=!1,adding:p=!1,onAdd:c})=>{const d=E.useRef(null),a=(r,u,v)=>{var F;i&&((F=d.current)==null||F.table.holdOrder()),e(r,u,v)},l=E.useRef(null),[g,w]=E.useState(null),C=(r,u)=>l.current?B.after(l.current)(r,u):B.atEnd(r,u),_=r=>{var $;const u=($=d.current)==null?void 0:$.table,v=u==null?void 0:u.getRowsInDisplayOrder().find(ne=>ne.id===r),F={...t[0],id:`new-${t.length}`,name:"New position",team:(v==null?void 0:v.original.team)??t[0].team,level:""};i&&(u==null||u.holdOrder()),l.current=r,c==null||c(F),w(F.id)};E.useEffect(()=>{var r;g&&((r=d.current)==null||r.highlightRow(g),w(null))},[g]);const oe=()=>{var u;const r=(u=d.current)==null?void 0:u.table.getRowsInDisplayOrder().find(v=>!v.getIsGrouped());r&&a(r.id,"team","Cards")};return o.jsxs(o.Fragment,{children:[p&&o.jsx("div",{style:{padding:"8px 16px"},children:o.jsx("button",{type:"button","data-add-position":!0,onClick:()=>_(null),children:"Add a position"})}),h&&o.jsx("div",{style:{padding:"8px 16px"},children:o.jsx("button",{type:"button","data-move-first":!0,onClick:oe,children:"Move the first person to Cards"})}),o.jsx(ie,{ref:d,features:Le,data:t,columns:Ge,getRowId:r=>r.id,meta:{onEdit:a},initialState:{sorting:h?[]:[{id:"level",desc:!1}],grouping:h?["team"]:[],expanded:!0},groupLayout:"rows",toolbar:_e,placeNewRows:C,onRowInsert:p?r=>_(r.afterRowId):void 0,onRowsMove:n})]})},G=({hint:t,hold:e,grouped:n,adding:i=!1})=>{const[h,p]=E.useState(()=>n?ke(120):He(300)),{onRowsMove:c,readoutNode:d}=Me("readout");return o.jsx(Fe,{maxHeight:Ae,hint:o.jsxs(o.Fragment,{children:[t,d]}),children:o.jsx($e,{rows:h,hold:e,grouped:n,adding:i,onAdd:a=>p(l=>[...l,a]),onRowsMove:c,onEdit:(a,l,g)=>p(w=>w.map(C=>C.id===a?{...C,[l]:g}:C))})})},[I]=Object.values([je]),qe={title:"Tables/Table Core/Features/Rows on the move/Hold the order",id:"tables-table-core-features-rows-move-hold",...Ee(I)},T={control:{type:"boolean"}},S={tags:["kb:rows-move-hold"],name:"5 · The order is held while you edit",parameters:{...L(I,"HoldRows"),summary:"The screen calls `table.holdOrder()` before it saves an edit: the rows stay where they stand, the table counts the ones that no longer match the sort (`getOrderHold`), and `applyHeldOrder()` gives the sort back. The engine never holds by itself."},args:{hold:!0,grouped:!1},argTypes:{hold:T,grouped:T},render:t=>o.jsx(N,{args:t,children:o.jsx(G,{hold:t.hold,grouped:t.grouped,hint:o.jsx(P,{text:"300 people sorted by **Level**. Type **A1** in the Level of the second row: under the sort it would take the first place, and you would lose it. The order is held, so it stays; the notice says one row no longer matches, and **Re-sort** gives the sort back (the event says `hold`). Turn **hold** off in the controls: the row goes at once. Keys, copy and the selection go by the order you see."})})}),play:async t=>{O(t)||await Ie(t)}},k={tags:["kb:rows-move-hold-groups"],name:"6 · The groups are held too",parameters:{...L(I,"HoldGroups"),summary:"What is held is the order, not who belongs where: a person who changes team stands in the new team, and the groups keep their places; the notice says **Groups have changed**."},args:{hold:!0,grouped:!0},argTypes:{hold:T,grouped:T},render:t=>o.jsx(N,{args:t,children:o.jsx(G,{hold:t.hold,grouped:t.grouped,hint:o.jsx(P,{text:"Thirty teams of four, the groups as rows. Press **Move the first person to Cards**: they stand in Cards, and the groups stay in the order they had, even though Cards would now come first in the data. **Regroup** puts them where their rule says."})})}),play:async t=>{O(t)||await Oe(t)}},H={tags:["kb:rows-move-add-position"],name:"7 · Add a position",parameters:{...L(I,"AddPosition"),summary:"A new row is a position the user asked for in a place: the screen holds the order (`holdOrder`), adds the row, and `placeNewRows` says where it stands (`placeNewRowsBy.atEnd`, `.atStart`, `.after(rowId)`); `highlightRow` scrolls to it and shows it."},args:{hold:!0,grouped:!1},argTypes:{hold:T,grouped:T},render:t=>o.jsx(N,{args:t,children:o.jsx(G,{hold:t.hold,grouped:t.grouped,adding:!0,hint:o.jsx(P,{text:"300 people sorted by **Level**. **Add a position** puts a new row at the end of the list, a **+** in a row puts it right after that row; either way the row is shown with a flash and stands where it was asked for, although its empty Level would sort it first. The notice counts it; **Re-sort** gives it to the sort. Turn **grouped** on: the new row joins the team of the row you pressed."})})}),play:async t=>{O(t)||await Pe(t)}};var K,U,Y;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['kb:rows-move-hold'],
  name: '5 · The order is held while you edit',
  parameters: {
    ...sceneCodeWith(tableSource, 'HoldRows'),
    summary: 'The screen calls \`table.holdOrder()\` before it saves an edit: the rows stay where they stand, the table counts the ones that no longer match the sort (\`getOrderHold\`), and \`applyHeldOrder()\` gives the sort back. The engine never holds by itself.'
  },
  args: {
    hold: true,
    grouped: false
  },
  argTypes: {
    hold: control,
    grouped: control
  },
  render: args => <Remount args={args}>
            <HoldScene hold={args.hold} grouped={args.grouped} hint={<Md text="300 people sorted by **Level**. Type **A1** in the Level of the second row: under the sort it would take the first place, and you would lose it. The order is held, so it stays; the notice says one row no longer matches, and **Re-sort** gives the sort back (the event says \`hold\`). Turn **hold** off in the controls: the row goes at once. Keys, copy and the selection go by the order you see." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await holdRowsAct(ctx);
  }
}`,...(Y=(U=S.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,z,X;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['kb:rows-move-hold-groups'],
  name: '6 · The groups are held too',
  parameters: {
    ...sceneCodeWith(tableSource, 'HoldGroups'),
    summary: 'What is held is the order, not who belongs where: a person who changes team stands in the new team, and the groups keep their places; the notice says **Groups have changed**.'
  },
  args: {
    hold: true,
    grouped: true
  },
  argTypes: {
    hold: control,
    grouped: control
  },
  render: args => <Remount args={args}>
            <HoldScene hold={args.hold} grouped={args.grouped} hint={<Md text="Thirty teams of four, the groups as rows. Press **Move the first person to Cards**: they stand in Cards, and the groups stay in the order they had, even though Cards would now come first in the data. **Regroup** puts them where their rule says." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await holdGroupsAct(ctx);
  }
}`,...(X=(z=k.parameters)==null?void 0:z.docs)==null?void 0:X.source}}};var J,Q,V;H.parameters={...H.parameters,docs:{...(J=H.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['kb:rows-move-add-position'],
  name: '7 · Add a position',
  parameters: {
    ...sceneCodeWith(tableSource, 'AddPosition'),
    summary: 'A new row is a position the user asked for in a place: the screen holds the order (\`holdOrder\`), adds the row, and \`placeNewRows\` says where it stands (\`placeNewRowsBy.atEnd\`, \`.atStart\`, \`.after(rowId)\`); \`highlightRow\` scrolls to it and shows it.'
  },
  args: {
    hold: true,
    grouped: false
  },
  argTypes: {
    hold: control,
    grouped: control
  },
  render: args => <Remount args={args}>
            <HoldScene hold={args.hold} grouped={args.grouped} adding hint={<Md text="300 people sorted by **Level**. **Add a position** puts a new row at the end of the list, a **+** in a row puts it right after that row; either way the row is shown with a flash and stands where it was asked for, although its empty Level would sort it first. The notice counts it; **Re-sort** gives it to the sort. Turn **grouped** on: the new row joins the team of the row you pressed." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await addPositionAct(ctx);
  }
}`,...(V=(Q=H.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};const Be=["HoldRows","HoldGroups","AddPosition"],Ze=Object.freeze(Object.defineProperty({__proto__:null,AddPosition:H,HoldGroups:k,HoldRows:S,__namedExportsOrder:Be,default:qe},Symbol.toStringTag,{value:"Module"}));export{Ze as H};
