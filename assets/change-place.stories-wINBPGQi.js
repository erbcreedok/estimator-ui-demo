import{t as u,l as a,u as H,h as pe,y as re,ac as ce,an as ne,at as P,au as ae,ae as me,r as F,j as d,Y as ue,bN as we,ah as fe,b8 as ge,b9 as ye,bO as be,a0 as Re,bh as ve,bP as Te,bi as Oe,ba as xe,bb as Ce,bc as Me,a_ as Ie,bd as ke,be as Se,a6 as z,bj as Ae,bf as Ge,bg as Ee,Z as Fe,c as w,s as f,d as He,f as Pe,b as je,S as De,M as ze,e as _e}from"./products-CTiDOXRn.js";import{h as Be,p as Ne,H as We}from"./handlers-DXU2ZPok.js";import{g as Ve,d as Ue,l as $e}from"./checks-Df_c61wn.js";import{H as qe}from"./hold-notice-mmvAl10k.js";import{p as Le,T as Ke}from"./people-DY4ww1HD.js";const Ze=`import { useMemo, useRef, useState } from 'react'

import {
	TableCore,
	applyRowsReorder,
	cellEditingFeature,
	columnGroupingFeature,
	createColumnHelper,
	createExpandedRowModel,
	createGroupedRowModel,
	createSortedRowModel,
	createUtilityColumn,
	groupRowsFeature,
	metaHelper,
	orderHoldFeature,
	rowDragFeature,
	rowDragHandle,
	rowExpandingFeature,
	rowSortingFeature,
	sortByOrder,
	sortFn_text,
	sortGroupsBy,
	tableFeatures,
	type CellEditingColumnMeta,
	type CellEditingTableMeta,
	type RowsMoveHandler,
	type RowsReorder,
	type SortingState,
	type TableCoreHandle,
	type TableCoreUiProps,
	rowVirtualizationFeature,
} from '@pnl-simulation/table-core'

import type { Person } from '../../data/people'
import { HoldNotice } from '../../features/rows-move/hold-notice'
import { TEAMS, peopleInTeams } from '../../features/rows-move/people'

// Thirty teams of four people, the groups drawn as rows, no sort on the groups:
// the order of the groups is the order of the data, each by its first person. An
// edit of a Team, a person dropped into another team, new data: the first
// person of a team is gone, and the team goes down the table. The ways to deal
// with it are the props of this table: \`groupOrder\`, \`reorder\`, \`hold\`, and a
// handler of the rows that moved (\`onRowsMove\`).
const features = tableFeatures({
	rowVirtualizationFeature, // ← new: only the rows in the window are drawn
	rowDragFeature,
	cellEditingFeature,
	columnGroupingFeature,
	rowExpandingFeature,
	groupRowsFeature,
	rowSortingFeature,
	orderHoldFeature,
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
	sortedRowModel: createSortedRowModel(),
	sortFns: { text: sortFn_text },
	tableMeta: metaHelper<CellEditingTableMeta>(),
	columnMeta: metaHelper<CellEditingColumnMeta>(),
})

const helper = createColumnHelper<typeof features, Person>()

export type GroupOrder = 'by data' | 'by name' | 'by size' | 'own order'

/** The order of the teams that is the screen's own: the last team first. */
const OWN_ORDER = [...TEAMS].reverse()

/** What a sort of the groups starts with, by the way the screen orders them. */
const SORTING: Record<GroupOrder, SortingState> = {
	'by data': [],
	'by name': [{ id: 'team', desc: false }],
	'by size': [],
	'own order': [{ id: 'team', desc: false }],
}

/** A row put before another in the data, the plain way: the rows of its team may change the place of the team. */
const moveInData = (all: Person[], { rowIds, beforeRowId }: RowsReorder) => {
	const moved = all.filter((row) => rowIds.includes(row.id))
	const rest = all.filter((row) => !rowIds.includes(row.id))
	const lastOfTeam = rest.map((row) => row.team).lastIndexOf(moved[0].team)
	const at = beforeRowId
		? rest.findIndex((row) => row.id === beforeRowId)
		: lastOfTeam + 1

	return [...rest.slice(0, at), ...moved, ...rest.slice(at)]
}

const columnsOf = (groupOrder: GroupOrder) =>
	helper.columns([
		createUtilityColumn(helper, { parts: [rowDragHandle()] }),
		helper.accessor('name', { header: 'Name' }),
		// The grouped column is not drawn: the band of the group says it. It can be written (a drop into another team, the button).
		helper.accessor('team', {
			header: 'Team',
			sortFn: groupOrder === 'own order' ? sortByOrder(OWN_ORDER) : 'text',
			meta: { editable: true },
		}),
		helper.accessor('role', { header: 'Role' }),
	])

const noticeRegion: TableCoreUiProps['toolbar'] = (table) => (
	<HoldNotice table={table} />
)

type Props = {
	/** How the screen orders the groups. @default 'by data' */
	groupOrder?: GroupOrder
	/** How a row put in another place is put in the data. @default 'move in the data' */
	reorder?: 'move in the data' | 'applyRowsReorder'
	/** The screen holds the order before it saves an edit. @default false */
	hold?: boolean
	/** Rows or groups changed place: what moved and why (\`flipRows\`, \`keepAnchorInView\`, or yours). */
	onRowsMove?: RowsMoveHandler
}

export const PlacesTable = ({
	groupOrder = 'by data',
	reorder = 'move in the data',
	hold = false,
	onRowsMove,
}: Props) => {
	const [rows, setRows] = useState(() => peopleInTeams(120))
	const handle = useRef<TableCoreHandle<typeof features, Person>>(null)
	const columns = useMemo(() => columnsOf(groupOrder), [groupOrder])

	/** A value of a person is written: the screen holds the order first when it wants to. */
	const save = (rowId: string, columnId: string, value: unknown) => {
		if (hold) handle.current?.table.holdOrder() // keep the order, then save
		setRows((all) =>
			all.map((row) => (row.id === rowId ? { ...row, [columnId]: value } : row))
		)
	}
	/** The first person on the screen goes to Cards. */
	const moveFirst = () => {
		const first = handle.current?.table
			.getRowsInDisplayOrder()
			.find((row) => !row.getIsGrouped())
		if (first) save(first.id, 'team', 'Cards')
	}

	return (
		<>
			<div style={{ padding: '8px 16px' }}>
				<button type="button" data-move-first onClick={moveFirst}>
					Move the first person to Cards
				</button>
			</div>
			<TableCore
				ref={handle}
				features={features}
				data={rows}
				columns={columns}
				getRowId={(person) => person.id}
				meta={{ onEdit: save }}
				onRowsReorder={(change) =>
					setRows((all) =>
						reorder === 'applyRowsReorder'
							? applyRowsReorder(all, change, (person) => person.id)
							: moveInData(all, change)
					)
				}
				groupLayout="rows"
				sortGroups={
					groupOrder === 'by size' ? sortGroupsBy.byRowCount : undefined
				}
				toolbar={noticeRegion}
				onRowsMove={onRowsMove}
				autoResetExpanded={false}
				initialState={{
					grouping: ['team'],
					sorting: SORTING[groupOrder],
					expanded: true,
				}}
			/>
		</>
	)
}
`,j=e=>me(e).filter(o=>/^p\d+$/.test(o)),p=e=>Array.from(e.querySelectorAll("[data-group-id]")).sort((o,t)=>o.getBoundingClientRect().top-t.getBoundingClientRect().top).map(o=>o.dataset.groupId),k=e=>e.querySelector("[data-hold-notice]"),G=e=>{var o;return((o=k(e))==null?void 0:o.querySelector("button"))??null},Ye=e=>e.querySelector("[data-move-first]"),S=async e=>{const o=p(e).slice(0,3),t=j(e)[0];return await H.click(Ye(e)),await P(400),{id:t,top:o}},g=e=>{const o=Array.from(e.querySelectorAll("[data-header-id]")).map(t=>t.dataset.headerId);a(o.join()==="row-drag,name,role",`the columns are the handle, Name, Role: ${o}`),a(!e.querySelector('[data-column-id="team"]'),"Team is not repeated in the rows")},Je=async e=>{await u(e),g(e);const o=p(e)[0];a(o==="team:Platform",`the top group is Platform: ${o}`),await S(e),a(!e.querySelector('[data-group-id="team:Platform"]'),"the team is gone from the window, as if it were deleted")},Qe=async e=>{const o=e.canvasElement,t=async r=>{await re(e,{groupOrder:r}),await u(o),g(o);const{top:n}=await S(o);a(p(o).slice(0,3).join()===n.join(),`${r}: the top groups stand where they stood: ${p(o).slice(0,3)}`)};await t("by name"),await t("own order")},Xe=async e=>{const o=e.canvasElement,t=async()=>{await u(o),g(o);const i=p(o).slice(0,3),[h,,,s]=j(o),b=Ve(o,s,"after");return await Ue(o,h,b),await $e(b),await P(400),{top:i,now:p(o).slice(0,3)}},r=await t();a(r.now.join()===r.top.join(),`applyRowsReorder: the teams stay: ${r.now}`),await re(e,{reorder:"move in the data"});const n=await t();a(n.now.join()!==n.top.join(),`moved in the data alone, the top team jumps: ${n.now}`)},eo=async e=>{await u(e),g(e);const o=j(e)[0],t=await ce(async()=>{await S(e),await ae()});a(t.some(({element:r})=>r.hasAttribute("data-group-id")),"a group slides"),a(ne(e,o),"the edited person is still in the window")},oo=async e=>{var t,r,n,i;await u(e),g(e);const{top:o}=await S(e);a(p(e).slice(0,3).join()===o.join(),"nothing moved"),a(((r=(t=k(e))==null?void 0:t.textContent)==null?void 0:r.includes("Groups have changed."))&&((n=G(e))==null?void 0:n.textContent)==="Regroup",`the notice says so: ${(i=k(e))==null?void 0:i.textContent}`),await H.click(G(e)),await pe(()=>p(e).slice(0,3).join()!==o.join(),"Regroup: the teams go where the data puts them")},to=async e=>{var t,r,n;await u(e),g(e);const{id:o}=await S(e);a(ne(e,o),"the table follows the person"),a((r=(t=k(e))==null?void 0:t.textContent)==null?void 0:r.includes("no longer match"),`the notice counts what changed: ${(n=k(e))==null?void 0:n.textContent}`),await H.click(G(e)),await P(600),await ae(),a(!G(e),"Re-sort: the notice is gone")},ro=Re({rowVirtualizationFeature:Se,rowDragFeature:ke,cellEditingFeature:Ie,columnGroupingFeature:Me,rowExpandingFeature:Ce,groupRowsFeature:xe,rowSortingFeature:Oe,orderHoldFeature:Te,groupedRowModel:Ee(),expandedRowModel:Ge(),sortedRowModel:Ae(),sortFns:{text:ve},tableMeta:z(),columnMeta:z()}),v=Fe(),no=[...Ke].reverse(),ao={"by data":[],"by name":[{id:"team",desc:!1}],"by size":[],"own order":[{id:"team",desc:!1}]},so=(e,{rowIds:o,beforeRowId:t})=>{const r=e.filter(s=>o.includes(s.id)),n=e.filter(s=>!o.includes(s.id)),i=n.map(s=>s.team).lastIndexOf(r[0].team),h=t?n.findIndex(s=>s.id===t):i+1;return[...n.slice(0,h),...r,...n.slice(h)]},io=e=>v.columns([ge(v,{parts:[ye()]}),v.accessor("name",{header:"Name"}),v.accessor("team",{header:"Team",sortFn:e==="own order"?be(no):"text",meta:{editable:!0}}),v.accessor("role",{header:"Role"})]),lo=e=>d.jsx(qe,{table:e}),ho=({groupOrder:e="by data",reorder:o="move in the data",hold:t=!1,onRowsMove:r})=>{const[n,i]=F.useState(()=>Le(120)),h=F.useRef(null),s=F.useMemo(()=>io(e),[e]),b=(l,c,R)=>{var D;t&&((D=h.current)==null||D.table.holdOrder()),i(he=>he.map(E=>E.id===l?{...E,[c]:R}:E))},le=()=>{var c;const l=(c=h.current)==null?void 0:c.table.getRowsInDisplayOrder().find(R=>!R.getIsGrouped());l&&b(l.id,"team","Cards")};return d.jsxs(d.Fragment,{children:[d.jsx("div",{style:{padding:"8px 16px"},children:d.jsx("button",{type:"button","data-move-first":!0,onClick:le,children:"Move the first person to Cards"})}),d.jsx(ue,{ref:h,features:ro,data:n,columns:s,getRowId:l=>l.id,meta:{onEdit:b},onRowsReorder:l=>i(c=>o==="applyRowsReorder"?fe(c,l,R=>R.id):so(c,l)),groupLayout:"rows",sortGroups:e==="by size"?we.byRowCount:void 0,toolbar:lo,onRowsMove:r,autoResetExpanded:!1,initialState:{grouping:["team"],sorting:ao[e],expanded:!0}})]})},[m]=Object.values([Ze]),po={title:"Tables/Table Core/Concepts/When rows and groups change place/Cases",id:"tables-table-core-concepts-when-rows-and-groups-change-place",...Pe(m)},co=560,se=Ne(We,["flipRows","flipRows + keepAnchorInView","scrollToAnchor"]),de={...He(se)},ie=_e({onRowsMove:se}),y=(e,o)=>d.jsx(je,{args:e,children:d.jsx(De,{maxHeight:co,hint:d.jsx(ze,{text:o}),children:d.jsx(ho,{groupOrder:e.groupOrder,reorder:e.reorder,hold:e.hold,onRowsMove:Be(e.onRowsMove)})})}),A={groupOrder:"by data",reorder:"move in the data",hold:!1,onRowsMove:"without a handler"},T={tags:["kb:change-place-problem"],name:"1 · The problem: a team disappears",parameters:{...f(m,"TheProblem"),summary:"No sort on the groups: their order is the order of the data, each by its first person. Take the first person away and the team goes down the table, out of the window."},args:A,render:e=>y(e,"Thirty teams of four. **Platform** is first, because Anna is first in the data. Press **Move the first person to Cards** (a drop of a person on another team does the same): Platform now starts with the person who is thirty places down, and goes down the table, out of the window. It was not deleted; nobody can tell."),play:async e=>{w(e)||await Je(e.canvasElement)}},O={tags:["kb:change-place-order"],name:"2 · A) Give the groups an order",parameters:{...f(m,"GiveAnOrder",{groupOrder:{"by name":"sorting: [{ id: 'team', desc: false }] // the lane sorts its groups","by size":"sortGroups={sortGroupsBy.byRowCount}","own order":"sortFn: sortByOrder([...]) // a fixed order of the teams, and the sort of the lane"}}),summary:"The groups have an order of their own: the sort of the grouped column (A–Z, or `sortByOrder` for a fixed order), or `sortGroups` (by size, or a function of yours). The edit moves a person, not a team."},args:{...A,groupOrder:"by name"},argTypes:{groupOrder:{control:"radio",options:["by name","by size","own order"]}},render:e=>y(e,"The same table and the same button. The groups stand where they stood, and the person is in Cards. Pick **own order**: a fixed order of the teams. **by size** orders by the number of people, so a team that grows or shrinks goes up or down: use a name or a fixed order when the groups have a natural order. The sort of the grouped column always wins; with none, `sortGroups` orders them."),play:async e=>{w(e)||await Qe(e)}},x={tags:["kb:change-place-reorder"],name:"3 · B) applyRowsReorder: the teams stay on a drop",parameters:{...f(m,"KeepTheGroups",{reorder:{"move in the data":"moveInData(all, change) // only the person is moved in the data",applyRowsReorder:"applyRowsReorder(all, change, (person) => person.id) // the teams keep their places"}}),summary:"A person put in another place of their team: `applyRowsReorder` keeps the order of the teams (`change.order`); moved in the data alone, the team may jump. It does not help an edit of the Team: that changes who belongs where."},args:{...A,reorder:"applyRowsReorder"},argTypes:{reorder:{control:"radio",options:["move in the data","applyRowsReorder"]}},render:e=>y(e,"Take the first person of the top team by the handle and drop them after the last person of the same team. With **applyRowsReorder** the teams stay; **move in the data** moves only the person, and the team goes down. Use it when the order of the groups is “as in the data” and rows are dragged. It does not help an edit of the Team."),play:async e=>{w(e)||await Xe(e)}},C={tags:["kb:change-place-flow"],name:"4 · C) Let it move in front of the eyes",parameters:{...f(m,"SeeItMove",ie),summary:"The team still goes down, but it slides there in front of the eyes, and the table follows the person who was edited (`flipRows`, `keepAnchorInView`, `scrollToAnchor`)."},args:{...A,onRowsMove:"flipRows + keepAnchorInView"},argTypes:{onRowsMove:de},render:e=>y(e,"Press the button. The movement stays, but now it is understandable: the teams slide, and the table keeps the person you edited in the window. It is a solution of its own, not an addition."),play:async e=>{w(e)||await eo(e.canvasElement)}},M={tags:["kb:change-place-hold"],name:"5 · D) Hold the order until the user asks",parameters:{...f(m,"HoldIt"),summary:"The screen calls `table.holdOrder()` before it saves the edit: nothing moves, the notice says what changed, **Regroup** moves it."},args:{...A,hold:!0},argTypes:{hold:{control:{type:"boolean"}}},render:e=>y(e,"Press the button: nothing moves, the notice says **Groups have changed.** **Regroup** puts the teams where the data says. Use it when an edit must not move anything by itself."),play:async e=>{w(e)||await oo(e.canvasElement)}},I={tags:["kb:change-place-together"],name:"6 · E) Together",parameters:{...f(m,"Together",ie),summary:"The ways are props of one table: an order of the groups with the hold, or `applyRowsReorder` with the animation."},args:{groupOrder:"by name",reorder:"applyRowsReorder",hold:!0,onRowsMove:"flipRows + keepAnchorInView"},argTypes:{groupOrder:{control:"radio",options:["by data","by name","by size","own order"]},reorder:{control:"radio",options:["move in the data","applyRowsReorder"]},hold:{control:{type:"boolean"}},onRowsMove:de},render:e=>y(e,"Groups sorted by name, the order held, the rows put with applyRowsReorder, the move animated. Press the button: the teams stand, the table follows the person to their new team, the notice counts what changed, and **Re-sort** puts the rows where the sort says, sliding. Turn any of the controls off."),play:async e=>{w(e)||await to(e.canvasElement)}};var _,B,N;T.parameters={...T.parameters,docs:{...(_=T.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['kb:change-place-problem'],
  name: '1 · The problem: a team disappears',
  parameters: {
    ...sceneCodeWith(tableSource, 'TheProblem'),
    summary: 'No sort on the groups: their order is the order of the data, each by its first person. Take the first person away and the team goes down the table, out of the window.'
  },
  args: base,
  render: args => scene(args, 'Thirty teams of four. **Platform** is first, because Anna is first in the data. Press **Move the first person to Cards** (a drop of a person on another team does the same): Platform now starts with the person who is thirty places down, and goes down the table, out of the window. It was not deleted; nobody can tell.'),
  play: async ctx => {
    if (checksOff(ctx)) return;
    await problemAct(ctx.canvasElement);
  }
}`,...(N=(B=T.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var W,V,U;O.parameters={...O.parameters,docs:{...(W=O.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['kb:change-place-order'],
  name: '2 · A) Give the groups an order',
  parameters: {
    ...sceneCodeWith(tableSource, 'GiveAnOrder', {
      groupOrder: {
        'by name': "sorting: [{ id: 'team', desc: false }] // the lane sorts its groups",
        'by size': 'sortGroups={sortGroupsBy.byRowCount}',
        'own order': 'sortFn: sortByOrder([...]) // a fixed order of the teams, and the sort of the lane'
      }
    }),
    summary: 'The groups have an order of their own: the sort of the grouped column (A–Z, or \`sortByOrder\` for a fixed order), or \`sortGroups\` (by size, or a function of yours). The edit moves a person, not a team.'
  },
  args: {
    ...base,
    groupOrder: 'by name'
  },
  argTypes: {
    groupOrder: {
      control: 'radio',
      options: ['by name', 'by size', 'own order']
    }
  },
  render: args => scene(args, 'The same table and the same button. The groups stand where they stood, and the person is in Cards. Pick **own order**: a fixed order of the teams. **by size** orders by the number of people, so a team that grows or shrinks goes up or down: use a name or a fixed order when the groups have a natural order. The sort of the grouped column always wins; with none, \`sortGroups\` orders them.'),
  play: async ctx => {
    if (checksOff(ctx)) return;
    await orderedAct(ctx);
  }
}`,...(U=(V=O.parameters)==null?void 0:V.docs)==null?void 0:U.source}}};var $,q,L;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['kb:change-place-reorder'],
  name: '3 · B) applyRowsReorder: the teams stay on a drop',
  parameters: {
    ...sceneCodeWith(tableSource, 'KeepTheGroups', {
      reorder: {
        'move in the data': 'moveInData(all, change) // only the person is moved in the data',
        applyRowsReorder: 'applyRowsReorder(all, change, (person) => person.id) // the teams keep their places'
      }
    }),
    summary: 'A person put in another place of their team: \`applyRowsReorder\` keeps the order of the teams (\`change.order\`); moved in the data alone, the team may jump. It does not help an edit of the Team: that changes who belongs where.'
  },
  args: {
    ...base,
    reorder: 'applyRowsReorder'
  },
  argTypes: {
    reorder: {
      control: 'radio',
      options: ['move in the data', 'applyRowsReorder']
    }
  },
  render: args => scene(args, 'Take the first person of the top team by the handle and drop them after the last person of the same team. With **applyRowsReorder** the teams stay; **move in the data** moves only the person, and the team goes down. Use it when the order of the groups is “as in the data” and rows are dragged. It does not help an edit of the Team.'),
  play: async ctx => {
    if (checksOff(ctx)) return;
    await reorderAct(ctx);
  }
}`,...(L=(q=x.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var K,Z,Y;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['kb:change-place-flow'],
  name: '4 · C) Let it move in front of the eyes',
  parameters: {
    ...sceneCodeWith(tableSource, 'SeeItMove', flowCodes),
    summary: 'The team still goes down, but it slides there in front of the eyes, and the table follows the person who was edited (\`flipRows\`, \`keepAnchorInView\`, \`scrollToAnchor\`).'
  },
  args: {
    ...base,
    onRowsMove: 'flipRows + keepAnchorInView'
  },
  argTypes: {
    onRowsMove: flowControl
  },
  render: args => scene(args, 'Press the button. The movement stays, but now it is understandable: the teams slide, and the table keeps the person you edited in the window. It is a solution of its own, not an addition.'),
  play: async ctx => {
    if (checksOff(ctx)) return;
    await flowAct(ctx.canvasElement);
  }
}`,...(Y=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:Y.source}}};var J,Q,X;M.parameters={...M.parameters,docs:{...(J=M.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['kb:change-place-hold'],
  name: '5 · D) Hold the order until the user asks',
  parameters: {
    ...sceneCodeWith(tableSource, 'HoldIt'),
    summary: 'The screen calls \`table.holdOrder()\` before it saves the edit: nothing moves, the notice says what changed, **Regroup** moves it.'
  },
  args: {
    ...base,
    hold: true
  },
  argTypes: {
    hold: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: args => scene(args, 'Press the button: nothing moves, the notice says **Groups have changed.** **Regroup** puts the teams where the data says. Use it when an edit must not move anything by itself.'),
  play: async ctx => {
    if (checksOff(ctx)) return;
    await heldAct(ctx.canvasElement);
  }
}`,...(X=(Q=M.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var ee,oe,te;I.parameters={...I.parameters,docs:{...(ee=I.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  tags: ['kb:change-place-together'],
  name: '6 · E) Together',
  parameters: {
    ...sceneCodeWith(tableSource, 'Together', flowCodes),
    summary: 'The ways are props of one table: an order of the groups with the hold, or \`applyRowsReorder\` with the animation.'
  },
  args: {
    groupOrder: 'by name',
    reorder: 'applyRowsReorder',
    hold: true,
    onRowsMove: 'flipRows + keepAnchorInView'
  },
  argTypes: {
    groupOrder: {
      control: 'radio',
      options: ['by data', 'by name', 'by size', 'own order']
    },
    reorder: {
      control: 'radio',
      options: ['move in the data', 'applyRowsReorder']
    },
    hold: {
      control: {
        type: 'boolean'
      }
    },
    onRowsMove: flowControl
  },
  render: args => scene(args, 'Groups sorted by name, the order held, the rows put with applyRowsReorder, the move animated. Press the button: the teams stand, the table follows the person to their new team, the notice counts what changed, and **Re-sort** puts the rows where the sort says, sliding. Turn any of the controls off.'),
  play: async ctx => {
    if (checksOff(ctx)) return;
    await togetherAct(ctx.canvasElement);
  }
}`,...(te=(oe=I.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};const mo=["TheProblem","GiveAnOrder","KeepTheGroups","SeeItMove","HoldIt","Together"],bo=Object.freeze(Object.defineProperty({__proto__:null,GiveAnOrder:O,HoldIt:M,KeepTheGroups:x,SeeItMove:C,TheProblem:T,Together:I,__namedExportsOrder:mo,default:po},Symbol.toStringTag,{value:"Module"}));export{bo as C};
