import{c as p,j as a,b,M as i,s as h,f as g}from"./products-CTiDOXRn.js";import{d as y,e as T}from"./checks-BwzfMUfK.js";import{S as d,s as o}from"./scene-CB7jjebp.js";const f={title:"Tables/Table Core/Features/Grouping/In the table",id:"tables-table-core-features-grouping-places",...g(o)},r={tags:["kb:group-column-menu"],name:"8 · Group in the column menu",parameters:{...h(o,"ColumnMenu"),summary:"*Group by …* in the column menu; *Ungroup by …* in the lane’s menu."},args:{columnMenu:!0},argTypes:{columnMenu:{control:{type:"boolean"}}},render:e=>a.jsx(b,{args:e,children:a.jsx(d,{...e,hint:a.jsx(i,{text:"Click **Team** → **Group by Team**: a lane. Click the lane’s header → **Ungroup by Team**. With a grouping already there the menu also offers **Then by …**."})})}),play:async e=>{p(e)||await y(e.canvasElement)}},t={tags:["kb:group-toolbar-status-bar"],name:"9 · Toolbar and status bar",parameters:{...h(o,"ToolbarStatusBar"),summary:"The Group button’s panel and the status bar’s chip."},args:{toolbar:!0,statusBar:!0,columnMenu:!0},argTypes:{toolbar:{control:{type:"boolean"}},statusBar:{control:{type:"boolean"}},columnMenu:{control:{type:"boolean"}}},render:e=>a.jsx(b,{args:e,children:a.jsx(d,{...e,hint:a.jsx(i,{text:"**Group** in the toolbar opens the Grouping panel: add a column, drag to change the order, remove it. The status bar shows the chip (*Team*, *2 Groups*) and **Clear all**."})})}),play:async e=>{p(e)||await T(e.canvasElement)}};var n,s,u;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  tags: ['kb:group-column-menu'],
  name: '8 · Group in the column menu',
  parameters: {
    ...sceneCodeWith(source, 'ColumnMenu'),
    summary: '*Group by …* in the column menu; *Ungroup by …* in the lane’s menu.'
  },
  args: {
    columnMenu: true
  },
  argTypes: {
    columnMenu: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="Click **Team** → **Group by Team**: a lane. Click the lane’s header → **Ungroup by Team**. With a grouping already there the menu also offers **Then by …**." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await columnMenuAct(ctx.canvasElement);
  }
}`,...(u=(s=r.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};var l,c,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  tags: ['kb:group-toolbar-status-bar'],
  name: '9 · Toolbar and status bar',
  parameters: {
    ...sceneCodeWith(source, 'ToolbarStatusBar'),
    summary: 'The Group button’s panel and the status bar’s chip.'
  },
  args: {
    toolbar: true,
    statusBar: true,
    columnMenu: true
  },
  argTypes: {
    toolbar: {
      control: {
        type: 'boolean'
      }
    },
    statusBar: {
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
            <Scene {...args} hint={<Md text="**Group** in the toolbar opens the Grouping panel: add a column, drag to change the order, remove it. The status bar shows the chip (*Team*, *2 Groups*) and **Clear all**." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await barsAct(ctx.canvasElement);
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const M=["ColumnMenu","ToolbarStatusBar"],S=Object.freeze(Object.defineProperty({__proto__:null,ColumnMenu:r,ToolbarStatusBar:t,__namedExportsOrder:M,default:f},Symbol.toStringTag,{value:"Module"}));export{S as P};
