import{E as x,_ as O}from"./edit-cell-table-BkiS150E.js";import{c as P,J as c,l as i,K as S,u as s,I as o,H as m,L as R,N as _,G as w,h as d,y as E,j as u,b as j,s as N,f as I,r as B,A as q,S as D,p as L,M}from"./products-CTiDOXRn.js";import{e as F,S as G,a as W}from"./controls-BCXw8klf.js";const H=({startEditing:t,readOnly:e})=>{const[a,h]=B.useState(()=>q(12));return u.jsx(D,{hint:u.jsx(M,{text:"Click Team or Role: the field opens in the cell (`startEditing: 'click'`, set by the scene: the default is a double click). The controls switch it to a double click, and switch `readOnly`. **Enter** saves, **Esc** cancels, a click on another cell ends the edit. Name has no `meta.editable`, so it does not open."}),children:u.jsx(x,{startEditing:L(G,t),readOnly:e,rows:a,onEdit:(n,l,A)=>h(T=>T.map(k=>k.id===n?{...k,[l]:A}:k))})})},[C]=Object.values([O]),z={title:"Tables/Table Core/Features/Editing/Edit a cell",id:"tables-table-core-features-cell-features",...I(C)},p=t=>d(()=>t.querySelector('[role="table"] [data-cell]'),"the table is drawn"),r={tags:["kb:cell-features-editing"],name:"Edit Team and Role",parameters:{...N(C,"EditingAlone",W),summary:"A click opens the editor in the cell (or a double click, by `startEditing`), Enter saves, Esc cancels, a press on another cell ends the edit."},args:{startEditing:"click",readOnly:!1},argTypes:F,render:t=>u.jsx(j,{args:t,children:u.jsx(H,{...t})}),play:async t=>{if(P(t))return;const e=t.canvasElement;await p(e);const a=c(e,0,1);i(a.getAttribute("data-editable")==="true","Team is editable"),i(c(e,0,0).getAttribute("data-editable")==="false","Name is not");const h=S(a);i(!h.marked,"an editable cell not in edit has no frame"),await s.click(c(e,0,0)),i(!o(e),"a click on Name (not editable) opens nothing"),await s.click(a);const n=await m(e);R(a,n,h),i(a.getAttribute("data-editing")==="true","one click opens the editor in its cell"),await _(n,"Platform"),w(n,"Enter"),await d(()=>!o(e),"Enter closes the editor"),i(a.textContent==="Platform","Enter saved the value"),await s.dblClick(a),w(await m(e),"Escape"),await d(()=>!o(e),"Esc closes the editor"),i(a.textContent==="Platform","Esc kept the value"),await s.dblClick(a),await m(e),await s.click(c(e,1,0)),await d(()=>!o(e),"a press on another cell ends the edit (the editor has no onBlur)"),await s.keyboard("{ArrowDown}"),i(!e.querySelector('[data-selection="active"], [data-selection="range"]'),"no active cell, an arrow moves nothing"),await E(t,{startEditing:"doubleClick"}),await p(e),await s.click(c(e,2,1)),await new Promise(l=>{setTimeout(l,300)}),i(!o(e),"with doubleClick, one click opens nothing"),await s.dblClick(c(e,2,1)),w(await m(e),"Escape"),await d(()=>!o(e),"Esc closes it"),await E(t,{readOnly:!0}),await p(e),await s.dblClick(c(e,2,1)),await new Promise(l=>{setTimeout(l,300)}),i(!o(e),"readOnly: a double click opens nothing")}};var b,g,f,v,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['kb:cell-features-editing'],
  name: 'Edit Team and Role',
  parameters: {
    ...sceneCodeWith(source, 'EditingAlone', editingCodes),
    summary: 'A click opens the editor in the cell (or a double click, by \`startEditing\`), Enter saves, Esc cancels, a press on another cell ends the edit.'
  },
  args: {
    startEditing: 'click',
    readOnly: false
  },
  argTypes: editingArgTypes,
  render: args => <Remount args={args}>
            <Scene {...args} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    await ready(c);
    const team = cell(c, 0, 1);
    check(team.getAttribute('data-editable') === 'true', 'Team is editable');
    check(cell(c, 0, 0).getAttribute('data-editable') === 'false', 'Name is not');
    const before = lookBefore(team);
    check(!before.marked, 'an editable cell not in edit has no frame');
    await userEvent.click(cell(c, 0, 0));
    check(!editor(c), 'a click on Name (not editable) opens nothing');
    await userEvent.click(team);
    const input = await openEditor(c);
    looksLikeCell(team, input, before);
    check(team.getAttribute('data-editing') === 'true', 'one click opens the editor in its cell');
    await typeInto(input, 'Platform');
    press(input, 'Enter');
    await until(() => !editor(c), 'Enter closes the editor');
    check(team.textContent === 'Platform', 'Enter saved the value');
    await userEvent.dblClick(team);
    press(await openEditor(c), 'Escape');
    await until(() => !editor(c), 'Esc closes the editor');
    check(team.textContent === 'Platform', 'Esc kept the value');
    await userEvent.dblClick(team);
    await openEditor(c);
    await userEvent.click(cell(c, 1, 0));
    await until(() => !editor(c), 'a press on another cell ends the edit (the editor has no onBlur)');
    await userEvent.keyboard('{ArrowDown}');
    check(!c.querySelector('[data-selection="active"], [data-selection="range"]'), 'no active cell, an arrow moves nothing');
    // The other way: a click opens nothing, a double click opens the editor.
    await setArgs(ctx, {
      startEditing: 'doubleClick'
    });
    await ready(c);
    await userEvent.click(cell(c, 2, 1));
    await new Promise(resolve => {
      setTimeout(resolve, 300);
    });
    check(!editor(c), 'with doubleClick, one click opens nothing');
    await userEvent.dblClick(cell(c, 2, 1));
    press(await openEditor(c), 'Escape');
    await until(() => !editor(c), 'Esc closes it');
    await setArgs(ctx, {
      readOnly: true
    });
    await ready(c);
    await userEvent.dblClick(cell(c, 2, 1));
    await new Promise(resolve => {
      setTimeout(resolve, 300);
    });
    check(!editor(c), 'readOnly: a double click opens nothing');
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source},description:{story:"A click (or a double click) opens the editor; Enter saves, Esc cancels, a press elsewhere ends the edit.",...(y=(v=r.parameters)==null?void 0:v.docs)==null?void 0:y.description}}};const Q=["EditingAlone"];export{r as EditingAlone,Q as __namedExportsOrder,z as default};
