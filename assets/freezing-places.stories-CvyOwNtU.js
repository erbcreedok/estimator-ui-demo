import{M as c,P as p,c as f,p as d}from"./freezing-hints-ktsXkKrU.js";import{F as h,c as l,f as g}from"./freezing-page-BBwiIMYl.js";import{c as z,p as b}from"./freezing-play-mBtlZnru.js";import"./jsx-runtime-Cnbe3ryz.js";import"./index-3dRrDZpt.js";import"./feature-hints-BLpBNgTy.js";import"./scene-kit-BsKxVgS1.js";import"./feature-code-Dlz2p9Ie.js";import"./TableCore-Y75h2oha.js";import"./index-C0mjCMcL.js";import"./index-DKTdOcjh.js";import"./table-core-base-DFRq_Vzl.js";import"./places-Dp9r7e0L.js";import"./styles-HzBmg0bt.js";import"./icons-849xEHsl.js";import"./menu-DvyBTqNz.js";import"./TableStatusBar-4NxO8OsQ.js";import"./status-bar-CYB7-jUm.js";import"./panel-controls-DNzRkyVB.js";import"./SortingPanel-CpobHppH.js";import"./TableToolbar-DTYEmPN-.js";import"./toolbar-C5VRlWnq.js";import"./pin-controls-NGLUwJXC.js";import"./employees-CL5oqWiT.js";import"./fixtures-P-DSdYmm.js";import"./index-iBx7lKYd.js";import"./grouping-play-CTN_XQGq.js";import"./play-kit-Bu4SXy9H.js";const J={...h,title:"Tables/Table Core/Features/Freezing/Places",parameters:g("The places the user freezes from: the column menu and the Columns panel. Both change the same `state.columnPinning`; `enableColumnPinning={false}` takes *Freeze* out of both.")},i=u=>u,e={tags:["kb:freeze-from-column-menu"],name:"3 · Column menu",args:c,parameters:{...i({set:"all",owner:"screen",hint:f}),controls:l(["columnMenu","enableColumnPinning","pinnedLeft"]),docs:{description:{story:"`columnMenu` (on by default) has *Freeze column* / *Unfreeze column* (`pinningSection`, part of `defaultColumnMenu`). A frozen column joins the zone last. Your own menu: `columnMenu={{ sections: [sortingSection(), pinningSection(), …] }}` — leave `pinningSection` out and the menu does not freeze."}}},play:z},n={tags:["kb:freeze-from-columns-panel"],name:"4 · Columns panel",args:p,parameters:{...i({set:"all",owner:"screen",hint:d}),controls:l(["toolbar","enableColumnPinning","columnHideFrom","pinnedLeft"]),docs:{description:{story:"`toolbar` → *Columns*: *Freeze* next to every column that can be frozen, the frozen ones in a list of their own on top, reordered among themselves. A column out of the panel: `meta.hideFrom: ['toolbar.columns']`."}}},play:b};var o,r,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  tags: ['kb:freeze-from-column-menu'],
  name: '3 · Column menu',
  args: MENU_START,
  parameters: {
    ...scene({
      set: 'all',
      owner: 'screen',
      hint: columnMenu
    }),
    controls: controlsOf(['columnMenu', 'enableColumnPinning', 'pinnedLeft']),
    docs: {
      description: {
        story: '\`columnMenu\` (on by default) has *Freeze column* / *Unfreeze column* (\`pinningSection\`, part of \`defaultColumnMenu\`). A frozen column joins the zone last. Your own menu: \`columnMenu={{ sections: [sortingSection(), pinningSection(), …] }}\` — leave \`pinningSection\` out and the menu does not freeze.'
      }
    }
  },
  play: columnMenuPlay
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};var a,m,s;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  tags: ['kb:freeze-from-columns-panel'],
  name: '4 · Columns panel',
  args: PANEL_START,
  parameters: {
    ...scene({
      set: 'all',
      owner: 'screen',
      hint: panel
    }),
    controls: controlsOf(['toolbar', 'enableColumnPinning', 'columnHideFrom', 'pinnedLeft']),
    docs: {
      description: {
        story: "\`toolbar\` → *Columns*: *Freeze* next to every column that can be frozen, the frozen ones in a list of their own on top, reordered among themselves. A column out of the panel: \`meta.hideFrom: ['toolbar.columns']\`."
      }
    }
  },
  play: panelPlay
}`,...(s=(m=n.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const K=["ColumnMenu","ColumnsPanel"];export{e as ColumnMenu,n as ColumnsPanel,K as __namedExportsOrder,J as default};
