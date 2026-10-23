import{o as u,O as m,a as d,S as h,_ as w}from"./scene-D8X4FZf0.js";import{c as p,j as a,M as S,f}from"./products-CTiDOXRn.js";const[x]=Object.values([w]),b={title:"Tables/Table Core/Features/Row selection & bulk actions/Basics",id:"tables-table-core-features-row-selection-bulk-actions-basics",...f(x)},t={tags:["kb:selection-one-prop"],name:"1 · One prop",parameters:{summary:"`state.rowSelection` as a constant selects those rows."},render:()=>a.jsx(h,{rowSelection:{p1:!0,p3:!0},hint:a.jsx(S,{text:"The screen passes `state.rowSelection` = `{ p1: true, p3: true }` as a constant: those two rows are selected, and **select all** in the header shows a dash."})}),play:async e=>{p(e)||await d(e.canvasElement)}},s={tags:["kb:selection-external-control"],name:"2 · The screen owns the selection",parameters:{summary:"The screen passes `state.rowSelection` with `onRowSelectionChange`."},render:()=>a.jsx(m,{}),play:async e=>{p(e)||await u(e.canvasElement)}};var n,r,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  tags: ['kb:selection-one-prop'],
  name: '1 · One prop',
  parameters: {
    summary: '\`state.rowSelection\` as a constant selects those rows.'
  },
  render: () => <Scene rowSelection={{
    p1: true,
    p3: true
  }} hint={<Md text="The screen passes \`state.rowSelection\` = \`{ p1: true, p3: true }\` as a constant: those two rows are selected, and **select all** in the header shows a dash." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await oneStateAct(ctx.canvasElement);
  }
}`,...(o=(r=t.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var c,l,i;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  tags: ['kb:selection-external-control'],
  name: '2 · The screen owns the selection',
  parameters: {
    summary: 'The screen passes \`state.rowSelection\` with \`onRowSelectionChange\`.'
  },
  render: () => <OutsideScene />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await outsideAct(ctx.canvasElement);
  }
}`,...(i=(l=s.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const y=["OneProp","ExternalControl"],g=Object.freeze(Object.defineProperty({__proto__:null,ExternalControl:s,OneProp:t,__namedExportsOrder:y,default:b},Symbol.toStringTag,{value:"Module"}));export{g as B};
