import{M as a,S as n,c as i,s as l,m}from"./sorting-page-BEurg12m.js";import{m as p}from"./sorting-play-BR_ct78p.js";import"./styles-DXLXEQ3H.js";import"./index-BjhrbhTf.js";import"./jsx-runtime-CEpjeC4Q.js";import"./index-D841zMOb.js";import"./feature-code-DArJNGHI.js";import"./TableCore-kOYdxPhk.js";import"./TableStatusBar-BHCIeSi2.js";import"./panels-D6DlFR9J.js";import"./TableToolbar-C0bTLKMD.js";import"./createSvgIcon-s1BrOgA2.js";import"./employees-DtM5_3-O.js";import"./fixtures-CCjjPTo2.js";import"./scene-kit-DXifMYYP.js";import"./feature-hints-CH2Kq8R8.js";import"./index-DLqD3z3M.js";import"./play-kit-Bu4SXy9H.js";const x={...n,title:"Tables/Table Core/Sorting/Multi-sort",parameters:l("`enableMultiSort` lets the user sort by several columns and set their priority.")},c=s=>s,t={tags:["kb:sort-multi-sort"],name:"7 · Multi-sort",args:a,parameters:{...c({set:"plain",owner:"screen",hint:m}),controls:i(["enableMultiSort","sorting","columnMenu","toolbar","statusBar"]),docs:{description:{story:"Shift+click adds or flips a sort without the menu; the headers show the priority. The column menu: *Then by …* adds a level, *Move up / down*, *Remove from sort*. The Sorting panel: drag ⋮⋮. The chip says *N Sorts*. Off: a new sort replaces the old one."}}},play:p};var r,o,e;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  tags: ['kb:sort-multi-sort'],
  name: '7 · Multi-sort',
  args: MULTI_START,
  parameters: {
    ...scene({
      set: 'plain',
      owner: 'screen',
      hint: multi
    }),
    controls: controlsOf(['enableMultiSort', 'sorting', 'columnMenu', 'toolbar', 'statusBar']),
    docs: {
      description: {
        story: 'Shift+click adds or flips a sort without the menu; the headers show the priority. The column menu: *Then by …* adds a level, *Move up / down*, *Remove from sort*. The Sorting panel: drag ⋮⋮. The chip says *N Sorts*. Off: a new sort replaces the old one.'
      }
    }
  },
  play: multiPlay
}`,...(e=(o=t.parameters)==null?void 0:o.docs)==null?void 0:e.source}}};const B=["MultiSort"];export{t as MultiSort,B as __namedExportsOrder,x as default};
