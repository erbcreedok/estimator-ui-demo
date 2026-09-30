import{j as e}from"./jsx-runtime-CEpjeC4Q.js";import{useMDXComponents as t}from"./index-JWoZMxqf.js";import{M as l,S as a}from"./index-DnbyNrd_.js";import{D as o}from"./reference-kit-BBQ-bL5f.js";import"./index-BjhrbhTf.js";import"./index-D841zMOb.js";import"./iframe-BXLXV2g8.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./styles-DXLXEQ3H.js";import"./types-reference-C4qaG4BC.js";function n(r){const s={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Tables/Table Core/Concepts/Resolvers/Overview"}),`
`,e.jsx(s.h1,{id:"resolvers",children:"Resolvers"}),`
`,e.jsxs(s.p,{children:["A ",e.jsx(s.strong,{children:"resolver"})," is a screen's own answer to a question the table asks: ",e.jsx(s.em,{children:"which columns does the Group panel offer?"}),", ",e.jsx(s.em,{children:"which sorts does the chip show?"}),", ",e.jsx(s.em,{children:"what does this row group by?"})," It is a function ",e.jsx(s.code,{children:"(args, defaults) => answer"})," in the ",e.jsx(s.code,{children:"resolvers"})," prop: it gets what the question is about (",e.jsx(s.code,{children:"{ table }"}),", ",e.jsx(s.code,{children:"{ table, place }"}),", ",e.jsx(s.code,{children:"{ table, column, row }"}),") and the table's own answer, and returns the one to use."]}),`
`,e.jsxs(s.p,{children:["A resolver ",e.jsx(s.strong,{children:"never writes state"}),". It answers; the table's methods ask it (",e.jsx(s.code,{children:"table.getColumnsFor(place)"}),", ",e.jsx(s.code,{children:"table.getSortsFor(place)"})," …) and the actions read those answers."]}),`
`,e.jsx(s.h2,{id:"the-chain",children:"The chain"}),`
`,e.jsx(s.p,{children:"Every list a place shows is asked in a chain — each step gets the answer of the one below:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"The place's own resolver"})," — ",e.jsx(s.code,{children:"getColumnsForGroupingPanel"}),", ",e.jsx(s.code,{children:"getSortsForStatusBar"})," …, given 2."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"The general resolver"})," of its kind, for every place — ",e.jsx(s.code,{children:"getColumnsFor"}),", ",e.jsx(s.code,{children:"getSortsFor"}),", ",e.jsx(s.code,{children:"getGroupingFor"}),", with the ",e.jsx(s.code,{children:"place"})," in its arguments, given 3."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"The default"})," — ",e.jsx(s.code,{children:"meta.hideFrom"})," leaves columns out; for columns ",e.jsx(s.code,{children:"placeOrder"})," puts some first and some last; the rest in the table's order (pinned left, the middle, pinned right, by ",e.jsx(s.code,{children:"columnOrder"}),"; a column ",e.jsx(s.code,{children:"columnOrder"})," does not name keeps the place of its definition)."]}),`
`]}),`
`,e.jsx(s.p,{children:"Use one step, several or none; a step may build on the answer it gets or ignore it."}),`
`,e.jsx(s.h2,{id:"how-deep-a-resolver-goes",children:"How deep a resolver goes"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"What a place offers to add"})," — ",e.jsx(s.code,{children:"getColumnsFor…"}),": only what a panel lists and in what order. Picking from it groups or sorts as usual. Order, rank, search: all here. ",e.jsx(o,{page:"tables-table-core-concepts-resolvers-lists--how-lists-work",children:"Lists"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"What a place sees of what is applied"})," — ",e.jsx(s.code,{children:"getSortsFor…"}),", ",e.jsx(s.code,{children:"getGroupingFor…"}),": what it shows ",e.jsx(s.em,{children:"and what its actions touch"}),". One rule: ",e.jsx(s.strong,{children:"an action in a place touches only what that place lists"})," — ",e.jsx(s.em,{children:"Clear all"})," in the status bar clears the chip's sorts, a header click replaces the sorts the headers number, a drag in a panel reorders its own. A sort left out of every list is the screen's own: the user never sees or removes it. Keep these in priority order: a drag in a panel writes the priority in the order on screen."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"The data and the layout"})," — ",e.jsx(s.code,{children:"getGroupingValue"})," (what rows group by), ",e.jsx(s.code,{children:"getLanesPosition"})," (where the lanes stand), ",e.jsx(s.code,{children:"getHeaderSort"})," (what a header shows). ",e.jsx(o,{page:"tables-table-core-concepts-resolvers-data-and-layout--docs",children:"Data and layout"}),"."]}),`
`]}),`
`,e.jsx(s.h2,{id:"your-own-resolvers--examples",children:"Your own resolvers — examples"}),`
`,e.jsx(a,{dark:!0,language:"tsx",code:`<TableCore
  data={rows}
  columns={columns}
  // The default answer: Person first, the grouping-only columns last, in every panel.
  placeOrder={{ toolbar: { first: ['person'], last: ['contract', 'country'] } }}
  resolvers={{
    // Every list of columns: the order a server gives, a search box of the screen.
    getColumnsFor: ({ place }, columns) =>
      [...columns]
        .sort((a, b) => (rank[a.id] ?? 99) - (rank[b.id] ?? 99))
        .filter((c) => c.getLabel().toLowerCase().includes(search)),

    // One place on its own: the Columns panel A–Z (it gets the answer above).
    getColumnsForColumnsPanel: (_args, columns) =>
      [...columns].sort((a, b) => a.getLabel().localeCompare(b.getLabel())),

    // The same rule as placeOrder, in your own resolver.
    getColumnsForSortingPanel: (_args, columns) =>
      orderColumns(columns, { first: ['rate'] }),

    // The screen's own sort on Rate: no place lists it, no action touches it.
    getSortsFor: (_args, sorts) => sorts.filter((s) => s.id !== 'rate'),

    // Only the user's own grouping in the chip; the screen's Issues stays out.
    getGroupingForStatusBar: (_args, grouping) => grouping.filter((id) => id !== 'issues'),

    // What a row groups by, for the whole table: Blocked and Excluded together.
    getGroupingValue: ({ column }, value) =>
      column.id === 'status' && value !== 'ok' ? 'Needs attention' : value,

    // The lanes after the pinned columns.
    getLanesPosition: () => 'end',
  }}
/>`}),`
`,e.jsxs(s.p,{children:["Every resolver, its arguments and its default: ",e.jsx(o,{page:"tables-table-core-concepts-resolvers-reference--docs",children:"Reference"}),". The features that use them: ",e.jsx(o,{page:"tables-table-core-sorting-overview--docs",children:"Sorting"}),", ",e.jsx(o,{page:"tables-table-core-grouping-overview--docs",children:"Grouping"})," (Filtering will list its places the same way)."]})]})}function v(r={}){const{wrapper:s}={...t(),...r.components};return s?e.jsx(s,{...r,children:e.jsx(n,{...r})}):n(r)}export{v as default};
