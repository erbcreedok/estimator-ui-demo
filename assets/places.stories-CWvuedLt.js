import{c,j as t,M as i,f as C}from"./products-CTiDOXRn.js";import{e as T,d as A,b as O,s as j,c as M}from"./checks-GA0zUtfG.js";import{S as l,s as P}from"./scene-CZYYx_oH.js";const _={title:"Tables/Table Core/Features/Hierarchy/Data that is already a tree/In the table",id:"tables-table-core-features-tree-rows-places",...C(P)},r={tags:["kb:tree-open-close"],name:"25 · Open and close",parameters:{summary:"The chevron and Enter fold and open a row."},render:()=>t.jsx(l,{hint:t.jsx(i,{text:"Click the chevron of the first lead: their team folds. Or click a name cell and press **Enter**."})}),play:async e=>{c(e)||await O(e.canvasElement)}},a={tags:["kb:tree-select-with-children"],name:"26 · Select with the children",parameters:{summary:"A parent is ticked with its children; part of them shows a dash."},render:()=>t.jsx(l,{bulkBar:!0,hint:t.jsx(i,{text:"Tick a **manager**: their report is ticked too, and the **lead** shows a dash. Untick the report: the manager is unticked too — a parent is ticked only with all its children."})}),play:async e=>{c(e)||await j(e.canvasElement)}},n={tags:["kb:tree-sorting"],name:"27 · Sorting inside the levels",parameters:{summary:"A sort orders every level; children stay under their parent."},render:()=>t.jsx(l,{columnMenu:!0,initialSorting:[{id:"rate",desc:!0}],hint:t.jsx(i,{text:"Sorted by **Rate**, largest first: the leads are sorted, and the managers and reports inside each team too — children stay under their parent."})}),play:async e=>{c(e)||await M(e.canvasElement)}},s={tags:["kb:tree-deep-tree"],name:"28 · Four levels, another column",parameters:{summary:"`treeColumn`: the chevrons stand in another column."},render:()=>t.jsx(l,{deep:!0,treeColumn:"role",hint:t.jsx(i,{text:'Four levels: a report has a report. The chevrons stand in **Role**, not in Name: `treeColumn="role"`.'})}),play:async e=>{c(e)||await A(e.canvasElement)}},o={tags:["kb:tree-chevron-end"],name:"29 · The chevron at the end",parameters:{summary:"`treePlacement: 'end'`: the chevron after the content."},render:()=>t.jsx(l,{treePlacement:"end",hint:t.jsx(i,{text:'`treePlacement="end"`: the chevron stands after the content, at the end of the cell; the indent stays in front. `treeMirrored` turns it round for a right-to-left screen.'})}),play:async e=>{c(e)||await T(e.canvasElement)}};var d,h,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  tags: ['kb:tree-open-close'],
  name: '25 · Open and close',
  parameters: {
    summary: 'The chevron and Enter fold and open a row.'
  },
  render: () => <Scene hint={<Md text="Click the chevron of the first lead: their team folds. Or click a name cell and press **Enter**." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await openCloseAct(ctx.canvasElement);
  }
}`,...(m=(h=r.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var p,u,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ['kb:tree-select-with-children'],
  name: '26 · Select with the children',
  parameters: {
    summary: 'A parent is ticked with its children; part of them shows a dash.'
  },
  render: () => <Scene bulkBar hint={<Md text="Tick a **manager**: their report is ticked too, and the **lead** shows a dash. Untick the report: the manager is unticked too — a parent is ticked only with all its children." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await selectAct(ctx.canvasElement);
  }
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var y,v,g;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['kb:tree-sorting'],
  name: '27 · Sorting inside the levels',
  parameters: {
    summary: 'A sort orders every level; children stay under their parent.'
  },
  render: () => <Scene columnMenu initialSorting={[{
    id: 'rate',
    desc: true
  }]} hint={<Md text="Sorted by **Rate**, largest first: the leads are sorted, and the managers and reports inside each team too — children stay under their parent." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await sortingAct(ctx.canvasElement);
  }
}`,...(g=(v=n.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var k,x,S;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['kb:tree-deep-tree'],
  name: '28 · Four levels, another column',
  parameters: {
    summary: '\`treeColumn\`: the chevrons stand in another column.'
  },
  render: () => <Scene deep treeColumn="role" hint={<Md text='Four levels: a report has a report. The chevrons stand in **Role**, not in Name: \`treeColumn="role"\`.' />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await deepAct(ctx.canvasElement);
  }
}`,...(S=(x=s.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var w,b,E;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['kb:tree-chevron-end'],
  name: '29 · The chevron at the end',
  parameters: {
    summary: "\`treePlacement: 'end'\`: the chevron after the content."
  },
  render: () => <Scene treePlacement="end" hint={<Md text='\`treePlacement="end"\`: the chevron stands after the content, at the end of the cell; the indent stays in front. \`treeMirrored\` turns it round for a right-to-left screen.' />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await endAct(ctx.canvasElement);
  }
}`,...(E=(b=o.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};const F=["OpenClose","SelectWithChildren","Sorting","DeepTree","ChevronAtTheEnd"],N=Object.freeze(Object.defineProperty({__proto__:null,ChevronAtTheEnd:o,DeepTree:s,OpenClose:r,SelectWithChildren:a,Sorting:n,__namedExportsOrder:F,default:_},Symbol.toStringTag,{value:"Module"}));export{N as T};
