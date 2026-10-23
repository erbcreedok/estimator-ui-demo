import{O as d,S as h,_ as u}from"./scene-DY5gZaw6.js";import{c as l,j as r,M as S,p as y,d as b,s as f,e as O,f as T}from"./products-CTiDOXRn.js";import{o as x,a as w,s as C}from"./checks-Cdgb-MqO.js";import{S as n}from"./sortings-CKkx76aO.js";const[g]=Object.values([u]),_={title:"Tables/Table Core/Features/Sorting/Basics",id:"tables-table-core-features-sorting-basics",...T(g)},s={tags:["kb:sort-one-prop"],name:"1 · One prop",parameters:{...f(g,"OneProp",O({sorting:n})),summary:"`state.sorting` as a constant sorts the rows."},args:{sorting:"by Team"},argTypes:{sorting:b(n)},render:({sorting:e})=>r.jsx(h,{sorting:y(n,e),hint:r.jsx(S,{text:"The screen passes `state.sorting` as a constant, here `[{ id: 'team', desc: false }]`: the rows are sorted by **Team**, the header says it. A constant nobody changes; the control picks another one."})}),play:async e=>{l(e)||(await w(e.canvasElement),await C(e))}},t={tags:["kb:sort-external-control"],name:"2 · The screen owns the sorts",parameters:{summary:"The screen passes `state.sorting` with `onSortingChange`."},render:()=>r.jsx(d,{}),play:async e=>{l(e)||await x(e.canvasElement)}};var a,o,c;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  tags: ['kb:sort-one-prop'],
  name: '1 · One prop',
  parameters: {
    ...sceneCodeWith(tableSource, 'OneProp', presetCodes({
      sorting: SORTINGS
    })),
    summary: '\`state.sorting\` as a constant sorts the rows.'
  },
  args: {
    sorting: 'by Team'
  },
  argTypes: {
    sorting: presetControl(SORTINGS)
  },
  render: ({
    sorting
  }) => <Scene sorting={presetValue(SORTINGS, sorting)} hint={<Md text="The screen passes \`state.sorting\` as a constant, here \`[{ id: 'team', desc: false }]\`: the rows are sorted by **Team**, the header says it. A constant nobody changes; the control picks another one." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await oneStateAct(ctx.canvasElement);
    await sortingControlAct(ctx);
  }
}`,...(c=(o=s.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var i,p,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ['kb:sort-external-control'],
  name: '2 · The screen owns the sorts',
  parameters: {
    summary: 'The screen passes \`state.sorting\` with \`onSortingChange\`.'
  },
  render: () => <OutsideScene />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await outsideAct(ctx.canvasElement);
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const k=["OneProp","ExternalControl"],M=Object.freeze(Object.defineProperty({__proto__:null,ExternalControl:t,OneProp:s,__namedExportsOrder:k,default:_},Symbol.toStringTag,{value:"Module"}));export{M as B};
