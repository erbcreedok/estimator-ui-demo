import{_ as L}from"./groups-table-SMxKwff6.js";import{c as m,j as o,b as c,M as y,d as f,s as v,e as R,f as T}from"./products-CTiDOXRn.js";import{g as k}from"./checks-D4hArpik.js";import{h as b,p as n,H as s}from"./handlers-DXU2ZPok.js";import{G as M}from"./groups-scene-ClqtEPWL.js";const[a]=Object.values([L]),x={title:"Tables/Table Core/Features/Rows on the move/Groups",id:"tables-table-core-features-rows-move-groups",...T(a)},A={control:{type:"radio"},options:["lanes","rows"]},p=["only groups jump"],h=["flipRows","flipRows + keepAnchorInView"],t={tags:["kb:rows-move-groups-only"],name:"11 · A handler of your own: only the groups jump",parameters:{...v(a,"OnlyTheGroups",R({onRowsMove:n(s,p)})),summary:"The moves tell rows and groups apart (`kind`), so a handler of a few lines can animate only the groups: no change in the library. Thirty teams of four people."},args:{onRowsMove:"only groups jump",groupLayout:"rows"},argTypes:{onRowsMove:{...f(n(s,p))},groupLayout:A},render:e=>o.jsx(c,{args:e,children:o.jsx(M,{groupLayout:e.groupLayout,handler:b(e.onRowsMove),hint:o.jsx(y,{text:"Thirty teams, the table opens in the middle. Drag the first person in the window onto the band of a team two below: the groups under the way make room, and those that change place hop (the handler is the 12 lines shown in Code); the rows do not move. Without a handler, nothing says that the groups moved."})})}),play:async e=>{m(e)||await k(e,{groups:!0,rows:!1,keeps:!1})}},r={tags:["kb:rows-move-groups-flip"],name:"12 · A row dropped into a far group",parameters:{...v(a,"DropBetweenGroups",R({onRowsMove:n(s,h)})),summary:"A person dropped into a team two groups down lands out of the window. `flipRows()` slides the rows and groups that moved; with `keepAnchorInView()` the table follows the person, who stays at the height they were taken from."},args:{onRowsMove:"flipRows + keepAnchorInView",groupLayout:"lanes"},argTypes:{onRowsMove:{...f(n(s,h))},groupLayout:A},render:e=>o.jsx(c,{args:e,children:o.jsx(M,{groupLayout:e.groupLayout,handler:b(e.onRowsMove),hint:o.jsx(y,{text:"Thirty teams of four. Drag the first person in the window into the team two groups below: it lands at the end of that team, out of the window. Compare the three presets: with no handler the person is lost, `flipRows()` slides the groups apart, and with `keepAnchorInView()` too the table follows the person."})})}),play:async e=>{m(e)||await k(e,{groups:!0,rows:!0,keeps:!0})}};var u,i,l;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['kb:rows-move-groups-only'],
  name: '11 · A handler of your own: only the groups jump',
  parameters: {
    ...sceneCodeWith(groupsSource, 'OnlyTheGroups', presetCodes({
      onRowsMove: pick(HANDLERS, only)
    })),
    summary: 'The moves tell rows and groups apart (\`kind\`), so a handler of a few lines can animate only the groups: no change in the library. Thirty teams of four people.'
  },
  args: {
    onRowsMove: 'only groups jump',
    groupLayout: 'rows'
  },
  argTypes: {
    onRowsMove: {
      ...presetControl(pick(HANDLERS, only))
    },
    groupLayout: layout
  },
  render: args => <Remount args={args}>
            <GroupsMoveScene groupLayout={args.groupLayout} handler={handlerFor(args.onRowsMove)} hint={<Md text="Thirty teams, the table opens in the middle. Drag the first person in the window onto the band of a team two below: the groups under the way make room, and those that change place hop (the handler is the 12 lines shown in Code); the rows do not move. Without a handler, nothing says that the groups moved." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await groupsMoveAct(ctx, {
      groups: true,
      rows: false,
      keeps: false
    });
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var w,d,g;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['kb:rows-move-groups-flip'],
  name: '12 · A row dropped into a far group',
  parameters: {
    ...sceneCodeWith(groupsSource, 'DropBetweenGroups', presetCodes({
      onRowsMove: pick(HANDLERS, flipAndKeep)
    })),
    summary: 'A person dropped into a team two groups down lands out of the window. \`flipRows()\` slides the rows and groups that moved; with \`keepAnchorInView()\` the table follows the person, who stays at the height they were taken from.'
  },
  args: {
    onRowsMove: 'flipRows + keepAnchorInView',
    groupLayout: 'lanes'
  },
  argTypes: {
    onRowsMove: {
      ...presetControl(pick(HANDLERS, flipAndKeep))
    },
    groupLayout: layout
  },
  render: args => <Remount args={args}>
            <GroupsMoveScene groupLayout={args.groupLayout} handler={handlerFor(args.onRowsMove)} hint={<Md text="Thirty teams of four. Drag the first person in the window into the team two groups below: it lands at the end of that team, out of the window. Compare the three presets: with no handler the person is lost, \`flipRows()\` slides the groups apart, and with \`keepAnchorInView()\` too the table follows the person." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await groupsMoveAct(ctx, {
      groups: true,
      rows: true,
      keeps: true
    });
  }
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const j=["OnlyTheGroups","DropBetweenGroups"],O=Object.freeze(Object.defineProperty({__proto__:null,DropBetweenGroups:r,OnlyTheGroups:t,__namedExportsOrder:j,default:x},Symbol.toStringTag,{value:"Module"}));export{O as G};
