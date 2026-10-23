import{r as S,b as R,S as o,s as f,w as O,c as x,_ as k,R as i}from"./scene-D8X4FZf0.js";import{c as r,j as a,M as c,s as v,d as C,e as _,f as A}from"./products-CTiDOXRn.js";const[l]=Object.values([k]),E={title:"Tables/Table Core/Features/Row selection & bulk actions/Behaviour",id:"tables-table-core-features-row-selection-bulk-actions-behaviour",...A(l)},T={control:{type:"boolean"}},n={tags:["kb:selection-which-rows"],name:"3 · Which rows can be selected",parameters:{...v(l,"WhichRows",_({enableRowSelection:i})),summary:"`enableRowSelection` as a function of the row."},args:{enableRowSelection:"only not blocked"},argTypes:{enableRowSelection:{...C(i)}},render:e=>a.jsx(o,{...e,hint:a.jsx(c,{text:"`enableRowSelection` says which rows can be selected: the blocked ones cannot, so they have no checkbox; **select all** takes the others."})}),play:async e=>{r(e)||(await O(e.canvasElement),await x(e))}},s={tags:["kb:selection-read-only"],name:"4 · A read-only table",parameters:{...v(l,"ReadOnly"),summary:"A read-only table selects no rows."},args:{readOnly:!0},argTypes:{readOnly:T},render:e=>a.jsx(o,{...e,hint:a.jsx(c,{text:"`readOnly`: no row can be selected, whatever `enableRowSelection` says — the checkboxes are gone and **select all** is off."})}),play:async e=>{r(e)||(await S(e.canvasElement),await R(e))}},t={tags:["kb:selection-survives"],name:"5 · It survives a sort and a regrouping",parameters:{summary:"The selection is by row ids."},render:()=>a.jsx(o,{menus:!0,count:8,hint:a.jsx(c,{text:"Select two rows, then sort by **Name** (header menu) and group by **Team** (toolbar): the same rows stay selected — `rowSelection` is by row ids."})}),play:async e=>{r(e)||await f(e.canvasElement)}};var d,h,w;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  tags: ['kb:selection-which-rows'],
  name: '3 · Which rows can be selected',
  parameters: {
    ...sceneCodeWith(source, 'WhichRows', presetCodes({
      enableRowSelection: ROW_SELECTION
    })),
    summary: '\`enableRowSelection\` as a function of the row.'
  },
  args: {
    enableRowSelection: 'only not blocked'
  },
  argTypes: {
    enableRowSelection: {
      ...presetControl(ROW_SELECTION)
    }
  },
  render: args => <Scene {...args} hint={<Md text="\`enableRowSelection\` says which rows can be selected: the blocked ones cannot, so they have no checkbox; **select all** takes the others." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await whichRowsAct(ctx.canvasElement);
    await whichRowsControlAct(ctx);
  }
}`,...(w=(h=n.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var y,b,m;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['kb:selection-read-only'],
  name: '4 · A read-only table',
  parameters: {
    ...sceneCodeWith(source, 'ReadOnly'),
    summary: 'A read-only table selects no rows.'
  },
  args: {
    readOnly: true
  },
  argTypes: {
    readOnly: boolean
  },
  render: args => <Scene {...args} hint={<Md text="\`readOnly\`: no row can be selected, whatever \`enableRowSelection\` says — the checkboxes are gone and **select all** is off." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await readOnlyAct(ctx.canvasElement);
    await readOnlyControlAct(ctx);
  }
}`,...(m=(b=s.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var u,p,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['kb:selection-survives'],
  name: '5 · It survives a sort and a regrouping',
  parameters: {
    summary: 'The selection is by row ids.'
  },
  render: () => <Scene menus count={8} hint={<Md text="Select two rows, then sort by **Name** (header menu) and group by **Team** (toolbar): the same rows stay selected — \`rowSelection\` is by row ids." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await survivesAct(ctx.canvasElement);
  }
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const W=["WhichRows","ReadOnly","Survives"],I=Object.freeze(Object.defineProperty({__proto__:null,ReadOnly:s,Survives:t,WhichRows:n,__namedExportsOrder:W,default:E},Symbol.toStringTag,{value:"Module"}));export{I as B};
