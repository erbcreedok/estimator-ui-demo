import{S as u,_ as y}from"./scene-KH-578yJ.js";import{c as b,a9 as g,j as n,b as p,M as d,s as h,g as f,f as C}from"./products-CTiDOXRn.js";import{m as k,p as v}from"./checks-BTK7xNcN.js";const[o]=Object.values([y]),x={title:"Tables/Table Core/Features/Column visibility/In the table",id:"tables-table-core-features-column-visibility-places",...C(o)},t={tags:["kb:visibility-from-columns-panel"],name:"4 · The Columns panel",parameters:{...h(o,"ColumnsPanel"),summary:"A tick for every column; a hidden column keeps its row."},args:{toolbar:!0},argTypes:{toolbar:{control:{type:"boolean"}}},render:e=>n.jsx(p,{args:e,children:n.jsx(u,{...e,hint:n.jsx(d,{text:"Open **Columns** and untick **Team**: the column leaves the table, its row stays in the panel so you can tick it back."})})}),play:async e=>{b(e)||(await v(e.canvasElement),await f(e))}},a={tags:["kb:visibility-from-column-menu"],name:"5 · Hide column in the menu",parameters:{...h(o,"ColumnMenu"),summary:"*Hide column* in the column menu."},args:{toolbar:!0,columnMenu:!0},argTypes:{toolbar:{control:{type:"boolean"}},columnMenu:{control:{type:"boolean"}}},render:e=>n.jsx(p,{args:e,children:n.jsx(u,{...e,hint:n.jsx(d,{text:"Click **Role** → **Hide column**: Role leaves the table. Bring it back in **Columns**. The item is not in the default menu: this menu is `columnMenu={{ sections: [sortingSection(), hidingSection()] }}`."})})}),play:async e=>{b(e)||(await k(e.canvasElement),await g(e))}};var s,r,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  tags: ['kb:visibility-from-columns-panel'],
  name: '4 · The Columns panel',
  parameters: {
    ...sceneCodeWith(tableSource, 'ColumnsPanel'),
    summary: 'A tick for every column; a hidden column keeps its row.'
  },
  args: {
    toolbar: true
  },
  argTypes: {
    toolbar: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="Open **Columns** and untick **Team**: the column leaves the table, its row stays in the panel so you can tick it back." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await panelAct(ctx.canvasElement);
    await barControlAct(ctx);
  }
}`,...(l=(r=t.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};var c,i,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  tags: ['kb:visibility-from-column-menu'],
  name: '5 · Hide column in the menu',
  parameters: {
    ...sceneCodeWith(tableSource, 'ColumnMenu'),
    summary: '*Hide column* in the column menu.'
  },
  args: {
    toolbar: true,
    columnMenu: true
  },
  argTypes: {
    toolbar: {
      control: {
        type: 'boolean'
      }
    },
    columnMenu: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="Click **Role** → **Hide column**: Role leaves the table. Bring it back in **Columns**. The item is not in the default menu: this menu is \`columnMenu={{ sections: [sortingSection(), hidingSection()] }}\`." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await menuAct(ctx.canvasElement);
    await menuControlAct(ctx);
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const M=["ColumnsPanel","ColumnMenu"],_=Object.freeze(Object.defineProperty({__proto__:null,ColumnMenu:a,ColumnsPanel:t,__namedExportsOrder:M,default:x},Symbol.toStringTag,{value:"Module"}));export{_ as P};
