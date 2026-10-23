import{l as c,S as l,P as h,_ as i}from"./table-D3NdR-uV.js";import{c as u,j as a,M as d,s as m,f as p}from"./products-CTiDOXRn.js";const[s]=Object.values([i]),b={title:"Tables/Table Core/Features/Utility column/As in the product",id:"tables-table-core-features-utility-column-product",...p(s)},e={tags:["kb:utility-column-product"],name:"1 · As in the product",parameters:{...m(s,"AsInTheProduct"),summary:"`createUtilityColumn(helper)` with no options: the column of the legacy table, 40 px: a narrow handle on the left (its 9 px kept where the table drags rows), the number in the middle, which the checkbox takes over with hover, focus or a selection."},render:()=>a.jsx(l,{hint:a.jsx(d,{text:"`createUtilityColumn(helper)` and nothing else: the column of the legacy table. Hover a row: the number gives way to the checkbox, and the handle shows on the left. Take a row by its handle. Every scene after this one is a customization: other parts, another layout."}),table:h}),play:async t=>{u(t)||await c(t.canvasElement)}};var o,r,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  tags: ['kb:utility-column-product'],
  name: '1 · As in the product',
  parameters: {
    ...sceneCodeWith(tableSource, 'AsInTheProduct'),
    summary: '\`createUtilityColumn(helper)\` with no options: the column of the legacy table, 40 px: a narrow handle on the left (its 9 px kept where the table drags rows), the number in the middle, which the checkbox takes over with hover, focus or a selection.'
  },
  render: () => <Scene hint={<Md text="\`createUtilityColumn(helper)\` and nothing else: the column of the legacy table. Hover a row: the number gives way to the checkbox, and the handle shows on the left. Take a row by its handle. Every scene after this one is a customization: other parts, another layout." />} table={ProductTable} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await legacyAct(ctx.canvasElement);
  }
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const y=["AsInTheProduct"],g=Object.freeze(Object.defineProperty({__proto__:null,AsInTheProduct:e,__namedExportsOrder:y,default:b},Symbol.toStringTag,{value:"Module"}));export{g as P};
