import{O as h,S as g,_ as S}from"./scene-9u2Hg12_.js";import{c as p,j as a,M as d,p as z,d as f,s as w,e as x,f as b}from"./products-CTiDOXRn.js";import{o as y,a as C,s as O}from"./checks-BFc4Mdy7.js";import{S as t}from"./sizings-DRFY_sSL.js";const[u]=Object.values([S]),T={title:"Tables/Table Core/Features/Column sizing/Basics",id:"tables-table-core-features-column-sizing-basics",...b(u)},n={tags:["kb:sizing-one-prop"],name:"1 · One prop",parameters:{...w(u,"OneProp",x({columnSizing:t})),summary:"`state.columnSizing` as a constant sets those widths."},args:{columnSizing:"Name 300, Team 90"},argTypes:{columnSizing:f(t)},render:({columnSizing:e})=>a.jsx(g,{columnSizing:z(t,e),hint:a.jsx(d,{text:"The screen passes `state.columnSizing` as a constant, here `{ name: 300, team: 90 }`: those two columns have that width, the others share the rest of the frame. The control picks another one."})}),play:async e=>{p(e)||(await C(e.canvasElement),await O(e))}},s={tags:["kb:sizing-external-control"],name:"2 · The screen owns the widths",parameters:{summary:"The screen passes `state.columnSizing` with `onColumnSizingChange`."},render:()=>a.jsx(h,{}),play:async e=>{p(e)||await y(e.canvasElement)}};var r,o,i;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  tags: ['kb:sizing-one-prop'],
  name: '1 · One prop',
  parameters: {
    ...sceneCodeWith(tableSource, 'OneProp', presetCodes({
      columnSizing: SIZINGS
    })),
    summary: '\`state.columnSizing\` as a constant sets those widths.'
  },
  args: {
    columnSizing: 'Name 300, Team 90'
  },
  argTypes: {
    columnSizing: presetControl(SIZINGS)
  },
  render: ({
    columnSizing
  }) => <Scene columnSizing={presetValue(SIZINGS, columnSizing)} hint={<Md text="The screen passes \`state.columnSizing\` as a constant, here \`{ name: 300, team: 90 }\`: those two columns have that width, the others share the rest of the frame. The control picks another one." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await oneStateAct(ctx.canvasElement);
    await sizingControlAct(ctx);
  }
}`,...(i=(o=n.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var c,m,l;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  tags: ['kb:sizing-external-control'],
  name: '2 · The screen owns the widths',
  parameters: {
    summary: 'The screen passes \`state.columnSizing\` with \`onColumnSizingChange\`.'
  },
  render: () => <OutsideScene />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await outsideAct(ctx.canvasElement);
  }
}`,...(l=(m=s.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const _=["OneProp","ExternalControl"],I=Object.freeze(Object.defineProperty({__proto__:null,ExternalControl:s,OneProp:n,__namedExportsOrder:_,default:T},Symbol.toStringTag,{value:"Module"}));export{I as B};
