import{S as l,_ as d}from"./scene-BiGXqEVE.js";import{c,j as t,b as p,M as u,p as g,d as h,s as m,e as y,f as b}from"./products-CTiDOXRn.js";import{r as O,g as C,i as f}from"./controls-B7VJbFXN.js";import{O as a}from"./presets-D_d35U2l.js";import"./rows-l3LcChQt.js";const[s]=Object.values([d]),E={title:"Tables/Table Core/Features/Column order/Playground",id:"tables-table-core-features-column-order-playground",...b(s)},e={tags:["kb:reorder-playground"],name:"Playground",parameters:{...m(s,"Playground",y({initialOrder:a}))},args:{enableColumnReorder:!0,gripPlacement:"top",toolbar:!0,chainsOpen:!1,initialOrder:"order of columns"},argTypes:{gripPlacement:{control:"radio",options:["top","start"]},initialOrder:h(a)},render:r=>t.jsx(p,{args:r,children:t.jsx(l,{...r,initialOrder:g(a,r.initialOrder),chains:[{id:"location",label:"Location",columns:["country","city"]}],hint:t.jsx(u,{text:"Everything together: drag a header by its grip or a row of **Columns** by its handle; the controls below switch the dragging, the grip, the toolbar, the Location chain (Country and City) open or folded, and the order the table starts with."})})}),play:async r=>{c(r)||(await O(r),await C(r),await f(r))}};var o,n,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  tags: ['kb:reorder-playground'],
  name: 'Playground',
  parameters: {
    ...sceneCodeWith(tableSource, 'Playground', presetCodes({
      initialOrder: ORDERS
    }))
  },
  args: {
    enableColumnReorder: true,
    gripPlacement: 'top',
    toolbar: true,
    chainsOpen: false,
    initialOrder: 'order of columns'
  },
  argTypes: {
    gripPlacement: {
      control: 'radio',
      options: ['top', 'start']
    },
    initialOrder: presetControl(ORDERS)
  },
  render: args => <Remount args={args}>
            <Scene {...args} initialOrder={presetValue(ORDERS, args.initialOrder)} chains={[{
      id: 'location',
      label: 'Location',
      columns: ['country', 'city']
    }]} hint={<Md text="Everything together: drag a header by its grip or a row of **Columns** by its handle; the controls below switch the dragging, the grip, the toolbar, the Location chain (Country and City) open or folded, and the order the table starts with." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await reorderSwitchControlAct(ctx);
    await gripControlAct(ctx);
    await initialOrderControlAct(ctx);
  }
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const _=["Playground"];export{e as Playground,_ as __namedExportsOrder,E as default};
