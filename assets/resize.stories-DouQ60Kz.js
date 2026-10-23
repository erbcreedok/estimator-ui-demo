import{S as i,_ as c}from"./scene-9u2Hg12_.js";import{c as h,j as s,M as n,f as d}from"./products-CTiDOXRn.js";import{r as l}from"./checks-BFc4Mdy7.js";const[m]=Object.values([c]),g={title:"Tables/Table Core/Features/Column sizing/Resize",id:"tables-table-core-features-column-sizing-places",...d(m)},e={tags:["kb:reorder-resize"],name:"4 · Drag the edge",parameters:{summary:"A drag on a header edge sets the width, the other columns share the rest, a double click gives the width back."},render:()=>s.jsx(i,{hint:s.jsx(n,{text:"Drag the right edge of **Role**: the column takes that width and keeps it, the others share the rest. A double click on the edge gives its size back."})}),play:async t=>{h(t)||await l(t.canvasElement)}};var a,r,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  tags: ['kb:reorder-resize'],
  name: '4 · Drag the edge',
  parameters: {
    summary: 'A drag on a header edge sets the width, the other columns share the rest, a double click gives the width back.'
  },
  render: () => <Scene hint={<Md text="Drag the right edge of **Role**: the column takes that width and keeps it, the others share the rest. A double click on the edge gives its size back." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await resizeAct(ctx.canvasElement);
  }
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const u=["Resize"],k=Object.freeze(Object.defineProperty({__proto__:null,Resize:e,__namedExportsOrder:u,default:g},Symbol.toStringTag,{value:"Module"}));export{k as R};
