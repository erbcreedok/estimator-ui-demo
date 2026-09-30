import{j as e}from"./jsx-runtime-CEpjeC4Q.js";import{useMDXComponents as i}from"./index-JWoZMxqf.js";import{M as l,C as o,S as c}from"./index-DnbyNrd_.js";import{OneProp as d,ExternalControl as h}from"./sorting-basics.stories-CElWfbPZ.js";import{P as r,D as a}from"./reference-kit-BBQ-bL5f.js";import{T as x,A as j}from"./sorting-reference-Da51x_9U.js";import"./index-BjhrbhTf.js";import"./index-D841zMOb.js";import"./iframe-BXLXV2g8.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./sorting-page-BEurg12m.js";import"./styles-DXLXEQ3H.js";import"./feature-code-DArJNGHI.js";import"./TableCore-kOYdxPhk.js";import"./TableStatusBar-BHCIeSi2.js";import"./panels-D6DlFR9J.js";import"./TableToolbar-C0bTLKMD.js";import"./createSvgIcon-s1BrOgA2.js";import"./employees-DtM5_3-O.js";import"./fixtures-CCjjPTo2.js";import"./scene-kit-DXifMYYP.js";import"./feature-hints-CH2Kq8R8.js";import"./sorting-play-BR_ct78p.js";import"./index-DLqD3z3M.js";import"./play-kit-Bu4SXy9H.js";import"./types-reference-C4qaG4BC.js";function t(s){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Tables/Table Core/Sorting/Overview"}),`
`,e.jsx(n.h1,{id:"sorting",children:"Sorting"}),`
`,e.jsx(n.p,{children:"Rows in order by one column or several, in the priority the user or the screen sets."}),`
`,e.jsx(n.h2,{id:"headless",children:"Headless"}),`
`,e.jsxs(n.p,{children:["Sorting is one piece of table state: ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"state.sorting"})}),", a list of ",e.jsx(n.code,{children:"{ id, desc }"})," in priority order. The table sorts its rows by it — whoever sets it: the screen's code, a button of its own, or the user in the table. Everything you see (the arrow in a header, the column menu, the Sorting panel, the chip) only reads and writes that state, and each of them is optional."]}),`
`,e.jsx(n.p,{children:"Under the hood:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["TanStack ",e.jsx(n.code,{children:"SortingFeature"})]})," — the state, ",e.jsx(n.code,{children:"getSortedRowModel"}),", ",e.jsx(n.code,{children:"sortingFn"}),", ",e.jsx(n.code,{children:"enableSorting"}),", ",e.jsx(n.code,{children:"enableMultiSort"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"TableCore on top of it"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"kinds of sorting"})," — ",e.jsx(n.code,{children:"meta.sort"}),": the wording, the icons, a fixed order of values;"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"places"})," — ",e.jsx(n.code,{children:"meta.hideFrom"})," and ",e.jsx(n.code,{children:"resolvers"}),": what the header, the menu, the panel and the chip list, and what their actions touch;"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"group sorting"})," — a grouped column sorts its own groups."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"The UI"})," — ",e.jsx(n.code,{children:"columnMenu"})," (its ",e.jsx(n.em,{children:"Sort ›"})," section), ",e.jsx(n.code,{children:"TableToolbar"})," (the ",e.jsx(n.em,{children:"Sort"})," button and the Sorting panel), ",e.jsx(n.code,{children:"TableStatusBar"})," (the chip and ",e.jsx(n.em,{children:"Clear all"}),"). Each is a prop you pass or leave out."]}),`
`]}),`
`,e.jsx(n.h2,{id:"the-simplest-table",children:"The simplest table"}),`
`,e.jsx(n.p,{children:"One prop — the state as a constant — and the rows are sorted. No column menu, no toolbar, no status bar."}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(n.h2,{id:"the-tables-props",children:"The table's props"}),`
`,e.jsx(r,{rows:x}),`
`,e.jsx(n.h2,{id:"turn-it-off",children:"Turn it off"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"No sorting at all"})," — leave out ",e.jsx(n.code,{children:"state.sorting"})," and set ",e.jsx(n.code,{children:"enableSorting={false}"}),": nothing sorts, nothing to click."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"The user cannot sort, the screen still does"})," — ",e.jsx(n.code,{children:"enableSorting={false}"})," with ",e.jsx(n.code,{children:"state.sorting"}),": the rows stay in the screen's order."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"One column"})," — ",e.jsx(n.code,{children:"enableSorting: false"})," in its ",e.jsx(n.code,{children:"columnDef"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"One place"})," — ",e.jsx(n.code,{children:"columnMenu={false}"}),", a toolbar without ",e.jsx(n.code,{children:"sortingControl"}),", no status bar; or one column out of a place with ",e.jsx(n.code,{children:"meta.hideFrom"}),"."]}),`
`]}),`
`,e.jsx(c,{dark:!0,language:"tsx",code:`<TableCore
  data={rows}
  columns={columns}
  enableSorting={false}
  // the screen's order still applies:
  state={{ sorting: [{ id: 'status', desc: false }] }}
/>`}),`
`,e.jsx(n.h2,{id:"make-it-your-own",children:"Make it your own"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Your own compare"})," — ",e.jsx(n.code,{children:"sortingFn"})," on the column: any function of two rows."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Your own kind, wording, icons"})," — ",e.jsx(n.code,{children:"meta.sort"}),": ",e.jsx(n.code,{children:"type"}),", ",e.jsx(n.code,{children:"order"}),", ",e.jsx(n.code,{children:"labels"}),", ",e.jsx(n.code,{children:"icons"}),". See ",e.jsx(n.em,{children:"Columns › ColumnDef"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Your own menu"})," — ",e.jsx(n.code,{children:"columnMenu={[createSortingSection({ getLabels, label }), …]}"}),", or sections of your own."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Your own lists per place"})," — ",e.jsx(n.code,{children:"placeOrder"})," for the order of the panels, ",e.jsx(n.code,{children:"resolvers"})," for anything else: ",e.jsx(n.code,{children:"getSortsFor"})," / ",e.jsx(n.code,{children:"getColumnsFor"})," for every place, ",e.jsx(n.code,{children:"getSortsForStatusBar"})," … for one. How they work, and what a list changes in the actions: ",e.jsx(a,{page:"tables-table-core-concepts-resolvers-overview--docs",children:"Resolvers"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Your own UI"})," — skip the table's and set the state from anywhere:"]}),`
`]}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.p,{children:"The API for your own UI:"}),`
`,e.jsx(r,{rows:j,type:"From"}),`
`,e.jsx(n.h2,{id:"the-scenes",children:"The scenes"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Basics › One prop"})," — ",e.jsx(n.code,{children:"state.sorting"})," alone, a constant."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Basics › External control"})," — buttons outside the table set the state; ",e.jsx(n.code,{children:"enableSorting"}),", ",e.jsx(n.code,{children:"enableMultiSort"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Places › Column menu"})," — ",e.jsx(n.code,{children:"columnMenu"}),": ",e.jsx(n.em,{children:"Sort ›"}),", directions, ",e.jsx(n.em,{children:"Clear sort"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Places › Toolbar & Status bar"})," — ",e.jsx(n.code,{children:"toolbar"}),", ",e.jsx(n.code,{children:"statusBar"})," for the table; ",e.jsx(n.code,{children:"meta.hideFrom"})," per column."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Columns › Column setup"})," — each column its own kind; locked and hidden columns. The options: ",e.jsx(n.strong,{children:"Columns › ColumnDef"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Columns › Hidden sort"})," — the screen's own sort the user never sees or clears."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Multi-sort"})," — Shift+click, ",e.jsx(n.em,{children:"Then by"}),", priority."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Every scene has its controls (only the ones of its idea) and the full code of what is on screen in ",e.jsx(n.em,{children:"Code"}),". The rules and the QA checks are on the KB page ",e.jsx(n.em,{children:"Table Core · Sorting"}),"."]})]})}function H(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{H as default};
