import{j as s,Y as x,aZ as M,a0 as T,a_ as I,a6 as w,Z as F,c as H,O as j,u as l,J as u,H as p,N as g,G as h,P as m,l as d,w as B,f as N,r as P,A as _,S,M as A}from"./products-CTiDOXRn.js";const R=`import {
	TableCore,
	cellEditingFeature,
	createColumnHelper,
	metaHelper,
	tableFeatures,
	type CellEditingColumnMeta,
	type CellEditingTableMeta,
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
	(['name', 'team', 'level'] as const).map((key) =>
		helper.accessor(key, {
			header: key,
			meta: { editable: true, typeToEdit: true },
			cell: (info) => <Editor {...info} />,
		})
	)
)

type Props = {
	rows: Person[]
	onEdit: (rowId: string, columnId: string, value: unknown) => void
}

export const IssuesTable = ({ rows, onEdit }: Props) => (
	<TableCore
		features={features}
		data={rows}
		columns={columns}
		getRowId={(person) => person.id}
		meta={{ onEdit }}
		// 1. The screen says what is wrong with a cell: an error (red) or a warning (yellow).
		resolvers={{
			getCellIssue: ({ column, row }) => {
				const person = row.original as Person
				if (column.id === 'name' && !person.name.trim())
					return { error: 'Name is required' }
				if (column.id === 'level' && person.level < 'B1')
					return { warning: \`\${person.level} is below B1\` }

				return {}
			},
		}}
	/>
)
`,q=T({cellEditingFeature:I,tableMeta:w(),columnMeta:w()}),v=F(),O=v.columns(["name","team","level"].map(a=>v.accessor(a,{header:a,meta:{editable:!0,typeToEdit:!0},cell:e=>s.jsx(M,{...e})}))),L=({rows:a,onEdit:e})=>s.jsx(x,{features:q,data:a,columns:O,getRowId:n=>n.id,meta:{onEdit:e},resolvers:{getCellIssue:({column:n,row:t})=>{const r=t.original;return n.id==="name"&&!r.name.trim()?{error:"Name is required"}:n.id==="level"&&r.level<"B1"?{warning:`${r.level} is below B1`}:{}}}}),Z=()=>{const[a,e]=P.useState(()=>_(8));return s.jsx(S,{hint:s.jsx(A,{text:"Clear a **Name** and press Enter: it gets a red ⚠ and a frame. Type **A3** in **Level**: a yellow ⚠ (a warning, the value is allowed). Hover the ⚠ to read the message."}),children:s.jsx(L,{rows:a,onEdit:(n,t,r)=>e(C=>C.map(c=>c.id===n?{...c,[t]:r}:c))})})},[$]=Object.values([R]),J={title:"Tables/Table Core/Features/Editing/Errors and warnings",id:"tables-table-core-features-editing-errors-and-warnings",...N($)},i=(a,e,n)=>u(a,e,n).querySelector("[data-cell-mark]"),o={tags:["kb:editing-issues"],name:"An error and a warning",parameters:{summary:"`resolvers.getCellIssue` answers `{ error?, warning? }` for a cell: the table draws the ⚠, the frame and the message."},render:()=>s.jsx(Z,{}),play:async a=>{if(H(a))return;const e=a.canvasElement;await j(e),await l.dblClick(u(e,1,0));const n=await p(e);await g(n,""),h(n,"Enter"),await m(()=>{var r;return d(((r=i(e,1,0))==null?void 0:r.dataset.cellMark)==="error","an empty Name is an error")}),await l.hover(i(e,1,0)),await m(()=>d(B(document.body).getByRole("tooltip").textContent==="Name is required","hovering the mark shows the message")),await l.unhover(i(e,1,0)),await l.dblClick(u(e,2,2));const t=await p(e);await g(t,"A3"),h(t,"Enter"),await m(()=>{var r;return d(((r=i(e,2,2))==null?void 0:r.dataset.cellMark)==="warning","a level below B1 is a warning")})}};var E,f,b,y,k;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['kb:editing-issues'],
  name: 'An error and a warning',
  parameters: {
    summary: '\`resolvers.getCellIssue\` answers \`{ error?, warning? }\` for a cell: the table draws the ⚠, the frame and the message.'
  },
  render: () => <Scene />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    await grid(c);
    await userEvent.dblClick(cell(c, 1, 0));
    const field = await openEditor(c);
    await typeInto(field, '');
    press(field, 'Enter');
    await waitFor(() => check(mark(c, 1, 0)?.dataset.cellMark === 'error', 'an empty Name is an error'));
    await userEvent.hover(mark(c, 1, 0) as HTMLElement);
    await waitFor(() => check(within(document.body).getByRole('tooltip').textContent === 'Name is required', 'hovering the mark shows the message'));
    await userEvent.unhover(mark(c, 1, 0) as HTMLElement);
    await userEvent.dblClick(cell(c, 2, 2));
    const level = await openEditor(c);
    await typeInto(level, 'A3');
    press(level, 'Enter');
    await waitFor(() => check(mark(c, 2, 2)?.dataset.cellMark === 'warning', 'a level below B1 is a warning'));
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source},description:{story:"The screen says what is wrong with a cell: a red ⚠ for an error, a yellow one for a warning, the message on hover.",...(k=(y=o.parameters)==null?void 0:y.docs)==null?void 0:k.description}}};const Y=["Issues"];export{o as Issues,Y as __namedExportsOrder,J as default};
