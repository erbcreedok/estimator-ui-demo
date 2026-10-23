import{c as l,a9 as y,j as r,b as h,M as g,s as m,f as d}from"./products-CTiDOXRn.js";import{S as f}from"./totals-CNUlOeK6.js";import{f as S,g as G}from"./checks-BwzfMUfK.js";import{S as b,a as w,s}from"./scene-CB7jjebp.js";const C={title:"Tables/Table Core/Features/Grouping/Group sorting",id:"tables-table-core-features-grouping-group-sorting",...d(s)},o={tags:["kb:group-sort-groups"],name:"10 · Sort the groups",parameters:{...m(s,"SortGroups"),summary:"A lane sorts its own groups, in the words of its column."},args:{columnMenu:!0,initialGrouping:["country"]},argTypes:{columnMenu:{control:{type:"boolean"}},initialGrouping:{control:!1}},render:e=>r.jsx(h,{args:e,children:r.jsx(b,{...e,hint:r.jsx(g,{text:"Click the **Country** lane header → **Sort ›**: the lane sorts its groups. Any other sort orders the rows inside the groups."})})}),play:async e=>{l(e)||(await S(e.canvasElement),await y(e))}},t={tags:["kb:group-sort-groups-by-size"],name:"11 · The groups by their size",parameters:{...m(s,"SortGroupsBySize"),summary:"`sortGroups` orders the groups when their lane has no sort (`sortGroupsBy.byRowCount`, `firstAppearance`, or a function of your own); the sort of the lane always wins."},args:{sortGroups:"byRowCount",columnMenu:!0,initialGrouping:["team"]},argTypes:{sortGroups:{control:"radio",options:f},columnMenu:{control:{type:"boolean"}},initialGrouping:{control:!1}},render:e=>r.jsx(h,{args:e,children:r.jsx(w,{...e,hint:r.jsx(g,{text:"Eleven people in four teams of different sizes; the biggest team is the last in the data. With **byRowCount** the groups go by their size. Click the **Team** lane header → **Sort › Sort Z–A**: the user's sort wins. **Clear sort**: the rule is back. **firstAppearance** is the default: the order of the data."})})}),play:async e=>{l(e)||await G(e.canvasElement)}};var n,a,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  tags: ['kb:group-sort-groups'],
  name: '10 · Sort the groups',
  parameters: {
    ...sceneCodeWith(source, 'SortGroups'),
    summary: 'A lane sorts its own groups, in the words of its column.'
  },
  args: {
    columnMenu: true,
    initialGrouping: ['country']
  },
  argTypes: {
    columnMenu: {
      control: {
        type: 'boolean'
      }
    },
    initialGrouping: {
      control: false
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="Click the **Country** lane header → **Sort ›**: the lane sorts its groups. Any other sort orders the rows inside the groups." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await sortGroupsAct(ctx.canvasElement);
    await menuControlAct(ctx);
  }
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var u,p,c;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['kb:group-sort-groups-by-size'],
  name: '11 · The groups by their size',
  parameters: {
    ...sceneCodeWith(source, 'SortGroupsBySize'),
    summary: '\`sortGroups\` orders the groups when their lane has no sort (\`sortGroupsBy.byRowCount\`, \`firstAppearance\`, or a function of your own); the sort of the lane always wins.'
  },
  args: {
    sortGroups: 'byRowCount',
    columnMenu: true,
    initialGrouping: ['team']
  },
  argTypes: {
    sortGroups: {
      control: 'radio',
      options: SORT_GROUPS_NAMES
    },
    columnMenu: {
      control: {
        type: 'boolean'
      }
    },
    initialGrouping: {
      control: false
    }
  },
  render: args => <Remount args={args}>
            <SizedScene {...args} hint={<Md text="Eleven people in four teams of different sizes; the biggest team is the last in the data. With **byRowCount** the groups go by their size. Click the **Team** lane header → **Sort › Sort Z–A**: the user's sort wins. **Clear sort**: the rule is back. **firstAppearance** is the default: the order of the data." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await sortGroupsBySizeAct(ctx.canvasElement);
  }
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const x=["SortGroups","SortGroupsBySize"],k=Object.freeze(Object.defineProperty({__proto__:null,SortGroups:o,SortGroupsBySize:t,__namedExportsOrder:x,default:C},Symbol.toStringTag,{value:"Module"}));export{k as G};
