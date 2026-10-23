import{G,_ as z}from"./groups-table-SMxKwff6.js";import{F as $,S,G as a,_ as q}from"./full-table-C6c0YjtD.js";import{c as n,j as o,b as s,M as i,d as r,s as p,p as F,f as B,e as J}from"./products-CTiDOXRn.js";import{p as T,h as K,H as v}from"./handlers-DXU2ZPok.js";import{c as Q,e as X,i as V,s as Y,t as Z}from"./checks-Df_c61wn.js";import{S as u}from"./scene-B-pT2pmB.js";const[l]=Object.values([z]),[ee]=Object.values([q]),oe={title:"Tables/Table Core/Features/Row drag and drop/Groups",id:"tables-table-core-features-row-drag-groups",...B(l)},g=(e={})=>J({initialGrouping:a,initialSorting:S,...e}),d=e=>({initialGrouping:F(a,e.initialGrouping),groupLayout:e.groupLayout,teamEditing:e.teamEditing,emptyGroup:e.emptyGroup,onRowsMove:K(e.onRowsMove??"without a handler")}),m={control:{type:"radio"},options:["lanes","rows"]},c={tags:["kb:row-drag-into-group-rows"],name:"5 · Into another group: header rows",parameters:{...p(l,"IntoGroupRows",g({onRowsMove:T(v,["flipRows"])})),summary:"Dropped on the band of another group, a row takes the group: the value of the grouping column is written the way an edit writes it, and the hint says what changes."},args:{initialGrouping:"by Team",groupLayout:"rows",onRowsMove:"without a handler"},argTypes:{initialGrouping:{...r(a)},groupLayout:m,onRowsMove:{...r(T(v,["flipRows"]))}},render:e=>o.jsx(s,{args:e,children:o.jsx(u,{table:t=>o.jsx(G,{...t,...d(e)}),hint:o.jsx(i,{text:"Drag **Anna** (Platform) onto the band of **Payments**: the hint says **Team: Platform → Payments**, the band is framed, and on drop her Team is written (`meta.onEdit`) — the same way an edit is. With `flipRows()` the groups and rows slide to their places; more in [Rows on the move](tables-table-core-features-rows-on-the-move-overview--docs)."})})}),play:async e=>{n(e)||await V(e.canvasElement)}},h={tags:["kb:row-drag-into-group-lanes"],name:"6 · Into another group: lanes",parameters:{...p(l,"IntoGroupLanes",g()),summary:"The same with a lane: dropped on the lane of a group or on a row inside it, a row takes the group."},args:{initialGrouping:"by Team",groupLayout:"lanes"},argTypes:{initialGrouping:{...r(a)},groupLayout:m},render:e=>o.jsx(s,{args:e,children:o.jsx(u,{table:t=>o.jsx(G,{...t,...d(e)}),hint:o.jsx(i,{text:"Groups as **lanes**: drop a row on the lane of **Payments**, or on any row of that team."})})}),play:async e=>{n(e)||await V(e.canvasElement)}},y={tags:["kb:row-drag-two-levels"],name:"7 · Two levels",parameters:{...p(l,"TwoLevels",g()),summary:"Dropped into a group of the second level, a row takes both groups: only the columns that differ are written."},args:{initialGrouping:"Team, then Country",groupLayout:"rows"},argTypes:{initialGrouping:{...r(a)},groupLayout:m},render:e=>o.jsx(s,{args:e,children:o.jsx(u,{table:t=>o.jsx(G,{...t,...d(e)}),count:12,hint:o.jsx(i,{text:"Grouped by **Team**, then **Country**. Drop a row into **Germany** inside **Payments**: Team and Country both change; a row that is already in Payments changes only Country."})})}),play:async e=>{n(e)||await Z(e.canvasElement)}},w={tags:["kb:row-drag-cannot-write"],name:"8 · A cell that cannot be written",parameters:{...p(l,"CannotWrite",g()),summary:"A drop into another group writes a cell: when the table does not let it be edited (`resolvers.getCanEdit`, `meta.editable`), the whole drop is refused with that reason."},args:{initialGrouping:"by Team",groupLayout:"rows",teamEditing:"locked"},argTypes:{initialGrouping:{...r(a)},groupLayout:m,teamEditing:{control:{type:"radio"},options:["free","locked"]}},render:e=>o.jsx(s,{args:e,children:o.jsx(u,{table:t=>o.jsx(G,{...t,...d(e)}),hint:o.jsx(i,{text:"Here **Team** is set by Payroll (`getCanEdit` says so): drag a row onto another band and the hint is red with the reason; nothing moves. Switch `teamEditing` to *free* and it works."})})}),play:async e=>{n(e)||await Q(e.canvasElement)}},b={tags:["kb:row-drag-sorted"],name:"9 · A sorted table",parameters:{...p(ee,"Sorted",g()),summary:"While the table is sorted the order is the sort’s: a drop inside a group is refused and says by what; a drop into another group is fine, the sort puts the row in its place."},args:{initialGrouping:"by Team",initialSorting:"by Name",groupLayout:"rows"},argTypes:{initialGrouping:{...r(a)},initialSorting:{...r(S)},groupLayout:m},render:e=>o.jsx(s,{args:e,children:o.jsx(u,{table:t=>o.jsx($,{...t,...d(e),initialSorting:F(S,e.initialSorting??"none")}),hint:o.jsx(i,{text:"Sorted by **Name**: a row dropped between two rows of its own group is refused (*Sorted by Name: the order is the sort’s*); dropped on another group it goes there."})})}),play:async e=>{n(e)||await Y(e.canvasElement)}},f={tags:["kb:row-drag-empty-group"],name:"10 · An empty group",parameters:{...p(l,"EmptyGroup",g()),summary:"A group with no rows (`groupPaths`) takes a row like any other: its value is written."},args:{initialGrouping:"by Team",groupLayout:"rows",emptyGroup:!0},argTypes:{initialGrouping:{...r(a)},groupLayout:m,emptyGroup:{control:{type:"boolean"}}},render:e=>o.jsx(s,{args:e,children:o.jsx(u,{table:t=>o.jsx(G,{...t,...d(e)}),hint:o.jsx(i,{text:"**Design** has no people yet (`groupPaths`). Drop a row on it: Team is written, and the group has its first person."})})}),play:async e=>{n(e)||await X(e.canvasElement)}};var x,R,C;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['kb:row-drag-into-group-rows'],
  name: '5 · Into another group: header rows',
  parameters: {
    ...sceneCodeWith(groupsSource, 'IntoGroupRows', codes({
      onRowsMove: pick(HANDLERS, ['flipRows'])
    })),
    summary: 'Dropped on the band of another group, a row takes the group: the value of the grouping column is written the way an edit writes it, and the hint says what changes.'
  },
  args: {
    initialGrouping: 'by Team',
    groupLayout: 'rows',
    onRowsMove: 'without a handler'
  },
  argTypes: {
    initialGrouping: {
      ...presetControl(GROUPINGS)
    },
    groupLayout: layoutControl,
    onRowsMove: {
      ...presetControl(pick(HANDLERS, ['flipRows']))
    }
  },
  render: args => <Remount args={args}>
            <Scene table={props => <GroupsTable {...props} {...groupArgs(args)} />} hint={<Md text="Drag **Anna** (Platform) onto the band of **Payments**: the hint says **Team: Platform → Payments**, the band is framed, and on drop her Team is written (\`meta.onEdit\`) — the same way an edit is. With \`flipRows()\` the groups and rows slide to their places; more in [Rows on the move](tables-table-core-features-rows-on-the-move-overview--docs)." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await intoGroupAct(ctx.canvasElement);
  }
}`,...(C=(R=c.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var L,k,E;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['kb:row-drag-into-group-lanes'],
  name: '6 · Into another group: lanes',
  parameters: {
    ...sceneCodeWith(groupsSource, 'IntoGroupLanes', codes()),
    summary: 'The same with a lane: dropped on the lane of a group or on a row inside it, a row takes the group.'
  },
  args: {
    initialGrouping: 'by Team',
    groupLayout: 'lanes'
  },
  argTypes: {
    initialGrouping: {
      ...presetControl(GROUPINGS)
    },
    groupLayout: layoutControl
  },
  render: args => <Remount args={args}>
            <Scene table={props => <GroupsTable {...props} {...groupArgs(args)} />} hint={<Md text="Groups as **lanes**: drop a row on the lane of **Payments**, or on any row of that team." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await intoGroupAct(ctx.canvasElement);
  }
}`,...(E=(k=h.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var A,j,P;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['kb:row-drag-two-levels'],
  name: '7 · Two levels',
  parameters: {
    ...sceneCodeWith(groupsSource, 'TwoLevels', codes()),
    summary: 'Dropped into a group of the second level, a row takes both groups: only the columns that differ are written.'
  },
  args: {
    initialGrouping: 'Team, then Country',
    groupLayout: 'rows'
  },
  argTypes: {
    initialGrouping: {
      ...presetControl(GROUPINGS)
    },
    groupLayout: layoutControl
  },
  render: args => <Remount args={args}>
            <Scene table={props => <GroupsTable {...props} {...groupArgs(args)} />} count={12} hint={<Md text="Grouped by **Team**, then **Country**. Drop a row into **Germany** inside **Payments**: Team and Country both change; a row that is already in Payments changes only Country." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await twoLevelsAct(ctx.canvasElement);
  }
}`,...(P=(j=y.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var I,O,N;w.parameters={...w.parameters,docs:{...(I=w.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['kb:row-drag-cannot-write'],
  name: '8 · A cell that cannot be written',
  parameters: {
    ...sceneCodeWith(groupsSource, 'CannotWrite', codes()),
    summary: 'A drop into another group writes a cell: when the table does not let it be edited (\`resolvers.getCanEdit\`, \`meta.editable\`), the whole drop is refused with that reason.'
  },
  args: {
    initialGrouping: 'by Team',
    groupLayout: 'rows',
    teamEditing: 'locked'
  },
  argTypes: {
    initialGrouping: {
      ...presetControl(GROUPINGS)
    },
    groupLayout: layoutControl,
    teamEditing: {
      control: {
        type: 'radio'
      },
      options: ['free', 'locked']
    }
  },
  render: args => <Remount args={args}>
            <Scene table={props => <GroupsTable {...props} {...groupArgs(args)} />} hint={<Md text="Here **Team** is set by Payroll (\`getCanEdit\` says so): drag a row onto another band and the hint is red with the reason; nothing moves. Switch \`teamEditing\` to *free* and it works." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await cannotWriteAct(ctx.canvasElement);
  }
}`,...(N=(O=w.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var M,_,W;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['kb:row-drag-sorted'],
  name: '9 · A sorted table',
  parameters: {
    ...sceneCodeWith(fullSource, 'Sorted', codes()),
    summary: 'While the table is sorted the order is the sort’s: a drop inside a group is refused and says by what; a drop into another group is fine, the sort puts the row in its place.'
  },
  args: {
    initialGrouping: 'by Team',
    initialSorting: 'by Name',
    groupLayout: 'rows'
  },
  argTypes: {
    initialGrouping: {
      ...presetControl(GROUPINGS)
    },
    initialSorting: {
      ...presetControl(SORTINGS)
    },
    groupLayout: layoutControl
  },
  render: args => <Remount args={args}>
            <Scene table={props => <FullTable {...props} {...groupArgs(args)} initialSorting={presetValue(SORTINGS, args.initialSorting ?? 'none')} />} hint={<Md text="Sorted by **Name**: a row dropped between two rows of its own group is refused (*Sorted by Name: the order is the sort’s*); dropped on another group it goes there." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await sortedAct(ctx.canvasElement);
  }
}`,...(W=(_=b.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var D,U,H;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['kb:row-drag-empty-group'],
  name: '10 · An empty group',
  parameters: {
    ...sceneCodeWith(groupsSource, 'EmptyGroup', codes()),
    summary: 'A group with no rows (\`groupPaths\`) takes a row like any other: its value is written.'
  },
  args: {
    initialGrouping: 'by Team',
    groupLayout: 'rows',
    emptyGroup: true
  },
  argTypes: {
    initialGrouping: {
      ...presetControl(GROUPINGS)
    },
    groupLayout: layoutControl,
    emptyGroup: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: args => <Remount args={args}>
            <Scene table={props => <GroupsTable {...props} {...groupArgs(args)} />} hint={<Md text="**Design** has no people yet (\`groupPaths\`). Drop a row on it: Team is written, and the group has its first person." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await emptyGroupAct(ctx.canvasElement);
  }
}`,...(H=(U=f.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};const te=["IntoGroupRows","IntoGroupLanes","TwoLevels","CannotWrite","Sorted","EmptyGroup"],ue=Object.freeze(Object.defineProperty({__proto__:null,CannotWrite:w,EmptyGroup:f,IntoGroupLanes:h,IntoGroupRows:c,Sorted:b,TwoLevels:y,__namedExportsOrder:te,default:oe},Symbol.toStringTag,{value:"Module"}));export{ue as G};
