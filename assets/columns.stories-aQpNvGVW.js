import{S as m,_ as f}from"./scene-DY5gZaw6.js";import{c as p,j as t,b as h,M as y,s as S,p as g,d as b,e as C,f as x}from"./products-CTiDOXRn.js";import{b as k,h as w}from"./checks-Cdgb-MqO.js";import{H as s}from"./sortings-CKkx76aO.js";const[r]=Object.values([f]),T={title:"Tables/Table Core/Features/Sorting/Columns",id:"tables-table-core-features-sorting-columns",...x(r)},n={tags:["kb:sort-column-setup"],name:"3 · Column setup",parameters:{...S(r,"ColumnSetup"),summary:"Each column its kind of sort: the words, a fixed order, own icons; a column that never sorts."},args:{set:"kinds",columnMenu:!0},argTypes:{set:{control:{type:"radio"},options:["basic","kinds"]},columnMenu:{control:{type:"boolean"}}},render:e=>t.jsx(h,{args:e,children:t.jsx(m,{...e,hint:t.jsx(y,{text:"Open **Sort ›** on different columns: **Name** — A–Z, **Rate** — numbers, **Start** — oldest / newest first (a date kept as text, flagged `meta.sort.type: 'date'`), **Priority** — High first / Low first (`sortFn: sortByOrder(…)`), **Colour** — Red first / Green first with its own icons (`meta.sort.icons`). **Team** says `enableSorting: false`: no menu."})})}),play:async e=>{p(e)||await k(e.canvasElement)}},o={tags:["kb:sort-hidden-sort"],name:"4 · A sort nobody sees",parameters:{...S(r,"HiddenSort",C({initialSorting:s})),summary:"The screen sorts by a column that is not shown: no chip, not in the panel, Clear all leaves it."},args:{set:"hidden",columnMenu:!0,toolbar:!0,statusBar:!0,initialSorting:"by Status (Blocked first)"},argTypes:{set:{control:{type:"radio"},options:["hidden"]},columnMenu:{control:{type:"boolean"}},toolbar:{control:{type:"boolean"}},statusBar:{control:{type:"boolean"}},initialSorting:b(s)},render:e=>t.jsx(h,{args:e,children:t.jsx(m,{...e,initialSorting:g(s,e.initialSorting),hint:t.jsx(y,{text:"The screen sorts by **Status** (Blocked first) and keeps the column out of sight: no chip, no arrow, not in the panel. Sort by **Name**, then **Clear all**: the user’s sort goes, the screen’s stays."})})}),play:async e=>{p(e)||await w(e.canvasElement)}};var a,i,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  tags: ['kb:sort-column-setup'],
  name: '3 · Column setup',
  parameters: {
    ...sceneCodeWith(tableSource, 'ColumnSetup'),
    summary: 'Each column its kind of sort: the words, a fixed order, own icons; a column that never sorts.'
  },
  args: {
    set: 'kinds',
    columnMenu: true
  },
  argTypes: {
    set: {
      control: {
        type: 'radio'
      },
      options: ['basic', 'kinds']
    },
    columnMenu: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="Open **Sort ›** on different columns: **Name** — A–Z, **Rate** — numbers, **Start** — oldest / newest first (a date kept as text, flagged \`meta.sort.type: 'date'\`), **Priority** — High first / Low first (\`sortFn: sortByOrder(…)\`), **Colour** — Red first / Green first with its own icons (\`meta.sort.icons\`). **Team** says \`enableSorting: false\`: no menu." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await setupAct(ctx.canvasElement);
  }
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,u,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  tags: ['kb:sort-hidden-sort'],
  name: '4 · A sort nobody sees',
  parameters: {
    ...sceneCodeWith(tableSource, 'HiddenSort', presetCodes({
      initialSorting: HIDDEN_SORTINGS
    })),
    summary: 'The screen sorts by a column that is not shown: no chip, not in the panel, Clear all leaves it.'
  },
  args: {
    set: 'hidden',
    columnMenu: true,
    toolbar: true,
    statusBar: true,
    initialSorting: 'by Status (Blocked first)'
  },
  argTypes: {
    set: {
      control: {
        type: 'radio'
      },
      options: ['hidden']
    },
    columnMenu: {
      control: {
        type: 'boolean'
      }
    },
    toolbar: {
      control: {
        type: 'boolean'
      }
    },
    statusBar: {
      control: {
        type: 'boolean'
      }
    },
    initialSorting: presetControl(HIDDEN_SORTINGS)
  },
  render: args => <Remount args={args}>
            <Scene {...args} initialSorting={presetValue(HIDDEN_SORTINGS, args.initialSorting)} hint={<Md text="The screen sorts by **Status** (Blocked first) and keeps the column out of sight: no chip, no arrow, not in the panel. Sort by **Name**, then **Clear all**: the user’s sort goes, the screen’s stays." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await hiddenAct(ctx.canvasElement);
  }
}`,...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const _=["ColumnSetup","HiddenSort"],N=Object.freeze(Object.defineProperty({__proto__:null,ColumnSetup:n,HiddenSort:o,__namedExportsOrder:_,default:T},Symbol.toStringTag,{value:"Module"}));export{N as C};
