import{_ as q}from"./moves-table-Cvbaw1oe.js";import{r as y,j as t,S as G,c as l,b as w,M as i,p as m,s as c,f as J,e as Q,d as X}from"./products-CTiDOXRn.js";import{f as Y,a as Z,o as $,s as ee,e as te}from"./checks-D4hArpik.js";import{H as d,p as oe}from"./handlers-DXU2ZPok.js";import{a as re,M as p}from"./moves-scene-nOObvJbz.js";import{a as se}from"./people-DY4ww1HD.js";const ae=12,ne=({hint:e})=>{const[H,F]=y.useState(()=>se(ae)),[D,K]=y.useState([]);return t.jsxs(G,{hint:e,children:[t.jsx(re,{rows:H,onEdit:(B,z,P)=>F(U=>U.map(f=>f.id===B?{...f,[z]:P}:f)),onRowOrderChange:K}),t.jsxs("pre",{"data-row-order":!0,style:{margin:0,padding:"8px 12px",fontSize:12},children:["onRowOrderChange → ",D.join(", ")]})]})},[o]=Object.values([q]),he={title:"Tables/Table Core/Features/Rows on the move/Sort and edit",id:"tables-table-core-features-rows-move-sort",...J(o)},g=(...e)=>oe(d,e),u=(...e)=>({argTypes:{onRowsMove:{...X(g(...e))}},codes:Q({onRowsMove:g(...e)})}),v=u("readout"),T=u("flipRows"),b=u("keepAnchorInView + flash","keepAnchorInView"),k=u("scrollToAnchor","scrollToAnchor, instant","scrollToAnchor, 300 ms","scrollToAnchor, 600 ms","scrollToAnchor, 1000 ms","scrollToAnchor, flashOpacity","scrollToAnchor, flashBorder","scrollToAnchor, flashCell","scrollToAnchor, no flash","scrollToAnchor, own flash"),r={tags:["kb:rows-move-event"],name:"1 · The event",parameters:{...c(o,"TheEvent",v.codes),summary:"When rows change place the table says it once: what moved, why (`causes`), and which row to keep an eye on (`anchorId`). 300 people, the table opens in the middle."},args:{onRowsMove:"readout"},argTypes:v.argTypes,render:e=>t.jsx(w,{args:e,children:t.jsx(p,{handler:m(d,e.onRowsMove),hint:t.jsx(i,{text:"300 people, sorted by **Level**; the table opens in the middle. Click the header of **Team**: a sort moves every row, and the readout says `sort` and how many moved. Then type **C2** in the Level of a row: it goes to the very end, and the event says `edit` and `data`, and that this row is the **anchor**. Only facts: what to do with them is yours."})})}),play:async e=>{l(e)||await te(e.canvasElement)}},s={tags:["kb:rows-move-flip"],name:"2 · Rows slide when the sort changes",parameters:{...c(o,"FlipOnSort",T.codes),summary:"`flipRows()` is a ready handler: each row that moved slides from where it stood to where it stands. A row that comes from out of the window starts at the edge of it, a row that leaves goes to the edge: the slide is never longer than the window."},args:{onRowsMove:"flipRows"},argTypes:T.argTypes,render:e=>t.jsx(w,{args:e,children:t.jsx(p,{handler:m(d,e.onRowsMove),hint:t.jsx(i,{text:"Click the header of **Team**, then **Level**, then **Name**: every sort brings other people into the window. With `flipRows()` they slide in from the edge, the rest slide to their new places; without a handler the rows just change. Nothing slides when the system asks for less motion."})})}),play:async e=>{l(e)||await Y(e)}},a={tags:["kb:rows-move-anchor"],name:"3 · The row you edit stays where your eye is",parameters:{...c(o,"KeepTheAnchor",b.codes),summary:"An edited Level sends the row far away under the sort. Without a handler it leaves the window and you have lost it; `keepAnchorInView()` scrolls the table so it stands at the same height, and the flash says which one."},args:{onRowsMove:"keepAnchorInView + flash"},argTypes:b.argTypes,render:e=>t.jsx(w,{args:e,children:t.jsx(p,{readout:"anchor",handler:m(d,e.onRowsMove),hint:t.jsx(i,{text:"The table opens in the middle of 300 people sorted by **Level**. Type **C1** in the Level of a row: it goes about a hundred rows down. Without a handler it is gone from the window; with `keepAnchorInView` the table scrolls with it, the row flashes, and the readout says its height in the window before and after."})})}),play:async e=>{l(e)||await Z(e)}},n={tags:["kb:rows-move-scroll-to"],name:"4 · Scroll to the row that moved",parameters:{...c(o,"ScrollToTheAnchor",k.codes),summary:"`scrollToAnchor()` scrolls the table to the row that moved (smoothly, in a time by the distance, or the `duration` you say) and flashes it when the scroll has ended; touching the table takes the scroll over. Here the row goes to the very end of 300."},args:{onRowsMove:"scrollToAnchor"},argTypes:k.argTypes,render:e=>t.jsx(w,{args:e,children:t.jsx(p,{readout:"anchor",handler:m(d,e.onRowsMove),hint:t.jsx(i,{text:"Type **C2** in the Level of a row: under the sort it is the last row of 300. Without a handler the table stays where it was and the row is far below the window; with `scrollToAnchor()` the table scrolls to it and it flashes when it is there. Take the mouse wheel while it scrolls: the scroll stops, and the readout says `cancelled`. The control picks the time (instant, 300, 600 or 1000 ms) and how the row is shown (the accent of the theme: background, blink, frame, only the edited cell, none, or a function of your own)."})})}),play:async e=>{l(e)||await ee(e)}},h={tags:["kb:rows-move-order-out"],name:"18 · The order the screen keeps",parameters:{...c(o,"OrderOut"),summary:"`onRowOrderChange` gives the ids of the rows in the order the user sees them, once at first and again after a sort or a change of the data."},render:()=>t.jsx(ne,{hint:t.jsx(i,{text:"Twelve people, sorted by **Level**. Below the table is what the screen got from `onRowOrderChange`: the ids in the order on the screen. Click **Team**: the order changes and the screen gets it again. Click **Level**: the first order comes back. The table reports the order; keeping it is yours."})}),play:async e=>{l(e)||await $(e.canvasElement)}};var A,R,x;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['kb:rows-move-event'],
  name: '1 · The event',
  parameters: {
    ...sceneCodeWith(tableSource, 'TheEvent', event.codes),
    summary: 'When rows change place the table says it once: what moved, why (\`causes\`), and which row to keep an eye on (\`anchorId\`). 300 people, the table opens in the middle.'
  },
  args: {
    onRowsMove: 'readout'
  },
  argTypes: event.argTypes,
  render: args => <Remount args={args}>
            <MovesScene handler={presetValue(HANDLERS, args.onRowsMove)} hint={<Md text="300 people, sorted by **Level**; the table opens in the middle. Click the header of **Team**: a sort moves every row, and the readout says \`sort\` and how many moved. Then type **C2** in the Level of a row: it goes to the very end, and the event says \`edit\` and \`data\`, and that this row is the **anchor**. Only facts: what to do with them is yours." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await eventAct(ctx.canvasElement);
  }
}`,...(x=(R=r.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};var S,O,M;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['kb:rows-move-flip'],
  name: '2 · Rows slide when the sort changes',
  parameters: {
    ...sceneCodeWith(tableSource, 'FlipOnSort', flip.codes),
    summary: '\`flipRows()\` is a ready handler: each row that moved slides from where it stood to where it stands. A row that comes from out of the window starts at the edge of it, a row that leaves goes to the edge: the slide is never longer than the window.'
  },
  args: {
    onRowsMove: 'flipRows'
  },
  argTypes: flip.argTypes,
  render: args => <Remount args={args}>
            <MovesScene handler={presetValue(HANDLERS, args.onRowsMove)} hint={<Md text="Click the header of **Team**, then **Level**, then **Name**: every sort brings other people into the window. With \`flipRows()\` they slide in from the edge, the rest slide to their new places; without a handler the rows just change. Nothing slides when the system asks for less motion." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await flipAct(ctx);
  }
}`,...(M=(O=s.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var C,j,L;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['kb:rows-move-anchor'],
  name: '3 · The row you edit stays where your eye is',
  parameters: {
    ...sceneCodeWith(tableSource, 'KeepTheAnchor', anchor.codes),
    summary: 'An edited Level sends the row far away under the sort. Without a handler it leaves the window and you have lost it; \`keepAnchorInView()\` scrolls the table so it stands at the same height, and the flash says which one.'
  },
  args: {
    onRowsMove: 'keepAnchorInView + flash'
  },
  argTypes: anchor.argTypes,
  render: args => <Remount args={args}>
            <MovesScene readout="anchor" handler={presetValue(HANDLERS, args.onRowsMove)} hint={<Md text="The table opens in the middle of 300 people sorted by **Level**. Type **C1** in the Level of a row: it goes about a hundred rows down. Without a handler it is gone from the window; with \`keepAnchorInView\` the table scrolls with it, the row flashes, and the readout says its height in the window before and after." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await anchorAct(ctx);
  }
}`,...(L=(j=a.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var E,W,V;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['kb:rows-move-scroll-to'],
  name: '4 · Scroll to the row that moved',
  parameters: {
    ...sceneCodeWith(tableSource, 'ScrollToTheAnchor', scrollTo.codes),
    summary: '\`scrollToAnchor()\` scrolls the table to the row that moved (smoothly, in a time by the distance, or the \`duration\` you say) and flashes it when the scroll has ended; touching the table takes the scroll over. Here the row goes to the very end of 300.'
  },
  args: {
    onRowsMove: 'scrollToAnchor'
  },
  argTypes: scrollTo.argTypes,
  render: args => <Remount args={args}>
            <MovesScene readout="anchor" handler={presetValue(HANDLERS, args.onRowsMove)} hint={<Md text="Type **C2** in the Level of a row: under the sort it is the last row of 300. Without a handler the table stays where it was and the row is far below the window; with \`scrollToAnchor()\` the table scrolls to it and it flashes when it is there. Take the mouse wheel while it scrolls: the scroll stops, and the readout says \`cancelled\`. The control picks the time (instant, 300, 600 or 1000 ms) and how the row is shown (the accent of the theme: background, blink, frame, only the edited cell, none, or a function of your own)." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await scrollToAct(ctx);
  }
}`,...(V=(W=n.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var _,I,N;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['kb:rows-move-order-out'],
  name: '18 · The order the screen keeps',
  parameters: {
    ...sceneCodeWith(tableSource, 'OrderOut'),
    summary: '\`onRowOrderChange\` gives the ids of the rows in the order the user sees them, once at first and again after a sort or a change of the data.'
  },
  render: () => <OrderScene hint={<Md text="Twelve people, sorted by **Level**. Below the table is what the screen got from \`onRowOrderChange\`: the ids in the order on the screen. Click **Team**: the order changes and the screen gets it again. Click **Level**: the first order comes back. The table reports the order; keeping it is yours." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await orderAct(ctx.canvasElement);
  }
}`,...(N=(I=h.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};const le=["TheEvent","FlipOnSort","KeepTheAnchor","ScrollToTheAnchor","OrderOut"],ue=Object.freeze(Object.defineProperty({__proto__:null,FlipOnSort:s,KeepTheAnchor:a,OrderOut:h,ScrollToTheAnchor:n,TheEvent:r,__namedExportsOrder:le,default:he},Symbol.toStringTag,{value:"Module"}));export{ue as S};
