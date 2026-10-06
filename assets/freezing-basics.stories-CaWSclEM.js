import{O as h,a as c,o as d,b as u}from"./freezing-hints-ktsXkKrU.js";import{F as g,c as l,f}from"./freezing-page-BBwiIMYl.js";import{o as P,a as b}from"./freezing-play-mBtlZnru.js";import"./jsx-runtime-Cnbe3ryz.js";import"./index-3dRrDZpt.js";import"./feature-hints-BLpBNgTy.js";import"./scene-kit-BsKxVgS1.js";import"./feature-code-Dlz2p9Ie.js";import"./TableCore-Y75h2oha.js";import"./index-C0mjCMcL.js";import"./index-DKTdOcjh.js";import"./table-core-base-DFRq_Vzl.js";import"./places-Dp9r7e0L.js";import"./styles-HzBmg0bt.js";import"./icons-849xEHsl.js";import"./menu-DvyBTqNz.js";import"./TableStatusBar-4NxO8OsQ.js";import"./status-bar-CYB7-jUm.js";import"./panel-controls-DNzRkyVB.js";import"./SortingPanel-CpobHppH.js";import"./TableToolbar-DTYEmPN-.js";import"./toolbar-C5VRlWnq.js";import"./pin-controls-NGLUwJXC.js";import"./employees-CL5oqWiT.js";import"./fixtures-P-DSdYmm.js";import"./index-iBx7lKYd.js";import"./grouping-play-CTN_XQGq.js";import"./play-kit-Bu4SXy9H.js";const K={...g,title:"Tables/Table Core/Features/Freezing/Basics",parameters:f("Freezing is `state.columnPinning`: `{ left: [ids], right: [ids] }`, the order of each list is its frozen order: `left` sticks to the left edge, `right` to the right. The table freezes by it — whoever sets it.")},p=m=>m,e={tags:["kb:freeze-one-prop"],name:"1 · One prop",args:c,parameters:{...p({set:"all",owner:"constant",hint:d}),controls:l(["pinnedLeft","pinnedRight"]),docs:{description:{story:"One prop — `state={{ columnPinning: { left: ['name', 'team'], right: [] } }}` — and Name and Team stay while the rest scroll. No column menu (`columnMenu={false}`), no toolbar. A constant with no `onColumnPinningChange`: only the code changes it. Freeze at the right the same way — `right: ['workload']`, or both at once. `initialState` instead would give the table its own copy that the user can change."}}},play:b},t={tags:["kb:freeze-external-control"],name:"2 · External control",args:h,parameters:{...p({set:"all",owner:"screen",outside:"buttons",hint:u}),controls:l(["pinnedLeft","pinnedRight","enableColumnPinning","toolbar"]),docs:{description:{story:"The screen owns the state (`useState` + `onColumnPinningChange`) and its own buttons set it. Buttons freeze at the left, at the right and on both sides. The Resource Plan case: `enableColumnPinning={false}` — the user has no *Freeze* anywhere, the state still freezes. On: the user freezes too, and the buttons follow."}}},play:P};var n,o,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  tags: ['kb:freeze-one-prop'],
  name: '1 · One prop',
  args: ONE_PROP_START,
  parameters: {
    ...scene({
      set: 'all',
      owner: 'constant',
      hint: oneProp
    }),
    controls: controlsOf(['pinnedLeft', 'pinnedRight']),
    docs: {
      description: {
        story: "One prop — \`state={{ columnPinning: { left: ['name', 'team'], right: [] } }}\` — and Name and Team stay while the rest scroll. No column menu (\`columnMenu={false}\`), no toolbar. A constant with no \`onColumnPinningChange\`: only the code changes it. Freeze at the right the same way — \`right: ['workload']\`, or both at once. \`initialState\` instead would give the table its own copy that the user can change."
      }
    }
  },
  play: onePropPlay
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var a,s,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  tags: ['kb:freeze-external-control'],
  name: '2 · External control',
  args: OUTSIDE_START,
  parameters: {
    ...scene({
      set: 'all',
      owner: 'screen',
      outside: 'buttons',
      hint: outside
    }),
    controls: controlsOf(['pinnedLeft', 'pinnedRight', 'enableColumnPinning', 'toolbar']),
    docs: {
      description: {
        story: 'The screen owns the state (\`useState\` + \`onColumnPinningChange\`) and its own buttons set it. Buttons freeze at the left, at the right and on both sides. The Resource Plan case: \`enableColumnPinning={false}\` — the user has no *Freeze* anywhere, the state still freezes. On: the user freezes too, and the buttons follow.'
      }
    }
  },
  play: outsidePlay
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const Q=["OneProp","ExternalControl"];export{t as ExternalControl,e as OneProp,Q as __namedExportsOrder,K as default};
