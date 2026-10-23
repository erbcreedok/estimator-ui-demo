import{c as i,j as o,b as c,M as u,s as p,aa as O,f as j}from"./products-CTiDOXRn.js";import{T as g}from"./totals-CNUlOeK6.js";import{j as E,p as I,l as M,u as z,m as R}from"./checks-BwzfMUfK.js";import{S as d,s as n}from"./scene-CB7jjebp.js";const W={title:"Tables/Table Core/Features/Grouping/Look/Lanes",id:"tables-table-core-features-grouping-look-lanes",...j(n)},t={tags:["kb:group-lanes-lanes-and-pinning"],name:"1 · Lanes and freezing",parameters:{...p(n,"LanesAndPinning"),summary:"A lane of a frozen column sticks like the frozen columns."},args:{initialPinning:{start:["team"],end:[]},initialGrouping:["team"],groupLayout:"lanes",groupTotals:"none",groupIndent:"none",enableGroupSelect:!0},argTypes:{initialPinning:{control:!1},initialGrouping:{control:!1},groupLayout:{control:"radio",options:["lanes","rows"]},groupTotals:{control:"radio",options:g},groupIndent:{control:"radio",options:["none","depth"]},enableGroupSelect:{control:"boolean"}},render:e=>o.jsx(c,{args:e,children:o.jsx(d,{...e,narrow:!0,hint:o.jsx(u,{text:"**Team** is frozen: its lane sticks at the left while the table scrolls sideways, as a frozen column does; the lane of an unfrozen column scrolls away."})})}),play:async e=>{i(e)||(O(e.canvasElement),await I(e.canvasElement))}},a={tags:["kb:group-lanes-select-group"],name:"2 · Select a whole group",parameters:{...p(n,"SelectGroup"),summary:"The checkbox of a group selects all its rows; a part-selected group shows a dash."},args:{initialSelection:{p1:!0},initialGrouping:["team"],groupLayout:"lanes",groupTotals:"none",groupIndent:"none",enableGroupSelect:!0},argTypes:{initialSelection:{control:!1},initialGrouping:{control:!1},groupLayout:{control:"radio",options:["lanes","rows"]},groupTotals:{control:"radio",options:g},groupIndent:{control:"radio",options:["none","depth"]},enableGroupSelect:{control:"boolean"}},render:e=>o.jsx(c,{args:e,children:o.jsx(d,{...e,hint:o.jsx(u,{text:"One row is selected, so its **Team** group shows a dash. Tick the group’s checkbox: the whole group is selected."})})}),play:async e=>{i(e)||await M(e.canvasElement)}},r={tags:["kb:group-lanes-utility-column"],name:"3 · Utility column",parameters:{...p(n,"UtilityColumn"),summary:"The utility column right after the lanes: numbers go across the groups, the group checkbox selects."},args:{utility:!0,initialGrouping:["team"],groupLayout:"lanes",groupTotals:"none",groupIndent:"none",enableGroupSelect:!0},argTypes:{utility:{control:{type:"boolean"}},initialGrouping:{control:!1},groupLayout:{control:"radio",options:["lanes","rows"]},groupTotals:{control:"radio",options:g},groupIndent:{control:"radio",options:["none","depth"]},enableGroupSelect:{control:"boolean"}},render:e=>o.jsx(c,{args:e,children:o.jsx(d,{...e,hint:o.jsx(u,{text:"The screen adds `createUtilityColumn` and freezes it first. The lane block stands first, the utility column right after it; numbers go 1, 2, 3 across the groups. Tick a group checkbox: the whole group is selected."})})}),play:async e=>{i(e)||await z(e.canvasElement)}},s={tags:["kb:group-lanes-with-sorting-and-chains"],name:"4 · With sorting and chains",parameters:{...p(n,"WithSortingAndChains"),summary:"Sorting orders the rows inside the groups; a grouped member leaves its chain."},args:{set:"location",chainsOpen:!0,chains:[{id:"location",label:"Location",columns:["country","tier","city"]}],initialGrouping:["team"],initialSorting:[{id:"name",desc:!1}],enableMultiGroup:!1,toolbar:!0,groupLayout:"lanes",groupTotals:"none",groupIndent:"none",enableGroupSelect:!0},argTypes:{set:{control:!1},chainsOpen:{control:{type:"boolean"}},chains:{control:!1},initialGrouping:{control:!1},initialSorting:{control:!1},enableMultiGroup:{control:{type:"boolean"}},toolbar:{control:{type:"boolean"}},groupLayout:{control:"radio",options:["lanes","rows"]},groupTotals:{control:"radio",options:g},groupIndent:{control:"radio",options:["none","depth"]},enableGroupSelect:{control:"boolean"}},render:e=>o.jsx(c,{args:e,children:o.jsx(d,{...e,hint:o.jsx(u,{text:"Rows are sorted by **Name** inside each Team group. Group by **City** from the toolbar: it replaces Team (one grouping at a time), City becomes the lane and leaves the chain, the rest of **Location** stays."})})}),play:async e=>{i(e)||await R(e.canvasElement)}},l={tags:["kb:group-lanes-collapse"],name:"5 · Collapse a group",parameters:{...p(n,"CollapseAGroup"),summary:"A group folds to one row that keeps its cell; the button in the lane header folds or opens them all."},args:{initialGrouping:["team"],groupLayout:"lanes",groupTotals:"none",groupIndent:"none",enableGroupSelect:!0},argTypes:{initialGrouping:{control:!1},groupLayout:{control:"radio",options:["lanes","rows"]},groupTotals:{control:"radio",options:g},groupIndent:{control:"radio",options:["none","depth"]},enableGroupSelect:{control:"boolean"}},render:e=>o.jsx(c,{args:e,children:o.jsx(d,{...e,hint:o.jsx(u,{text:"Click the **−** of a group: its rows go and one row stays, so the group keeps its cell. The button in the lane header opens every group while one is folded, and folds every group while all are open."})})}),play:async e=>{i(e)||await E(e.canvasElement)}};var h,m,y;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['kb:group-lanes-lanes-and-pinning'],
  name: '1 · Lanes and freezing',
  parameters: {
    ...sceneCodeWith(source, 'LanesAndPinning'),
    summary: 'A lane of a frozen column sticks like the frozen columns.'
  },
  args: {
    initialPinning: {
      start: ['team'],
      end: []
    },
    initialGrouping: ['team'],
    groupLayout: 'lanes',
    groupTotals: 'none',
    groupIndent: 'none',
    enableGroupSelect: true
  },
  argTypes: {
    initialPinning: {
      control: false
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
            <Scene {...args} narrow hint={<Md text="**Team** is frozen: its lane sticks at the left while the table scrolls sideways, as a frozen column does; the lane of an unfrozen column scrolls away." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    fillsCard(ctx.canvasElement);
    await pinnedLaneAct(ctx.canvasElement);
  }
}`,...(y=(m=t.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var f,b,T;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['kb:group-lanes-select-group'],
  name: '2 · Select a whole group',
  parameters: {
    ...sceneCodeWith(source, 'SelectGroup'),
    summary: 'The checkbox of a group selects all its rows; a part-selected group shows a dash.'
  },
  args: {
    initialSelection: {
      p1: true
    },
    initialGrouping: ['team'],
    groupLayout: 'lanes',
    groupTotals: 'none',
    groupIndent: 'none',
    enableGroupSelect: true
  },
  argTypes: {
    initialSelection: {
      control: false
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
            <Scene {...args} hint={<Md text="One row is selected, so its **Team** group shows a dash. Tick the group’s checkbox: the whole group is selected." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await selectGroupAct(ctx.canvasElement);
  }
}`,...(T=(b=a.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var S,G,w;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['kb:group-lanes-utility-column'],
  name: '3 · Utility column',
  parameters: {
    ...sceneCodeWith(source, 'UtilityColumn'),
    summary: 'The utility column right after the lanes: numbers go across the groups, the group checkbox selects.'
  },
  args: {
    utility: true,
    initialGrouping: ['team'],
    groupLayout: 'lanes',
    groupTotals: 'none',
    groupIndent: 'none',
    enableGroupSelect: true
  },
  argTypes: {
    utility: {
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
            <Scene {...args} hint={<Md text="The screen adds \`createUtilityColumn\` and freezes it first. The lane block stands first, the utility column right after it; numbers go 1, 2, 3 across the groups. Tick a group checkbox: the whole group is selected." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await utilityColumnAct(ctx.canvasElement);
  }
}`,...(w=(G=r.parameters)==null?void 0:G.docs)==null?void 0:w.source}}};var x,k,L;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['kb:group-lanes-with-sorting-and-chains'],
  name: '4 · With sorting and chains',
  parameters: {
    ...sceneCodeWith(source, 'WithSortingAndChains'),
    summary: 'Sorting orders the rows inside the groups; a grouped member leaves its chain.'
  },
  args: {
    set: 'location',
    chainsOpen: true,
    chains: [{
      id: 'location',
      label: 'Location',
      columns: ['country', 'tier', 'city']
    }],
    initialGrouping: ['team'],
    initialSorting: [{
      id: 'name',
      desc: false
    }],
    enableMultiGroup: false,
    toolbar: true,
    groupLayout: 'lanes',
    groupTotals: 'none',
    groupIndent: 'none',
    enableGroupSelect: true
  },
  argTypes: {
    set: {
      control: false
    },
    chainsOpen: {
      control: {
        type: 'boolean'
      }
    },
    chains: {
      control: false
    },
    initialGrouping: {
      control: false
    },
    initialSorting: {
      control: false
    },
    enableMultiGroup: {
      control: {
        type: 'boolean'
      }
    },
    toolbar: {
      control: {
        type: 'boolean'
      }
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
            <Scene {...args} hint={<Md text="Rows are sorted by **Name** inside each Team group. Group by **City** from the toolbar: it replaces Team (one grouping at a time), City becomes the lane and leaves the chain, the rest of **Location** stays." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await sortingChainsAct(ctx.canvasElement);
  }
}`,...(L=(k=s.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var A,C,v;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['kb:group-lanes-collapse'],
  name: '5 · Collapse a group',
  parameters: {
    ...sceneCodeWith(source, 'CollapseAGroup'),
    summary: 'A group folds to one row that keeps its cell; the button in the lane header folds or opens them all.'
  },
  args: {
    initialGrouping: ['team'],
    groupLayout: 'lanes',
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
            <Scene {...args} hint={<Md text="Click the **−** of a group: its rows go and one row stays, so the group keeps its cell. The button in the lane header opens every group while one is folded, and folds every group while all are open." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await collapseGroupAct(ctx.canvasElement);
  }
}`,...(v=(C=l.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};const _=["LanesAndPinning","SelectGroup","UtilityColumn","WithSortingAndChains","CollapseAGroup"],q=Object.freeze(Object.defineProperty({__proto__:null,CollapseAGroup:l,LanesAndPinning:t,SelectGroup:a,UtilityColumn:r,WithSortingAndChains:s,__namedExportsOrder:_,default:W},Symbol.toStringTag,{value:"Module"}));export{q as L};
