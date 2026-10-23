import{S as s,_ as T}from"./scene-DY5gZaw6.js";import{c as l,a9 as M,j as t,b as i,M as c,s as u,g as x,f as C}from"./products-CTiDOXRn.js";import{c as w,p as k,d as O}from"./checks-Cdgb-MqO.js";const[n]=Object.values([T]),j={title:"Tables/Table Core/Features/Sorting/In the table",id:"tables-table-core-features-sorting-places",...C(n)},a={tags:["kb:sort-column-menu"],name:"6 · The column menu",parameters:{...u(n,"ColumnMenu"),summary:"A click on a header opens the menu: Sort ›, a direction, Clear sort."},args:{columnMenu:!0},argTypes:{columnMenu:{control:{type:"boolean"}}},render:e=>t.jsx(i,{args:e,children:t.jsx(s,{...e,hint:t.jsx(c,{text:"Click **Name** → **Sort ›** → a direction: the rows are sorted, the header shows the sort mark. Open it again: the direction is ticked and **Clear sort** is on. The menu is the `columnMenu` prop; without it a click on a header sorts at once."})})}),play:async e=>{l(e)||(await w(e.canvasElement),await M(e))}},r={tags:["kb:sort-toolbar-status-bar"],name:"7 · Toolbar and status bar",parameters:{...u(n,"ToolbarStatusBar"),summary:"The Sort button opens the Sorting panel; the status bar has the chip and Clear all."},args:{toolbar:!0,statusBar:!0,columnMenu:!0},argTypes:{toolbar:{control:{type:"boolean"}},statusBar:{control:{type:"boolean"}},columnMenu:{control:{type:"boolean"}}},render:e=>t.jsx(i,{args:e,children:t.jsx(s,{...e,hint:t.jsx(c,{text:"**Sort** in the toolbar opens the Sorting panel: add a column, turn its direction, remove it, drag to change the priority. The status bar shows the sort chip (it opens the same panel) and **Clear all**."})})}),play:async e=>{l(e)||(await O(e.canvasElement),await x(e))}},o={tags:["kb:sort-panel-reorder"],name:"8 · Change the priority in the panel",parameters:{...u(n,"PanelOrder"),summary:"In the Sorting panel the order of the items is the priority: drag the handle, or focus it and press ↑ / ↓."},args:{initialSorting:[{id:"team",desc:!1},{id:"role",desc:!1}],enableMultiSort:!0,toolbar:!0,statusBar:!0},argTypes:{initialSorting:{control:!1},enableMultiSort:{control:{type:"boolean"}},toolbar:{control:{type:"boolean"}},statusBar:{control:{type:"boolean"}}},render:e=>t.jsx(i,{args:e,children:t.jsx(s,{...e,hint:t.jsx(c,{text:"Sorted by **Team**, then **Role**. Open the chip in the status bar: the panel lists the sorts in their priority. Focus the handle ⋮⋮ of **Team** and press **↓** (or drag it): **Role** is first now, and the rows follow. The focus stays on the item that moved."})})}),play:async e=>{l(e)||await k(e.canvasElement)}};var h,m,p;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['kb:sort-column-menu'],
  name: '6 · The column menu',
  parameters: {
    ...sceneCodeWith(tableSource, 'ColumnMenu'),
    summary: 'A click on a header opens the menu: Sort ›, a direction, Clear sort.'
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
            <Scene {...args} hint={<Md text="Click **Name** → **Sort ›** → a direction: the rows are sorted, the header shows the sort mark. Open it again: the direction is ticked and **Clear sort** is on. The menu is the \`columnMenu\` prop; without it a click on a header sorts at once." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await columnMenuAct(ctx.canvasElement);
    await menuControlAct(ctx);
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,b,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  tags: ['kb:sort-toolbar-status-bar'],
  name: '7 · Toolbar and status bar',
  parameters: {
    ...sceneCodeWith(tableSource, 'ToolbarStatusBar'),
    summary: 'The Sort button opens the Sorting panel; the status bar has the chip and Clear all.'
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
            <Scene {...args} hint={<Md text="**Sort** in the toolbar opens the Sorting panel: add a column, turn its direction, remove it, drag to change the priority. The status bar shows the sort chip (it opens the same panel) and **Clear all**." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await barsAct(ctx.canvasElement);
    await barControlAct(ctx);
  }
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,S,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['kb:sort-panel-reorder'],
  name: '8 · Change the priority in the panel',
  parameters: {
    ...sceneCodeWith(tableSource, 'PanelOrder'),
    summary: 'In the Sorting panel the order of the items is the priority: drag the handle, or focus it and press ↑ / ↓.'
  },
  args: {
    initialSorting: [{
      id: 'team',
      desc: false
    }, {
      id: 'role',
      desc: false
    }],
    enableMultiSort: true,
    toolbar: true,
    statusBar: true
  },
  argTypes: {
    initialSorting: {
      control: false
    },
    enableMultiSort: {
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
            <Scene {...args} hint={<Md text="Sorted by **Team**, then **Role**. Open the chip in the status bar: the panel lists the sorts in their priority. Focus the handle ⋮⋮ of **Team** and press **↓** (or drag it): **Role** is first now, and the rows follow. The focus stays on the item that moved." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await panelOrderAct(ctx.canvasElement);
  }
}`,...(f=(S=o.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const v=["ColumnMenu","ToolbarStatusBar","PanelOrder"],_=Object.freeze(Object.defineProperty({__proto__:null,ColumnMenu:a,PanelOrder:o,ToolbarStatusBar:r,__namedExportsOrder:v,default:j},Symbol.toStringTag,{value:"Module"}));export{_ as P};
