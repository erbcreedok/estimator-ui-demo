import{o as c,O as m,a as g,b as h,G as d,c as i,g as b,d as y,e as O}from"./grouping-page-DlC2yesD.js";import"./styles-DXLXEQ3H.js";import"./index-BjhrbhTf.js";import"./jsx-runtime-CEpjeC4Q.js";import"./index-D841zMOb.js";import"./feature-hints-CH2Kq8R8.js";import"./scene-kit-DXifMYYP.js";import"./index-DLqD3z3M.js";import"./grouping-play-CrknfM6n.js";import"./play-kit-Bu4SXy9H.js";import"./feature-code-DArJNGHI.js";import"./TableCore-kOYdxPhk.js";import"./TableStatusBar-BHCIeSi2.js";import"./panels-D6DlFR9J.js";import"./TableToolbar-C0bTLKMD.js";import"./createSvgIcon-s1BrOgA2.js";import"./employees-DtM5_3-O.js";import"./fixtures-CCjjPTo2.js";const I={...d,title:"Tables/Table Core/Grouping/Basics",parameters:b("Grouping is `state.grouping`: the grouped columns, outer first. The table groups its rows by it — whoever sets it.")},l=u=>u,e={tags:["kb:group-one-prop"],name:"1 · One prop",args:h,parameters:{...l({set:"plain",owner:"constant",hint:y}),controls:i(["grouping"]),docs:{description:{story:"One prop — `state={{ grouping: ['team'] }}` — and the rows are grouped: Team is a lane on the left. No column menu (`columnMenu={false}`), no toolbar, no status bar. A constant with no `onGroupingChange`: only the code changes it."}}},play:g},n={tags:["kb:group-external-control"],name:"2 · External control",args:m,parameters:{...l({set:"plain",owner:"screen",outside:"buttons",hint:O}),controls:i(["grouping","enableGrouping","enableMultiGroup"]),docs:{description:{story:"The screen owns the state (`useState` + `onGroupingChange`) and any button of its own sets it — one level or several. `enableGrouping` and `enableMultiGroup` limit only the user in the table (here: the column menu); the state can hold anything."}}},play:c};var o,t,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};var a,s,p;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(s=n.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const B=["OneProp","ExternalControl"];export{n as ExternalControl,e as OneProp,B as __namedExportsOrder,I as default};
