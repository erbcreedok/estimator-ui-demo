import{O as m,a as d,S as h,c as l,s as g,o as u,b}from"./sorting-page-BEurg12m.js";import{o as S,a as y}from"./sorting-play-BR_ct78p.js";import"./styles-DXLXEQ3H.js";import"./index-BjhrbhTf.js";import"./jsx-runtime-CEpjeC4Q.js";import"./index-D841zMOb.js";import"./feature-code-DArJNGHI.js";import"./TableCore-kOYdxPhk.js";import"./TableStatusBar-BHCIeSi2.js";import"./panels-D6DlFR9J.js";import"./TableToolbar-C0bTLKMD.js";import"./createSvgIcon-s1BrOgA2.js";import"./employees-DtM5_3-O.js";import"./fixtures-CCjjPTo2.js";import"./scene-kit-DXifMYYP.js";import"./feature-hints-CH2Kq8R8.js";import"./index-DLqD3z3M.js";import"./play-kit-Bu4SXy9H.js";const B={...h,title:"Tables/Table Core/Sorting/Basics",parameters:g("Sorting is `state.sorting`: a list of `{ id, desc }` in priority order. The table sorts its rows by it — whoever sets it.")},c=p=>p,t={tags:["kb:sort-one-prop"],name:"1 · One prop",args:d,parameters:{...c({set:"plain",owner:"constant",hint:u}),controls:l(["sorting","enableSorting"]),docs:{description:{story:"One prop — `state={{ sorting: [{ id: 'name', desc: false }] }}` — and the rows are sorted, the header shows ↑. No column menu (`columnMenu={false}`), no toolbar, no status bar. A constant with no `onSortingChange`: only the code changes it. `initialState` instead would give the table its own copy that the user can change."}}},play:y},e={tags:["kb:sort-external-control"],name:"2 · External control",args:m,parameters:{...c({set:"plain",owner:"screen",outside:"buttons",hint:b}),controls:l(["sorting","enableSorting","enableMultiSort"]),docs:{description:{story:"The screen owns the state (`useState` + `onSortingChange`) and any button of its own sets it — one sort or several. `enableSorting` and `enableMultiSort` limit only the user in the table; the state can hold anything."}}},play:S};var n,o,r;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var s,a,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const G=["OneProp","ExternalControl"];export{e as ExternalControl,t as OneProp,G as __namedExportsOrder,B as default};
