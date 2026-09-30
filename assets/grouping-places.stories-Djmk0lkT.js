import{f as c,M as i,h as g,B as h,G as b,c as l,g as d,i as f,j as M}from"./grouping-page-DlC2yesD.js";import"./styles-DXLXEQ3H.js";import"./index-BjhrbhTf.js";import"./jsx-runtime-CEpjeC4Q.js";import"./index-D841zMOb.js";import"./feature-hints-CH2Kq8R8.js";import"./scene-kit-DXifMYYP.js";import"./index-DLqD3z3M.js";import"./grouping-play-CrknfM6n.js";import"./play-kit-Bu4SXy9H.js";import"./feature-code-DArJNGHI.js";import"./TableCore-kOYdxPhk.js";import"./TableStatusBar-BHCIeSi2.js";import"./panels-D6DlFR9J.js";import"./TableToolbar-C0bTLKMD.js";import"./createSvgIcon-s1BrOgA2.js";import"./employees-DtM5_3-O.js";import"./fixtures-CCjjPTo2.js";const v={...b,title:"Tables/Table Core/Grouping/Places",parameters:d("The places the user groups from. Each is switched on for the whole table; a column can be left out of any of them (`meta.hideFrom`). All of them change the same `state.grouping`.")},p=m=>m,e={tags:["kb:group-column-menu"],name:"3 · Column menu",args:i,parameters:{...p({set:"plain",owner:"screen",hint:f}),controls:l(["columnMenu","enableGrouping","enableMultiGroup","grouping"]),docs:{description:{story:"`columnMenu` (on by default): a header click opens the menu, *Group by X* makes X a lane; the lane header opens the same menu with *Ungroup by X*. Off (`columnMenu={false}`): no menu to group from."}}},play:c},o={tags:["kb:group-toolbar-status-bar"],name:"4 · Toolbar & Status bar",args:h,parameters:{...p({set:"plain",owner:"screen",hint:M}),controls:l(["toolbar","statusBar","columnHideFrom","columnMenu","enableMultiGroup","grouping"]),docs:{description:{story:"The whole table: `toolbar` (*Group* → the Group panel; *Columns* shows a grouped column locked) and `statusBar` (the group chip, *Clear all*). One column: `meta.hideFrom` leaves it out of chosen places — `toolbar.grouping`, `statusBar.grouping`, `columnMenu.grouping`, `groupHeader.menu`. An action in a place touches only what that place lists."}}},play:g};var n,a,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var t,s,u;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(u=(s=o.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const x=["ColumnMenu","ToolbarStatusBar"];export{e as ColumnMenu,o as ToolbarStatusBar,x as __namedExportsOrder,v as default};
