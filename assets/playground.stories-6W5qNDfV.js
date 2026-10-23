import{S as l,_ as u}from"./scene-KH-578yJ.js";import{c,j as t,b as d,M as m,p as b,d as h,s as y,e as g,f as p}from"./products-CTiDOXRn.js";import{e as I,i as V}from"./controls-B40_76Du.js";import{V as a}from"./presets-DuCk3XAW.js";import"./rows-l3LcChQt.js";const[o]=Object.values([u]),v={title:"Tables/Table Core/Features/Column visibility/Playground",id:"tables-table-core-features-column-visibility-playground",...p(o)},e={tags:["kb:visibility-playground"],name:"Playground",parameters:{...y(o,"Playground",g({initialVisibility:a}))},args:{enableHiding:!0,columnMenu:!0,menuWithoutHide:!1,toolbar:!0,initialVisibility:"none"},argTypes:{initialVisibility:h(a)},render:i=>t.jsx(d,{args:i,children:t.jsx(l,{...i,initialVisibility:b(a,i.initialVisibility),hint:t.jsx(m,{text:"Everything together: the controls below switch hiding, the column menu with or without *Hide column*, the toolbar and the columns the table starts with hidden; hide columns in **Columns** or in a header menu."})})}),play:async i=>{c(i)||(await I(i),await V(i))}};var n,r,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  tags: ['kb:visibility-playground'],
  name: 'Playground',
  parameters: {
    ...sceneCodeWith(tableSource, 'Playground', presetCodes({
      initialVisibility: VISIBILITIES
    }))
  },
  args: {
    enableHiding: true,
    columnMenu: true,
    menuWithoutHide: false,
    toolbar: true,
    initialVisibility: 'none'
  },
  argTypes: {
    initialVisibility: presetControl(VISIBILITIES)
  },
  render: args => <Remount args={args}>
            <Scene {...args} initialVisibility={presetValue(VISIBILITIES, args.initialVisibility)} hint={<Md text="Everything together: the controls below switch hiding, the column menu with or without *Hide column*, the toolbar and the columns the table starts with hidden; hide columns in **Columns** or in a header menu." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await enableHidingControlAct(ctx);
    await initialVisibilityControlAct(ctx);
  }
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const E=["Playground"];export{e as Playground,E as __namedExportsOrder,v as default};
