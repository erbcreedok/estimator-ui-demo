import{O as c,l as n,P as g,y as M,W as P,h as me,u as v,w as _,r as oe,j as a,Y as pe,cC as ye,_ as he,$ as we,a0 as be,a3 as fe,a1 as ge,a6 as xe,Z as Re,C as Ae,S as Ee,c as x,M as y,s as h,f as ke}from"./products-CTiDOXRn.js";const Se=`import { useState } from 'react'

import {
	TableCore,
	TableToolbar,
	columnSizingFeature,
	columnVisibilityFeature,
	columnsControl,
	createColumnHelper,
	createRowActionsColumn,
	metaHelper,
	tableFeatures,
	type CoreColumnMeta,
	type RowAction,
	type TableCoreUiProps,
} from '@pnl-simulation/table-core'

import type { Employee } from '../../data/employees'

// Row actions are ours: a ⋮ button in a utility column, and a menu of the
// actions the screen gives for that row. v9 has nothing of the kind. The
// column is made by the screen's own column helper, like the utility column.
const features = tableFeatures({
	columnSizingFeature,
	columnVisibilityFeature,
	columnMeta: metaHelper<CoreColumnMeta>(),
})

const helper = createColumnHelper<typeof features, Employee>()

const toolbarRegion: TableCoreUiProps['toolbar'] = (table) => (
	<TableToolbar table={table} controls={[columnsControl()]} />
)

export type ActionId = 'duplicate' | 'exclude' | 'delete'

/** The sets of actions a screen can give, by name. */
export const ACTION_SETS: Record<string, ActionId[]> = {
	'Duplicate, Exclude and Delete': ['duplicate', 'exclude', 'delete'],
	'Duplicate and Delete': ['duplicate', 'delete'],
	'Delete only': ['delete'],
}

/** Why an action is off, by the name of the rule. */
export const DISABLED_RULES = ['none', 'Exclude is locked'] as const
export type DisabledRule = (typeof DISABLED_RULES)[number]

type Props = {
	rows: Employee[]
	/** The set of actions in every row's menu. */
	actions?: string
	/** The screen leaves Delete out of a Blocked row's list. */
	hideDeleteForBlocked?: boolean
	/** An action that stays in the menu, off, with its reason. */
	disabled?: DisabledRule
	/** The screen decides what its actions do in a read-only table: here it gives them off. */
	readOnly?: boolean
}

export const RowActionsTable = ({
	rows: initialRows,
	actions = 'Duplicate, Exclude and Delete',
	hideDeleteForBlocked = true,
	disabled = 'none',
	readOnly = false,
}: Props) => {
	const [rows, setRows] = useState(initialRows)
	const readOnlyReason = readOnly ? 'Read-only table' : undefined

	const actionOf = (id: ActionId, row: Employee): RowAction => {
		if (id === 'duplicate')
			return {
				id,
				label: 'Duplicate',
				disabledReason: readOnlyReason,
				onClick: () =>
					setRows((old) => {
						const index = old.findIndex((e) => e.id === row.id)
						const copy = { ...row, id: \`\${row.id}-copy-\${old.length}\` }

						return [...old.slice(0, index + 1), copy, ...old.slice(index + 1)]
					}),
			}
		if (id === 'exclude')
			return {
				id,
				label: 'Exclude from calculation',
				disabledReason:
					readOnlyReason ??
					(disabled === 'Exclude is locked'
						? 'Calculation is locked'
						: undefined),
				onClick: () =>
					setRows((old) =>
						old.map((e) => (e.id === row.id ? { ...e, state: 'excluded' } : e))
					),
			}

		return {
			id,
			label: 'Delete',
			disabledReason: readOnlyReason,
			onClick: () => setRows((old) => old.filter((e) => e.id !== row.id)),
		}
	}

	const getActions = (row: Employee) =>
		ACTION_SETS[actions]
			.filter(
				(id) =>
					!(id === 'delete' && hideDeleteForBlocked && row.state === 'blocked')
			)
			.map((id) => actionOf(id, row))

	return (
		<TableCore
			features={features}
			data={rows}
			columns={helper.columns([
				helper.accessor('name', { header: 'Name', size: 190 }),
				helper.accessor('team', { header: 'Team', size: 140 }),
				helper.accessor('state', { header: 'State', size: 110 }),
				createRowActionsColumn(helper, (row) => getActions(row.original)),
			])}
			getRowId={(employee) => employee.id}
			readOnly={readOnly}
			toolbar={toolbarRegion}
		/>
	)
}
`,se=(e,t)=>e.querySelector(`[data-row-actions="${t}"]`),i=e=>document.querySelector(`[data-row-action="${e}"]`),F=e=>e.querySelectorAll('[data-cell][data-column-id="name"]').length,p=async(e,t)=>{const o=se(e,t);return n(o,`a row-actions button for ${t}`),await v.click(o),g(()=>_(document.body).getByRole("menu"))},Ce=async e=>{await c(e);const t=e.querySelector('[data-header-id="row-actions"]');n(t,"row actions header exists"),n(Math.abs(t.getBoundingClientRect().width-48)<=1,"row actions column is 48 px"),n(!(t!=null&&t.querySelector("[data-grip]")),"row actions cannot reorder"),await v.click(_(e.querySelector("[role=toolbar]")).getByRole("button",{name:"Columns"})),await g(()=>{n(document.querySelector('[data-column-item="name"]'),"the Columns panel is open"),n(!document.querySelector('[data-column-item="row-actions"]'),"row actions are not in the Columns panel")})},De=async e=>{await c(e),await p(e,"p1");const t=_(document.body);n(t.getByRole("menuitem",{name:"Duplicate"}),"Duplicate shown"),n(t.getByRole("menuitem",{name:"Exclude from calculation"}),"Exclude shown"),n(t.getByRole("menuitem",{name:"Delete"}),"Delete shown")},Te=async e=>{await c(e),await p(e,"p2"),await g(()=>n(!i("delete"),"Delete is hidden for the Blocked row"))},Oe=async e=>{var o;await c(e),await p(e,"p1");const t=i("exclude");n(t.getAttribute("aria-disabled")==="true","Exclude disabled"),n(((o=t.textContent)==null?void 0:o.includes("Calculation is locked"))===!0,"the reason stands next to the label")},ve=async e=>{await c(e);const t=F(e);se(e,"p1").focus(),await v.keyboard("{Enter}"),await g(()=>_(document.body).getByRole("menu")),await v.keyboard("{Enter}"),await g(()=>n(F(e)===t+1,"row duplicated")),await g(()=>n(!document.querySelector("[role=menu]"),"menu closed"))},_e=async e=>{var t,o,m;await c(e),await p(e,"p1"),n(((t=i("duplicate"))==null?void 0:t.getAttribute("aria-disabled"))==="true","Duplicate disabled in read-only mode"),n(((m=(o=i("duplicate"))==null?void 0:o.textContent)==null?void 0:m.includes("Read-only table"))===!0,"the reason stands next to the label")},je=async e=>{const t=e.canvasElement;await M(e,{actions:"Delete only"}),await c(t),await p(t,"p1"),n(i("delete"),"Delete only: Delete"),n(!i("duplicate"),"Delete only: no Duplicate"),await P()},Be=async e=>{var o,m;const t=e.canvasElement;await M(e,{actions:"Duplicate, Exclude and Delete",hideDeleteForBlocked:!1,disabled:"Exclude is locked"}),await c(t),await p(t,"p2"),n(i("delete"),"hideDeleteForBlocked off: Delete for Blocked"),n((m=(o=i("exclude"))==null?void 0:o.textContent)==null?void 0:m.includes("Calculation is locked"),"disabled: the reason of Exclude"),await P(),await M(e,{readOnly:!0}),await c(t),await p(t,"p2"),await me(()=>{var R;return((R=i("delete"))==null?void 0:R.getAttribute("aria-disabled"))==="true"},"readOnly: Delete is off"),await P()},Me=be({columnSizingFeature:ge,columnVisibilityFeature:fe,columnMeta:xe()}),A=Re(),Pe=e=>a.jsx(he,{table:e,controls:[we()]}),re={"Duplicate, Exclude and Delete":["duplicate","exclude","delete"],"Duplicate and Delete":["duplicate","delete"],"Delete only":["delete"]},Fe=["none","Exclude is locked"],Ge=({rows:e,actions:t="Duplicate, Exclude and Delete",hideDeleteForBlocked:o=!0,disabled:m="none",readOnly:R=!1})=>{const[ie,j]=oe.useState(e),B=R?"Read-only table":void 0,ce=(s,r)=>s==="duplicate"?{id:s,label:"Duplicate",disabledReason:B,onClick:()=>j(l=>{const d=l.findIndex(ue=>ue.id===r.id),de={...r,id:`${r.id}-copy-${l.length}`};return[...l.slice(0,d+1),de,...l.slice(d+1)]})}:s==="exclude"?{id:s,label:"Exclude from calculation",disabledReason:B??(m==="Exclude is locked"?"Calculation is locked":void 0),onClick:()=>j(l=>l.map(d=>d.id===r.id?{...d,state:"excluded"}:d))}:{id:s,label:"Delete",disabledReason:B,onClick:()=>j(l=>l.filter(d=>d.id!==r.id))},le=s=>re[t].filter(r=>!(r==="delete"&&o&&s.state==="blocked")).map(r=>ce(r,s));return a.jsx(pe,{features:Me,data:ie,columns:A.columns([A.accessor("name",{header:"Name",size:190}),A.accessor("team",{header:"Team",size:140}),A.accessor("state",{header:"State",size:110}),ye(A,s=>le(s.original))]),getRowId:s=>s.id,readOnly:R,toolbar:Pe})},w=({hint:e,...t})=>{const o=oe.useMemo(()=>Ae(12),[]);return a.jsx(Ee,{hint:e,children:a.jsx(Ge,{rows:o,...t})})},b={actions:"Duplicate, Exclude and Delete",hideDeleteForBlocked:!0,disabled:"none",readOnly:!1},f={actions:{control:{type:"select"},options:Object.keys(re)},hideDeleteForBlocked:{control:{type:"boolean"}},disabled:{control:{type:"radio"},options:Fe},readOnly:{control:{type:"boolean"}}},[u]=Object.values([Se]),He={title:"Tables/Table Core/Features/Drafts/Row actions",id:"tables-table-core-features-row-actions",...ke(u)},E={tags:["kb:row-actions-utility-column"],name:"1 · Utility column",parameters:{...h(u,"UtilityColumn"),summary:"`createRowActionsColumn` adds a fixed 48 px ⋮ column that the panels do not offer."},args:b,argTypes:f,render:e=>a.jsx(w,{...e,hint:a.jsx(y,{text:"The last column is a fixed 48 px ⋮ utility column. Open **Columns**: it is intentionally not offered there."})}),play:async e=>{x(e)||await Ce(e.canvasElement)}},k={tags:["kb:row-actions-open-menu"],name:"2 · Open a row menu",parameters:{...h(u,"OpenMenu"),summary:"The ⋮ of a row opens the actions the screen gave for that row."},args:b,argTypes:f,render:e=>a.jsx(w,{...e,hint:a.jsx(y,{text:"Press ⋮ on a row to see the actions its screen supplied for that row."})}),play:async e=>{x(e)||(await De(e.canvasElement),await je(e))}},S={tags:["kb:row-actions-hidden-action"],name:"3 · Hidden action",parameters:{...h(u,"HiddenAction"),summary:"An action the screen does not return for a row is not in its menu."},args:b,argTypes:f,render:e=>a.jsx(w,{...e,hint:a.jsx(y,{text:"Open ⋮ for the Blocked row: Delete is not there — this screen leaves it out of the list."})}),play:async e=>{x(e)||(await Te(e.canvasElement),await Be(e))}},C={tags:["kb:row-actions-disabled-action"],name:"4 · Disabled action with a reason",parameters:{...h(u,"DisabledAction"),summary:"`disabledReason` keeps an action visible but off, and says why next to its label."},args:{...b,disabled:"Exclude is locked"},argTypes:f,render:e=>a.jsx(w,{...e,hint:a.jsx(y,{text:"Exclude is off but stays in the menu: its reason is next to the label."})}),play:async e=>{x(e)||await Oe(e.canvasElement)}},D={tags:["kb:row-actions-keyboard-action"],name:"5 · Run an action with the keyboard",parameters:{...h(u,"KeyboardAction"),summary:"Enter opens the menu, Enter on an item runs it and closes the menu."},args:b,argTypes:f,render:e=>a.jsx(w,{...e,hint:a.jsx(y,{text:"Focus ⋮, press **Enter**, then **Enter** again to duplicate the row. The menu closes and the new row appears."})}),play:async e=>{x(e)||await ve(e.canvasElement)}},T={tags:["kb:row-actions-read-only"],name:"6 · Read-only actions",parameters:{...h(u,"ReadOnly"),summary:"`readOnly` does not decide the actions: the screen gives them off, with a reason."},args:{...b,readOnly:!0},argTypes:f,render:e=>a.jsx(w,{...e,hint:a.jsx(y,{text:"This screen keeps ⋮ in a read-only table and gives every action off, with a reason."})}),play:async e=>{x(e)||await _e(e.canvasElement)}},O={tags:["kb:row-actions-playground"],name:"Playground",parameters:h(u,"Playground"),args:b,argTypes:f,render:e=>a.jsx(w,{...e,hint:a.jsx(y,{text:"Choose the set of actions, the rules per row and the read-only mode in the controls below."})})};var G,H,I;E.parameters={...E.parameters,docs:{...(G=E.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['kb:row-actions-utility-column'],
  name: '1 · Utility column',
  parameters: {
    ...sceneCodeWith(source, 'UtilityColumn'),
    summary: '\`createRowActionsColumn\` adds a fixed 48 px ⋮ column that the panels do not offer.'
  },
  args: ARGS,
  argTypes: ARG_TYPES,
  render: args => <Scene {...args} hint={<Md text="The last column is a fixed 48 px ⋮ utility column. Open **Columns**: it is intentionally not offered there." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await columnAct(ctx.canvasElement);
  }
}`,...(I=(H=E.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var U,z,W;k.parameters={...k.parameters,docs:{...(U=k.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['kb:row-actions-open-menu'],
  name: '2 · Open a row menu',
  parameters: {
    ...sceneCodeWith(source, 'OpenMenu'),
    summary: 'The ⋮ of a row opens the actions the screen gave for that row.'
  },
  args: ARGS,
  argTypes: ARG_TYPES,
  render: args => <Scene {...args} hint={<Md text="Press ⋮ on a row to see the actions its screen supplied for that row." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await openAct(ctx.canvasElement);
    await actionSetControlAct(ctx);
  }
}`,...(W=(z=k.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var q,Y,$;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['kb:row-actions-hidden-action'],
  name: '3 · Hidden action',
  parameters: {
    ...sceneCodeWith(source, 'HiddenAction'),
    summary: 'An action the screen does not return for a row is not in its menu.'
  },
  args: ARGS,
  argTypes: ARG_TYPES,
  render: args => <Scene {...args} hint={<Md text="Open ⋮ for the Blocked row: Delete is not there — this screen leaves it out of the list." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await hiddenAct(ctx.canvasElement);
    await ruleControlsAct(ctx);
  }
}`,...($=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var L,N,K;C.parameters={...C.parameters,docs:{...(L=C.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['kb:row-actions-disabled-action'],
  name: '4 · Disabled action with a reason',
  parameters: {
    ...sceneCodeWith(source, 'DisabledAction'),
    summary: '\`disabledReason\` keeps an action visible but off, and says why next to its label.'
  },
  args: {
    ...ARGS,
    disabled: 'Exclude is locked'
  },
  argTypes: ARG_TYPES,
  render: args => <Scene {...args} hint={<Md text="Exclude is off but stays in the menu: its reason is next to the label." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await disabledAct(ctx.canvasElement);
  }
}`,...(K=(N=C.parameters)==null?void 0:N.docs)==null?void 0:K.source}}};var V,Z,J;D.parameters={...D.parameters,docs:{...(V=D.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['kb:row-actions-keyboard-action'],
  name: '5 · Run an action with the keyboard',
  parameters: {
    ...sceneCodeWith(source, 'KeyboardAction'),
    summary: 'Enter opens the menu, Enter on an item runs it and closes the menu.'
  },
  args: ARGS,
  argTypes: ARG_TYPES,
  render: args => <Scene {...args} hint={<Md text="Focus ⋮, press **Enter**, then **Enter** again to duplicate the row. The menu closes and the new row appears." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await keyboardAct(ctx.canvasElement);
  }
}`,...(J=(Z=D.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var Q,X,ee;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ['kb:row-actions-read-only'],
  name: '6 · Read-only actions',
  parameters: {
    ...sceneCodeWith(source, 'ReadOnly'),
    summary: '\`readOnly\` does not decide the actions: the screen gives them off, with a reason.'
  },
  args: {
    ...ARGS,
    readOnly: true
  },
  argTypes: ARG_TYPES,
  render: args => <Scene {...args} hint={<Md text="This screen keeps ⋮ in a read-only table and gives every action off, with a reason." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await readOnlyAct(ctx.canvasElement);
  }
}`,...(ee=(X=T.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var te,ne,ae;O.parameters={...O.parameters,docs:{...(te=O.parameters)==null?void 0:te.docs,source:{originalSource:`{
  tags: ['kb:row-actions-playground'],
  name: 'Playground',
  parameters: sceneCodeWith(source, 'Playground'),
  args: ARGS,
  argTypes: ARG_TYPES,
  render: args => <Scene {...args} hint={<Md text="Choose the set of actions, the rules per row and the read-only mode in the controls below." />} />
}`,...(ae=(ne=O.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};const Ie=["UtilityColumn","OpenMenu","HiddenAction","DisabledAction","KeyboardAction","ReadOnly","Playground"],ze=Object.freeze(Object.defineProperty({__proto__:null,DisabledAction:C,HiddenAction:S,KeyboardAction:D,OpenMenu:k,Playground:O,ReadOnly:T,UtilityColumn:E,__namedExportsOrder:Ie,default:He},Symbol.toStringTag,{value:"Module"}));export{ze as S};
