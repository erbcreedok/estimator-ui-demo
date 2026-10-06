import{M as a,S as i,c as n,s as m,m as l}from"./sorting-page-DT8SgY6Q.js";import{m as p}from"./sorting-play-DW0xLn7E.js";import"./jsx-runtime-Cnbe3ryz.js";import"./index-3dRrDZpt.js";import"./feature-code-Dlz2p9Ie.js";import"./TableCore-Y75h2oha.js";import"./index-C0mjCMcL.js";import"./index-DKTdOcjh.js";import"./table-core-base-DFRq_Vzl.js";import"./places-Dp9r7e0L.js";import"./styles-HzBmg0bt.js";import"./icons-849xEHsl.js";import"./menu-DvyBTqNz.js";import"./TableStatusBar-4NxO8OsQ.js";import"./status-bar-CYB7-jUm.js";import"./panel-controls-DNzRkyVB.js";import"./SortingPanel-CpobHppH.js";import"./TableToolbar-DTYEmPN-.js";import"./toolbar-C5VRlWnq.js";import"./pin-controls-NGLUwJXC.js";import"./employees-CL5oqWiT.js";import"./fixtures-P-DSdYmm.js";import"./scene-kit-BsKxVgS1.js";import"./feature-hints-BLpBNgTy.js";import"./index-iBx7lKYd.js";import"./play-kit-Bu4SXy9H.js";const F={...i,title:"Tables/Table Core/Features/Sorting/Multi-sort",parameters:m("`enableMultiSort` lets the user sort by several columns and set their priority.")},u=s=>s,t={tags:["kb:sort-multi-sort"],name:"7 · Multi-sort",args:a,parameters:{...u({set:"plain",owner:"screen",hint:l}),controls:n(["enableMultiSort","sorting","columnMenu","toolbar","statusBar"]),docs:{description:{story:"Shift+click adds or flips a sort without the menu; the headers show the priority. The column menu: *Then by …* adds a level, *Move up / down*, *Remove from sort*. The Sorting panel: drag ⋮⋮. The chip says *N Sorts*. Off: a new sort replaces the old one."}}},play:p};var r,o,e;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(e=(o=t.parameters)==null?void 0:o.docs)==null?void 0:e.source}}};const G=["MultiSort"];export{t as MultiSort,G as __namedExportsOrder,F as default};
