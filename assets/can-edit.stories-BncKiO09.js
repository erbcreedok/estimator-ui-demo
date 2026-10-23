import{j as a,Y as v,aZ as x,bp as T,a0 as P,a_ as R,a6 as u,Z as j,c as M,O as y,u as l,J as t,l as o,I as h,G as I,H as F,y as H,b as _,s as S,f as A,r as N,A as W,S as Z,M as $}from"./products-CTiDOXRn.js";const q=`import {
	TableCore,
	broadCellOf,
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
const columns = helper.columns(
	(['name', 'team', 'role'] as const).map((key) =>
		helper.accessor(key, {
			header: key,
			// 1. Only a column with \`meta.editable\` can be edited (Name cannot).
			meta: { editable: key !== 'name', typeToEdit: true },
			// 2. A cell that cannot be edited knows why: here it is the hover text.
			cell: (info) => (
				<span title={broadCellOf(info.cell).getCannotEditReason() ?? undefined}>
					<Editor {...info} />
				</span>
			),
		})
	)
)

type Props = Partial<TableCoreProps<typeof features, Person>> & {
	rows: Person[]
	onEdit: (rowId: string, columnId: string, value: unknown) => void
	/** A row the screen locks. */
	lockedId: string
}

export const CanEditTable = ({
	rows,
	onEdit,
	lockedId,
	readOnly = false,
	...rest
}: Props) => (
	<TableCore
		features={features}
		data={rows}
		columns={columns}
		getRowId={(person) => person.id}
		meta={{ onEdit }}
		// 3. The screen takes an edit away from a cell and says why.
		resolvers={{
			getCanEdit: ({ row }) =>
				row.id === lockedId ? 'Row locked by Payroll' : true,
		}}
		// 4. \`readOnly\` switches every edit off.
		readOnly={readOnly}
		{...rest}
	/>
)
`,D=P({cellEditingFeature:R,tableMeta:u(),columnMeta:u()}),w=j(),G=w.columns(["name","team","role"].map(n=>w.accessor(n,{header:n,meta:{editable:n!=="name",typeToEdit:!0},cell:e=>a.jsx("span",{title:T(e.cell).getCannotEditReason()??void 0,children:a.jsx(x,{...e})})}))),J=({rows:n,onEdit:e,lockedId:c,readOnly:i=!1,...d})=>a.jsx(v,{features:D,data:n,columns:G,getRowId:s=>s.id,meta:{onEdit:e},resolvers:{getCanEdit:({row:s})=>s.id===c?"Row locked by Payroll":!0},readOnly:i,...d}),Y=({readOnly:n})=>{const[e,c]=N.useState(()=>W(8));return a.jsx(Z,{hint:a.jsx($,{text:"Double-click **Team** or **Role**: the editor opens. **Name** is not `meta.editable`, and the third row is locked by the screen: they open nothing, and hovering such a cell tells why. Turn **readOnly** on in the controls and nothing opens."}),children:a.jsx(J,{rows:e,lockedId:e[2].id,readOnly:n,onEdit:(i,d,s)=>c(O=>O.map(m=>m.id===i?{...m,[d]:s}:m))})})},[C]=Object.values([q]),B={title:"Tables/Table Core/Features/Editing/Which cells can be edited",id:"tables-table-core-features-editing-which-cells-can-be-edited",...A(C)},p=n=>{var e;return(e=n.querySelector("[title]"))==null?void 0:e.title},r={tags:["kb:editing-which-cells"],name:"Which cells can be edited",parameters:{...S(C,"CanEdit"),summary:"`meta.editable` makes a column editable, `resolvers.getCanEdit` lets the screen take an edit away and say why, `readOnly` switches editing off."},args:{readOnly:!1},argTypes:{readOnly:{control:{type:"boolean"}}},render:n=>a.jsx(_,{args:n,children:a.jsx(Y,{...n})}),play:async n=>{if(M(n))return;const e=n.canvasElement;await y(e),await l.click(t(e,0,0)),o(!h(e),"Name has no meta.editable: no editor"),o(!!p(t(e,0,0)),"the Name cell knows why"),await l.click(t(e,2,1)),o(!h(e),"the locked row opens no editor"),o(p(t(e,2,1))==="Row locked by Payroll",`the screen's reason is the cell's, ${p(t(e,2,1))}`),await l.dblClick(t(e,0,1)),I(await F(e),"Escape"),await H(n,{readOnly:!0}),await y(e),await l.click(t(e,1,1)),o(!h(e),"readOnly: no editor")}};var b,k,g,E,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['kb:editing-which-cells'],
  name: 'Which cells can be edited',
  parameters: {
    ...sceneCodeWith(source, 'CanEdit'),
    summary: '\`meta.editable\` makes a column editable, \`resolvers.getCanEdit\` lets the screen take an edit away and say why, \`readOnly\` switches editing off.'
  },
  args: {
    readOnly: false
  },
  argTypes: {
    readOnly: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    await grid(c);
    await userEvent.click(cell(c, 0, 0));
    check(!editor(c), 'Name has no meta.editable: no editor');
    check(!!reason(cell(c, 0, 0)), 'the Name cell knows why');
    await userEvent.click(cell(c, 2, 1));
    check(!editor(c), 'the locked row opens no editor');
    check(reason(cell(c, 2, 1)) === 'Row locked by Payroll', \`the screen's reason is the cell's, \${reason(cell(c, 2, 1))}\`);
    await userEvent.dblClick(cell(c, 0, 1));
    press(await openEditor(c), 'Escape');
    await setArgs(ctx, {
      readOnly: true
    });
    await grid(c);
    await userEvent.click(cell(c, 1, 1));
    check(!editor(c), 'readOnly: no editor');
  }
}`,...(g=(k=r.parameters)==null?void 0:k.docs)==null?void 0:g.source},description:{story:"A column without `meta.editable`, a row the screen locked and `readOnly` open no editor, and say why.",...(f=(E=r.parameters)==null?void 0:E.docs)==null?void 0:f.description}}};const K=["CanEdit"];export{r as CanEdit,K as __namedExportsOrder,B as default};
