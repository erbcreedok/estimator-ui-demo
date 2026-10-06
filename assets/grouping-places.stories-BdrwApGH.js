import{f as c,M as i,h as g,B as h,G as b,c as l,g as d,i as f,j as M}from"./grouping-page-4KeVIvA-.js";import"./jsx-runtime-Cnbe3ryz.js";import"./index-3dRrDZpt.js";import"./feature-hints-BLpBNgTy.js";import"./scene-kit-BsKxVgS1.js";import"./index-iBx7lKYd.js";import"./grouping-play-CTN_XQGq.js";import"./play-kit-Bu4SXy9H.js";import"./feature-code-Dlz2p9Ie.js";import"./TableCore-Y75h2oha.js";import"./index-C0mjCMcL.js";import"./index-DKTdOcjh.js";import"./table-core-base-DFRq_Vzl.js";import"./places-Dp9r7e0L.js";import"./styles-HzBmg0bt.js";import"./icons-849xEHsl.js";import"./menu-DvyBTqNz.js";import"./TableStatusBar-4NxO8OsQ.js";import"./status-bar-CYB7-jUm.js";import"./panel-controls-DNzRkyVB.js";import"./SortingPanel-CpobHppH.js";import"./TableToolbar-DTYEmPN-.js";import"./toolbar-C5VRlWnq.js";import"./pin-controls-NGLUwJXC.js";import"./employees-CL5oqWiT.js";import"./fixtures-P-DSdYmm.js";const J={...b,title:"Tables/Table Core/Features/Grouping/Places",parameters:d("The places the user groups from. Each is switched on for the whole table; a column can be left out of any of them (`meta.hideFrom`). All of them change the same `state.grouping`.")},p=m=>m,o={tags:["kb:group-column-menu"],name:"3 · Column menu",args:i,parameters:{...p({set:"plain",owner:"screen",hint:f}),controls:l(["columnMenu","enableGrouping","enableMultiGroup","grouping"]),docs:{description:{story:"`columnMenu` (on by default): a header click opens the menu, *Group by X* makes X a lane; the lane header opens the same menu with *Ungroup by X*. Off (`columnMenu={false}`): no menu to group from."}}},play:c},e={tags:["kb:group-toolbar-status-bar"],name:"4 · Toolbar & Status bar",args:h,parameters:{...p({set:"plain",owner:"screen",hint:M}),controls:l(["toolbar","statusBar","columnHideFrom","columnMenu","enableMultiGroup","grouping"]),docs:{description:{story:"The whole table: `toolbar` (*Group* → the Group panel; *Columns* shows a grouped column locked) and `statusBar` (the group chip, *Clear all*). One column: `meta.hideFrom` leaves it out of chosen places — `toolbar.grouping`, `statusBar.grouping`, `columnMenu.grouping`, `groupHeader.menu`. An action in a place touches only what that place lists."}}},play:g};var n,r,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  tags: ['kb:group-column-menu'],
  name: '3 · Column menu',
  args: MENU_START,
  parameters: {
    ...scene({
      set: 'plain',
      owner: 'screen',
      hint: columnMenu
    }),
    controls: controlsOf(['columnMenu', 'enableGrouping', 'enableMultiGroup', 'grouping']),
    docs: {
      description: {
        story: '\`columnMenu\` (on by default): a header click opens the menu, *Group by X* makes X a lane; the lane header opens the same menu with *Ungroup by X*. Off (\`columnMenu={false}\`): no menu to group from.'
      }
    }
  },
  play: columnMenuPlay
}`,...(a=(r=o.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var t,s,u;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  tags: ['kb:group-toolbar-status-bar'],
  name: '4 · Toolbar & Status bar',
  args: BARS_START,
  parameters: {
    ...scene({
      set: 'plain',
      owner: 'screen',
      hint: bars
    }),
    controls: controlsOf(['toolbar', 'statusBar', 'columnHideFrom', 'columnMenu', 'enableMultiGroup', 'grouping']),
    docs: {
      description: {
        story: 'The whole table: \`toolbar\` (*Group* → the Group panel; *Columns* shows a grouped column locked) and \`statusBar\` (the group chip, *Clear all*). One column: \`meta.hideFrom\` leaves it out of chosen places — \`toolbar.grouping\`, \`statusBar.grouping\`, \`columnMenu.grouping\`, \`groupHeader.menu\`. An action in a place touches only what that place lists.'
      }
    }
  },
  play: barsPlay
}`,...(u=(s=e.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const K=["ColumnMenu","ToolbarStatusBar"];export{o as ColumnMenu,e as ToolbarStatusBar,K as __namedExportsOrder,J as default};
