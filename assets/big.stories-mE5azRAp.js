import{_ as l}from"./moves-table-Cvbaw1oe.js";import{c,j as s,b as p,M as w,p as m,d as u,s as f,e as v,f as T}from"./products-CTiDOXRn.js";import{t as R}from"./checks-D4hArpik.js";import{H as r,p as a}from"./handlers-DXU2ZPok.js";import{M as b}from"./moves-scene-nOObvJbz.js";const[h]=Object.values([l]),y={title:"Tables/Table Core/Features/Rows on the move/Ten thousand rows",id:"tables-table-core-features-rows-move-big",...T(h)},t=["scrollToAnchor","keepAnchorInView + flash","flipRows"],o={tags:["kb:rows-move-ten-thousand"],name:"17 · Ten thousand rows",parameters:{...f(h,"TenThousandRows",v({onRowsMove:a(r,t)})),summary:"The same handlers on 10 000 rows: the scroll flies over hundreds of thousands of px and the rows of each frame are drawn before it is painted, so the window is never empty."},args:{onRowsMove:"scrollToAnchor"},argTypes:{onRowsMove:{...u(a(r,t))}},render:e=>s.jsx(p,{args:e,children:s.jsx(b,{readout:"anchor",count:1e4,startRow:5e3,handler:m(r,e.onRowsMove),hint:s.jsx(w,{text:"10 000 people sorted by **Level**, the table opens in the middle. Type **C2** in the Level of a row: it is the last of 10 000, and `scrollToAnchor()` flies there in 700 ms with rows in every frame. **keepAnchorInView** keeps a row where it was after a jump of a hundred thousand px; **flipRows** slides every row after a new sort (click **Team**)."})})}),play:async e=>{c(e)||await R(e)}};var n,i,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  tags: ['kb:rows-move-ten-thousand'],
  name: '17 · Ten thousand rows',
  parameters: {
    ...sceneCodeWith(tableSource, 'TenThousandRows', presetCodes({
      onRowsMove: pick(HANDLERS, NAMES)
    })),
    summary: 'The same handlers on 10 000 rows: the scroll flies over hundreds of thousands of px and the rows of each frame are drawn before it is painted, so the window is never empty.'
  },
  args: {
    onRowsMove: 'scrollToAnchor'
  },
  argTypes: {
    onRowsMove: {
      ...presetControl(pick(HANDLERS, NAMES))
    }
  },
  render: args => <Remount args={args}>
            <MovesScene readout="anchor" count={10000} startRow={5000} handler={presetValue(HANDLERS, args.onRowsMove)} hint={<Md text="10 000 people sorted by **Level**, the table opens in the middle. Type **C2** in the Level of a row: it is the last of 10 000, and \`scrollToAnchor()\` flies there in 700 ms with rows in every frame. **keepAnchorInView** keeps a row where it was after a jump of a hundred thousand px; **flipRows** slides every row after a new sort (click **Team**)." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await tenThousandAct(ctx);
  }
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const M=["TenThousandRows"],_=Object.freeze(Object.defineProperty({__proto__:null,TenThousandRows:o,__namedExportsOrder:M,default:y},Symbol.toStringTag,{value:"Module"}));export{_ as B};
