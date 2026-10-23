import{j as l,Y as B,F as ee,aZ as y,a0 as $,Z as G,b3 as te,a_ as Y,b4 as ne,b5 as ae,a6 as b,c as x,u as d,J as n,H as S,l as r,G as Z,h,aC as J,I as i,bW as oe,b as re,M as P,s as le,bq as X,f as ie,r as se,A as ce,S as de}from"./products-CTiDOXRn.js";import{P as he}from"./people-scene-CnMRUXe9.js";import{e as pe,c as ue,a as me}from"./controls-BCXw8klf.js";import{b as we}from"./plan-like-scene-Z3UmXR5t.js";const ke=`import {
	TableCore,
	editOn,
	cellEditingFeature,
	cellSelectionFeature,
	cellKeyboardFeature,
	cellKeyboardEditingFeature,
	createColumnHelper,
	metaHelper,
	tableFeatures,
	type CellEditingColumnMeta,
	type CellEditingTableMeta,
	type TableCoreProps,
} from '@pnl-simulation/table-core'

import type { Person } from '../../data/people'

import { Editor } from './editor'

// 1. Cells can be selected and edited, and this feature joins them. A click opens
// the editor (\`startEditing\`, 'click' by default); Shift+click and a drag
// select a range instead.
const features = tableFeatures({
	cellSelectionFeature,
	cellKeyboardFeature,
	cellEditingFeature,
	cellKeyboardEditingFeature,
	tableMeta: metaHelper<CellEditingTableMeta>(),
	columnMeta: metaHelper<CellEditingColumnMeta>(),
})

const helper = createColumnHelper<typeof features, Person>()
const columns = helper.columns([
	// 2. \`meta.editable\` lets a column be edited. 3. Its \`cell\` is the editor.
	...(['name', 'team', 'level', 'country'] as const).map((key) =>
		helper.accessor(key, {
			header: key,
			meta: { editable: true, typeToEdit: true },
			cell: (info) => <Editor {...info} />,
		})
	),
	// No \`meta.editable\`: this column cannot be edited.
	helper.accessor('role', { header: 'role (not editable)' }),
])

type Props = Partial<TableCoreProps<typeof features, Person>> & {
	rows: Person[]
	/** 4. What was typed comes here: save it, the table shows the new rows. */
	onEdit: (rowId: string, columnId: string, value: unknown) => void
}

export const ClickEditTable = ({
	rows,
	onEdit,
	startEditing = editOn.click,
	readOnly = false,
	...rest
}: Props) => (
	<TableCore
		startEditing={startEditing}
		readOnly={readOnly}
		features={features}
		data={rows}
		columns={columns}
		getRowId={(person) => person.id}
		meta={{ onEdit }}
		{...rest}
	/>
)
`,ge=`import { useMemo } from 'react'

import {
	TableCore,
	cellEditingFeature,
	cellKeyboardEditingFeature,
	cellKeyboardFeature,
	cellSelectionFeature,
	columnPinningFeature,
	editOn,
	columnSizingFeature,
	createColumnHelper,
	metaHelper,
	tableFeatures,
	type CellContext,
	type CellEditingColumnMeta,
	type CellEditingTableMeta,
	type CoreColumnMeta,
} from '@pnl-simulation/table-core'

import type { Employee } from '../../data/employees'

import { Editor } from './editor'
import { maskWorkload, showWorkload } from './editors/plan-rules'
import { monthName, yearsOf } from './workload-months'

// Everything of a planning table at once: a click selects and a double click, a typed key,
// Enter or F2 open the editor (\`startEditing\`, \`editOn.doubleClick\`), Shift+click and a drag
// select, paste and Delete write the selection, the dot on its corner fills. The workload is a group of columns for
// each year with a column for each month under it (v9's column groups), made
// from the months the rows have.
export const features = tableFeatures({
	cellSelectionFeature,
	cellKeyboardFeature,
	cellEditingFeature,
	cellKeyboardEditingFeature,
	columnSizingFeature, // the months are narrow: their columns say their \`size\`
	columnPinningFeature, // Name stays at the left while the months scroll
	tableMeta: metaHelper<CellEditingTableMeta>(),
	columnMeta: metaHelper<CoreColumnMeta & CellEditingColumnMeta>(),
})

/** A person and the workload of each month ('2026-03': 0.5). */
export type PlanRow = Employee & { workload: Record<string, number> }

export const helper = createColumnHelper<typeof features, PlanRow>()

/** A column that can be edited: its \`cell\` is the editor. */
export const editable = (
	header: string,
	meta: CoreColumnMeta & CellEditingColumnMeta = {}
) => ({
	header,
	meta: { editable: true, typeToEdit: true, ...meta },
	cell: (info: CellContext<typeof features, PlanRow, string>) => (
		<Editor {...info} />
	),
})

/** A workload is from 0 to 1; anything else is refused, with this reason. */
const workload = (text: string) =>
	Number(text) >= 0 && Number(text) <= 1
		? { value: Number(text) }
		: { error: 'Workload is from 0 to 1' }

/** A group of columns for each year, a column for each of its months. */
export const workloadColumns = (monthKeys: string[]) =>
	yearsOf(monthKeys).map(({ year, months }, at) =>
		helper.group({
			id: \`workload_\${year}\`,
			header: at === 0 ? \`Workload \${year}\` : year,
			columns: helper.columns(
				months.map((key) =>
					helper.accessor((row) => String(row.workload[key]), {
						id: key,
						size: 84,
						...editable(monthName(key), {
							parse: workload,
							align: 'center',
						}),
						cell: (info) => (
							<Editor
								{...info}
								inputMode="decimal"
								mask={maskWorkload}
								editAs={showWorkload}
								display={showWorkload}
							/>
						),
					})
				)
			),
		})
	)

/** The columns of the person before the months: editable ('editable') or only shown ('read only'). */
export const leadingColumns = (mode: 'editable' | 'read only') => {
	const column = (header: string, size: number) =>
		mode === 'editable' ? { ...editable(header), size } : { header, size }

	return helper.columns([
		helper.accessor('name', column('Name', 160)),
		helper.accessor('level', column('Level', 90)),
		helper.accessor('country', column('Country', 120)),
		helper.accessor('city', column('City', 110)),
		helper.accessor('role', column('Role', 150)),
		helper.accessor('start', column('Start', 110)),
		helper.accessor('end', column('End', 110)),
		helper.accessor((row) => String(row.rate), {
			id: 'rate',
			...column('Rate', 80),
		}),
	])
}

/** The frozen columns of the plan: Name, as in the product. */
export const PLAN_PINNING = { start: ['name'], end: [] }

type Props = {
	rows: PlanRow[]
	onEdit: (rowId: string, columnId: string, value: unknown) => void
}

export const PlanLikeTable = ({ rows, onEdit }: Props) => {
	const months = Object.keys(rows[0]?.workload ?? {})
	const columns = useMemo(
		() => [...leadingColumns('editable'), ...workloadColumns(months)],
		[months.join()] // eslint-disable-line react-hooks/exhaustive-deps
	)

	return (
		<TableCore
			features={features}
			data={rows}
			columns={columns}
			getRowId={(row) => row.id}
			meta={{ onEdit }}
			startEditing={editOn.doubleClick}
			initialState={{ columnPinning: PLAN_PINNING }}
		/>
	)
}
`,ye=`import {
	TableCore,
	cellEditingFeature,
	createColumnHelper,
	metaHelper,
	tableFeatures,
	type CellEditingColumnMeta,
	type CellEditingTableMeta,
	type TableCoreProps,
} from '@pnl-simulation/table-core'

import type { Person } from '../../data/people'

import { Editor } from './editor'

const features = tableFeatures({
	cellEditingFeature,
	tableMeta: metaHelper<CellEditingTableMeta>(),
	columnMeta: metaHelper<CellEditingColumnMeta>(),
})

const helper = createColumnHelper<typeof features, Person>()
const columns = helper.columns([
	// Not editable: nothing shows when the pointer is over it.
	helper.accessor('name', { header: 'Name' }),
	// Editable: a thin frame while the pointer is over the cell.
	helper.accessor('team', {
		header: 'Team',
		meta: { editable: true, typeToEdit: true },
		cell: (info) => <Editor {...info} />,
	}),
	// A field that is a list: a ▾ on the right while the pointer is over it.
	helper.accessor('level', {
		header: 'Level',
		meta: { editable: true, typeToEdit: true, hoverMark: 'list' },
		cell: (info) => <Editor {...info} />,
	}),
	// An empty field: a + while the pointer is over it.
	helper.accessor('role', {
		header: 'Role',
		meta: { editable: true, typeToEdit: true, hoverMark: 'add' },
		cell: (info) => <Editor {...info} />,
	}),
])

type Props = Partial<TableCoreProps<typeof features, Person>> & {
	rows: Person[]
	onEdit: (rowId: string, columnId: string, value: unknown) => void
}

export const HoverTable = ({ rows, onEdit, ...rest }: Props) => (
	<TableCore
		features={features}
		data={rows}
		columns={columns}
		getRowId={(person) => person.id}
		meta={{ onEdit }}
		{...rest}
	/>
)
`,be=$({cellSelectionFeature:ae,cellKeyboardFeature:ne,cellEditingFeature:Y,cellKeyboardEditingFeature:te,tableMeta:b(),columnMeta:b()}),v=G(),fe=v.columns([...["name","team","level","country"].map(t=>v.accessor(t,{header:t,meta:{editable:!0,typeToEdit:!0},cell:e=>l.jsx(y,{...e})})),v.accessor("role",{header:"role (not editable)"})]),Ee=({rows:t,onEdit:e,startEditing:a=ee.click,readOnly:o=!1,...s})=>l.jsx(B,{startEditing:a,readOnly:o,features:be,data:t,columns:fe,getRowId:f=>f.id,meta:{onEdit:e},...s}),ve=$({cellEditingFeature:Y,tableMeta:b(),columnMeta:b()}),p=G(),Ce=p.columns([p.accessor("name",{header:"Name"}),p.accessor("team",{header:"Team",meta:{editable:!0,typeToEdit:!0},cell:t=>l.jsx(y,{...t})}),p.accessor("level",{header:"Level",meta:{editable:!0,typeToEdit:!0,hoverMark:"list"},cell:t=>l.jsx(y,{...t})}),p.accessor("role",{header:"Role",meta:{editable:!0,typeToEdit:!0,hoverMark:"add"},cell:t=>l.jsx(y,{...t})})]),Te=({rows:t,onEdit:e,...a})=>l.jsx(B,{features:ve,data:t,columns:Ce,getRowId:o=>o.id,meta:{onEdit:e},...a}),[Q]=Object.values([ke]),[Se]=Object.values([ge]),[xe]=Object.values([ye]),Ae={title:"Tables/Table Core/Features/Editing/Click to edit",id:"tables-table-core-features-editing-click",...ie(Q)},M=t=>h(()=>t.querySelector("[data-cell]"),"the table is drawn"),c=(t,e,a={})=>e.dispatchEvent(new PointerEvent(t,{bubbles:!0,cancelable:!0,button:0,pointerId:1,isPrimary:!0,...a})),u={tags:["kb:editing-click"],name:"1 · A click opens the editor, a range does not",parameters:{...le(Q,"ClickOpensTheEditor",me),summary:"With `startEditing: 'click'` (the scene sets it; the default is `'doubleClick'`) one click on a cell that can be edited opens its editor. Shift+click and a drag select a range and open nothing; a cell that cannot be edited is only selected."},args:{startEditing:"click",readOnly:!1},argTypes:pe,render:t=>l.jsx(re,{args:t,children:l.jsx(he,{Table:Ee,...t,hint:l.jsx(P,{text:"Click Team: the editor opens. **Shift+click** another cell: a range, no editor. Drag over a few cells: a range. Click Role: it cannot be edited, so it is only selected. The controls turn `startEditing` to a double click and switch `readOnly`."})})}),play:async t=>{if(x(t))return;const e=t.canvasElement;await M(e),await d.click(n(e,0,1));const a=await S(e);r(a.closest("[data-cell]")===n(e,0,1),"one click opens the editor in its cell"),Z(a,"Escape"),await h(()=>!i(e),"Esc closes it"),await J(n(e,2,2)),await new Promise(o=>{setTimeout(o,300)}),r(!i(e),"Shift+click opens no editor"),r(e.querySelectorAll("[data-selection]").length>1,"Shift+click made a range"),c("pointerdown",n(e,3,1)),c("pointerover",n(e,5,2)),c("pointerup",n(e,5,2)),await new Promise(o=>{setTimeout(o,300)}),r(!i(e),"a drag opens no editor"),await d.click(n(e,1,4)),await new Promise(o=>{setTimeout(o,300)}),r(!i(e),"Role is not editable: a click only selects"),oe.click(n(e,1,4)),await ue(t,"click")}},Pe=()=>{const[t,e]=se.useState(()=>ce(8).map((a,o)=>o%2?{...a,role:""}:a));return l.jsx(de,{hint:l.jsx(P,{text:"Move the pointer over the table. Team, Level and Role can be edited: a thin frame follows the pointer. Level is a list, so it shows a **▾**; an empty Role shows a **+**. Name cannot be edited: nothing shows. On a phone there is no pointer, so no frame."}),children:l.jsx(Te,{rows:t,onEdit:(a,o,s)=>e(f=>f.map(E=>E.id===a?{...E,[o]:s}:E))})})},U=()=>{const t=[],e=a=>Array.from(a).forEach(o=>{o instanceof CSSStyleRule&&o.selectorText.includes(":hover")?t.push(o):"cssRules"in o&&e(o.cssRules)});return Array.from(document.styleSheets).forEach(a=>{try{e(a.cssRules)}catch{}}),t},F=t=>U().some(e=>e.style.outline.includes("206, 208, 219")&&t.matches(e.selectorText.replace(/:hover/g,""))),C=t=>t.querySelector("[data-hover-mark]")!==null&&U().some(e=>e.style.opacity==="1"&&e.selectorText.includes("[data-hover-mark]")&&t.matches(e.selectorText.split(" > ")[0].replace(/:hover/g,""))),m={tags:["kb:editing-hover"],name:"2 · The pointer shows which cells are fields",parameters:{...X(xe),summary:"A cell that can be edited gets a thin frame under the pointer, a list a ▾, an empty cell a +; a cell that cannot be edited shows nothing."},render:()=>l.jsx(Pe,{}),play:async t=>{if(x(t))return;const e=t.canvasElement;await M(e),r(F(n(e,0,1)),"Team gets the frame under the pointer"),r(!F(n(e,0,0)),"Name (not editable) gets no frame"),r(getComputedStyle(n(e,0,1)).outlineStyle!=="solid","the frame is only under the pointer"),r(!C(n(e,0,0)),"Name has no mark"),r(C(n(e,0,2)),"Level shows the ▾ under the pointer"),r(n(e,1,3).querySelector('[data-hover-mark="add"]')!==null&&C(n(e,1,3)),"an empty Role shows the +"),r(n(e,0,3).querySelector("[data-hover-mark]")===null,"a Role with a value has no +")}},g=(t,e,a)=>n(t,e,a).textContent,Me=(t,e)=>{const a=new DataTransfer;a.setData("text/plain",e),t.dispatchEvent(new ClipboardEvent("paste",{bubbles:!0,cancelable:!0,clipboardData:a}))},w=()=>new Promise(t=>{setTimeout(t,300)}),k={tags:["kb:editing-resource-plan"],name:"3 · Like the Resource plan",parameters:{...X(Se),summary:"The way the planning table works: a click selects and a double click opens the editor, Shift+click and a drag select a range, Ctrl+V and Delete write the range, the dot on the corner fills, Esc closes the editor and the cell stays the active one."},render:()=>l.jsx(we,{hint:l.jsx(P,{text:"Click a cell: it is selected, with the dot on its corner. **Double-click** it, type a digit, press **Enter** or **F2**: the editor opens. **Esc** closes it, the cell stays active. **Shift+click** or a drag selects a range: **Ctrl+V** pastes into it, **Delete** clears it, and the dot on its corner fills the rows below. Typing into an open editor is the field’s own: Ctrl+V and Delete are the text’s then."})}),play:async t=>{if(x(t))return;const e=t.canvasElement;await M(e),await d.click(n(e,0,0)),await w(),r(!i(e),"a click opens no editor"),await d.dblClick(n(e,0,0)),r((await S(e)).closest("[data-cell]")===n(e,0,0),"a double click opens the editor"),Z(await S(e),"Escape"),await h(()=>!i(e),"Esc closes the editor"),r(n(e,0,0).getAttribute("data-selection")==="active","the cell stays the active one"),await d.click(n(e,1,1)),await J(n(e,3,1)),await w(),r(!i(e),"Shift+click selects without an editor"),Me(e.querySelector("[role=grid]"),"B2"),await h(()=>[1,2,3].every(s=>g(e,s,1)==="B2"),"Ctrl+V pastes into the selected range"),await d.keyboard("{Delete}"),await h(()=>[1,2,3].every(s=>g(e,s,1)===""),"Delete clears the range"),c("pointerdown",n(e,4,2)),c("pointerover",n(e,6,3)),c("pointerup",n(e,6,3)),await w(),r(!i(e),"a drag selects without an editor"),await d.click(n(e,0,4)),await h(()=>n(e,0,4).querySelector("[data-fill-handle]"),"the active cell has the dot");const a=n(e,0,4).querySelector("[data-fill-handle]");c("pointerdown",a,T(a)),c("pointermove",window,T(n(e,3,4))),c("pointerup",window,T(n(e,3,4))),await h(()=>[1,2,3].every(s=>g(e,s,4)===g(e,0,4)),"dragging the dot fills the rows"),await w(),r(!i(e),"the dot is no edit"),n(e,3,4).querySelector("[data-fill-handle]").dispatchEvent(new MouseEvent("click",{bubbles:!0,button:0})),await w(),r(!i(e),"a click on the dot opens no editor")}},T=t=>{const e=t.getBoundingClientRect();return{clientX:e.left+e.width/2,clientY:e.top+e.height/2}};var R,H,O,A,N;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['kb:editing-click'],
  name: '1 · A click opens the editor, a range does not',
  parameters: {
    ...sceneCodeWith(clickSource, 'ClickOpensTheEditor', editingCodes),
    summary: "With \`startEditing: 'click'\` (the scene sets it; the default is \`'doubleClick'\`) one click on a cell that can be edited opens its editor. Shift+click and a drag select a range and open nothing; a cell that cannot be edited is only selected."
  },
  args: {
    startEditing: 'click',
    readOnly: false
  },
  argTypes: editingArgTypes,
  render: args => <Remount args={args}>
            <PeopleScene Table={ClickEditTable} {...args} hint={<Md text="Click Team: the editor opens. **Shift+click** another cell: a range, no editor. Drag over a few cells: a range. Click Role: it cannot be edited, so it is only selected. The controls turn \`startEditing\` to a double click and switch \`readOnly\`." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    await ready(c);
    await userEvent.click(cell(c, 0, 1));
    const input = await openEditor(c);
    check(input.closest('[data-cell]') === cell(c, 0, 1), 'one click opens the editor in its cell');
    press(input, 'Escape');
    await until(() => !editor(c), 'Esc closes it');
    await shiftClick(cell(c, 2, 2));
    await new Promise(resolve => {
      setTimeout(resolve, 300);
    });
    check(!editor(c), 'Shift+click opens no editor');
    check(c.querySelectorAll('[data-selection]').length > 1, 'Shift+click made a range');
    pointer('pointerdown', cell(c, 3, 1));
    pointer('pointerover', cell(c, 5, 2));
    pointer('pointerup', cell(c, 5, 2));
    await new Promise(resolve => {
      setTimeout(resolve, 300);
    });
    check(!editor(c), 'a drag opens no editor');
    await userEvent.click(cell(c, 1, 4));
    await new Promise(resolve => {
      setTimeout(resolve, 300);
    });
    check(!editor(c), 'Role is not editable: a click only selects');
    fireEvent.click(cell(c, 1, 4));
    await controlsAct(ctx, 'click');
  }
}`,...(O=(H=u.parameters)==null?void 0:H.docs)==null?void 0:O.source},description:{story:"One click opens the editor; Shift+click and a drag select a range instead.",...(N=(A=u.parameters)==null?void 0:A.docs)==null?void 0:N.description}}};var j,_,W,L,D;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['kb:editing-hover'],
  name: '2 · The pointer shows which cells are fields',
  parameters: {
    ...sceneCodeOf(hoverSource),
    summary: 'A cell that can be edited gets a thin frame under the pointer, a list a ▾, an empty cell a +; a cell that cannot be edited shows nothing.'
  },
  render: () => <HoverScene />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    await ready(c);
    check(frameWhenHovered(cell(c, 0, 1)), 'Team gets the frame under the pointer');
    check(!frameWhenHovered(cell(c, 0, 0)), 'Name (not editable) gets no frame');
    check(getComputedStyle(cell(c, 0, 1)).outlineStyle !== 'solid', 'the frame is only under the pointer');
    check(!markWhenHovered(cell(c, 0, 0)), 'Name has no mark');
    check(markWhenHovered(cell(c, 0, 2)), 'Level shows the ▾ under the pointer');
    check(cell(c, 1, 3).querySelector('[data-hover-mark="add"]') !== null && markWhenHovered(cell(c, 1, 3)), 'an empty Role shows the +');
    check(cell(c, 0, 3).querySelector('[data-hover-mark]') === null, 'a Role with a value has no +');
  }
}`,...(W=(_=m.parameters)==null?void 0:_.docs)==null?void 0:W.source},description:{story:"The pointer over a cell that can be edited shows its frame and its mark.",...(D=(L=m.parameters)==null?void 0:L.docs)==null?void 0:D.description}}};var I,q,K,z,V;k.parameters={...k.parameters,docs:{...(I=k.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['kb:editing-resource-plan'],
  name: '3 · Like the Resource plan',
  parameters: {
    ...sceneCodeOf(planSource),
    summary: 'The way the planning table works: a click selects and a double click opens the editor, Shift+click and a drag select a range, Ctrl+V and Delete write the range, the dot on the corner fills, Esc closes the editor and the cell stays the active one.'
  },
  render: () => <PlanLikeScene hint={<Md text="Click a cell: it is selected, with the dot on its corner. **Double-click** it, type a digit, press **Enter** or **F2**: the editor opens. **Esc** closes it, the cell stays active. **Shift+click** or a drag selects a range: **Ctrl+V** pastes into it, **Delete** clears it, and the dot on its corner fills the rows below. Typing into an open editor is the field’s own: Ctrl+V and Delete are the text’s then." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    await ready(c);
    // A click selects, a double click opens the editor; Esc closes it and the cell is still the active one.
    await userEvent.click(cell(c, 0, 0));
    await idle();
    check(!editor(c), 'a click opens no editor');
    await userEvent.dblClick(cell(c, 0, 0));
    check((await openEditor(c)).closest('[data-cell]') === cell(c, 0, 0), 'a double click opens the editor');
    press(await openEditor(c), 'Escape');
    await until(() => !editor(c), 'Esc closes the editor');
    check(cell(c, 0, 0).getAttribute('data-selection') === 'active', 'the cell stays the active one');
    // Shift+click: a range, no editor; a paste goes into the range.
    await userEvent.click(cell(c, 1, 1));
    await shiftClick(cell(c, 3, 1));
    await idle();
    check(!editor(c), 'Shift+click selects without an editor');
    paste(c.querySelector('[role=grid]') as HTMLElement, 'B2');
    await until(() => [1, 2, 3].every(row => text(c, row, 1) === 'B2'), 'Ctrl+V pastes into the selected range');
    await userEvent.keyboard('{Delete}');
    await until(() => [1, 2, 3].every(row => text(c, row, 1) === ''), 'Delete clears the range');
    // A drag selects, and opens nothing.
    pointer('pointerdown', cell(c, 4, 2));
    pointer('pointerover', cell(c, 6, 3));
    pointer('pointerup', cell(c, 6, 3));
    await idle();
    check(!editor(c), 'a drag selects without an editor');
    // The dot fills, and pressing it is no click on the cell.
    await userEvent.click(cell(c, 0, 4));
    await until(() => cell(c, 0, 4).querySelector('[data-fill-handle]'), 'the active cell has the dot');
    const dot = cell(c, 0, 4).querySelector('[data-fill-handle]') as HTMLElement;
    pointer('pointerdown', dot, centre(dot));
    pointer('pointermove', window, centre(cell(c, 3, 4)));
    pointer('pointerup', window, centre(cell(c, 3, 4)));
    await until(() => [1, 2, 3].every(row => text(c, row, 4) === text(c, 0, 4)), 'dragging the dot fills the rows');
    await idle();
    check(!editor(c), 'the dot is no edit');
    // Pressing the dot and letting go on it is a click on the dot, not on the cell.
    const again = cell(c, 3, 4).querySelector('[data-fill-handle]') as HTMLElement;
    again.dispatchEvent(new MouseEvent('click', {
      bubbles: true,
      button: 0
    }));
    await idle();
    check(!editor(c), 'a click on the dot opens no editor');
  }
}`,...(K=(q=k.parameters)==null?void 0:q.docs)==null?void 0:K.source},description:{story:"A click edits, and still a range selects, a paste writes it and a dot fills.",...(V=(z=k.parameters)==null?void 0:z.docs)==null?void 0:V.description}}};const Ne=["ClickOpensTheEditor","HoverShowsAField","LikeTheResourcePlan"];export{u as ClickOpensTheEditor,m as HoverShowsAField,k as LikeTheResourcePlan,Ne as __namedExportsOrder,Ae as default};
