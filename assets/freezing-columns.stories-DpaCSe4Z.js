import{s as r,S as s}from"./freezing-hints-ktsXkKrU.js";import{F as o,c as l,f as i}from"./freezing-page-BBwiIMYl.js";import{s as m}from"./freezing-play-mBtlZnru.js";const u={...o,title:"Tables/Table Core/Features/Freezing/Columns",parameters:i("Every column decides in its `columnDef` whether the user may freeze it and drag it.")},c={set:"all",owner:"screen",hint:r},e={tags:["kb:freeze-column-setup"],name:"9 · Column setup",args:{columnMenu:!0,toolbar:!0,...s},parameters:{...c,controls:l(["unpinnable","fixed","nameFirst","pinnedLeft"]),docs:{description:{story:"Name: frozen by the state, `enablePinning: false` (the user cannot unfreeze it), `meta.disableReorder` (not dragged) and a `canMoveColumn` resolver (nothing lands before it) — it stays first. `meta.disableReorder` alone only takes the grip away: the others still move around it. Email: `enablePinning: false`, never frozen by the user. The state may freeze any column: the switches limit only the user."}}},play:m};var n,t,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  tags: ['kb:freeze-column-setup'],
  name: '9 · Column setup',
  args: {
    columnMenu: true,
    toolbar: true,
    ...SETUP_START
  },
  parameters: {
    ...params,
    controls: controlsOf(['unpinnable', 'fixed', 'nameFirst', 'pinnedLeft']),
    docs: {
      description: {
        story: 'Name: frozen by the state, \`enablePinning: false\` (the user cannot unfreeze it), \`meta.disableReorder\` (not dragged) and a \`canMoveColumn\` resolver (nothing lands before it) — it stays first. \`meta.disableReorder\` alone only takes the grip away: the others still move around it. Email: \`enablePinning: false\`, never frozen by the user. The state may freeze any column: the switches limit only the user.'
      }
    }
  },
  play: setupPlay
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const d=["ColumnSetup"],y=Object.freeze(Object.defineProperty({__proto__:null,ColumnSetup:e,__namedExportsOrder:d,default:u},Symbol.toStringTag,{value:"Module"}));export{y as C,e as a};
