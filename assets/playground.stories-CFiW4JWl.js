import{S as l,_ as g}from"./scene-DCjKWwYG.js";import{c,j as t,b as u,M as d,p as m,d as h,s as p,e as P,f}from"./products-CTiDOXRn.js";import{a as b,i as y}from"./controls-umORIRv-.js";import{P as r}from"./presets-CL-lb5ZU.js";import"./rows-l3LcChQt.js";import"./table-CSYHSR_6.js";const[s]=Object.values([g]),E={title:"Tables/Table Core/Features/Freezing/Playground",id:"tables-table-core-features-freezing-playground",...f(s)},n={tags:["kb:freeze-playground"],name:"Playground",parameters:{...p(s,"Playground",P({initialPinning:r}))},args:{enableColumnPinning:!0,enableLeftPinning:!0,enableRightPinning:!0,columnMenu:!0,toolbar:!0,frozenEdge:"onScroll",initialPinning:"none"},argTypes:{frozenEdge:{control:"radio",options:["onScroll","line","always"]},initialPinning:h(r)},render:e=>t.jsx(u,{args:e,children:t.jsx(l,{...e,initialPinning:m(r,e.initialPinning),hint:t.jsx(d,{text:"Everything together: freeze columns in **Columns** or in a header menu, scroll sideways, drag a frozen column; the controls below switch the sides, the menu, the toolbar, the edge and the columns the table starts with frozen."})})}),play:async e=>{c(e)||(await b(e),await y(e))}};var i,a,o;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ['kb:freeze-playground'],
  name: 'Playground',
  parameters: {
    ...sceneCodeWith(tableSource, 'Playground', presetCodes({
      initialPinning: PINNINGS
    }))
  },
  args: {
    enableColumnPinning: true,
    enableLeftPinning: true,
    enableRightPinning: true,
    columnMenu: true,
    toolbar: true,
    frozenEdge: 'onScroll',
    initialPinning: 'none'
  },
  argTypes: {
    frozenEdge: {
      control: 'radio',
      options: ['onScroll', 'line', 'always']
    },
    initialPinning: presetControl(PINNINGS)
  },
  render: args => <Remount args={args}>
            <Scene {...args} initialPinning={presetValue(PINNINGS, args.initialPinning)} hint={<Md text="Everything together: freeze columns in **Columns** or in a header menu, scroll sideways, drag a frozen column; the controls below switch the sides, the menu, the toolbar, the edge and the columns the table starts with frozen." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await pinningSwitchControlAct(ctx);
    await initialPinningControlAct(ctx);
  }
}`,...(o=(a=n.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const I=["Playground"];export{n as Playground,I as __namedExportsOrder,E as default};
