import{j as r,M as l,f as d}from"./products-CTiDOXRn.js";import{S as c,s as p}from"./scene-CZYYx_oH.js";import"./rows-l3LcChQt.js";const g={title:"Tables/Table Core/Features/Hierarchy/Data that is already a tree/Playground",id:"tables-table-core-features-tree-rows-playground",...d(p)},e={tags:["kb:tree-playground"],name:"Playground",args:{deep:!1,enableExpanding:!0,treePlacement:"start",treeMirrored:!1,treeColumn:"name",bulkBar:!0,columnMenu:!0},argTypes:{treePlacement:{control:"radio",options:["start","end"]},treeColumn:{control:"radio",options:["name","role","team"]}},render:({deep:n,...s})=>r.jsx(c,{...s,deep:n,hint:r.jsx(l,{text:"Everything together: open and fold rows, tick a parent, sort a level; the controls below switch the depth, the chevron’s place and column, and the bars."})})};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  tags: ['kb:tree-playground'],
  name: 'Playground',
  args: {
    deep: false,
    enableExpanding: true,
    treePlacement: 'start',
    treeMirrored: false,
    treeColumn: 'name',
    bulkBar: true,
    columnMenu: true
  },
  argTypes: {
    treePlacement: {
      control: 'radio',
      options: ['start', 'end']
    },
    treeColumn: {
      control: 'radio',
      options: ['name', 'role', 'team']
    }
  },
  render: ({
    deep,
    ...args
  }) => <Scene {...args} deep={deep} hint={<Md text="Everything together: open and fold rows, tick a parent, sort a level; the controls below switch the depth, the chevron’s place and column, and the bars." />} />
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const h=["Playground"];export{e as Playground,h as __namedExportsOrder,g as default};
