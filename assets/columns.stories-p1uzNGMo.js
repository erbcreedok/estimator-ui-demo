import{c as l,j as n,b as i,M as u,s as c,d as I,e as M,f as j}from"./products-CTiDOXRn.js";import{K as A}from"./totals-CNUlOeK6.js";import{n as W,h as B,i as P,b as d,k as L,w as H}from"./checks-BwzfMUfK.js";import{I as V,h as _,R as m}from"./issues-hold-scene-CMHtBXMX.js";import{S as h,s as p}from"./scene-CB7jjebp.js";const K={title:"Tables/Table Core/Features/Grouping/Columns",id:"tables-table-core-features-grouping-columns",...j(p)},s={tags:["kb:group-own-ways"],name:"3 · Own ways to group",parameters:{...c(p,"OwnWays"),summary:"`meta.groupings`: a column groups as is or its own way."},args:{set:"ways",columnMenu:!0},argTypes:{set:{control:!1},columnMenu:{control:{type:"boolean"}}},render:e=>n.jsx(i,{args:e,children:n.jsx(h,{...e,hint:n.jsx(u,{text:"Every column groups its own way: click a header → **Group by …**. **Status** groups into *Included* / *Needs attention* (its `getGroupingValue`), **Level** and **Start** as is or by a way, **Person** and **Rate** only by their ways — the column stays in the table."})})}),play:async e=>{l(e)||await H(e.canvasElement)}},o={tags:["kb:group-grouping-only"],name:"4 · Columns that only group",parameters:{...c(p,"GroupingOnly"),summary:"`columnVisibility: false` with `enableHiding: false`: not drawn, not in the Columns panel, offered in the Group panel."},args:{set:"only",toolbar:!0,columnMenu:!0},argTypes:{set:{control:!1},toolbar:{control:{type:"boolean"}},columnMenu:{control:{type:"boolean"}}},render:e=>n.jsx(i,{args:e,children:n.jsx(h,{...e,hint:n.jsx(u,{text:"**Country** and **Contract** have `columnVisibility: false` and `enableHiding: false`: not drawn, not in the Columns panel; the toolbar’s **Group** offers them: *Group by Contract*."})})}),play:async e=>{l(e)||await W(e.canvasElement)}},t={tags:["kb:group-keep-column"],name:"5 · The column stays in the table",parameters:{...c(p,"KeepColumn"),summary:"`keepWhenGrouped`: a function of the column, which of them also stay in the table while they group."},args:{keepWhenGrouped:"level",columnMenu:!0,initialGrouping:["level"]},argTypes:{keepWhenGrouped:{control:"radio",options:A},columnMenu:{control:{type:"boolean"}},initialGrouping:{control:!1}},render:e=>n.jsx(i,{args:e,children:n.jsx(h,{...e,hint:n.jsx(u,{text:"`keepWhenGrouped` says **Level** stays: it is a lane and stays in the table (`keepGrouped.only('level')`; pick *none* or *all* in the controls). **Team** moves: click its header → *Group by Team*, and the column goes to its lane when the rule does not keep it."})})}),play:async e=>{l(e)||await L(e.canvasElement)}},a={tags:["kb:group-hidden-grouping"],name:"6 · A grouping of a column nobody sees",parameters:{...c(p,"HiddenGrouping"),summary:"The screen groups by a column the table never draws."},args:{set:"only",statusBar:!0,initialGrouping:["contract"]},argTypes:{set:{control:!1},statusBar:{control:{type:"boolean"}},initialGrouping:{control:!1}},render:e=>n.jsx(i,{args:e,children:n.jsx(h,{...e,hint:n.jsx(u,{text:"The screen groups by **Contract**, a column the table never draws: its lane is there, its chip says *Contract*, *Clear all* ungroups it."})})}),play:async e=>{l(e)||await B(e.canvasElement)}},r={tags:["kb:group-issues"],name:"7 · Issues, as in the Resource Plan",parameters:{...c(_,"IssuesLikeTheResourcePlan",M({resolve:m})),summary:"The screen groups by Issues (Blockers, Excluded, Included) from its own button; the column is never drawn. The group cell is the legacy one: an icon and the name, a coloured right edge, a tooltip. `holdOrder({ groupsOf: ['issues'] })` keeps a fixed row in Blockers until the screen says Refresh; `releaseRows` sends a row to its group at once."},args:{resolve:"both"},argTypes:{resolve:I(m)},render:e=>n.jsx(i,{args:e,children:n.jsx(V,{...e,hint:n.jsx(u,{text:`The **Issues** button of the screen turns the grouping on and off: Issues is the first lane. Its groups are Blockers, Excluded and Included, each with its icon, its coloured right edge and its tooltip (hover a group). The column is not among the columns; its lane sorts the groups in the order of the Resource Plan.

Blockers have no **Rate**: type one above zero and the blocker is fixed. The **resolve** control says how the screen resolves it: *animation* (the row goes to Included at once, the rows slide), *Refresh button* (the row stays in Blockers with a ✓, the notice says *1 row is fixed*, **Refresh** moves it), *both* (the button slides the rows). **Exclude** sends a row to Excluded at once in every one.`})})}),play:async e=>{l(e)||(await P(e.canvasElement),await d(e,"both"),await d(e,"Refresh button"),await d(e,"animation"))}};var g,y,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['kb:group-own-ways'],
  name: '3 · Own ways to group',
  parameters: {
    ...sceneCodeWith(source, 'OwnWays'),
    summary: '\`meta.groupings\`: a column groups as is or its own way.'
  },
  args: {
    set: 'ways',
    columnMenu: true
  },
  argTypes: {
    set: {
      control: false
    },
    columnMenu: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="Every column groups its own way: click a header → **Group by …**. **Status** groups into *Included* / *Needs attention* (its \`getGroupingValue\`), **Level** and **Start** as is or by a way, **Person** and **Rate** only by their ways — the column stays in the table." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await waysAct(ctx.canvasElement);
  }
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var b,w,k;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['kb:group-grouping-only'],
  name: '4 · Columns that only group',
  parameters: {
    ...sceneCodeWith(source, 'GroupingOnly'),
    summary: '\`columnVisibility: false\` with \`enableHiding: false\`: not drawn, not in the Columns panel, offered in the Group panel.'
  },
  args: {
    set: 'only',
    toolbar: true,
    columnMenu: true
  },
  argTypes: {
    set: {
      control: false
    },
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
            <Scene {...args} hint={<Md text="**Country** and **Contract** have \`columnVisibility: false\` and \`enableHiding: false\`: not drawn, not in the Columns panel; the toolbar’s **Group** offers them: *Group by Contract*." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await notDrawnAct(ctx.canvasElement);
  }
}`,...(k=(w=o.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var v,x,R;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['kb:group-keep-column'],
  name: '5 · The column stays in the table',
  parameters: {
    ...sceneCodeWith(source, 'KeepColumn'),
    summary: '\`keepWhenGrouped\`: a function of the column, which of them also stay in the table while they group.'
  },
  args: {
    keepWhenGrouped: 'level',
    columnMenu: true,
    initialGrouping: ['level']
  },
  argTypes: {
    keepWhenGrouped: {
      control: 'radio',
      options: KEEP_NAMES
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
            <Scene {...args} hint={<Md text="\`keepWhenGrouped\` says **Level** stays: it is a lane and stays in the table (\`keepGrouped.only('level')\`; pick *none* or *all* in the controls). **Team** moves: click its header → *Group by Team*, and the column goes to its lane when the rule does not keep it." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await keepAct(ctx.canvasElement);
  }
}`,...(R=(x=t.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var G,T,C;a.parameters={...a.parameters,docs:{...(G=a.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['kb:group-hidden-grouping'],
  name: '6 · A grouping of a column nobody sees',
  parameters: {
    ...sceneCodeWith(source, 'HiddenGrouping'),
    summary: 'The screen groups by a column the table never draws.'
  },
  args: {
    set: 'only',
    statusBar: true,
    initialGrouping: ['contract']
  },
  argTypes: {
    set: {
      control: false
    },
    statusBar: {
      control: {
        type: 'boolean'
      }
    },
    initialGrouping: {
      control: false
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="The screen groups by **Contract**, a column the table never draws: its lane is there, its chip says *Contract*, *Clear all* ungroups it." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await hiddenGroupingAct(ctx.canvasElement);
  }
}`,...(C=(T=a.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var E,S,O;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['kb:group-issues'],
  name: '7 · Issues, as in the Resource Plan',
  parameters: {
    ...sceneCodeWith(holdSource, 'IssuesLikeTheResourcePlan', presetCodes({
      resolve: RESOLVES
    })),
    summary: "The screen groups by Issues (Blockers, Excluded, Included) from its own button; the column is never drawn. The group cell is the legacy one: an icon and the name, a coloured right edge, a tooltip. \`holdOrder({ groupsOf: ['issues'] })\` keeps a fixed row in Blockers until the screen says Refresh; \`releaseRows\` sends a row to its group at once."
  },
  args: {
    resolve: 'both'
  },
  argTypes: {
    resolve: presetControl(RESOLVES)
  },
  render: args => <Remount args={args}>
            <IssuesHoldScene {...args} hint={<Md text="The **Issues** button of the screen turns the grouping on and off: Issues is the first lane. Its groups are Blockers, Excluded and Included, each with its icon, its coloured right edge and its tooltip (hover a group). The column is not among the columns; its lane sorts the groups in the order of the Resource Plan.

Blockers have no **Rate**: type one above zero and the blocker is fixed. The **resolve** control says how the screen resolves it: *animation* (the row goes to Included at once, the rows slide), *Refresh button* (the row stays in Blockers with a ✓, the notice says *1 row is fixed*, **Refresh** moves it), *both* (the button slides the rows). **Exclude** sends a row to Excluded at once in every one." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await issuesAct(ctx.canvasElement);
    await issuesResolveAct(ctx, 'both');
    await issuesResolveAct(ctx, 'Refresh button');
    await issuesResolveAct(ctx, 'animation');
  }
}`,...(O=(S=r.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};const N=["OwnWays","GroupingOnly","KeepColumn","HiddenGrouping","IssuesLikeTheResourcePlan"],Q=Object.freeze(Object.defineProperty({__proto__:null,GroupingOnly:o,HiddenGrouping:a,IssuesLikeTheResourcePlan:r,KeepColumn:t,OwnWays:s,__namedExportsOrder:N,default:K},Symbol.toStringTag,{value:"Module"}));export{Q as C};
