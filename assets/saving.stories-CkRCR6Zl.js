import{E as _,_ as M}from"./edit-cell-table-BkiS150E.js";import{c as P,O as R,u as m,J as u,H as g,N as y,G as f,h as F,P as E,l as o,Q as v,w as O,j as s,f as D,r as p,A as I,S as V,M as X}from"./products-CTiDOXRn.js";const Z=800,C=()=>{const[r,e]=p.useState(()=>I(8)),[a,d]=p.useState(!1),i=p.useRef(a);return i.current=a,s.jsxs(V,{hint:s.jsx(X,{text:"Edit **Team** or **Role** and press Enter: the server takes 0.8 s and the cell shows a spinner. Tick **The server rejects what is saved** and try again: the old value comes back and a red ⚠ says why (hover it)."}),children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,height:32},children:[s.jsx("input",{"aria-label":"The server rejects what is saved",type:"checkbox",checked:a,onChange:n=>d(n.target.checked)}),s.jsx("span",{children:"The server rejects what is saved"})]}),s.jsx(_,{rows:r,onEdit:async(n,t,k)=>{if(await new Promise(h=>{setTimeout(h,Z)}),i.current)throw new Error(`The server rejected ${String(k)}`);e(h=>h.map(w=>w.id===n?{...w,[t]:k}:w))}})]})},[B]=Object.values([M]),H={title:"Tables/Table Core/Features/Editing/Saving",id:"tables-table-core-features-editing-saving",...D(B)},l=(r,e,a)=>u(r,e,a).querySelector("[data-cell-mark]"),x={timeout:4e3},c={tags:["kb:editing-saving"],name:"A save takes time or is refused",parameters:{summary:"`meta.onEdit` returns a promise: the cell shows a spinner while it runs, and when it throws the old value stays and a ⚠ says why."},render:()=>s.jsx(C,{}),play:async r=>{var n;if(P(r))return;const e=r.canvasElement;await R(e),await m.click(u(e,0,1));const a=await g(e);await y(a,"Platform X"),f(a,"Enter"),await F(()=>{var t;return((t=l(e,0,1))==null?void 0:t.dataset.cellMark)==="saving"},"a spinner in the cell while it is saved"),await E(()=>o(!l(e,0,1)&&v(e,0,1)==="Platform X","saved: the spinner is gone, the value is new"),x),await m.click(O(e).getByRole("checkbox",{name:"The server rejects what is saved"}));const d=v(e,1,1);await m.click(u(e,1,1));const i=await g(e);await y(i,"Zed"),f(i,"Enter"),await E(()=>{var t;return o(((t=l(e,1,1))==null?void 0:t.dataset.cellMark)==="failed","the refused save is marked")},x),o(((n=l(e,1,1))==null?void 0:n.getAttribute("aria-label"))==="The server rejected Zed","the mark says why"),o(v(e,1,1)===d,"the old value stays")}};var j,b,S,T,A;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  tags: ['kb:editing-saving'],
  name: 'A save takes time or is refused',
  parameters: {
    summary: '\`meta.onEdit\` returns a promise: the cell shows a spinner while it runs, and when it throws the old value stays and a ⚠ says why.'
  },
  render: () => <Scene />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    await grid(c);
    await userEvent.click(cell(c, 0, 1));
    const field = await openEditor(c);
    await typeInto(field, 'Platform X');
    press(field, 'Enter');
    await until(() => mark(c, 0, 1)?.dataset.cellMark === 'saving', 'a spinner in the cell while it is saved');
    await waitFor(() => check(!mark(c, 0, 1) && text(c, 0, 1) === 'Platform X', 'saved: the spinner is gone, the value is new'), SAVED);
    await userEvent.click(within(c).getByRole('checkbox', {
      name: 'The server rejects what is saved'
    }));
    const kept = text(c, 1, 1);
    await userEvent.click(cell(c, 1, 1));
    const again = await openEditor(c);
    await typeInto(again, 'Zed');
    press(again, 'Enter');
    await waitFor(() => check(mark(c, 1, 1)?.dataset.cellMark === 'failed', 'the refused save is marked'), SAVED);
    check(mark(c, 1, 1)?.getAttribute('aria-label') === 'The server rejected Zed', 'the mark says why');
    check(text(c, 1, 1) === kept, 'the old value stays');
  }
}`,...(S=(b=c.parameters)==null?void 0:b.docs)==null?void 0:S.source},description:{story:"A save that takes time shows a spinner; a save the server refuses keeps the old value and says why.",...(A=(T=c.parameters)==null?void 0:T.docs)==null?void 0:A.description}}};const J=["Saving"];export{c as Saving,J as __namedExportsOrder,H as default};
