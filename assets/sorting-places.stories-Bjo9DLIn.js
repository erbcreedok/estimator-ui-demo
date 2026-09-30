import{f as u,B as p,S as h,c,s as b,g as d,i as g}from"./sorting-page-BEurg12m.js";import{c as S,b as f}from"./sorting-play-BR_ct78p.js";import"./styles-DXLXEQ3H.js";import"./index-BjhrbhTf.js";import"./jsx-runtime-CEpjeC4Q.js";import"./index-D841zMOb.js";import"./feature-code-DArJNGHI.js";import"./TableCore-kOYdxPhk.js";import"./TableStatusBar-BHCIeSi2.js";import"./panels-D6DlFR9J.js";import"./TableToolbar-C0bTLKMD.js";import"./createSvgIcon-s1BrOgA2.js";import"./employees-DtM5_3-O.js";import"./fixtures-CCjjPTo2.js";import"./scene-kit-DXifMYYP.js";import"./feature-hints-CH2Kq8R8.js";import"./index-DLqD3z3M.js";import"./play-kit-Bu4SXy9H.js";const N={...h,title:"Tables/Table Core/Sorting/Places",parameters:b("The places the user sorts from. Each is switched on for the whole table; a column can be left out of any of them (`meta.hideFrom`). All of them change the same `state.sorting`.")},i=m=>m,o={tags:["kb:sort-column-menu"],name:"3 · Column menu",args:u,parameters:{...i({set:"plain",owner:"screen",hint:d}),controls:c(["columnMenu","enableSorting","sorting"]),docs:{description:{story:"`columnMenu` (on by default): a header click opens the menu, *Sort ›* has the two directions and *Clear sort*. Off (`columnMenu={false}`): a header click sorts at once. Your own sections: `columnMenu={[createSortingSection({ getLabels }), …]}`."}}},play:S},e={tags:["kb:sort-toolbar-status-bar"],name:"4 · Toolbar & Status bar",args:p,parameters:{...i({set:"plain",owner:"screen",hint:g}),controls:c(["toolbar","statusBar","columnHideFrom","columnMenu","sorting"]),docs:{description:{story:"The whole table: `toolbar` (*Sort* → the Sorting panel) and `statusBar` (the sort chip, *Clear all*). One column: `meta.hideFrom` leaves it out of chosen places — `toolbar.sorting`, `statusBar.sorting`, `columnMenu.sorting`, `columnHeader.sort`. An action in a place touches only what that place lists."}}},play:f};var t,n,a;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
        story: '\`columnMenu\` (on by default): a header click opens the menu, *Sort ›* has the two directions and *Clear sort*. Off (\`columnMenu={false}\`): a header click sorts at once. Your own sections: \`columnMenu={[createSortingSection({ getLabels }), …]}\`.'
      }
    }
  },
  play: columnMenuPlay
}`,...(a=(n=o.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var r,s,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const U=["ColumnMenu","ToolbarStatusBar"];export{o as ColumnMenu,e as ToolbarStatusBar,U as __namedExportsOrder,N as default};
