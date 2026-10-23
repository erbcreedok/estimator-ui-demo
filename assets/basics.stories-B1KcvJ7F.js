import{E as k,_ as A}from"./edit-cell-table-BkiS150E.js";import{O as j,l as p,u as d,w as g,h as m,I as B,J as h,G as R,H as u,bo as w,r as S,j as n,S as T,M as I,A as $,c as v,f as M}from"./products-CTiDOXRn.js";const P=async e=>{await j(e);const t=await u(e);p(t.closest("[data-cell]")===h(e,0,1),"the editor is in the Team of the first row")},F=async e=>{await j(e);const t=()=>{var a;return(a=e.querySelector("[data-editing-state]"))==null?void 0:a.textContent};p(t()==="none","nothing is edited at the start"),await d.click(g(e).getByRole("button",{name:"Edit Team of row 2"})),await m(()=>{var a;return((a=B(e))==null?void 0:a.closest("[data-cell]"))===h(e,1,1)},"the button opened the editor in Team of row 2"),p(t()==="p2:team",`the screen sees ${t()}`),R(await u(e),"Escape"),await w(e),await m(()=>t()==="none",`Esc reaches the screen, ${t()}`),await d.click(h(e,3,1)),await u(e),await m(()=>t()==="p4:team",`a double click reaches it, ${t()}`),await d.click(g(e).getByRole("button",{name:"Stop editing"})),await w(e)},q=e=>e?`${e.rowId}:${e.columnId}`:"none",O=()=>{const[e,t]=S.useState(()=>$(10));return{rows:e,onEdit:(s,o,l)=>t(_=>_.map(c=>c.id===s?{...c,[o]:l}:c))}},G=()=>{const{rows:e,onEdit:t}=O();return n.jsx(T,{hint:n.jsx(I,{text:"The screen passes `state.editingCell` = `{ rowId: 'p1', columnId: 'team' }` as a constant: the editor is open in the Team of the first row. The ids of the row and the column keep it in that cell when the rows move."}),children:n.jsx(k,{rows:e,onEdit:t,state:{editingCell:{rowId:"p1",columnId:"team"}}})})},H=()=>{const{rows:e,onEdit:t}=O(),[a,s]=S.useState(null);return n.jsxs(T,{hint:n.jsx(I,{text:"The screen owns `state.editingCell`: its buttons open and close the editor, a double click and Esc do it too, and both see the same cell."}),children:[n.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",height:36},children:[n.jsx("button",{type:"button",onClick:()=>s({rowId:"p2",columnId:"team"}),children:"Edit Team of row 2"}),n.jsx("button",{type:"button",onClick:()=>s(null),children:"Stop editing"}),n.jsx("code",{"data-editing-state":!0,children:q(a)})]}),n.jsx(k,{rows:e,onEdit:t,state:{editingCell:a},onEditingCellChange:o=>s(l=>typeof o=="function"?o(l):o)})]})},[J]=Object.values([A]),K={title:"Tables/Table Core/Features/Editing/Basics",id:"tables-table-core-features-editing-basics",...M(J)},i={tags:["kb:editing-one-prop"],name:"1 · A cell opens in edit mode",parameters:{summary:"`state.editingCell` as a constant opens the editor in that cell."},render:()=>n.jsx(G,{}),play:async e=>{v(e)||await P(e.canvasElement)}},r={tags:["kb:editing-external-control"],name:"2 · Buttons open the editor",parameters:{summary:"The screen passes `state.editingCell` with `onEditingCellChange`."},render:()=>n.jsx(H,{}),play:async e=>{v(e)||await F(e.canvasElement)}};var E,x,C;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['kb:editing-one-prop'],
  name: '1 · A cell opens in edit mode',
  parameters: {
    summary: '\`state.editingCell\` as a constant opens the editor in that cell.'
  },
  render: () => <ConstantEditedCellScene />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await oneStateAct(ctx.canvasElement);
  }
}`,...(C=(x=i.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var f,b,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['kb:editing-external-control'],
  name: '2 · Buttons open the editor',
  parameters: {
    summary: 'The screen passes \`state.editingCell\` with \`onEditingCellChange\`.'
  },
  render: () => <ButtonsEditedCellScene />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await outsideAct(ctx.canvasElement);
  }
}`,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const L=["OneProp","ExternalControl"];export{r as ExternalControl,i as OneProp,L as __namedExportsOrder,K as default};
