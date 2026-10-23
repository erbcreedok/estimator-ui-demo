import{C as oe,_ as ie}from"./clipboard-table-CX-6fC6A.js";import{j as n,Y as ce,F as le,aZ as de,a0 as pe,Z as ue,b3 as be,a_ as ye,b4 as he,b5 as we,a6 as S,c as v,Q as k,u as a,J as s,N as O,H as r,G as d,bo as p,l as i,h as c,I as T,M as g,bq as me,y as Ee,b as ee,s as te,K as ke,L as ve,f as ge}from"./products-CTiDOXRn.js";import{e as ae,c as fe,a as ne}from"./controls-BCXw8klf.js";import{P as f}from"./people-scene-CnMRUXe9.js";const Te=`import {
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

// 1. Cells can be selected (arrows, click) and edited; this feature joins them
// (Enter and F2 open the editor, Tab and Enter move on).
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

export const KeysTable = ({
	rows,
	onEdit,
	startEditing = editOn.doubleClick,
	readOnly = false,
	...rest
}: Props) => (
	<TableCore
		// A click selects here (to copy, paste or fill): editing needs a double click.
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
`,Ce=pe({cellSelectionFeature:we,cellKeyboardFeature:he,cellEditingFeature:ye,cellKeyboardEditingFeature:be,tableMeta:S(),columnMeta:S()}),x=ue(),xe=x.columns([...["name","team","level","country"].map(t=>x.accessor(t,{header:t,meta:{editable:!0,typeToEdit:!0},cell:e=>n.jsx(de,{...e})})),x.accessor("role",{header:"role (not editable)"})]),C=({rows:t,onEdit:e,startEditing:u=le.doubleClick,readOnly:o=!1,...re})=>n.jsx(ce,{startEditing:u,readOnly:o,features:Ce,data:t,columns:xe,getRowId:se=>se.id,meta:{onEdit:e},...re}),[F]=Object.values([Te]),[Oe]=Object.values([ie]),Ie={title:"Tables/Table Core/Features/Editing/Keys and clicks",id:"tables-table-core-features-editing-places",...ge(F)},b=t=>c(()=>t.querySelector('[role="grid"] [data-cell]'),"the table is drawn"),l=t=>{const e=t.querySelector('[data-selection="active"]');return e?`${e.dataset.rowIndex}:${e.dataset.colIndex}`:"none"},y={tags:["kb:editing-start"],name:"1 · Enter, F2 or double click",parameters:{...te(F,"Start",ne),summary:"Enter and F2 open the editor on the active cell, and so does a double click."},args:{startEditing:"doubleClick",readOnly:!1},argTypes:ae,render:t=>n.jsx(ee,{args:t,children:n.jsx(f,{Table:C,...t,hint:n.jsx(g,{text:"Click a cell and press **Enter** or **F2**, or double-click it: the editor opens. Role is not editable. The controls change what opens it (`startEditing`) and switch `readOnly`."})})}),play:async t=>{var o;if(v(t))return;const e=t.canvasElement;await b(e),await a.click(s(e,0,0));const u=ke(s(e,0,0));await a.keyboard("{Enter}"),ve(s(e,0,0),await r(e),u),d(await r(e),"Escape"),await p(e),await a.keyboard("{F2}"),await r(e),d(await r(e),"Escape"),await p(e),await a.dblClick(s(e,1,1)),i(((o=T(e))==null?void 0:o.closest("[data-cell]"))===s(e,1,1),"a double click opens the editor in its cell"),d(await r(e),"Escape"),await p(e),await fe(t,"doubleClick")}},h={tags:["kb:editing-save"],name:"2 · Enter and Tab save",parameters:{summary:"Enter and Tab save through `meta.onEdit` and end the edit: Enter moves a row down, Tab a cell right."},render:()=>n.jsx(f,{Table:C,hint:n.jsx(g,{text:"Open an editor, type, press **Enter**: it is saved and the cell under it is active. **Tab** saves and goes right."})}),play:async t=>{if(v(t))return;const e=t.canvasElement;await b(e),await a.click(s(e,0,0)),await a.keyboard("{Enter}"),await O(await r(e),"Zed"),d(await r(e),"Enter"),await p(e),await c(()=>k(e,0,0)==="Zed","Enter saved the value"),await c(()=>l(e)==="1:0",`the cell under it is active, ${l(e)}`),await a.keyboard("{Enter}"),await O(await r(e),"QA"),d(await r(e),"Tab"),await p(e),await c(()=>k(e,1,0)==="QA","Tab saved the value"),await c(()=>l(e)==="1:1",`the cell to the right is active, ${l(e)}`)}},w={tags:["kb:editing-cancel"],name:"3 · Esc cancels",parameters:{summary:"Esc ends the edit; the value stays as it was."},render:()=>n.jsx(f,{Table:C,hint:n.jsx(g,{text:"Open an editor, type, press **Esc**: the old value stays."})}),play:async t=>{if(v(t))return;const e=t.canvasElement;await b(e);const u=k(e,0,0);await a.click(s(e,0,0)),await a.keyboard("{Enter}"),await O(await r(e),"Nobody"),d(await r(e),"Escape"),await p(e),i(k(e,0,0)===u,"the value is as it was"),await c(()=>l(e)==="0:0","the cell stays the active one"),await a.keyboard("Z");const o=await r(e);i(o.value==="Z",`a typed key replaces the text: "${o.value}"`),d(o,"Escape"),await p(e),i(k(e,0,0)===u,"Esc gave the value back"),await a.keyboard("{ArrowDown}"),await c(()=>l(e)==="1:0",`the arrows go on: ${l(e)}`),await a.keyboard("{Control>}c{/Control}"),i(!T(e),"a shortcut opens no editor")}},m={tags:["kb:editing-not-editable"],name:"4 · Cells that cannot be edited",parameters:{...me(Oe),summary:"A column that is not `meta.editable` and a row the screen locked (`resolvers.getCanEdit`) open no editor."},render:()=>n.jsx(f,{Table:oe,hint:n.jsx(g,{text:"**Role** is not editable, and the third row is locked by the screen: Enter and a double click open nothing."})}),play:async t=>{if(v(t))return;const e=t.canvasElement;await b(e),await a.click(s(e,0,4)),await a.keyboard("{Enter}"),await a.dblClick(s(e,2,0)),i(!T(e),"no editor in Role, no editor in the locked row")}},E={tags:["kb:editing-read-only"],name:"5 · Read only",parameters:{...te(F,"ReadOnly",ne),summary:"`readOnly`: no cell opens an editor."},args:{startEditing:"doubleClick",readOnly:!0},argTypes:ae,render:t=>n.jsx(ee,{args:t,children:n.jsx(f,{Table:C,...t,hint:n.jsx(g,{text:"`readOnly`: Enter and a double click open nothing; the keys still move the active cell. Turn `readOnly` off in the controls and they open the editor."})})}),play:async t=>{if(v(t))return;const e=t.canvasElement;await b(e),await a.click(s(e,0,0)),await a.keyboard("{Enter}"),await a.dblClick(s(e,1,1)),i(!T(e),"no editor opens"),await Ee(t,{readOnly:!1}),await b(e),await a.dblClick(s(e,1,1)),i(await r(e),"with readOnly off a double click opens it")}};var R,j,I,A,M;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['kb:editing-start'],
  name: '1 · Enter, F2 or double click',
  parameters: {
    ...sceneCodeWith(keysSource, 'Start', editingCodes),
    summary: 'Enter and F2 open the editor on the active cell, and so does a double click.'
  },
  args: {
    startEditing: 'doubleClick',
    readOnly: false
  },
  argTypes: editingArgTypes,
  render: args => <Remount args={args}>
            <PeopleScene Table={KeysTable} {...args} hint={<Md text="Click a cell and press **Enter** or **F2**, or double-click it: the editor opens. Role is not editable. The controls change what opens it (\`startEditing\`) and switch \`readOnly\`." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    await ready(c);
    await userEvent.click(cell(c, 0, 0));
    const before = lookBefore(cell(c, 0, 0));
    await userEvent.keyboard('{Enter}');
    looksLikeCell(cell(c, 0, 0), await openEditor(c), before);
    press(await openEditor(c), 'Escape');
    await closed(c);
    await userEvent.keyboard('{F2}');
    await openEditor(c);
    press(await openEditor(c), 'Escape');
    await closed(c);
    await userEvent.dblClick(cell(c, 1, 1));
    check(editor(c)?.closest<HTMLElement>('[data-cell]') === cell(c, 1, 1), 'a double click opens the editor in its cell');
    press(await openEditor(c), 'Escape');
    await closed(c);
    await controlsAct(ctx, 'doubleClick');
  }
}`,...(I=(j=y.parameters)==null?void 0:j.docs)==null?void 0:I.source},description:{story:"EDIT-01: Enter, F2 and a double-click open the editor in the cell they are on.",...(M=(A=y.parameters)==null?void 0:A.docs)==null?void 0:M.description}}};var P,K,_,$,Z;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['kb:editing-save'],
  name: '2 · Enter and Tab save',
  parameters: {
    summary: 'Enter and Tab save through \`meta.onEdit\` and end the edit: Enter moves a row down, Tab a cell right.'
  },
  render: () => <PeopleScene Table={KeysTable} hint={<Md text="Open an editor, type, press **Enter**: it is saved and the cell under it is active. **Tab** saves and goes right." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    await ready(c);
    await userEvent.click(cell(c, 0, 0));
    await userEvent.keyboard('{Enter}');
    await typeInto(await openEditor(c), 'Zed');
    press(await openEditor(c), 'Enter');
    await closed(c);
    await until(() => text(c, 0, 0) === 'Zed', 'Enter saved the value');
    await until(() => active(c) === '1:0', \`the cell under it is active, \${active(c)}\`);
    await userEvent.keyboard('{Enter}');
    await typeInto(await openEditor(c), 'QA');
    press(await openEditor(c), 'Tab');
    await closed(c);
    await until(() => text(c, 1, 0) === 'QA', 'Tab saved the value');
    await until(() => active(c) === '1:1', \`the cell to the right is active, \${active(c)}\`);
  }
}`,...(_=(K=h.parameters)==null?void 0:K.docs)==null?void 0:_.source},description:{story:"EDIT-02, EDIT-03: Enter saves and the cell under it is next; Tab saves and the cell to the right.",...(Z=($=h.parameters)==null?void 0:$.docs)==null?void 0:Z.description}}};var H,D,N,Q,L;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['kb:editing-cancel'],
  name: '3 · Esc cancels',
  parameters: {
    summary: 'Esc ends the edit; the value stays as it was.'
  },
  render: () => <PeopleScene Table={KeysTable} hint={<Md text="Open an editor, type, press **Esc**: the old value stays." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    await ready(c);
    const before = text(c, 0, 0);
    await userEvent.click(cell(c, 0, 0));
    await userEvent.keyboard('{Enter}');
    await typeInto(await openEditor(c), 'Nobody');
    press(await openEditor(c), 'Escape');
    await closed(c);
    check(text(c, 0, 0) === before, 'the value is as it was');
    await until(() => active(c) === '0:0', 'the cell stays the active one');
    // A key typed on the active cell opens the editor with the key in place of the value; Esc gives the value back and the arrows go on.
    await userEvent.keyboard('Z');
    const typed = await openEditor(c);
    check(typed.value === 'Z', \`a typed key replaces the text: "\${typed.value}"\`);
    press(typed, 'Escape');
    await closed(c);
    check(text(c, 0, 0) === before, 'Esc gave the value back');
    await userEvent.keyboard('{ArrowDown}');
    await until(() => active(c) === '1:0', \`the arrows go on: \${active(c)}\`);
    await userEvent.keyboard('{Control>}c{/Control}');
    check(!editor(c), 'a shortcut opens no editor');
  }
}`,...(N=(D=w.parameters)==null?void 0:D.docs)==null?void 0:N.source},description:{story:"EDIT-04: Esc ends the edit and keeps the old value.",...(L=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:L.description}}};var W,q,B,G,J;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['kb:editing-not-editable'],
  name: '4 · Cells that cannot be edited',
  parameters: {
    ...sceneCodeOf(clipboardSource),
    summary: 'A column that is not \`meta.editable\` and a row the screen locked (\`resolvers.getCanEdit\`) open no editor.'
  },
  render: () => <PeopleScene Table={ClipboardTable} hint={<Md text="**Role** is not editable, and the third row is locked by the screen: Enter and a double click open nothing." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    await ready(c);
    await userEvent.click(cell(c, 0, 4));
    await userEvent.keyboard('{Enter}');
    await userEvent.dblClick(cell(c, 2, 0));
    check(!editor(c), 'no editor in Role, no editor in the locked row');
  }
}`,...(B=(q=m.parameters)==null?void 0:q.docs)==null?void 0:B.source},description:{story:"EDIT-05: a column that is not editable, and a row the screen locked, open nothing.",...(J=(G=m.parameters)==null?void 0:G.docs)==null?void 0:J.description}}};var Y,z,U,V,X;E.parameters={...E.parameters,docs:{...(Y=E.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['kb:editing-read-only'],
  name: '5 · Read only',
  parameters: {
    ...sceneCodeWith(keysSource, 'ReadOnly', editingCodes),
    summary: '\`readOnly\`: no cell opens an editor.'
  },
  args: {
    startEditing: 'doubleClick',
    readOnly: true
  },
  argTypes: editingArgTypes,
  render: args => <Remount args={args}>
            <PeopleScene Table={KeysTable} {...args} hint={<Md text="\`readOnly\`: Enter and a double click open nothing; the keys still move the active cell. Turn \`readOnly\` off in the controls and they open the editor." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    await ready(c);
    await userEvent.click(cell(c, 0, 0));
    await userEvent.keyboard('{Enter}');
    await userEvent.dblClick(cell(c, 1, 1));
    check(!editor(c), 'no editor opens');
    await setArgs(ctx, {
      readOnly: false
    });
    await ready(c);
    await userEvent.dblClick(cell(c, 1, 1));
    check(await openEditor(c), 'with readOnly off a double click opens it');
  }
}`,...(U=(z=E.parameters)==null?void 0:z.docs)==null?void 0:U.source},description:{story:"EDIT-06: readOnly — no cell opens an editor.",...(X=(V=E.parameters)==null?void 0:V.docs)==null?void 0:X.description}}};const Ae=["Start","Save","Cancel","NotEditable","ReadOnly"];export{w as Cancel,m as NotEditable,E as ReadOnly,h as Save,y as Start,Ae as __namedExportsOrder,Ie as default};
