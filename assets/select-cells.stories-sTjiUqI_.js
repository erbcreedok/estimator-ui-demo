import{j as a,Y as v,F as S,aZ as m,a0 as x,a_ as F,b4 as O,b5 as A,a6 as p,Z as j,c as M,h as b,u as s,J as E,l as h,br as l,I as R,G as P,H as _,b as H,s as I,f as $,r as D,A as K,S as N,p as W,M as q}from"./products-CTiDOXRn.js";import{e as G,c as Z,S as J,a as V}from"./controls-BCXw8klf.js";const Y=`import {
	TableCore,
	editOn,
	cellEditingFeature,
	cellSelectionFeature,
	cellKeyboardFeature,
	createColumnHelper,
	metaHelper,
	tableFeatures,
	type CellEditingColumnMeta,
	type CellEditingTableMeta,
	type TableCoreProps,
} from '@pnl-simulation/table-core'

import type { Person } from '../../data/people'

import { Editor } from './editor'

// A table that edits and whose cells can be selected: a click selects a cell,
// the arrows move from it. Editing is still a double click.
const features = tableFeatures({
	cellSelectionFeature,
	cellKeyboardFeature,
	cellEditingFeature,
	tableMeta: metaHelper<CellEditingTableMeta>(),
	columnMeta: metaHelper<CellEditingColumnMeta>(),
})

const helper = createColumnHelper<typeof features, Person>()
const columns = helper.columns([
	helper.accessor('name', { header: 'Name' }),
	helper.accessor('team', {
		header: 'Team',
		meta: { editable: true, typeToEdit: true },
		cell: (info) => <Editor {...info} />,
	}),
	helper.accessor('role', {
		header: 'Role',
		meta: { editable: true, typeToEdit: true },
		cell: (info) => <Editor {...info} />,
	}),
])

type Props = Partial<TableCoreProps<typeof features, Person>> & {
	rows: Person[]
	onEdit: (rowId: string, columnId: string, value: unknown) => void
}

export const SelectCellsTable = ({
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
`,z=x({cellSelectionFeature:A,cellKeyboardFeature:O,cellEditingFeature:F,tableMeta:p(),columnMeta:p()}),r=j(),B=r.columns([r.accessor("name",{header:"Name"}),r.accessor("team",{header:"Team",meta:{editable:!0,typeToEdit:!0},cell:e=>a.jsx(m,{...e})}),r.accessor("role",{header:"Role",meta:{editable:!0,typeToEdit:!0},cell:e=>a.jsx(m,{...e})})]),L=({rows:e,onEdit:t,startEditing:o=S.doubleClick,readOnly:c=!1,...i})=>a.jsx(v,{startEditing:o,readOnly:c,features:z,data:e,columns:B,getRowId:d=>d.id,meta:{onEdit:t},...i}),Q=e=>{const[t,o]=D.useState(()=>K(8));return a.jsx(N,{hint:a.jsx(q,{text:"Click a cell: it is the active one. The **arrows** move it. A **double click** still edits Team and Role; **Enter** opens nothing yet (the next step adds it)."}),children:a.jsx(L,{readOnly:e.readOnly,startEditing:W(J,e.startEditing),rows:t,onEdit:(c,i,d)=>o(T=>T.map(u=>u.id===c?{...u,[i]:d}:u))})})},[C]=Object.values([Y]),ee={title:"Tables/Table Core/Features/Editing/Select cells",id:"tables-table-core-features-editing-select-cells",...$(C)},n={tags:["kb:editing-select-cells"],name:"1 · Select cells",parameters:{...I(C,"SelectCells",V),summary:"A table that edits and has the two selection features: a click selects, the arrows move, a double click edits, Enter opens nothing."},args:{startEditing:"doubleClick",readOnly:!1},argTypes:G,render:e=>a.jsx(H,{args:e,children:a.jsx(Q,{...e})}),play:async e=>{if(M(e))return;const t=e.canvasElement;await b(()=>t.querySelector('[role="grid"] [data-cell]'),"drawn"),await s.click(E(t,0,1)),h(l(t)==="0:1",`a click selects, ${l(t)}`),await s.keyboard("{ArrowDown}"),await b(()=>l(t)==="1:1",`an arrow moves, ${l(t)}`),await s.keyboard("{Enter}"),h(!R(t),"Enter does not open the editor"),await s.dblClick(E(t,1,1)),P(await _(t),"Escape"),await Z(e,"doubleClick")}};var g,w,y,k,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['kb:editing-select-cells'],
  name: '1 · Select cells',
  parameters: {
    ...sceneCodeWith(source, 'SelectCells', editingCodes),
    summary: 'A table that edits and has the two selection features: a click selects, the arrows move, a double click edits, Enter opens nothing.'
  },
  args: {
    startEditing: 'doubleClick',
    readOnly: false
  },
  argTypes: editingArgTypes,
  render: args => <Remount args={args}>
            <Scene {...args} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    await until(() => c.querySelector('[role="grid"] [data-cell]'), 'drawn');
    await userEvent.click(cell(c, 0, 1));
    check(active(c) === '0:1', \`a click selects, \${active(c)}\`);
    await userEvent.keyboard('{ArrowDown}');
    await until(() => active(c) === '1:1', \`an arrow moves, \${active(c)}\`);
    await userEvent.keyboard('{Enter}');
    check(!editor(c), 'Enter does not open the editor');
    await userEvent.dblClick(cell(c, 1, 1));
    press(await openEditor(c), 'Escape');
    await controlsAct(ctx, 'doubleClick');
  }
}`,...(y=(w=n.parameters)==null?void 0:w.docs)==null?void 0:y.source},description:{story:"With the selection a click makes a cell active and the arrows move; a double click still edits, Enter does not.",...(f=(k=n.parameters)==null?void 0:k.docs)==null?void 0:f.description}}};const te=["SelectCells"];export{n as SelectCells,te as __namedExportsOrder,ee as default};
