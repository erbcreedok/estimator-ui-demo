import{e as ae,S as n,E as ne,f as oe,F as re,i as se,I as le,a as ie,L as ce,o as he,O,b as ue,s as me,c as de,d as ye,t as pe,T as we,_ as fe}from"./table-D3NdR-uV.js";import{bk as b,bl as be,c as o,j as t,M as r,s,b as g,p as x,d as ee,e as T,f as ge}from"./products-CTiDOXRn.js";const{part:k,sideBySide:xe,swap:Te}=be,f={sideBySide:{value:b.sideBySide,code:"utilityLayout.sideBySide"},swapOnHover:{value:b.swapOnHover,code:"utilityLayout.swapOnHover"},legacy:{value:b.legacy,code:"utilityLayout.legacy"},always:{value:b.always,code:"utilityLayout.always"},"your own":{value:([e,l,te])=>xe(k(e),Te(k(te),k(l),["hover","focus","selected"])),code:`([handle, box, number]) =>
	sideBySide(
		part(handle), // always there, on the left
		swap(part(number), part(box), ['hover', 'focus', 'selected']) // the number, and the checkbox in its place
	)`}},v={"Name first":{value:["name","team","role","country"],code:"['name', 'team', 'role', 'country']"},"Team first":{value:["team","name","role","country"],code:"['team', 'name', 'role', 'country']"},"Country first":{value:["country","name","team","role"],code:"['country', 'name', 'team', 'role']"}},[a]=Object.values([fe]),ke={title:"Tables/Table Core/Features/Utility column/Your own",id:"tables-table-core-features-utility-column-own",...ge(a)},S=e=>({...ee(Object.fromEntries(e.map(l=>[l,f[l]])))}),C=(...e)=>Object.fromEntries(e.map(l=>[l,f[l]])),i={tags:["kb:utility-column-separate"],name:"2 · The handle in a column of its own",parameters:{...s(a,"Separate"),summary:"`createUtilityColumn(helper, { parts: [rowDragHandle()] })` and a second column with `rowCheckbox()` and `rowNumber()`: each column is made of the parts it lists."},render:()=>t.jsx(n,{hint:t.jsx(r,{text:"Two utility columns: the first holds the handle, the second the checkbox and the number (hover it: the number turns into the checkbox). Take a row by its handle and drop it."}),table:de}),play:async e=>{o(e)||await me(e.canvasElement)}},c={tags:["kb:utility-column-one-column"],name:"3 · One column, one header",parameters:{...s(a,"OneColumn",T({layout:C("sideBySide","always")})),summary:"`parts: [rowDragHandle(), rowCheckbox(), rowNumber()]` in one column: the layout stands them, and the header is the same layout of the same parts."},args:{layout:"sideBySide"},argTypes:{layout:S(["sideBySide","always"])},render:e=>t.jsx(g,{args:e,children:t.jsx(n,{hint:t.jsx(r,{text:"⋮⋮ ☐ 12 in one cell, and **#** with select all in the one header. The column is as wide as its layout (**sideBySide**: the three added up; **always**: the three on top of each other, the widest)."}),table:O,props:{layout:x(f,e.layout)}})}),play:async e=>{o(e)||await he(e.canvasElement,e.args.layout==="always"?48:96)}},h={tags:["kb:utility-column-swap-on-hover"],name:"4 · The number, and the handle with the checkbox on hover",parameters:{...s(a,"SwapOnHover",T({layout:C("swapOnHover")})),summary:"`utilityLayout.swapOnHover`: the row shows its number; the pointer on the row, the focus in the cell or a selection bring the handle and the checkbox in its place."},args:{layout:"swapOnHover"},argTypes:{layout:S(["swapOnHover"])},render:e=>t.jsx(g,{args:e,children:t.jsx(n,{hint:t.jsx(r,{text:"Hover a row, or press a cell: the number gives way to the handle and the checkbox. Tick a row: its checkbox stays. The parts that are hidden are dimmed, not removed, so the keys still reach them."}),table:O,props:{layout:x(f,e.layout)}})}),play:async e=>{o(e)||await ye(e.canvasElement)}},u={tags:["kb:utility-column-own"],name:"5 · A layout of your own",parameters:{...s(a,"Own",T({layout:C("your own","swapOnHover")})),summary:"A layout is a function of the parts that gives a small tree: `part`, `sideBySide`, `overlay`, `reveal`, `swap`. The width of the column is read from it."},args:{layout:"your own"},argTypes:{layout:S(["your own","swapOnHover"])},render:e=>t.jsx(g,{args:e,children:t.jsx(n,{hint:t.jsx(r,{text:"The handle is always on the left; the number and the checkbox take turns. Read the layout in Code: five lines. Pick **swapOnHover** to see the ready one beside it."}),table:O,props:{layout:x(f,e.layout)}})}),play:async e=>{o(e)||await ue(e.canvasElement)}},m={tags:["kb:utility-column-in-name"],name:"6 · The handle and the checkbox in the Name cell",parameters:{...s(a,"InName"),summary:"The parts are components: `RowDragHandle`, `RowCheckbox`, `SelectAllCheckbox` stand in any cell of your own, with no utility column."},render:()=>t.jsx(n,{hint:t.jsx(r,{text:"No utility column: the handle and the checkbox stand in front of the name, and select all in the Name header. Take a row by its handle."}),table:le}),play:async e=>{o(e)||await se(e.canvasElement)}},d={tags:["kb:utility-column-first-column"],name:"7 · The parts follow the first column",parameters:{...s(a,"FollowsTheFirstColumn",T({columnOrder:v})),summary:"`inFirstVisibleColumn(parts)` wraps the cell and the header of the columns that may be first: the parts stand in the first column that holds content, by the order, the visibility and the pinning of the table."},args:{columnOrder:"Name first"},argTypes:{columnOrder:ee(v)},render:e=>t.jsx(g,{args:e,children:t.jsx(n,{hint:t.jsx(r,{text:"Pick another first column: the handle and the checkbox move to it. Without the wrapper the parts would stay where you put them; with it, whichever column is first has them. The column keeps the width you gave it."}),table:re,props:{columnOrder:x(v,e.columnOrder)}})}),play:async e=>{o(e)||await oe(e)}},y={tags:["kb:utility-column-together"],name:"8 · All together: cells, frozen columns and groups",parameters:{...s(a,"Together"),summary:"The utility column as in the product, frozen with Name, over groups drawn as rows and the selection of cells: the checkbox of a group stands where the checkboxes of its rows do."},render:()=>t.jsx(n,{count:14,hint:t.jsx(r,{text:"Grouped by Team, the groups as rows. The checkbox of a group is on the line of the checkboxes of its rows. Press a cell: the cell is active, the utility column and Name stay while the table scrolls sideways."}),table:we}),play:async e=>{o(e)||await pe(e.canvasElement)}},p={tags:["kb:utility-column-lanes-frozen"],name:"9 · Lanes and a frozen column",parameters:{...s(a,"LanesAndFrozen"),summary:"The lanes of the groups stand first, the column of the tools right after them, and when the screen froze columns at the left without listing it, it joins them, first."},render:()=>t.jsx(n,{count:10,hint:t.jsx(r,{text:"Grouped by Team, the groups as lanes; the screen froze **Name** and did not list the column of the tools. The lane stands first, then the column of the tools, then Name, all frozen. List the column in `columnPinning` yourself to put it elsewhere."}),table:ce}),play:async e=>{o(e)||await ie(e.canvasElement)}},w={tags:["kb:utility-column-end-frozen"],name:"10 · At the end, frozen at the right",parameters:{...s(a,"EndFrozenRight"),summary:"`placement: 'end'`: the column of the tools is the last; with columns frozen at the right and not listed, it joins them, last."},render:()=>t.jsx(n,{hint:t.jsx(r,{text:"`createUtilityColumn(helper, { placement: 'end' })`: listed first, it stands last. The screen froze **Role** at the right: the column of the tools joins it, after Role."}),table:ne}),play:async e=>{o(e)||await ae(e.canvasElement)}};var z,A,j;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['kb:utility-column-separate'],
  name: '2 · The handle in a column of its own',
  parameters: {
    ...sceneCodeWith(tableSource, 'Separate'),
    summary: '\`createUtilityColumn(helper, { parts: [rowDragHandle()] })\` and a second column with \`rowCheckbox()\` and \`rowNumber()\`: each column is made of the parts it lists.'
  },
  render: () => <Scene hint={<Md text="Two utility columns: the first holds the handle, the second the checkbox and the number (hover it: the number turns into the checkbox). Take a row by its handle and drop it." />} table={SeparateTable} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await separateAct(ctx.canvasElement);
  }
}`,...(j=(A=i.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var R,E,F;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['kb:utility-column-one-column'],
  name: '3 · One column, one header',
  parameters: {
    ...sceneCodeWith(tableSource, 'OneColumn', presetCodes({
      layout: only('sideBySide', 'always')
    })),
    summary: '\`parts: [rowDragHandle(), rowCheckbox(), rowNumber()]\` in one column: the layout stands them, and the header is the same layout of the same parts.'
  },
  args: {
    layout: 'sideBySide'
  },
  argTypes: {
    layout: layoutControl(['sideBySide', 'always'])
  },
  render: args => <Remount args={args}>
            <Scene hint={<Md text="⋮⋮ ☐ 12 in one cell, and **#** with select all in the one header. The column is as wide as its layout (**sideBySide**: the three added up; **always**: the three on top of each other, the widest)." />} table={OneColumnTable} props={{
      layout: presetValue(LAYOUTS, args.layout)
    }} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await oneColumnAct(ctx.canvasElement, (ctx.args as LayoutArgs).layout === 'always' ? 26 + 22 : 24 + 24 + 26 + 22);
  }
}`,...(F=(E=c.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var N,H,L;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['kb:utility-column-swap-on-hover'],
  name: '4 · The number, and the handle with the checkbox on hover',
  parameters: {
    ...sceneCodeWith(tableSource, 'SwapOnHover', presetCodes({
      layout: only('swapOnHover')
    })),
    summary: '\`utilityLayout.swapOnHover\`: the row shows its number; the pointer on the row, the focus in the cell or a selection bring the handle and the checkbox in its place.'
  },
  args: {
    layout: 'swapOnHover'
  },
  argTypes: {
    layout: layoutControl(['swapOnHover'])
  },
  render: args => <Remount args={args}>
            <Scene hint={<Md text="Hover a row, or press a cell: the number gives way to the handle and the checkbox. Tick a row: its checkbox stays. The parts that are hidden are dimmed, not removed, so the keys still reach them." />} table={OneColumnTable} props={{
      layout: presetValue(LAYOUTS, args.layout)
    }} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await swapAct(ctx.canvasElement);
  }
}`,...(L=(H=h.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var B,M,W;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['kb:utility-column-own'],
  name: '5 · A layout of your own',
  parameters: {
    ...sceneCodeWith(tableSource, 'Own', presetCodes({
      layout: only('your own', 'swapOnHover')
    })),
    summary: 'A layout is a function of the parts that gives a small tree: \`part\`, \`sideBySide\`, \`overlay\`, \`reveal\`, \`swap\`. The width of the column is read from it.'
  },
  args: {
    layout: 'your own'
  },
  argTypes: {
    layout: layoutControl(['your own', 'swapOnHover'])
  },
  render: args => <Remount args={args}>
            <Scene hint={<Md text="The handle is always on the left; the number and the checkbox take turns. Read the layout in Code: five lines. Pick **swapOnHover** to see the ready one beside it." />} table={OneColumnTable} props={{
      layout: presetValue(LAYOUTS, args.layout)
    }} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await ownAct(ctx.canvasElement);
  }
}`,...(W=(M=u.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var _,D,P;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['kb:utility-column-in-name'],
  name: '6 · The handle and the checkbox in the Name cell',
  parameters: {
    ...sceneCodeWith(tableSource, 'InName'),
    summary: 'The parts are components: \`RowDragHandle\`, \`RowCheckbox\`, \`SelectAllCheckbox\` stand in any cell of your own, with no utility column.'
  },
  render: () => <Scene hint={<Md text="No utility column: the handle and the checkbox stand in front of the name, and select all in the Name header. Take a row by its handle." />} table={InNameTable} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await inNameAct(ctx.canvasElement);
  }
}`,...(P=(D=m.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var U,I,V;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['kb:utility-column-first-column'],
  name: '7 · The parts follow the first column',
  parameters: {
    ...sceneCodeWith(tableSource, 'FollowsTheFirstColumn', presetCodes({
      columnOrder: ORDERS
    })),
    summary: '\`inFirstVisibleColumn(parts)\` wraps the cell and the header of the columns that may be first: the parts stand in the first column that holds content, by the order, the visibility and the pinning of the table.'
  },
  args: {
    columnOrder: 'Name first'
  },
  argTypes: {
    columnOrder: presetControl(ORDERS)
  },
  render: args => <Remount args={args}>
            <Scene hint={<Md text="Pick another first column: the handle and the checkbox move to it. Without the wrapper the parts would stay where you put them; with it, whichever column is first has them. The column keeps the width you gave it." />} table={FirstColumnTable} props={{
      columnOrder: presetValue(ORDERS, args.columnOrder)
    }} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await followsAct(ctx);
  }
}`,...(V=(I=d.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var Y,G,$;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['kb:utility-column-together'],
  name: '8 · All together: cells, frozen columns and groups',
  parameters: {
    ...sceneCodeWith(tableSource, 'Together'),
    summary: 'The utility column as in the product, frozen with Name, over groups drawn as rows and the selection of cells: the checkbox of a group stands where the checkboxes of its rows do.'
  },
  render: () => <Scene count={14} hint={<Md text="Grouped by Team, the groups as rows. The checkbox of a group is on the line of the checkboxes of its rows. Press a cell: the cell is active, the utility column and Name stay while the table scrolls sideways." />} table={TogetherTable} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await togetherAct(ctx.canvasElement);
  }
}`,...($=(G=y.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};var q,J,K;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['kb:utility-column-lanes-frozen'],
  name: '9 · Lanes and a frozen column',
  parameters: {
    ...sceneCodeWith(tableSource, 'LanesAndFrozen'),
    summary: 'The lanes of the groups stand first, the column of the tools right after them, and when the screen froze columns at the left without listing it, it joins them, first.'
  },
  render: () => <Scene count={10} hint={<Md text="Grouped by Team, the groups as lanes; the screen froze **Name** and did not list the column of the tools. The lane stands first, then the column of the tools, then Name, all frozen. List the column in \`columnPinning\` yourself to put it elsewhere." />} table={LanesFrozenTable} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await lanesFrozenAct(ctx.canvasElement);
  }
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Z;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ['kb:utility-column-end-frozen'],
  name: '10 · At the end, frozen at the right',
  parameters: {
    ...sceneCodeWith(tableSource, 'EndFrozenRight'),
    summary: "\`placement: 'end'\`: the column of the tools is the last; with columns frozen at the right and not listed, it joins them, last."
  },
  render: () => <Scene hint={<Md text="\`createUtilityColumn(helper, { placement: 'end' })\`: listed first, it stands last. The screen froze **Role** at the right: the column of the tools joins it, after Role." />} table={EndFrozenTable} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await endFrozenAct(ctx.canvasElement);
  }
}`,...(Z=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const ve=["Separate","OneColumn","SwapOnHover","Own","InName","FollowsTheFirstColumn","Together","LanesAndFrozen","EndFrozenRight"],Ce=Object.freeze(Object.defineProperty({__proto__:null,EndFrozenRight:w,FollowsTheFirstColumn:d,InName:m,LanesAndFrozen:p,OneColumn:c,Own:u,Separate:i,SwapOnHover:h,Together:y,__namedExportsOrder:ve,default:ke},Symbol.toStringTag,{value:"Module"}));export{Ce as O};
