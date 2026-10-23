import{S as l,_ as u}from"./scene-DY5gZaw6.js";import{c,j as o,b as i,M as m,s as b,f as y}from"./products-CTiDOXRn.js";import{m as d}from"./checks-Cdgb-MqO.js";const[n]=Object.values([u]),p={title:"Tables/Table Core/Features/Sorting/Multi-sort",id:"tables-table-core-features-sorting-multi-sort",...y(n)},e={tags:["kb:sort-multi-sort"],name:"5 · Several sorts",parameters:{...b(n,"MultiSort"),summary:"Shift+click and Then by add a sort; the marks say the priority."},args:{enableMultiSort:!0,columnMenu:!0,toolbar:!0,statusBar:!0},argTypes:{enableMultiSort:{control:{type:"boolean"}},columnMenu:{control:{type:"boolean"}},toolbar:{control:{type:"boolean"}},statusBar:{control:{type:"boolean"}}},render:t=>o.jsx(i,{args:t,children:o.jsx(l,{...t,hint:o.jsx(m,{text:"Sort **Team** from its menu, then **Shift+click Country**: the rows sort by team and, inside a team, by country; the marks say **1** and **2**, the chip says **2 Sorts**. A sorted column has **Move up / Move down** in its menu."})})}),play:async t=>{c(t)||await d(t.canvasElement)}};var r,a,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  tags: ['kb:sort-multi-sort'],
  name: '5 · Several sorts',
  parameters: {
    ...sceneCodeWith(tableSource, 'MultiSort'),
    summary: 'Shift+click and Then by add a sort; the marks say the priority.'
  },
  args: {
    enableMultiSort: true,
    columnMenu: true,
    toolbar: true,
    statusBar: true
  },
  argTypes: {
    enableMultiSort: {
      control: {
        type: 'boolean'
      }
    },
    columnMenu: {
      control: {
        type: 'boolean'
      }
    },
    toolbar: {
      control: {
        type: 'boolean'
      }
    },
    statusBar: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="Sort **Team** from its menu, then **Shift+click Country**: the rows sort by team and, inside a team, by country; the marks say **1** and **2**, the chip says **2 Sorts**. A sorted column has **Move up / Move down** in its menu." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await multiAct(ctx.canvasElement);
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const h=["MultiSort"],g=Object.freeze(Object.defineProperty({__proto__:null,MultiSort:e,__namedExportsOrder:h,default:p},Symbol.toStringTag,{value:"Module"}));export{g as M};
