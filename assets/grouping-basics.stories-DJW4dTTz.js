import{o as m,O as c,a as g,b as h,G as d,c as i,g as b,d as y,e as O}from"./grouping-page-4KeVIvA-.js";import"./jsx-runtime-Cnbe3ryz.js";import"./index-3dRrDZpt.js";import"./feature-hints-BLpBNgTy.js";import"./scene-kit-BsKxVgS1.js";import"./index-iBx7lKYd.js";import"./grouping-play-CTN_XQGq.js";import"./play-kit-Bu4SXy9H.js";import"./feature-code-Dlz2p9Ie.js";import"./TableCore-Y75h2oha.js";import"./index-C0mjCMcL.js";import"./index-DKTdOcjh.js";import"./table-core-base-DFRq_Vzl.js";import"./places-Dp9r7e0L.js";import"./styles-HzBmg0bt.js";import"./icons-849xEHsl.js";import"./menu-DvyBTqNz.js";import"./TableStatusBar-4NxO8OsQ.js";import"./status-bar-CYB7-jUm.js";import"./panel-controls-DNzRkyVB.js";import"./SortingPanel-CpobHppH.js";import"./TableToolbar-DTYEmPN-.js";import"./toolbar-C5VRlWnq.js";import"./pin-controls-NGLUwJXC.js";import"./employees-CL5oqWiT.js";import"./fixtures-P-DSdYmm.js";const K={...d,title:"Tables/Table Core/Features/Grouping/Basics",parameters:b("Grouping is `state.grouping`: the grouped columns, outer first. The table groups its rows by it — whoever sets it.")},l=u=>u,e={tags:["kb:group-one-prop"],name:"1 · One prop",args:h,parameters:{...l({set:"plain",owner:"constant",hint:y}),controls:i(["grouping"]),docs:{description:{story:"One prop — `state={{ grouping: ['team'] }}` — and the rows are grouped: Team is a lane on the left. No column menu (`columnMenu={false}`), no toolbar, no status bar. A constant with no `onGroupingChange`: only the code changes it."}}},play:g},o={tags:["kb:group-external-control"],name:"2 · External control",args:c,parameters:{...l({set:"plain",owner:"screen",outside:"buttons",hint:O}),controls:i(["grouping","enableGrouping","enableMultiGroup"]),docs:{description:{story:"The screen owns the state (`useState` + `onGroupingChange`) and any button of its own sets it — one level or several. `enableGrouping` and `enableMultiGroup` limit only the user in the table (here: the column menu); the state can hold anything."}}},play:m};var n,t,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  tags: ['kb:group-one-prop'],
  name: '1 · One prop',
  args: ONE_PROP_START,
  parameters: {
    ...scene({
      set: 'plain',
      owner: 'constant',
      hint: oneProp
    }),
    controls: controlsOf(['grouping']),
    docs: {
      description: {
        story: "One prop — \`state={{ grouping: ['team'] }}\` — and the rows are grouped: Team is a lane on the left. No column menu (\`columnMenu={false}\`), no toolbar, no status bar. A constant with no \`onGroupingChange\`: only the code changes it."
      }
    }
  },
  play: onePropPlay
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};var a,s,p;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  tags: ['kb:group-external-control'],
  name: '2 · External control',
  args: OUTSIDE_START,
  parameters: {
    ...scene({
      set: 'plain',
      owner: 'screen',
      outside: 'buttons',
      hint: outside
    }),
    controls: controlsOf(['grouping', 'enableGrouping', 'enableMultiGroup']),
    docs: {
      description: {
        story: 'The screen owns the state (\`useState\` + \`onGroupingChange\`) and any button of its own sets it — one level or several. \`enableGrouping\` and \`enableMultiGroup\` limit only the user in the table (here: the column menu); the state can hold anything.'
      }
    }
  },
  play: outsidePlay
}`,...(p=(s=o.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const L=["OneProp","ExternalControl"];export{o as ExternalControl,e as OneProp,L as __namedExportsOrder,K as default};
