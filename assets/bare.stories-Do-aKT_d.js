import{j as s,Y as p,a0 as y,Z as f,v as g,c as w,h as k,l as o,u as n,E as v,r as S,A as x,S as C,M as T}from"./products-CTiDOXRn.js";const E=`import {
	TableCore,
	createColumnHelper,
	tableFeatures,
} from '@pnl-simulation/table-core'

import type { Person } from '../../data/people'

// No features: a table of rows. Its type has the core only; each thing it can
// do (select cells, edit, sort …) is a feature you add to this list.
const features = tableFeatures({})

const helper = createColumnHelper<typeof features, Person>()
const columns = helper.columns([
	helper.accessor('name', { header: 'Name' }),
	helper.accessor('team', { header: 'Team' }),
	helper.accessor('role', { header: 'Role' }),
	helper.accessor('level', { header: 'Level' }),
	helper.accessor('country', { header: 'Country' }),
])

export const BareTable = ({ rows }: { rows: Person[] }) => (
	<TableCore
		features={features}
		data={rows}
		columns={columns}
		getRowId={(person) => person.id}
	/>
)
`,q=y({}),a=f(),A=a.columns([a.accessor("name",{header:"Name"}),a.accessor("team",{header:"Team"}),a.accessor("role",{header:"Role"}),a.accessor("level",{header:"Level"}),a.accessor("country",{header:"Country"})]),_=({rows:t})=>s.jsx(p,{features:q,data:t,columns:A,getRowId:e=>e.id}),j=()=>{const t=S.useMemo(()=>x(12),[]);return s.jsx(C,{hint:s.jsx(T,{text:"A table with no features: nothing is selected, nothing opens, nothing sorts. Click a cell, press the arrows, double-click: the table does nothing. Each thing it can do is a feature in the `features` list of its code."}),children:s.jsx(_,{rows:t})})},[i]=Object.values([E]),F={title:"Tables/Table Core/Features/Bare table/Scenes",id:"tables-table-core-features-cell-features",decorators:[g],parameters:{layout:"fullscreen",sceneCode:()=>i,docs:{source:v(()=>i)}}},r={tags:["kb:cell-features-none"],name:"1 · Bare table",parameters:{summary:"`features: tableFeatures({})`: the rows and the header, as a native table — no active cell, no editor, no key does anything."},render:()=>s.jsx(j,{}),play:async t=>{var c;if(w(t))return;const e=t.canvasElement;await k(()=>e.querySelector('[role="table"] [data-cell]'),"the table is drawn");const l=e.querySelector("[data-cell]");o(((c=e.querySelector('[role="table"]'))==null?void 0:c.getAttribute("role"))==="table","the table has the role table"),o(l.getAttribute("role")==="cell","a cell has the role cell"),o(!l.hasAttribute("tabindex"),"a cell is no Tab stop"),await n.click(l),await n.keyboard("{ArrowDown}{ArrowRight}"),await n.dblClick(l),o(!e.querySelector('[data-selection="active"], [data-selection="range"]'),"no cell is active, no range is drawn"),o(!e.querySelector("[data-editing]")&&!e.querySelector("input"),"a double click opens no editor, the cells carry no editing attribute")}};var u,d,h,b,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['kb:cell-features-none'],
  name: '1 · Bare table',
  parameters: {
    summary: '\`features: tableFeatures({})\`: the rows and the header, as a native table — no active cell, no editor, no key does anything.'
  },
  render: () => <Scene />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    await until(() => c.querySelector('[role="table"] [data-cell]'), 'the table is drawn');
    const name = c.querySelector<HTMLElement>('[data-cell]') as HTMLElement;
    check(c.querySelector('[role="table"]')?.getAttribute('role') === 'table', 'the table has the role table');
    check(name.getAttribute('role') === 'cell', 'a cell has the role cell');
    check(!name.hasAttribute('tabindex'), 'a cell is no Tab stop');
    await userEvent.click(name);
    await userEvent.keyboard('{ArrowDown}{ArrowRight}');
    await userEvent.dblClick(name);
    check(!c.querySelector('[data-selection="active"], [data-selection="range"]'), 'no cell is active, no range is drawn');
    check(!c.querySelector('[data-editing]') && !c.querySelector('input'), 'a double click opens no editor, the cells carry no editing attribute');
  }
}`,...(h=(d=r.parameters)==null?void 0:d.docs)==null?void 0:h.source},description:{story:"No features: the roles of a native table, no tab stop in a cell, no keys, no editor.",...(m=(b=r.parameters)==null?void 0:b.docs)==null?void 0:m.description}}};const B=["TableWithoutCellFeatures"],M=Object.freeze(Object.defineProperty({__proto__:null,TableWithoutCellFeatures:r,__namedExportsOrder:B,default:F},Symbol.toStringTag,{value:"Module"}));export{M as B};
