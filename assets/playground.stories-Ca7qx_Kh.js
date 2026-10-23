import{j as u,S as p,G as t,_ as b,R as n}from"./scene-D8X4FZf0.js";import{c as g,j as a,b as d,M as y,p as h,d as r,s as m,e as G,f as S}from"./products-CTiDOXRn.js";import"./rows-l3LcChQt.js";const[c]=Object.values([b]),k={title:"Tables/Table Core/Features/Row selection & bulk actions/Playground",id:"tables-table-core-features-row-selection-bulk-actions-playground",...S(c)},o={tags:["kb:selection-playground"],name:"Playground",parameters:{...m(c,"Playground",G({enableRowSelection:n,initialGrouping:t}))},argTypes:{enableRowSelection:{...r(n)},initialGrouping:{...r(t)},readOnly:{control:{type:"boolean"}},enableGroupSelect:{control:{type:"boolean"}},bulkBar:{control:{type:"boolean"}},menus:{control:{type:"boolean"}}},args:{enableRowSelection:"all",initialGrouping:"by Team",readOnly:!1,enableGroupSelect:!0,bulkBar:!0,menus:!0},render:e=>a.jsx(d,{args:e,children:a.jsx(p,{...e,initialGrouping:h(t,e.initialGrouping),hint:a.jsx(y,{text:"Everything together: tick rows and groups, the bulk bar shows the count and an action; the controls below switch the rows that can be selected, read only, the group checkbox and the bar."})})}),play:async e=>{g(e)||await u(e)}};var l,s,i;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  tags: ['kb:selection-playground'],
  name: 'Playground',
  parameters: {
    ...sceneCodeWith(source, 'Playground', presetCodes({
      enableRowSelection: ROW_SELECTION,
      initialGrouping: GROUPINGS
    }))
  },
  argTypes: {
    enableRowSelection: {
      ...presetControl(ROW_SELECTION)
    },
    initialGrouping: {
      ...presetControl(GROUPINGS)
    },
    readOnly: {
      control: {
        type: 'boolean'
      }
    },
    enableGroupSelect: {
      control: {
        type: 'boolean'
      }
    },
    bulkBar: {
      control: {
        type: 'boolean'
      }
    },
    menus: {
      control: {
        type: 'boolean'
      }
    }
  },
  args: {
    enableRowSelection: 'all',
    initialGrouping: 'by Team',
    readOnly: false,
    enableGroupSelect: true,
    bulkBar: true,
    menus: true
  },
  render: args => <Remount args={args}>
            <Scene {...args} initialGrouping={presetValue(GROUPINGS, args.initialGrouping)} hint={<Md text="Everything together: tick rows and groups, the bulk bar shows the count and an action; the controls below switch the rows that can be selected, read only, the group checkbox and the bar." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await groupingControlAct(ctx);
  }
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const f=["Playground"];export{o as Playground,f as __namedExportsOrder,k as default};
