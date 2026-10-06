import{O as m,a as d,S as h,c as l,s as g,o as u,b}from"./sorting-page-DT8SgY6Q.js";import{o as S,a as y}from"./sorting-play-DW0xLn7E.js";import"./jsx-runtime-Cnbe3ryz.js";import"./index-3dRrDZpt.js";import"./feature-code-Dlz2p9Ie.js";import"./TableCore-Y75h2oha.js";import"./index-C0mjCMcL.js";import"./index-DKTdOcjh.js";import"./table-core-base-DFRq_Vzl.js";import"./places-Dp9r7e0L.js";import"./styles-HzBmg0bt.js";import"./icons-849xEHsl.js";import"./menu-DvyBTqNz.js";import"./TableStatusBar-4NxO8OsQ.js";import"./status-bar-CYB7-jUm.js";import"./panel-controls-DNzRkyVB.js";import"./SortingPanel-CpobHppH.js";import"./TableToolbar-DTYEmPN-.js";import"./toolbar-C5VRlWnq.js";import"./pin-controls-NGLUwJXC.js";import"./employees-CL5oqWiT.js";import"./fixtures-P-DSdYmm.js";import"./scene-kit-BsKxVgS1.js";import"./feature-hints-BLpBNgTy.js";import"./index-iBx7lKYd.js";import"./play-kit-Bu4SXy9H.js";const K={...h,title:"Tables/Table Core/Features/Sorting/Basics",parameters:g("Sorting is `state.sorting`: a list of `{ id, desc }` in priority order. The table sorts its rows by it — whoever sets it.")},p=c=>c,t={tags:["kb:sort-one-prop"],name:"1 · One prop",args:d,parameters:{...p({set:"plain",owner:"constant",hint:u}),controls:l(["sorting","enableSorting"]),docs:{description:{story:"One prop — `state={{ sorting: [{ id: 'name', desc: false }] }}` — and the rows are sorted, the header shows ↑. No column menu (`columnMenu={false}`), no toolbar, no status bar. A constant with no `onSortingChange`: only the code changes it. `initialState` instead would give the table its own copy that the user can change."}}},play:y},e={tags:["kb:sort-external-control"],name:"2 · External control",args:m,parameters:{...p({set:"plain",owner:"screen",outside:"buttons",hint:b}),controls:l(["sorting","enableSorting","enableMultiSort"]),docs:{description:{story:"The screen owns the state (`useState` + `onSortingChange`) and any button of its own sets it — one sort or several. `enableSorting` and `enableMultiSort` limit only the user in the table; the state can hold anything."}}},play:S};var o,n,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  tags: ['kb:sort-one-prop'],
  name: '1 · One prop',
  args: ONE_PROP_START,
  parameters: {
    ...scene({
      set: 'plain',
      owner: 'constant',
      hint: oneProp
    }),
    controls: controlsOf(['sorting', 'enableSorting']),
    docs: {
      description: {
        story: "One prop — \`state={{ sorting: [{ id: 'name', desc: false }] }}\` — and the rows are sorted, the header shows ↑. No column menu (\`columnMenu={false}\`), no toolbar, no status bar. A constant with no \`onSortingChange\`: only the code changes it. \`initialState\` instead would give the table its own copy that the user can change."
      }
    }
  },
  play: onePropPlay
}`,...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};var s,a,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  tags: ['kb:sort-external-control'],
  name: '2 · External control',
  args: OUTSIDE_START,
  parameters: {
    ...scene({
      set: 'plain',
      owner: 'screen',
      outside: 'buttons',
      hint: outside
    }),
    controls: controlsOf(['sorting', 'enableSorting', 'enableMultiSort']),
    docs: {
      description: {
        story: 'The screen owns the state (\`useState\` + \`onSortingChange\`) and any button of its own sets it — one sort or several. \`enableSorting\` and \`enableMultiSort\` limit only the user in the table; the state can hold anything.'
      }
    }
  },
  play: outsidePlay
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const L=["OneProp","ExternalControl"];export{e as ExternalControl,t as OneProp,L as __namedExportsOrder,K as default};
