import{s as i,d as c,S as u,a,_ as d}from"./scene-BrjB9l3a.js";import{c as h,j as r,b as p,M as m,p as g,d as S,s as b,e as f,f as y}from"./products-CTiDOXRn.js";import"./rows-l3LcChQt.js";const[l]=Object.values([d]),x={title:"Tables/Table Core/Features/Column chains/Playground",id:"tables-table-core-features-column-chains-playground",...y(l)},t={tags:["kb:chains-playground"],name:"Playground",parameters:{...b(l,"Playground",f({initialState:a}))},args:{enableColumnChains:!0,toolbar:!0,initialState:"all folded"},argTypes:{initialState:S(a)},render:e=>r.jsx(p,{args:e,children:r.jsx(u,{...e,initialState:g(a,e.initialState),hint:r.jsx(m,{text:"Everything together: open and fold a chain, drag a member, freeze one, use the Columns panel; the controls below switch the feature, the toolbar and the chains the table starts with open."})})}),play:async e=>{h(e)||(await i(e),await c(e))}};var s,n,o;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  tags: ['kb:chains-playground'],
  name: 'Playground',
  parameters: {
    ...sceneCodeWith(tableSource, 'Playground', presetCodes({
      initialState: STARTS
    }))
  },
  args: {
    enableColumnChains: true,
    toolbar: true,
    initialState: 'all folded'
  },
  argTypes: {
    initialState: presetControl(STARTS)
  },
  render: args => <Remount args={args}>
            <Scene {...args} initialState={presetValue(STARTS, args.initialState)} hint={<Md text="Everything together: open and fold a chain, drag a member, freeze one, use the Columns panel; the controls below switch the feature, the toolbar and the chains the table starts with open." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await startControlAct(ctx);
    await switchOffControlAct(ctx);
  }
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const A=["Playground"];export{t as Playground,A as __namedExportsOrder,x as default};
