import{d as A,e as v,S as c,n as R,g as T,f as E,h as O,i as _,_ as W,R as h}from"./scene-D8X4FZf0.js";import{c as l,j as t,M as i,s as u,d as j,e as B,f as N}from"./products-CTiDOXRn.js";const[n]=Object.values([W]),M={title:"Tables/Table Core/Features/Row selection & bulk actions/In the table",id:"tables-table-core-features-row-selection-bulk-actions-places",...N(n)},p={control:{type:"boolean"}},a={tags:["kb:selection-select-rows"],name:"6 · The utility column",parameters:{...u(n,"SelectRows",B({enableRowSelection:h})),summary:"The row’s number, swapped for its checkbox on hover; select all in the header."},args:{enableRowSelection:"all"},argTypes:{enableRowSelection:{...j(h)}},render:e=>t.jsx(c,{...e,hint:t.jsx(i,{text:"The **utility column** shows the row number; hover, focus or selection swaps it for the checkbox, and the header’s **#** for select all. `createUtilityColumn(helper)` makes it (checkboxes only: `createSelectionColumn`)."})}),play:async e=>{l(e)||(await E(e.canvasElement),await O(e))}},s={tags:["kb:selection-bulk-actions"],name:"7 · Bulk actions",parameters:{...u(n,"BulkActions"),summary:"The bulk bar: the count, the screen’s actions, select all, clear."},args:{bulkBar:!0},argTypes:{bulkBar:p},render:e=>t.jsx(c,{...e,hint:t.jsx(i,{text:"While rows are selected a dark **bulk bar** stands over the bottom of the grid: *N of M selected*, the screen’s actions (`getActions`), select all and ✕."})}),play:async e=>{l(e)||(await A(e.canvasElement),await v(e))}},r={tags:["kb:selection-with-grouping"],name:"8 · Selecting a group",parameters:{...u(n,"WithGrouping"),summary:"A group has a checkbox: it selects its rows."},args:{enableGroupSelect:!0},argTypes:{enableGroupSelect:p},render:e=>t.jsx(c,{...e,initialGrouping:["team"],hint:t.jsx(i,{text:"Grouped by **Team**: each group has a checkbox that selects all its rows; a part of them shows a dash."})}),play:async e=>{l(e)||(await _(e.canvasElement),await T(e))}},o={tags:["kb:selection-no-group-select"],name:"9 · No checkbox on a group",parameters:{...u(n,"NoGroupSelect"),summary:"`enableGroupSelect: false`: only the rows are selected."},args:{enableGroupSelect:!1},argTypes:{enableGroupSelect:p},render:e=>t.jsx(c,{...e,initialGrouping:["team"],hint:t.jsx(i,{text:"`enableGroupSelect={false}`: the groups have no checkbox; their rows stay selectable."})}),play:async e=>{l(e)||(await R(e.canvasElement),await T(e))}};var m,b,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['kb:selection-select-rows'],
  name: '6 · The utility column',
  parameters: {
    ...sceneCodeWith(source, 'SelectRows', presetCodes({
      enableRowSelection: ROW_SELECTION
    })),
    summary: 'The row’s number, swapped for its checkbox on hover; select all in the header.'
  },
  args: {
    enableRowSelection: 'all'
  },
  argTypes: {
    enableRowSelection: {
      ...presetControl(ROW_SELECTION)
    }
  },
  render: args => <Scene {...args} hint={<Md text="The **utility column** shows the row number; hover, focus or selection swaps it for the checkbox, and the header’s **#** for select all. \`createUtilityColumn(helper)\` makes it (checkboxes only: \`createSelectionColumn\`)." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await selectRowsAct(ctx.canvasElement);
    await rowSelectionControlAct(ctx);
  }
}`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var d,w,k;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  tags: ['kb:selection-bulk-actions'],
  name: '7 · Bulk actions',
  parameters: {
    ...sceneCodeWith(source, 'BulkActions'),
    summary: 'The bulk bar: the count, the screen’s actions, select all, clear.'
  },
  args: {
    bulkBar: true
  },
  argTypes: {
    bulkBar: boolean
  },
  render: args => <Scene {...args} hint={<Md text="While rows are selected a dark **bulk bar** stands over the bottom of the grid: *N of M selected*, the screen’s actions (\`getActions\`), select all and ✕." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await bulkAct(ctx.canvasElement);
    await bulkBarControlAct(ctx);
  }
}`,...(k=(w=s.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var S,y,f;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['kb:selection-with-grouping'],
  name: '8 · Selecting a group',
  parameters: {
    ...sceneCodeWith(source, 'WithGrouping'),
    summary: 'A group has a checkbox: it selects its rows.'
  },
  args: {
    enableGroupSelect: true
  },
  argTypes: {
    enableGroupSelect: boolean
  },
  render: args => <Scene {...args} initialGrouping={['team']} hint={<Md text="Grouped by **Team**: each group has a checkbox that selects all its rows; a part of them shows a dash." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await withGroupingAct(ctx.canvasElement);
    await groupSelectControlAct(ctx);
  }
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var x,G,C;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['kb:selection-no-group-select'],
  name: '9 · No checkbox on a group',
  parameters: {
    ...sceneCodeWith(source, 'NoGroupSelect'),
    summary: '\`enableGroupSelect: false\`: only the rows are selected.'
  },
  args: {
    enableGroupSelect: false
  },
  argTypes: {
    enableGroupSelect: boolean
  },
  render: args => <Scene {...args} initialGrouping={['team']} hint={<Md text="\`enableGroupSelect={false}\`: the groups have no checkbox; their rows stay selectable." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await noGroupSelectAct(ctx.canvasElement);
    await groupSelectControlAct(ctx);
  }
}`,...(C=(G=o.parameters)==null?void 0:G.docs)==null?void 0:C.source}}};const I=["SelectRows","BulkActions","WithGrouping","NoGroupSelect"],U=Object.freeze(Object.defineProperty({__proto__:null,BulkActions:s,NoGroupSelect:o,SelectRows:a,WithGrouping:r,__namedExportsOrder:I,default:M},Symbol.toStringTag,{value:"Module"}));export{U as P};
