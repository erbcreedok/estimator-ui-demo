import{s as l,S as c,a,_ as m}from"./scene-BrjB9l3a.js";import{c as u,j as n,b as h,M as p,p as d,d as S,s as C,e as b,f}from"./products-CTiDOXRn.js";import{s as y}from"./checks-7aYUsQNN.js";const[r]=Object.values([m]),T={title:"Tables/Table Core/Features/Column chains/Column setup",id:"tables-table-core-features-column-chains-column-setup",...f(r)},t={tags:["kb:chains-column-setup"],name:"10 · What a chain says",parameters:{...C(r,"ColumnSetup",b({initialState:a})),summary:"A chain: its columns, which may leave, the member shown folded."},args:{initialState:"all folded"},argTypes:{initialState:S(a)},render:e=>n.jsx(h,{args:e,children:n.jsx(c,{initialState:d(a,e.initialState),hint:n.jsx(p,{text:"Two chains: **Location** — Country, Tier and *City*, which is optional (it may leave and come back); **Contact** — Email and Phone, both required. The first member is the one shown folded (`primary: 'last'` shows the last)."})})}),play:async e=>{u(e)||(await y(e.canvasElement),await l(e))}};var s,o,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  tags: ['kb:chains-column-setup'],
  name: '10 · What a chain says',
  parameters: {
    ...sceneCodeWith(tableSource, 'ColumnSetup', presetCodes({
      initialState: STARTS
    })),
    summary: 'A chain: its columns, which may leave, the member shown folded.'
  },
  args: {
    initialState: 'all folded'
  },
  argTypes: {
    initialState: presetControl(STARTS)
  },
  render: args => <Remount args={args}>
            <Scene initialState={presetValue(STARTS, args.initialState)} hint={<Md text="Two chains: **Location** — Country, Tier and *City*, which is optional (it may leave and come back); **Contact** — Email and Phone, both required. The first member is the one shown folded (\`primary: 'last'\` shows the last)." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await setupAct(ctx.canvasElement);
    await startControlAct(ctx);
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const w=["ColumnSetup"],A=Object.freeze(Object.defineProperty({__proto__:null,ColumnSetup:t,__namedExportsOrder:w,default:T},Symbol.toStringTag,{value:"Module"}));export{A as C};
