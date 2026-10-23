import{j as n,Y as d,b8 as m,a0 as y,Z as p,bE as x,b4 as g,b5 as k,c as f,h as r,y as w,M as C,s as S,f as P}from"./products-CTiDOXRn.js";import{s as T}from"./checks-ZKrw2ksD.js";import{P as F}from"./scene-CixxnLkk.js";const v=`import {
	TableCore,
	cellSelectionFeature,
	cellKeyboardFeature,
	createColumnHelper,
	createUtilityColumn,
	rowSelectionFeature,
	tableFeatures,
} from '@pnl-simulation/table-core'

import type { Person } from '../../data/people'

const features = tableFeatures({
	cellSelectionFeature,
	cellKeyboardFeature,
	rowSelectionFeature,
})

const helper = createColumnHelper<typeof features, Person>()
const dataColumns = [
	helper.accessor('name', { header: 'Name' }),
	helper.accessor('team', { header: 'Team' }),
	helper.accessor('role', { header: 'Role' }),
	helper.accessor('level', { header: 'Level' }),
	helper.accessor('country', { header: 'Country' }),
]
const columnsWithCheckboxes = helper.columns([
	createUtilityColumn(helper),
	...dataColumns,
])
const columns = helper.columns(dataColumns)

export const PlaygroundTable = ({
	rows,
	enableCellSelection = true,
	checkboxes = true,
}: {
	rows: Person[]
	/** v9's switch: off, a click and the keys select nothing. */
	enableCellSelection?: boolean
	/** The utility column: a checkbox for each row. */
	checkboxes?: boolean
}) => (
	<TableCore
		features={features}
		data={rows}
		columns={checkboxes ? columnsWithCheckboxes : columns}
		getRowId={(person) => person.id}
		enableCellSelection={enableCellSelection}
	/>
)
`,j=y({cellSelectionFeature:k,cellKeyboardFeature:g,rowSelectionFeature:x}),o=p(),u=[o.accessor("name",{header:"Name"}),o.accessor("team",{header:"Team"}),o.accessor("role",{header:"Role"}),o.accessor("level",{header:"Level"}),o.accessor("country",{header:"Country"})],E=o.columns([m(o),...u]),_=o.columns(u),R=({rows:e,enableCellSelection:a=!0,checkboxes:h=!0})=>n.jsx(d,{features:j,data:e,columns:h?E:_,getRowId:b=>b.id,enableCellSelection:a}),[i]=Object.values([v]),K={title:"Tables/Table Core/Features/Keyboard & Selection/Playground",id:"tables-table-core-features-keyboard-selection-playground",...P(i)},t={tags:["kb:keyboard-playground"],name:"Playground",parameters:{...S(i,"Playground")},args:{enableCellSelection:!0,checkboxes:!0},argTypes:{enableCellSelection:{control:{type:"boolean"}},checkboxes:{control:{type:"boolean"}}},render:e=>n.jsx(F,{hint:n.jsx(C,{text:"Everything together: click, arrows, Tab, Shift for a range; the controls below switch the cell selection and the checkbox column."}),children:a=>n.jsx(R,{rows:a,...e})}),play:async e=>{if(f(e))return;const a=e.canvasElement;await r(()=>a.querySelector("[role=checkbox]"),"the checkbox column"),await T(e),await w(e,{checkboxes:!1}),await r(()=>!a.querySelector('[data-header-id="row-utility"]'),"checkboxes off: no checkbox column")}};var c,l,s;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  tags: ['kb:keyboard-playground'],
  name: 'Playground',
  parameters: {
    ...sceneCodeWith(source, 'Playground')
  },
  args: {
    enableCellSelection: true,
    checkboxes: true
  },
  argTypes: {
    enableCellSelection: {
      control: {
        type: 'boolean'
      }
    },
    checkboxes: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: args => <PeopleScene hint={<Md text="Everything together: click, arrows, Tab, Shift for a range; the controls below switch the cell selection and the checkbox column." />}>
            {rows => <PlaygroundTable rows={rows} {...args} />}
        </PeopleScene>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    await until(() => c.querySelector('[role=checkbox]'), 'the checkbox column');
    await selectionSwitchAct(ctx);
    await setArgs(ctx, {
      checkboxes: false
    });
    await until(() => !c.querySelector('[data-header-id="row-utility"]'), 'checkboxes off: no checkbox column');
  }
}`,...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const M=["Playground"];export{t as Playground,M as __namedExportsOrder,K as default};
