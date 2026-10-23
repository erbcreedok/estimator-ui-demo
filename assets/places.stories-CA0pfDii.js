import{S as u,_ as b}from"./scene-DCjKWwYG.js";import{c as h,a9 as d,j as t,b as g,M as p,s as f,g as z,f as y}from"./products-CTiDOXRn.js";import{m as C,p as w}from"./checks-NmFlyDuA.js";const[r]=Object.values([b]),x={title:"Tables/Table Core/Features/Freezing/In the table",id:"tables-table-core-features-freezing-places",...y(r)},n={tags:["kb:freeze-from-column-menu"],name:"6 · Freeze in the column menu",parameters:{...f(r,"ColumnMenu"),summary:"*Freeze ›* in the column menu: the side, ticked; Unfreeze column."},args:{columnMenu:!0,enableRightPinning:!0},argTypes:{columnMenu:{control:{type:"boolean"}},enableRightPinning:{control:{type:"boolean"}}},render:e=>t.jsx(g,{args:e,children:t.jsx(u,{...e,hint:t.jsx(p,{text:"Click **Team** → **Freeze ›** → **Left**: Team sticks. Open it again: **Left** is ticked, and **Unfreeze column** is there."})})}),play:async e=>{h(e)||(await C(e.canvasElement),await d(e))}},a={tags:["kb:freeze-from-columns-panel"],name:"7 · Freeze in the Columns panel",parameters:{...f(r,"ColumnsPanel"),summary:"← Freeze → in the Columns panel: the arrows freeze at a side, the word toggles."},args:{toolbar:!0,enableRightPinning:!0},argTypes:{toolbar:{control:{type:"boolean"}},enableRightPinning:{control:{type:"boolean"}}},render:e=>t.jsx(g,{args:e,children:t.jsx(u,{...e,hint:t.jsx(p,{text:"Open **Columns**: every row has **← Freeze →**. Press an arrow: the column freezes at that side and moves to its list (frozen at the left, the rest, frozen at the right); press the lit arrow again: it is free."})})}),play:async e=>{h(e)||(await w(e.canvasElement),await z(e))}};var o,s,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  tags: ['kb:freeze-from-column-menu'],
  name: '6 · Freeze in the column menu',
  parameters: {
    ...sceneCodeWith(tableSource, 'ColumnMenu'),
    summary: '*Freeze ›* in the column menu: the side, ticked; Unfreeze column.'
  },
  args: {
    columnMenu: true,
    enableRightPinning: true
  },
  argTypes: {
    columnMenu: {
      control: {
        type: 'boolean'
      }
    },
    enableRightPinning: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="Click **Team** → **Freeze ›** → **Left**: Team sticks. Open it again: **Left** is ticked, and **Unfreeze column** is there." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await menuAct(ctx.canvasElement);
    await menuControlAct(ctx);
  }
}`,...(l=(s=n.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var i,c,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ['kb:freeze-from-columns-panel'],
  name: '7 · Freeze in the Columns panel',
  parameters: {
    ...sceneCodeWith(tableSource, 'ColumnsPanel'),
    summary: '← Freeze → in the Columns panel: the arrows freeze at a side, the word toggles.'
  },
  args: {
    toolbar: true,
    enableRightPinning: true
  },
  argTypes: {
    toolbar: {
      control: {
        type: 'boolean'
      }
    },
    enableRightPinning: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="Open **Columns**: every row has **← Freeze →**. Press an arrow: the column freezes at that side and moves to its list (frozen at the left, the rest, frozen at the right); press the lit arrow again: it is free." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await panelAct(ctx.canvasElement);
    await barControlAct(ctx);
  }
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const P=["ColumnMenu","ColumnsPanel"],R=Object.freeze(Object.defineProperty({__proto__:null,ColumnMenu:n,ColumnsPanel:a,__namedExportsOrder:P,default:x},Symbol.toStringTag,{value:"Module"}));export{R as P};
