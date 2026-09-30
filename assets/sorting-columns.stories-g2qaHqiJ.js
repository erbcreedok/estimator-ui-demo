import{d as u,H as p,S as h,c as d,K as y,s as f,e as b,h as g}from"./sorting-page-BEurg12m.js";import{s as S,h as T}from"./sorting-play-BR_ct78p.js";const w={...h,title:"Tables/Table Core/Sorting/Columns",parameters:f("Every column sorts its own way, set in its `columnDef`: the kind, a compare of its own, locked, left out of places.")},m=c=>c,l={columnMenu:!0,toolbar:!0,statusBar:!0},e={tags:["kb:sort-column-setup"],name:"5 · Column setup",args:{...l,...u},parameters:{...m({set:"kinds",owner:"screen",hint:b}),controls:d([...y,"unsortable","columnHideFrom","sorting"]),docs:{description:{story:"Name — text (A–Z), Rate — numbers, Start — a date (`meta.sort.type`), Period — its own `sortingFn` by the date, Priority — a fixed order (`meta.sort.order`), Colour — an order with its own icons. Team: `enableSorting: false`. Country: sorts from its menu, left out of the panel and the chip (`meta.hideFrom`)."}}},play:S},t={tags:["kb:sort-hidden-sort"],name:"6 · Hidden sort",args:{...l,...p},parameters:{...m({set:"hidden",owner:"screen",hint:g}),controls:d(["sorting","columnHideFrom"]),docs:{description:{story:"The screen's own sort, put together: Status in its own order (`meta.sort.order`), sorted by the screen (`state.sorting`) and hidden from every place (`meta.hideFrom: ['all']`). The user's sorts come after it and are numbered from 1; *Clear all* keeps it. Rank: a column that is never shown, and still the table can sort by it."}}},play:T};var r,o,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  tags: ['kb:sort-column-setup'],
  name: '5 · Column setup',
  args: {
    ...ON,
    ...SETUP_START
  },
  parameters: {
    ...scene({
      set: 'kinds',
      owner: 'screen',
      hint: setup
    }),
    controls: controlsOf([...KIND_KEYS, 'unsortable', 'columnHideFrom', 'sorting']),
    docs: {
      description: {
        story: 'Name — text (A–Z), Rate — numbers, Start — a date (\`meta.sort.type\`), Period — its own \`sortingFn\` by the date, Priority — a fixed order (\`meta.sort.order\`), Colour — an order with its own icons. Team: \`enableSorting: false\`. Country: sorts from its menu, left out of the panel and the chip (\`meta.hideFrom\`).'
      }
    }
  },
  play: setupPlay
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var s,a,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  tags: ['kb:sort-hidden-sort'],
  name: '6 · Hidden sort',
  args: {
    ...ON,
    ...HIDDEN_START
  },
  parameters: {
    ...scene({
      set: 'hidden',
      owner: 'screen',
      hint: hidden
    }),
    controls: controlsOf(['sorting', 'columnHideFrom']),
    docs: {
      description: {
        story: "The screen's own sort, put together: Status in its own order (\`meta.sort.order\`), sorted by the screen (\`state.sorting\`) and hidden from every place (\`meta.hideFrom: ['all']\`). The user's sorts come after it and are numbered from 1; *Clear all* keeps it. Rank: a column that is never shown, and still the table can sort by it."
      }
    }
  },
  play: hiddenPlay
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const C=["ColumnSetup","HiddenSort"],k=Object.freeze(Object.defineProperty({__proto__:null,ColumnSetup:e,HiddenSort:t,__namedExportsOrder:C,default:w},Symbol.toStringTag,{value:"Module"}));export{k as C,t as H,e as a};
