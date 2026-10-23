import{j as t,Y as u,a0 as S,Z as b,b4 as f,b5 as y,c as h,bq as C,M as g,f as w}from"./products-CTiDOXRn.js";import{o as T,a as x}from"./checks-ZKrw2ksD.js";import{S as F,P as v,F as k}from"./scene-CixxnLkk.js";const E=`import {
	TableCore,
	cellSelectionFeature,
	cellKeyboardFeature,
	createColumnHelper,
	tableFeatures,
	type CellSelectionState,
} from '@pnl-simulation/table-core'

import type { Person } from '../../data/people'

const features = tableFeatures({
	cellSelectionFeature,
	cellKeyboardFeature,
})

const helper = createColumnHelper<typeof features, Person>()
const columns = helper.columns([
	helper.accessor('name', { header: 'Name' }),
	helper.accessor('team', { header: 'Team' }),
	helper.accessor('role', { header: 'Role' }),
	helper.accessor('level', { header: 'Level' }),
	helper.accessor('country', { header: 'Country' }),
])

// The screen says which cells are selected: ranges of cells by the ids of
// their rows and columns.
export const SelectedRangeTable = ({
	rows,
	cellSelection,
}: {
	rows: Person[]
	cellSelection: CellSelectionState
}) => (
	<TableCore
		features={features}
		data={rows}
		columns={columns}
		getRowId={(person) => person.id}
		state={{ cellSelection }}
	/>
)
`,O=`import {
	TableCore,
	cellSelectionFeature,
	cellKeyboardFeature,
	createColumnHelper,
	tableFeatures,
	type CellSelectionState,
	type OnChangeFn,
} from '@pnl-simulation/table-core'

import type { Person } from '../../data/people'

const features = tableFeatures({
	cellSelectionFeature,
	cellKeyboardFeature,
})

const helper = createColumnHelper<typeof features, Person>()
const columns = helper.columns([
	helper.accessor('name', { header: 'Name' }),
	helper.accessor('team', { header: 'Team' }),
	helper.accessor('role', { header: 'Role' }),
	helper.accessor('level', { header: 'Level' }),
	helper.accessor('country', { header: 'Country' }),
])

// The screen keeps the selection: it gives the ranges to the table and gets
// them back when a click or a key in the table changes them.
export const ScreenSelectionTable = ({
	rows,
	cellSelection,
	onCellSelectionChange,
}: {
	rows: Person[]
	cellSelection: CellSelectionState
	onCellSelectionChange: OnChangeFn<CellSelectionState>
}) => (
	<TableCore
		features={features}
		data={rows}
		columns={columns}
		getRowId={(person) => person.id}
		state={{ cellSelection }}
		onCellSelectionChange={onCellSelectionChange}
	/>
)
`,_=S({cellSelectionFeature:y,cellKeyboardFeature:f}),n=b(),P=n.columns([n.accessor("name",{header:"Name"}),n.accessor("team",{header:"Team"}),n.accessor("role",{header:"Role"}),n.accessor("level",{header:"Level"}),n.accessor("country",{header:"Country"})]),R=({rows:e,cellSelection:d})=>t.jsx(u,{features:_,data:e,columns:P,getRowId:p=>p.id,state:{cellSelection:d}}),[j]=Object.values([E]),[I]=Object.values([O]),L={title:"Tables/Table Core/Features/Keyboard & Selection/Basics",id:"tables-table-core-features-keyboard-selection-basics",...w(j)},a={tags:["kb:keyboard-one-prop"],name:"1 · A range is selected from the start",parameters:{summary:"`state.cellSelection` as a constant is the selected range."},render:()=>t.jsx(v,{hint:t.jsx(g,{text:"The screen passes `state.cellSelection` as a constant: a range from Team of row 2 to Role of row 3. The table draws it, and the corner it starts at is the active cell. The ids of the rows and columns keep it on its data when the rows move."}),children:e=>t.jsx(R,{rows:e,cellSelection:k})}),play:async e=>{h(e)||await x(e.canvasElement)}},r={tags:["kb:keyboard-external-control"],name:"2 · Buttons select cells and read the selection",parameters:{...C(I),summary:"The screen passes `state.cellSelection` with `onCellSelectionChange`."},render:()=>t.jsx(F,{}),play:async e=>{h(e)||await T(e.canvasElement)}};var s,o,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  tags: ['kb:keyboard-one-prop'],
  name: '1 · A range is selected from the start',
  parameters: {
    summary: '\`state.cellSelection\` as a constant is the selected range.'
  },
  render: () => <PeopleScene hint={<Md text="The screen passes \`state.cellSelection\` as a constant: a range from Team of row 2 to Role of row 3. The table draws it, and the corner it starts at is the active cell. The ids of the rows and columns keep it on its data when the rows move." />}>
            {rows => <SelectedRangeTable rows={rows} cellSelection={FIXED_SELECTION} />}
        </PeopleScene>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await oneStateAct(ctx.canvasElement);
  }
}`,...(l=(o=a.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var c,i,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  tags: ['kb:keyboard-external-control'],
  name: '2 · Buttons select cells and read the selection',
  parameters: {
    ...sceneCodeOf(screenSource),
    summary: 'The screen passes \`state.cellSelection\` with \`onCellSelectionChange\`.'
  },
  render: () => <ScreenSelectionScene />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await outsideAct(ctx.canvasElement);
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const N=["OneProp","ExternalControl"];export{r as ExternalControl,a as OneProp,N as __namedExportsOrder,L as default};
