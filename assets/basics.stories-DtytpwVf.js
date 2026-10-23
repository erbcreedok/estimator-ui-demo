import{O as g,S as d,_ as f}from"./scene-DCjKWwYG.js";import{c as u,j as t,b as h,M as P,p as b,d as y,s as x,e as S,f as N}from"./products-CTiDOXRn.js";import{o as O,a as C}from"./checks-NmFlyDuA.js";import{p as w}from"./controls-umORIRv-.js";import{P as a}from"./presets-CL-lb5ZU.js";const[p]=Object.values([f]),_={title:"Tables/Table Core/Features/Freezing/Basics",id:"tables-table-core-features-freezing-basics",...N(p)},n={tags:["kb:freeze-one-prop"],name:"1 · One prop",parameters:{...x(p,"OneProp",S({columnPinning:a})),summary:"`state.columnPinning` as a constant freezes those columns."},args:{columnPinning:"Name"},argTypes:{columnPinning:y(a)},render:e=>t.jsx(h,{args:e,children:t.jsx(d,{columnPinning:b(a,e.columnPinning),hint:t.jsx(P,{text:"The screen passes `state.columnPinning` as a constant — by default `{ start: ['name'], end: [] }`: **Name** sticks at the left while the table scrolls sideways. Pick another in the controls."})})}),play:async e=>{u(e)||(await C(e.canvasElement),await w(e))}},s={tags:["kb:freeze-external-control"],name:"2 · The screen owns the frozen columns",parameters:{summary:"The screen passes `state.columnPinning` with `onColumnPinningChange`."},render:()=>t.jsx(g,{}),play:async e=>{u(e)||await O(e.canvasElement)}};var r,o,c;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  tags: ['kb:freeze-one-prop'],
  name: '1 · One prop',
  parameters: {
    ...sceneCodeWith(tableSource, 'OneProp', presetCodes({
      columnPinning: PINNINGS
    })),
    summary: '\`state.columnPinning\` as a constant freezes those columns.'
  },
  args: {
    columnPinning: 'Name'
  },
  argTypes: {
    columnPinning: presetControl(PINNINGS)
  },
  render: args => <Remount args={args}>
            <Scene columnPinning={presetValue(PINNINGS, args.columnPinning)} hint={<Md text="The screen passes \`state.columnPinning\` as a constant — by default \`{ start: ['name'], end: [] }\`: **Name** sticks at the left while the table scrolls sideways. Pick another in the controls." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await oneStateAct(ctx.canvasElement);
    await pinningControlAct(ctx);
  }
}`,...(c=(o=n.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var i,l,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ['kb:freeze-external-control'],
  name: '2 · The screen owns the frozen columns',
  parameters: {
    summary: 'The screen passes \`state.columnPinning\` with \`onColumnPinningChange\`.'
  },
  render: () => <OutsideScene />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await outsideAct(ctx.canvasElement);
  }
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const k=["OneProp","ExternalControl"],v=Object.freeze(Object.defineProperty({__proto__:null,ExternalControl:s,OneProp:n,__namedExportsOrder:k,default:_},Symbol.toStringTag,{value:"Module"}));export{v as B};
