import{j as t,Y as x,a0 as k,b5 as R,Z as B,r as u,A as v,S as j,M as T,c as I,h as d,l as h,u as m,w as p,f as F}from"./products-CTiDOXRn.js";const E=`import type { Ref } from 'react'

import {
	TableCore,
	cellSelectionFeature,
	createColumnHelper,
	tableFeatures,
	type TableCoreHandle,
} from '@pnl-simulation/table-core'

import type { Person } from '../../data/people'

// v9's cell selection alone: it keeps which cells are selected and gives the
// methods to read and set them. It draws nothing and listens to no key.
const features = tableFeatures({ cellSelectionFeature })

const helper = createColumnHelper<typeof features, Person>()
const columns = helper.columns([
	helper.accessor('name', { header: 'Name' }),
	helper.accessor('team', { header: 'Team' }),
	helper.accessor('role', { header: 'Role' }),
	helper.accessor('level', { header: 'Level' }),
	helper.accessor('country', { header: 'Country' }),
])

// The handle gives the screen the table: \`tableRef.current.table\`.
export type SelectCellsHandle = TableCoreHandle<typeof features, Person>

export const SelectCellsTable = ({
	rows,
	tableRef,
}: {
	rows: Person[]
	tableRef: Ref<SelectCellsHandle>
}) => (
	<TableCore
		ref={tableRef}
		features={features}
		data={rows}
		columns={columns}
		getRowId={(person) => person.id}
	/>
)
`,H=k({cellSelectionFeature:R}),c=B(),_=c.columns([c.accessor("name",{header:"Name"}),c.accessor("team",{header:"Team"}),c.accessor("role",{header:"Role"}),c.accessor("level",{header:"Level"}),c.accessor("country",{header:"Country"})]),q=({rows:n,tableRef:e})=>t.jsx(x,{ref:e,features:H,data:n,columns:_,getRowId:a=>a.id}),f={rowId:"p2",columnId:"team"},$={rowId:"p3",columnId:"role"},O=n=>JSON.stringify((n==null?void 0:n.atoms.cellSelection.get())??[]),P=n=>{const e=n==null?void 0:n.getFocusedCell();return e?`${e.row.id} / ${e.column.id}`:"null"},M=()=>{var w,y;const n=u.useMemo(()=>v(12),[]),e=u.useRef(null),[,a]=u.useState(0),s=l=>{e.current&&(l(e.current.table),setTimeout(()=>a(r=>r+1),0))},o=(l,r)=>s(g=>g.selectCellRange({anchorRowId:l.rowId,anchorColumnId:l.columnId,focusRowId:r.rowId,focusColumnId:r.columnId}));return t.jsxs(j,{hint:t.jsx(T,{text:"B is the second column (Team), 2 the second row. The buttons call the table’s methods and the screen reads the answer: `state.cellSelection` and `getFocusedCell()`. Nothing is drawn and a click or a key does nothing: that is what this feature is."}),children:[t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8,alignItems:"center",paddingBottom:8},children:[t.jsx("button",{type:"button",onClick:()=>o(f,f),children:"Select B2"}),t.jsx("button",{type:"button",onClick:()=>o(f,$),children:"Select B2:C3"}),t.jsx("button",{type:"button",onClick:()=>s(l=>l.setCellSelection([])),children:"Clear"})]}),t.jsxs("div",{style:{fontSize:13,paddingBottom:8},children:[t.jsxs("div",{children:[t.jsx("b",{children:"state.cellSelection"})," ",t.jsx("code",{"data-selection-state":!0,children:O((w=e.current)==null?void 0:w.table)})]}),t.jsxs("div",{children:[t.jsx("b",{children:"getFocusedCell()"})," ",t.jsx("code",{"data-focused-cell":!0,children:P((y=e.current)==null?void 0:y.table)})]})]}),t.jsx(q,{rows:n,tableRef:e})]})},[N]=Object.values([E]),z={title:"Tables/Table Core/Features/Keyboard & Selection/Select cells",id:"tables-table-core-features-keyboard-selection-select-cells",...F(N)},i={tags:["kb:keyboard-select-cells"],name:"Buttons set the selection and the screen reads it",parameters:{summary:"`cellSelectionFeature` alone keeps `state.cellSelection` and gives `selectCellRange` and `getFocusedCell`; it draws nothing and has no keys."},render:()=>t.jsx(M,{}),play:async n=>{if(I(n))return;const e=n.canvasElement,a=s=>{var o;return(o=e.querySelector(s))==null?void 0:o.textContent};await d(()=>e.querySelector("[data-selection-state]"),"drawn"),h(a("[data-selection-state]")==="[]","nothing is selected at first"),h(a("[data-focused-cell]")==="null","no cell is focused at first"),await m.click(p(e).getByRole("button",{name:"Select B2"})),await d(()=>a("[data-focused-cell]")==="p2 / team",`B2 is the focused cell, ${a("[data-focused-cell]")}`),await m.click(p(e).getByRole("button",{name:"Select B2:C3"})),await d(()=>{var s;return(s=a("[data-selection-state]"))==null?void 0:s.includes('"focusRowId":"p3"')},`the range reaches C3, ${a("[data-selection-state]")}`),h(!e.querySelector("[data-selection]"),"the feature alone draws no mark on any cell"),await m.click(p(e).getByRole("button",{name:"Clear"})),await d(()=>a("[data-selection-state]")==="[]","Clear drops the selection")}};var C,S,b;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['kb:keyboard-select-cells'],
  name: 'Buttons set the selection and the screen reads it',
  parameters: {
    summary: '\`cellSelectionFeature\` alone keeps \`state.cellSelection\` and gives \`selectCellRange\` and \`getFocusedCell\`; it draws nothing and has no keys.'
  },
  render: () => <SelectCellsScene />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    const text = (name: string) => c.querySelector(name)?.textContent;
    await until(() => c.querySelector('[data-selection-state]'), 'drawn');
    check(text('[data-selection-state]') === '[]', 'nothing is selected at first');
    check(text('[data-focused-cell]') === 'null', 'no cell is focused at first');
    await userEvent.click(within(c).getByRole('button', {
      name: 'Select B2'
    }));
    await until(() => text('[data-focused-cell]') === 'p2 / team', \`B2 is the focused cell, \${text('[data-focused-cell]')}\`);
    await userEvent.click(within(c).getByRole('button', {
      name: 'Select B2:C3'
    }));
    await until(() => text('[data-selection-state]')?.includes('"focusRowId":"p3"'), \`the range reaches C3, \${text('[data-selection-state]')}\`);
    check(!c.querySelector('[data-selection]'), 'the feature alone draws no mark on any cell');
    await userEvent.click(within(c).getByRole('button', {
      name: 'Clear'
    }));
    await until(() => text('[data-selection-state]') === '[]', 'Clear drops the selection');
  }
}`,...(b=(S=i.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const A=["ButtonsSetTheSelection"];export{i as ButtonsSetTheSelection,A as __namedExportsOrder,z as default};
