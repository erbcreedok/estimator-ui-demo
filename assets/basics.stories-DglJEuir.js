import{O as p,S as O,_ as b}from"./scene-BiGXqEVE.js";import{c as u,j as a,b as f,M as h,p as y,d as C,s as g,e as R,f as x}from"./products-CTiDOXRn.js";import{o as S,a as T}from"./checks-CPsh5bEU.js";import{o as E}from"./controls-B7VJbFXN.js";import{O as o}from"./presets-D_d35U2l.js";const[i]=Object.values([b]),_={title:"Tables/Table Core/Features/Column order/Basics",id:"tables-table-core-features-column-order-basics",...x(i)},r={tags:["kb:reorder-one-prop"],name:"1 · One prop",parameters:{...g(i,"OneProp",R({columnOrder:o})),summary:"`state.columnOrder` as a constant orders the columns."},args:{columnOrder:"Country first",enableColumnReorder:!1},argTypes:{columnOrder:C(o),enableColumnReorder:{control:{type:"boolean"}}},render:e=>a.jsx(f,{args:e,children:a.jsx(O,{enableColumnReorder:e.enableColumnReorder,columnOrder:y(o,e.columnOrder),hint:a.jsx(h,{text:"The screen passes `state.columnOrder` as a constant — by default `['country', 'name', 'team', …]`: **Country** comes first. The built-in drag is off in this scene: the order is a constant nobody changes."})})}),play:async e=>{u(e)||(await T(e.canvasElement),await E(e))}},n={tags:["kb:reorder-external-control"],name:"2 · The screen owns the order",parameters:{summary:"The screen passes `state.columnOrder` with `onColumnOrderChange`."},render:()=>a.jsx(p,{}),play:async e=>{u(e)||await S(e.canvasElement)}};var t,s,c;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  tags: ['kb:reorder-one-prop'],
  name: '1 · One prop',
  parameters: {
    ...sceneCodeWith(tableSource, 'OneProp', presetCodes({
      columnOrder: ORDERS
    })),
    summary: '\`state.columnOrder\` as a constant orders the columns.'
  },
  args: {
    columnOrder: 'Country first',
    enableColumnReorder: false
  },
  argTypes: {
    columnOrder: presetControl(ORDERS),
    enableColumnReorder: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: args => <Remount args={args}>
            <Scene enableColumnReorder={args.enableColumnReorder} columnOrder={presetValue(ORDERS, args.columnOrder)} hint={<Md text="The screen passes \`state.columnOrder\` as a constant — by default \`['country', 'name', 'team', …]\`: **Country** comes first. The built-in drag is off in this scene: the order is a constant nobody changes." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await oneStateAct(ctx.canvasElement);
    await orderControlAct(ctx);
  }
}`,...(c=(s=r.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var l,m,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  tags: ['kb:reorder-external-control'],
  name: '2 · The screen owns the order',
  parameters: {
    summary: 'The screen passes \`state.columnOrder\` with \`onColumnOrderChange\`.'
  },
  render: () => <OutsideScene />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await outsideAct(ctx.canvasElement);
  }
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const w=["OneProp","ExternalControl"],P=Object.freeze(Object.defineProperty({__proto__:null,ExternalControl:n,OneProp:r,__namedExportsOrder:w,default:_},Symbol.toStringTag,{value:"Module"}));export{P as B};
