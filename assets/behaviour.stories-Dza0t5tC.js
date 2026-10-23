import{S as E,_ as T}from"./scene-DCjKWwYG.js";import{S as x,_ as G}from"./scene-CB7jjebp.js";import{c as s,j as n,b as l,M as d,p as g,d as c,s as m,e as f,f as _}from"./products-CTiDOXRn.js";import{e as v,b as R,r as A}from"./checks-NmFlyDuA.js";import{e as C,i as j}from"./controls-umORIRv-.js";import{P as a,G as o}from"./presets-CL-lb5ZU.js";const[h]=Object.values([T]),k={title:"Tables/Table Core/Features/Freezing/Behaviour",id:"tables-table-core-features-freezing-behaviour",..._(h)},[I]=Object.values([G]),t={tags:["kb:freeze-reorder"],name:"4 · Reorder the frozen columns",parameters:{...m(h,"Reorder",f({initialPinning:a})),summary:"Dragging a frozen column reorders the frozen ones; a drag never freezes."},args:{initialPinning:"Name and Team"},argTypes:{initialPinning:c(a)},render:e=>n.jsx(l,{args:e,children:n.jsx(E,{initialPinning:g(a,e.initialPinning),hint:n.jsx(d,{text:"**Name** and **Team** are frozen at the left. Drag **Team** before **Name**: they swap — the order is `columnPinning.start`. Drag **Role** before Team: it stays where it was — a column moves only inside its zone, and a drag never freezes."})})}),play:async e=>{s(e)||(await A(e.canvasElement),await j(e))}},r={tags:["kb:freeze-edge"],name:"5 · The edge of the zone",parameters:{...m(h,"Edge",f({initialPinning:a})),summary:"A line and a shadow at the edge of the frozen zone once content is under it."},args:{initialPinning:"Name",frozenEdge:"onScroll"},argTypes:{initialPinning:c(a),frozenEdge:{control:"radio",options:["onScroll","line","always"]}},render:e=>n.jsx(l,{args:e,children:n.jsx(E,{initialPinning:g(a,e.initialPinning),frozenEdge:e.frozenEdge,hint:n.jsx(d,{text:"Scroll the table sideways: once content is under the frozen **Name**, its right edge gets a line and a soft shadow (`frozenEdge`: `'onScroll'` by default, `'line'` keeps the line at rest, `'always'` both)."})})}),play:async e=>{s(e)||(await v(e.canvasElement),await C(e))}},i={tags:["kb:freeze-edge-after-lane"],name:"5b · The edge after a lane",parameters:{...m(I,"EdgeAfterLane",f({initialGrouping:o})),summary:"The lane of an unfrozen grouped column stands before the frozen column: the edge shows once the lane has left, not before."},args:{initialGrouping:"Team"},argTypes:{initialGrouping:c(o)},render:e=>n.jsx(l,{args:e,children:n.jsx(x,{width:520,initialGrouping:g(o,e.initialGrouping),initialPinning:{start:["name"],end:[]},hint:n.jsx(d,{text:"**Name** is frozen, the table is grouped by a column that is not: its lane stands first, before **Name**. Scroll sideways: while the lane scrolls away there is no edge; once **Name** sticks at the left, its edge gets the line and the shadow."})})}),play:async e=>{s(e)||await R(e.canvasElement)}};var u,p,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['kb:freeze-reorder'],
  name: '4 · Reorder the frozen columns',
  parameters: {
    ...sceneCodeWith(tableSource, 'Reorder', presetCodes({
      initialPinning: PINNINGS
    })),
    summary: 'Dragging a frozen column reorders the frozen ones; a drag never freezes.'
  },
  args: {
    initialPinning: 'Name and Team'
  },
  argTypes: {
    initialPinning: presetControl(PINNINGS)
  },
  render: args => <Remount args={args}>
            <Scene initialPinning={presetValue(PINNINGS, args.initialPinning)} hint={<Md text="**Name** and **Team** are frozen at the left. Drag **Team** before **Name**: they swap — the order is \`columnPinning.start\`. Drag **Role** before Team: it stays where it was — a column moves only inside its zone, and a drag never freezes." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await reorderAct(ctx.canvasElement);
    await initialPinningControlAct(ctx);
  }
}`,...(b=(p=t.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var z,y,P;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['kb:freeze-edge'],
  name: '5 · The edge of the zone',
  parameters: {
    ...sceneCodeWith(tableSource, 'Edge', presetCodes({
      initialPinning: PINNINGS
    })),
    summary: 'A line and a shadow at the edge of the frozen zone once content is under it.'
  },
  args: {
    initialPinning: 'Name',
    frozenEdge: 'onScroll'
  },
  argTypes: {
    initialPinning: presetControl(PINNINGS),
    frozenEdge: {
      control: 'radio',
      options: ['onScroll', 'line', 'always']
    }
  },
  render: args => <Remount args={args}>
            <Scene initialPinning={presetValue(PINNINGS, args.initialPinning)} frozenEdge={args.frozenEdge} hint={<Md text="Scroll the table sideways: once content is under the frozen **Name**, its right edge gets a line and a soft shadow (\`frozenEdge\`: \`'onScroll'\` by default, \`'line'\` keeps the line at rest, \`'always'\` both)." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await edgeAct(ctx.canvasElement);
    await edgeControlAct(ctx);
  }
}`,...(P=(y=r.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var w,N,S;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['kb:freeze-edge-after-lane'],
  name: '5b · The edge after a lane',
  parameters: {
    ...sceneCodeWith(groupTableSource, 'EdgeAfterLane', presetCodes({
      initialGrouping: GROUPED_BY
    })),
    summary: 'The lane of an unfrozen grouped column stands before the frozen column: the edge shows once the lane has left, not before.'
  },
  args: {
    initialGrouping: 'Team'
  },
  argTypes: {
    initialGrouping: presetControl(GROUPED_BY)
  },
  render: args => <Remount args={args}>
            <GroupScene width={520} initialGrouping={presetValue(GROUPED_BY, args.initialGrouping)} initialPinning={{
      start: ['name'],
      end: []
    }} hint={<Md text="**Name** is frozen, the table is grouped by a column that is not: its lane stands first, before **Name**. Scroll sideways: while the lane scrolls away there is no edge; once **Name** sticks at the left, its edge gets the line and the shadow." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await edgeAfterLaneAct(ctx.canvasElement);
  }
}`,...(S=(N=i.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};const O=["Reorder","Edge","EdgeAfterLane"],W=Object.freeze(Object.defineProperty({__proto__:null,Edge:r,EdgeAfterLane:i,Reorder:t,__namedExportsOrder:O,default:k},Symbol.toStringTag,{value:"Module"}));export{W as B};
