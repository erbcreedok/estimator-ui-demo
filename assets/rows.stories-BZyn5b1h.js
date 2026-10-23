import{c as r,j as n,b as a,M as t,s,f as _}from"./products-CTiDOXRn.js";import{T as l}from"./totals-CNUlOeK6.js";import{q as W,r as C,t as N,v as U,x as O}from"./checks-BwzfMUfK.js";import{S as u,s as e}from"./scene-CB7jjebp.js";const F={title:"Tables/Table Core/Features/Grouping/Look/Rows",id:"tables-table-core-features-grouping-look-rows",..._(e)},p={tags:["kb:group-rows-group-rows"],name:"1 · Group rows",parameters:{...s(e,"GroupRows"),summary:"`groupLayout: 'rows'`: a group is a header row, TanStack’s own look."},args:{initialGrouping:["team"],groupLayout:"rows",groupTotals:"none",groupIndent:"none",enableGroupSelect:!0},argTypes:{initialGrouping:{control:!1},groupLayout:{control:"radio",options:["lanes","rows"]},groupTotals:{control:"radio",options:l},groupIndent:{control:"radio",options:["none","depth"]},enableGroupSelect:{control:"boolean"}},render:o=>n.jsx(a,{args:o,children:n.jsx(u,{...o,hint:n.jsx(t,{text:'`groupLayout="rows"`: each group is a **header row** in the body (TanStack’s own look), sticky while its rows scroll; −/+, checkbox, value and count are in it.'})})}),play:async o=>{r(o)||await C(o.canvasElement)}},i={tags:["kb:group-rows-several-levels"],name:"2 · Several levels",parameters:{...s(e,"SeveralLevels"),summary:"Several levels of group rows, each indented under the one before."},args:{initialGrouping:["team","level"],groupLayout:"rows",groupTotals:"none",groupIndent:"none",enableGroupSelect:!0},argTypes:{initialGrouping:{control:!1},groupLayout:{control:"radio",options:["lanes","rows"]},groupTotals:{control:"radio",options:l},groupIndent:{control:"radio",options:["none","depth"]},enableGroupSelect:{control:"boolean"}},render:o=>n.jsx(a,{args:o,children:n.jsx(u,{...o,count:10,hint:n.jsx(t,{text:"Two levels of group rows: **Team**, then **Level**, indented."})})}),play:async o=>{r(o)||await U(o.canvasElement)}},c={tags:["kb:group-rows-totals"],name:"3 · Totals",parameters:{...s(e,"Totals"),summary:"`groupTotals: 'atEnd'`: a totals row at the end of each group."},args:{initialGrouping:["team"],groupLayout:"rows",groupTotals:"atEnd",groupIndent:"none",enableGroupSelect:!0},argTypes:{initialGrouping:{control:!1},groupLayout:{control:"radio",options:["lanes","rows"]},groupTotals:{control:"radio",options:l},groupIndent:{control:"radio",options:["none","depth"]},enableGroupSelect:{control:"boolean"}},render:o=>n.jsx(a,{args:o,children:n.jsx(u,{...o,hint:n.jsx(t,{text:"`groupTotals={showTotals.atEnd}`: a **totals row** at the end of each group, with the columns that have an `aggregationFn` of their own (**Rate** sums)."})})}),play:async o=>{r(o)||await O(o.canvasElement)}},g={tags:["kb:group-rows-mixed"],name:"4 · Lanes and rows",parameters:{...s(e,"Mixed"),summary:"`meta.groupLayout`: one level a lane, the other group rows."},args:{levelLayout:"rows",initialGrouping:["team","level"],groupLayout:"lanes",groupTotals:"none",groupIndent:"none",enableGroupSelect:!0},argTypes:{levelLayout:{control:"radio",options:["table","lanes","rows"]},initialGrouping:{control:!1},groupLayout:{control:"radio",options:["lanes","rows"]},groupTotals:{control:"radio",options:l},groupIndent:{control:"radio",options:["none","depth"]},enableGroupSelect:{control:"boolean"}},render:o=>n.jsx(a,{args:o,children:n.jsx(u,{...o,count:10,hint:n.jsx(t,{text:"**Team** is a lane, **Level** groups as rows (`meta.groupLayout: 'rows'` on its column)."})})}),play:async o=>{r(o)||await N(o.canvasElement)}},d={tags:["kb:group-rows-totals-row-under-lanes"],name:"5 · Totals under the lanes",parameters:{...s(e,"TotalsRowUnderLanes"),summary:"Totals rows under the groups of a lane."},args:{initialGrouping:["team"],groupLayout:"lanes",groupTotals:"atEnd",groupIndent:"none",enableGroupSelect:!0},argTypes:{initialGrouping:{control:!1},groupLayout:{control:"radio",options:["lanes","rows"]},groupTotals:{control:"radio",options:l},groupIndent:{control:"radio",options:["none","depth"]},enableGroupSelect:{control:"boolean"}},render:o=>n.jsx(a,{args:o,children:n.jsx(u,{...o,hint:n.jsx(t,{text:"Lanes with `groupTotals={showTotals.atEnd}`: each group ends with its totals row, the lane runs beside it."})})}),play:async o=>{r(o)||await O(o.canvasElement)}},m={tags:["kb:group-rows-group-row-menu"],name:"6 · The menu of a group row",parameters:{...s(e,"GroupRowMenu"),summary:"The value of a group row opens the menu of its column."},args:{columnMenu:!0,initialGrouping:["team"],groupLayout:"rows",groupTotals:"none",groupIndent:"none",enableGroupSelect:!0},argTypes:{columnMenu:{control:{type:"boolean"}},initialGrouping:{control:!1},groupLayout:{control:"radio",options:["lanes","rows"]},groupTotals:{control:"radio",options:l},groupIndent:{control:"radio",options:["none","depth"]},enableGroupSelect:{control:"boolean"}},render:o=>n.jsx(a,{args:o,children:n.jsx(u,{...o,hint:n.jsx(t,{text:"With `columnMenu`, the **value** of a group row opens the menu of the grouped column: *Ungroup by Team*, *Sort ›* …"})})}),play:async o=>{r(o)||await W(o.canvasElement)}};var w,h,T;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['kb:group-rows-group-rows'],
  name: '1 · Group rows',
  parameters: {
    ...sceneCodeWith(source, 'GroupRows'),
    summary: "\`groupLayout: 'rows'\`: a group is a header row, TanStack’s own look."
  },
  args: {
    initialGrouping: ['team'],
    groupLayout: 'rows',
    groupTotals: 'none',
    groupIndent: 'none',
    enableGroupSelect: true
  },
  argTypes: {
    initialGrouping: {
      control: false
    },
    groupLayout: {
      control: 'radio',
      options: ['lanes', 'rows']
    },
    groupTotals: {
      control: 'radio',
      options: TOTALS_NAMES
    },
    groupIndent: {
      control: 'radio',
      options: ['none', 'depth']
    },
    enableGroupSelect: {
      control: 'boolean'
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text='\`groupLayout="rows"\`: each group is a **header row** in the body (TanStack’s own look), sticky while its rows scroll; −/+, checkbox, value and count are in it.' />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await groupRowsOneAct(ctx.canvasElement);
  }
}`,...(T=(h=p.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var y,f,b;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['kb:group-rows-several-levels'],
  name: '2 · Several levels',
  parameters: {
    ...sceneCodeWith(source, 'SeveralLevels'),
    summary: 'Several levels of group rows, each indented under the one before.'
  },
  args: {
    initialGrouping: ['team', 'level'],
    groupLayout: 'rows',
    groupTotals: 'none',
    groupIndent: 'none',
    enableGroupSelect: true
  },
  argTypes: {
    initialGrouping: {
      control: false
    },
    groupLayout: {
      control: 'radio',
      options: ['lanes', 'rows']
    },
    groupTotals: {
      control: 'radio',
      options: TOTALS_NAMES
    },
    groupIndent: {
      control: 'radio',
      options: ['none', 'depth']
    },
    enableGroupSelect: {
      control: 'boolean'
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} count={10} hint={<Md text="Two levels of group rows: **Team**, then **Level**, indented." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await groupRowsTwoAct(ctx.canvasElement);
  }
}`,...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var S,L,G;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['kb:group-rows-totals'],
  name: '3 · Totals',
  parameters: {
    ...sceneCodeWith(source, 'Totals'),
    summary: "\`groupTotals: 'atEnd'\`: a totals row at the end of each group."
  },
  args: {
    initialGrouping: ['team'],
    groupLayout: 'rows',
    groupTotals: 'atEnd',
    groupIndent: 'none',
    enableGroupSelect: true
  },
  argTypes: {
    initialGrouping: {
      control: false
    },
    groupLayout: {
      control: 'radio',
      options: ['lanes', 'rows']
    },
    groupTotals: {
      control: 'radio',
      options: TOTALS_NAMES
    },
    groupIndent: {
      control: 'radio',
      options: ['none', 'depth']
    },
    enableGroupSelect: {
      control: 'boolean'
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="\`groupTotals={showTotals.atEnd}\`: a **totals row** at the end of each group, with the columns that have an \`aggregationFn\` of their own (**Rate** sums)." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await totalsAct(ctx.canvasElement);
  }
}`,...(G=(L=c.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};var v,x,R;g.parameters={...g.parameters,docs:{...(v=g.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['kb:group-rows-mixed'],
  name: '4 · Lanes and rows',
  parameters: {
    ...sceneCodeWith(source, 'Mixed'),
    summary: '\`meta.groupLayout\`: one level a lane, the other group rows.'
  },
  args: {
    levelLayout: 'rows',
    initialGrouping: ['team', 'level'],
    groupLayout: 'lanes',
    groupTotals: 'none',
    groupIndent: 'none',
    enableGroupSelect: true
  },
  argTypes: {
    levelLayout: {
      control: 'radio',
      options: ['table', 'lanes', 'rows']
    },
    initialGrouping: {
      control: false
    },
    groupLayout: {
      control: 'radio',
      options: ['lanes', 'rows']
    },
    groupTotals: {
      control: 'radio',
      options: TOTALS_NAMES
    },
    groupIndent: {
      control: 'radio',
      options: ['none', 'depth']
    },
    enableGroupSelect: {
      control: 'boolean'
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} count={10} hint={<Md text="**Team** is a lane, **Level** groups as rows (\`meta.groupLayout: 'rows'\` on its column)." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await mixedAct(ctx.canvasElement);
  }
}`,...(R=(x=g.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var k,M,E;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['kb:group-rows-totals-row-under-lanes'],
  name: '5 · Totals under the lanes',
  parameters: {
    ...sceneCodeWith(source, 'TotalsRowUnderLanes'),
    summary: 'Totals rows under the groups of a lane.'
  },
  args: {
    initialGrouping: ['team'],
    groupLayout: 'lanes',
    groupTotals: 'atEnd',
    groupIndent: 'none',
    enableGroupSelect: true
  },
  argTypes: {
    initialGrouping: {
      control: false
    },
    groupLayout: {
      control: 'radio',
      options: ['lanes', 'rows']
    },
    groupTotals: {
      control: 'radio',
      options: TOTALS_NAMES
    },
    groupIndent: {
      control: 'radio',
      options: ['none', 'depth']
    },
    enableGroupSelect: {
      control: 'boolean'
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="Lanes with \`groupTotals={showTotals.atEnd}\`: each group ends with its totals row, the lane runs beside it." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await totalsAct(ctx.canvasElement);
  }
}`,...(E=(M=d.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var A,I,j;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['kb:group-rows-group-row-menu'],
  name: '6 · The menu of a group row',
  parameters: {
    ...sceneCodeWith(source, 'GroupRowMenu'),
    summary: 'The value of a group row opens the menu of its column.'
  },
  args: {
    columnMenu: true,
    initialGrouping: ['team'],
    groupLayout: 'rows',
    groupTotals: 'none',
    groupIndent: 'none',
    enableGroupSelect: true
  },
  argTypes: {
    columnMenu: {
      control: {
        type: 'boolean'
      }
    },
    initialGrouping: {
      control: false
    },
    groupLayout: {
      control: 'radio',
      options: ['lanes', 'rows']
    },
    groupTotals: {
      control: 'radio',
      options: TOTALS_NAMES
    },
    groupIndent: {
      control: 'radio',
      options: ['none', 'depth']
    },
    enableGroupSelect: {
      control: 'boolean'
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="With \`columnMenu\`, the **value** of a group row opens the menu of the grouped column: *Ungroup by Team*, *Sort ›* …" />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await groupRowMenuAct(ctx.canvasElement);
  }
}`,...(j=(I=m.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};const q=["GroupRows","SeveralLevels","Totals","Mixed","TotalsRowUnderLanes","GroupRowMenu"],H=Object.freeze(Object.defineProperty({__proto__:null,GroupRowMenu:m,GroupRows:p,Mixed:g,SeveralLevels:i,Totals:c,TotalsRowUnderLanes:d,__namedExportsOrder:q,default:F},Symbol.toStringTag,{value:"Module"}));export{H as R};
