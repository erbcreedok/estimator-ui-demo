import{f as u,B as p,S as h,c,s as d,g as b,i as g}from"./sorting-page-DT8SgY6Q.js";import{c as f,b as S}from"./sorting-play-DW0xLn7E.js";import"./jsx-runtime-Cnbe3ryz.js";import"./index-3dRrDZpt.js";import"./feature-code-Dlz2p9Ie.js";import"./TableCore-Y75h2oha.js";import"./index-C0mjCMcL.js";import"./index-DKTdOcjh.js";import"./table-core-base-DFRq_Vzl.js";import"./places-Dp9r7e0L.js";import"./styles-HzBmg0bt.js";import"./icons-849xEHsl.js";import"./menu-DvyBTqNz.js";import"./TableStatusBar-4NxO8OsQ.js";import"./status-bar-CYB7-jUm.js";import"./panel-controls-DNzRkyVB.js";import"./SortingPanel-CpobHppH.js";import"./TableToolbar-DTYEmPN-.js";import"./toolbar-C5VRlWnq.js";import"./pin-controls-NGLUwJXC.js";import"./employees-CL5oqWiT.js";import"./fixtures-P-DSdYmm.js";import"./scene-kit-BsKxVgS1.js";import"./feature-hints-BLpBNgTy.js";import"./index-iBx7lKYd.js";import"./play-kit-Bu4SXy9H.js";const K={...h,title:"Tables/Table Core/Features/Sorting/Places",parameters:d("The places the user sorts from. Each is switched on for the whole table; a column can be left out of any of them (`meta.hideFrom`). All of them change the same `state.sorting`.")},i=m=>m,o={tags:["kb:sort-column-menu"],name:"3 · Column menu",args:u,parameters:{...i({set:"plain",owner:"screen",hint:b}),controls:c(["columnMenu","enableSorting","sorting"]),docs:{description:{story:"`columnMenu` (on by default): a header click opens the menu, *Sort ›* has the two directions and *Clear sort*. Off (`columnMenu={false}`): a header click sorts at once. Its rules (the wording, what is shown, what is off) are the `getSortActions` resolver; your own sections: `columnMenu={{ sections: […defaultColumnMenu().sections, mySection] }}`."}}},play:f},t={tags:["kb:sort-toolbar-status-bar"],name:"4 · Toolbar & Status bar",args:p,parameters:{...i({set:"plain",owner:"screen",hint:g}),controls:c(["toolbar","statusBar","columnHideFrom","columnMenu","sorting"]),docs:{description:{story:"The whole table: `toolbar` (*Sort* → the Sorting panel) and `statusBar` (the sort chip, *Clear all*). One column: `meta.hideFrom` leaves it out of chosen places — `toolbar.sorting`, `statusBar.sorting`, `columnMenu.sorting`, `columnHeader.sort`. An action in a place touches only what that place lists."}}},play:S};var e,n,r;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  tags: ['kb:sort-column-menu'],
  name: '3 · Column menu',
  args: MENU_START,
  parameters: {
    ...scene({
      set: 'plain',
      owner: 'screen',
      hint: columnMenu
    }),
    controls: controlsOf(['columnMenu', 'enableSorting', 'sorting']),
    docs: {
      description: {
        story: '\`columnMenu\` (on by default): a header click opens the menu, *Sort ›* has the two directions and *Clear sort*. Off (\`columnMenu={false}\`): a header click sorts at once. Its rules (the wording, what is shown, what is off) are the \`getSortActions\` resolver; your own sections: \`columnMenu={{ sections: […defaultColumnMenu().sections, mySection] }}\`.'
      }
    }
  },
  play: columnMenuPlay
}`,...(r=(n=o.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};var s,a,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  tags: ['kb:sort-toolbar-status-bar'],
  name: '4 · Toolbar & Status bar',
  args: BARS_START,
  parameters: {
    ...scene({
      set: 'plain',
      owner: 'screen',
      hint: bars
    }),
    controls: controlsOf(['toolbar', 'statusBar', 'columnHideFrom', 'columnMenu', 'sorting']),
    docs: {
      description: {
        story: 'The whole table: \`toolbar\` (*Sort* → the Sorting panel) and \`statusBar\` (the sort chip, *Clear all*). One column: \`meta.hideFrom\` leaves it out of chosen places — \`toolbar.sorting\`, \`statusBar.sorting\`, \`columnMenu.sorting\`, \`columnHeader.sort\`. An action in a place touches only what that place lists.'
      }
    }
  },
  play: barsPlay
}`,...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const L=["ColumnMenu","ToolbarStatusBar"];export{o as ColumnMenu,t as ToolbarStatusBar,L as __namedExportsOrder,K as default};
