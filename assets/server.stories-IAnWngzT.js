import{c as h,j as s,M as m,b as g,p,d as S,s as f,e as u,f as k}from"./products-CTiDOXRn.js";import{S as n}from"./sortings-CKkx76aO.js";import{f as b,F as y,c as T,d as v,S as x,b as d}from"./scene-D--uP8Uf.js";const O={title:"Tables/Table Core/Features/Sorting/On the server",id:"tables-table-core-features-sorting-server",...k(d)},t={tags:["kb:sort-on-the-server"],name:"5 · On the server",parameters:{...f(d,"OnTheServer",u({initialSorting:n})),summary:"`manualSorting`: a click writes the sorting, the server answers with the rows in order."},args:{initialSorting:"none"},argTypes:{initialSorting:S(n)},render:e=>s.jsx(g,{args:e,children:s.jsx(x,{initialSorting:p(n,e.initialSorting),hint:s.jsx(m,{text:"`manualSorting`: click **Name** → **Sort A–Z**. The table writes the sorting and waits (a bar on top, paler rows); it does not sort the rows it has. The server answers in its own order. The status bar counts the server’s **2000** rows, not the 8 that came."})})}),play:async e=>{h(e)||(await T(e.canvasElement),await v(e))}},r={tags:["kb:loading-first-answer"],name:"6 · The first answer: skeleton rows",parameters:{summary:"`loading` with no rows yet draws `loadingRows` skeleton rows (8 by default, `false` for none: the empty text stands) in the columns of the table, with the bar on top and `aria-busy`; the bars are the slot `skeletonCell`, they stand still for a user who asks for less motion. A table that has rows keeps them (paler) when it loads again: no skeleton."},args:{answer:"waiting",skeleton:"rows"},argTypes:{answer:{control:"radio",options:["waiting","came"]},skeleton:{control:"radio",options:["rows","off"]}},render:e=>s.jsx(y,{answer:e.answer,skeleton:e.skeleton,hint:s.jsx(m,{text:"Try: set **answer** to *came*, **skeleton** to *off*."})}),play:async e=>{h(e)||await b(e)}};var a,o,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  tags: ['kb:sort-on-the-server'],
  name: '5 · On the server',
  parameters: {
    ...sceneCodeWith(source, 'OnTheServer', presetCodes({
      initialSorting: SORTINGS
    })),
    summary: '\`manualSorting\`: a click writes the sorting, the server answers with the rows in order.'
  },
  args: {
    initialSorting: 'none'
  },
  argTypes: {
    initialSorting: presetControl(SORTINGS)
  },
  render: args => <Remount args={args}>
            <ServerScene initialSorting={presetValue(SORTINGS, args.initialSorting)} hint={<Md text="\`manualSorting\`: click **Name** → **Sort A–Z**. The table writes the sorting and waits (a bar on top, paler rows); it does not sort the rows it has. The server answers in its own order. The status bar counts the server’s **2000** rows, not the 8 that came." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await serverSortAct(ctx.canvasElement);
    await startSortingControlAct(ctx);
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var l,c,w;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  tags: ['kb:loading-first-answer'],
  name: '6 · The first answer: skeleton rows',
  parameters: {
    summary: '\`loading\` with no rows yet draws \`loadingRows\` skeleton rows (8 by default, \`false\` for none: the empty text stands) in the columns of the table, with the bar on top and \`aria-busy\`; the bars are the slot \`skeletonCell\`, they stand still for a user who asks for less motion. A table that has rows keeps them (paler) when it loads again: no skeleton.'
  },
  args: {
    answer: 'waiting',
    skeleton: 'rows'
  },
  argTypes: {
    answer: {
      control: 'radio',
      options: ['waiting', 'came']
    },
    skeleton: {
      control: 'radio',
      options: ['rows', 'off']
    }
  },
  render: args => <FirstAnswerScene answer={args.answer} skeleton={args.skeleton} hint={<Md text="Try: set **answer** to *came*, **skeleton** to *off*." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await firstAnswerAct(ctx);
  }
}`,...(w=(c=r.parameters)==null?void 0:c.docs)==null?void 0:w.source}}};const A=["OnTheServer","FirstAnswer"],F=Object.freeze(Object.defineProperty({__proto__:null,FirstAnswer:r,OnTheServer:t,__namedExportsOrder:A,default:O},Symbol.toStringTag,{value:"Module"}));export{F as S};
