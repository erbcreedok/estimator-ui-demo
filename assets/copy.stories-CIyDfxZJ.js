import{j as a,Y as w,a0 as v,b4 as f,b5 as S,a6 as g,Z as k,c as E,h as i,u as j,aC as L,l as T,f as F,r as d,A as M,S as $,M as _}from"./products-CTiDOXRn.js";import{c as r}from"./checks-ZKrw2ksD.js";const H=`import {
	TableCore,
	cellSelectionFeature,
	cellKeyboardFeature,
	createColumnHelper,
	metaHelper,
	tableFeatures,
	type CellSelectionColumnMeta,
} from '@pnl-simulation/table-core'

import type { Person } from '../../data/people'

// Ctrl/⌘+C copies the selected cells: the grid feature does it. \`columnMeta\`
// only tells TypeScript that a column's \`meta\` may have \`copy\`.
const features = tableFeatures({
	cellSelectionFeature,
	cellKeyboardFeature,
	columnMeta: metaHelper<CellSelectionColumnMeta>(),
})

const helper = createColumnHelper<typeof features, Person>()
const columns = helper.columns([
	helper.accessor('name', { header: 'Name' }),
	helper.accessor('team', { header: 'Team' }),
	helper.accessor('role', { header: 'Role' }),
	helper.accessor('level', {
		header: 'Level (copies as "Level B2")',
		// What this column puts on the clipboard instead of the value.
		meta: { copy: (cell) => \`Level \${String(cell.getValue())}\` },
	}),
	helper.accessor('country', { header: 'Country' }),
])

export const CopyTable = ({ rows }: { rows: Person[] }) => (
	<TableCore
		features={features}
		data={rows}
		columns={columns}
		getRowId={(person) => person.id}
	/>
)
`,R=v({cellSelectionFeature:S,cellKeyboardFeature:f,columnMeta:g()}),n=k(),B=n.columns([n.accessor("name",{header:"Name"}),n.accessor("team",{header:"Team"}),n.accessor("role",{header:"Role"}),n.accessor("level",{header:'Level (copies as "Level B2")',meta:{copy:t=>`Level ${String(t.getValue())}`}}),n.accessor("country",{header:"Country"})]),D=({rows:t})=>a.jsx(w,{features:R,data:t,columns:B,getRowId:e=>e.id}),K=()=>{const t=d.useMemo(()=>M(10),[]),[e,o]=d.useState("");return a.jsx($,{hint:a.jsx(_,{text:"Select a few cells (click, then Shift+click) and press Ctrl/⌘+C: the text that went to the clipboard is under the table. The Level column copies as **Level B2**, not B2: that is its `meta.copy`."}),children:a.jsxs("div",{onCopy:l=>o(l.clipboardData.getData("text/plain")),children:[a.jsx(D,{rows:t}),a.jsxs("div",{style:{fontSize:13,padding:"8px 0"},children:[a.jsx("b",{children:"Copied"}),a.jsx("pre",{"data-copied":!0,style:{margin:0},children:e})]})]})})},[O]=Object.values([H]),I={title:"Tables/Table Core/Features/Keyboard & Selection/Copy",id:"tables-table-core-features-keyboard-selection-copy",...F(O)},u=t=>t.dispatchEvent(new ClipboardEvent("copy",{bubbles:!0,cancelable:!0,clipboardData:new DataTransfer})),p=t=>{var e;return((e=t.querySelector("[data-copied]"))==null?void 0:e.textContent)??""},s={tags:["kb:keyboard-copy"],name:"1 · Copy",parameters:{summary:"Ctrl/⌘+C puts the active cell or the range on the clipboard as tab-separated text: the value of each cell, or what its column’s `meta.copy` says."},render:()=>a.jsx(K,{}),play:async t=>{if(E(t))return;const e=t.canvasElement;await i(()=>e.querySelector('[role="grid"] [data-cell]'),"drawn");const o=(c,x)=>r(e,c,x).textContent;await j.click(r(e,0,0)),u(r(e,0,0)),await i(()=>p(e)===o(0,0),"one cell copies as its text"),await L(r(e,1,3)),u(r(e,1,3));const l=c=>[o(c,0),o(c,1),o(c,2),`Level ${o(c,3)}`].join("	");await i(()=>p(e)===`${l(0)}
${l(1)}`,"the range copies as tab-separated rows"),T(p(e).includes("Level "),"meta.copy is what the clipboard has")}};var m,h,y,b,C;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['kb:keyboard-copy'],
  name: '1 · Copy',
  parameters: {
    summary: 'Ctrl/⌘+C puts the active cell or the range on the clipboard as tab-separated text: the value of each cell, or what its column’s \`meta.copy\` says.'
  },
  render: () => <Scene />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    await until(() => c.querySelector('[role="grid"] [data-cell]'), 'drawn');
    const text = (row: number, col: number) => cellEl(c, row, col).textContent;
    await userEvent.click(cellEl(c, 0, 0));
    copy(cellEl(c, 0, 0));
    await until(() => copied(c) === text(0, 0), 'one cell copies as its text');
    await shiftClick(cellEl(c, 1, 3));
    copy(cellEl(c, 1, 3));
    const row = (r: number) => [text(r, 0), text(r, 1), text(r, 2), \`Level \${text(r, 3)}\`].join('\\t');
    await until(() => copied(c) === \`\${row(0)}\\n\${row(1)}\`, 'the range copies as tab-separated rows');
    check(copied(c).includes('Level '), 'meta.copy is what the clipboard has');
  }
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source},description:{story:"Ctrl/⌘+C: the cell or the range as tab-separated text, a column's meta.copy where it has one.",...(C=(b=s.parameters)==null?void 0:b.docs)==null?void 0:C.description}}};const N=["CopySelection"];export{s as CopySelection,N as __namedExportsOrder,I as default};
