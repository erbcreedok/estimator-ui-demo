import{c as g,j as a,b as h,M as v,s as m,y as b,h as f,l as y,f as G}from"./products-CTiDOXRn.js";import{c as L,s as C}from"./checks-BwzfMUfK.js";import{S as d,s as t}from"./scene-CB7jjebp.js";const S={title:"Tables/Table Core/Features/Grouping/Multi-group",id:"tables-table-core-features-grouping-multi-group",...G(t)},l={tags:["kb:group-several-levels"],name:"7 · Several levels",parameters:{...m(t,"SeveralLevels"),summary:"Several grouping levels: a lane for each, folded a level at a time."},args:{initialGrouping:["team","level"],enableGroupCollapse:!0,enableGroupLevelCollapse:!0},argTypes:{initialGrouping:{control:!1},enableGroupCollapse:{control:{type:"boolean"}},enableGroupLevelCollapse:{control:{type:"boolean"}}},render:e=>a.jsx(h,{args:e,children:a.jsx(d,{...e,count:12,hint:a.jsx(v,{text:"Grouped by **Team**, then **Level**: two lanes. **−** in a lane header folds the whole level, **−** on a group folds that group."})})}),play:async e=>{if(g(e))return;await C(e.canvasElement);const o=e.canvasElement;await b(e,{enableGroupCollapse:!1}),await f(()=>o.querySelector("[data-group-level]"),"the groups are drawn again"),y(!o.querySelector('[aria-label="Collapse group"]'),"enableGroupCollapse off: no group has a −")}},r={tags:["kb:group-panel-reorder"],name:"10 · Change the levels in the panel",parameters:{...m(t,"PanelLevels"),summary:"In the Grouping panel the order of the items is the order of the levels: drag the handle, the lanes swap."},args:{initialGrouping:["team","level"],toolbar:!0,statusBar:!0},argTypes:{initialGrouping:{control:!1},toolbar:{control:{type:"boolean"}},statusBar:{control:{type:"boolean"}}},render:e=>a.jsx(h,{args:e,children:a.jsx(d,{...e,count:12,hint:a.jsx(v,{text:"Grouped by **Team**, then **Level**: **Team** is the first lane. Open the grouping chip in the status bar and drag the handle ⋮⋮ of **Level** above **Team**: the lanes swap, **Level** is the first level."})})}),play:async e=>{g(e)||await L(e.canvasElement)}};var s,n,p;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
  tags: ['kb:group-several-levels'],
  name: '7 · Several levels',
  parameters: {
    ...sceneCodeWith(source, 'SeveralLevels'),
    summary: 'Several grouping levels: a lane for each, folded a level at a time.'
  },
  args: {
    initialGrouping: ['team', 'level'],
    enableGroupCollapse: true,
    enableGroupLevelCollapse: true
  },
  argTypes: {
    initialGrouping: {
      control: false
    },
    enableGroupCollapse: {
      control: {
        type: 'boolean'
      }
    },
    enableGroupLevelCollapse: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} count={12} hint={<Md text="Grouped by **Team**, then **Level**: two lanes. **−** in a lane header folds the whole level, **−** on a group folds that group." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await severalLevelsAct(ctx.canvasElement);
    const c = ctx.canvasElement;
    await setArgs(ctx, {
      enableGroupCollapse: false
    });
    await until(() => c.querySelector('[data-group-level]'), 'the groups are drawn again');
    check(!c.querySelector('[aria-label="Collapse group"]'), 'enableGroupCollapse off: no group has a −');
  }
}`,...(p=(n=l.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var u,i,c;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['kb:group-panel-reorder'],
  name: '10 · Change the levels in the panel',
  parameters: {
    ...sceneCodeWith(source, 'PanelLevels'),
    summary: 'In the Grouping panel the order of the items is the order of the levels: drag the handle, the lanes swap.'
  },
  args: {
    initialGrouping: ['team', 'level'],
    toolbar: true,
    statusBar: true
  },
  argTypes: {
    initialGrouping: {
      control: false
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
            <Scene {...args} count={12} hint={<Md text="Grouped by **Team**, then **Level**: **Team** is the first lane. Open the grouping chip in the status bar and drag the handle ⋮⋮ of **Level** above **Team**: the lanes swap, **Level** is the first level." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await panelLevelsAct(ctx.canvasElement);
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const w=["SeveralLevels","PanelLevels"],k=Object.freeze(Object.defineProperty({__proto__:null,PanelLevels:r,SeveralLevels:l,__namedExportsOrder:w,default:S},Symbol.toStringTag,{value:"Module"}));export{k as M};
