import{c as i,j as t,M as h,f as m}from"./products-CTiDOXRn.js";import{o as l,a as u}from"./checks-GA0zUtfG.js";import{O as x,S as w,s as y}from"./scene-CZYYx_oH.js";const f={title:"Tables/Table Core/Features/Hierarchy/Data that is already a tree/Basics",id:"tables-table-core-features-tree-rows-basics",...m(y)},a={tags:["kb:tree-one-prop"],name:"23 · One prop",parameters:{summary:"`getSubRows` and `state.expanded`: the children under their parents."},render:()=>t.jsx(w,{hint:t.jsx(h,{text:"`getSubRows` says where a row’s children are; `state.expanded` is `true` here, so every row is open and the children stand under their parent, indented, with a chevron on each parent."})}),play:async e=>{i(e)||await u(e.canvasElement)}},r={tags:["kb:tree-external-control"],name:"24 · The screen owns the open rows",parameters:{summary:"The screen passes `state.expanded` with `onExpandedChange`."},render:()=>t.jsx(x,{}),play:async e=>{i(e)||await l(e.canvasElement)}};var n,s,o;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  tags: ['kb:tree-one-prop'],
  name: '23 · One prop',
  parameters: {
    summary: '\`getSubRows\` and \`state.expanded\`: the children under their parents.'
  },
  render: () => <Scene hint={<Md text="\`getSubRows\` says where a row’s children are; \`state.expanded\` is \`true\` here, so every row is open and the children stand under their parent, indented, with a chevron on each parent." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await oneStateAct(ctx.canvasElement);
  }
}`,...(o=(s=a.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var c,d,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  tags: ['kb:tree-external-control'],
  name: '24 · The screen owns the open rows',
  parameters: {
    summary: 'The screen passes \`state.expanded\` with \`onExpandedChange\`.'
  },
  render: () => <OutsideScene />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await outsideAct(ctx.canvasElement);
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const b=["OneProp","ExternalControl"],E=Object.freeze(Object.defineProperty({__proto__:null,ExternalControl:r,OneProp:a,__namedExportsOrder:b,default:f},Symbol.toStringTag,{value:"Module"}));export{E as T};
