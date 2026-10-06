import{j as e}from"./jsx-runtime-Cnbe3ryz.js";import{useMDXComponents as r}from"./index-cWuaGVWk.js";import{M as a,S as i}from"./index-BWck6PEV.js";import{a as n}from"./reference-kit-BHZHy2IZ.js";import"./index-3dRrDZpt.js";import"./iframe-CxMQY-6g.js";import"./index-C0mjCMcL.js";import"./index-DKTdOcjh.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./types-reference-CMrm5GSt.js";import"./places-Dp9r7e0L.js";import"./styles-HzBmg0bt.js";function o(t){const s={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Tables/Table Core/Getting started"}),`
`,e.jsx(s.h1,{id:"table-core",children:"Table Core"}),`
`,e.jsxs(s.p,{children:["A grid for the Estimator UI screens, as in the legacy Resource Plan: sorting, grouping in lanes or rows, freezing, column chains, editing, selection, keyboard. It is built on ",e.jsx(s.strong,{children:"TanStack Table"})," (the headless engine) and drawn with ",e.jsx(s.strong,{children:"MUI"}),"; everything it does is headless first — table state and methods any screen can drive — and every part you see is optional."]}),`
`,e.jsx(s.h2,{id:"a-first-table",children:"A first table"}),`
`,e.jsx(i,{dark:!0,language:"tsx",code:`import { TableCore, TableToolbar, TableStatusBar } from '@pnl-simulation/table-core'

const columns = [
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'team', header: 'Team' },
]

<TableCore
  data={people}
  columns={columns}
  getRowId={(p) => p.id}
  toolbar={(table) => <TableToolbar table={table} />}
  statusBar={(table) => <TableStatusBar table={table} />}
/>`}),`
`,e.jsxs(s.p,{children:["Every state slice (sorting, grouping, pinning, selection …) is either left to the table or owned by the screen: pass it in ",e.jsx(s.code,{children:"state"})," with its ",e.jsx(s.code,{children:"on…Change"})," — a store, the URL, a server. Table Core has no store of its own."]}),`
`,e.jsx(s.h2,{id:"how-this-storybook-is-built",children:"How this Storybook is built"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"A feature"})," is a folder that reads top down: an ",e.jsx(s.strong,{children:"Overview"})," (what it is, headless, the props, how to turn it off or make it your own), then scenes from the bare table up — one prop, the screen's own controls, the column menu, the toolbar and status bar, each column's options (",e.jsx(s.strong,{children:"ColumnDef"}),"), the rest — and a ",e.jsx(s.strong,{children:"Playground"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"A scene"})," starts bare and shows only the controls of its idea. The ",e.jsx(s.strong,{children:"Try"})," line on top tells what to do and what is on screen now; its links set the controls, ",e.jsx(s.em,{children:"Back to the start here"})," resets them. ",e.jsx(s.strong,{children:"Code"})," is the whole component of what is on screen."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Checks."})," Switch ",e.jsx(s.em,{children:"Checks"})," on in the toolbar: the scene's play steps run; follow them in ",e.jsx(s.em,{children:"Interactions"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Types"})," — every type the pages name; a type in a table is a link."]}),`
`]}),`
`,e.jsx(s.h2,{id:"the-sections",children:"The sections"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(n,{page:"tables-table-core-features-overview--docs",children:"Features"})," — what the table does, one page per feature, and how each is built on TanStack: ",e.jsx(n,{page:"tables-table-core-features-sorting-overview--docs",children:"Sorting"}),", ",e.jsx(n,{page:"tables-table-core-features-grouping-overview--docs",children:"Grouping"})," and ",e.jsx(n,{page:"tables-table-core-features-freezing-overview--docs",children:"Freezing"})," are rebuilt in full (an Overview, scenes from the bare table up, ColumnDef, a Playground); the others say ",e.jsx(s.em,{children:"Draft"})," at the top of their page."]}),`
`,e.jsxs(s.li,{children:[e.jsx(n,{page:"tables-table-core-concepts-overview--docs",children:"Concepts"})," — how Table Core works and how a screen extends it: resolvers, icons …"]}),`
`,e.jsxs(s.li,{children:["Primitives — the pieces the grid is made of, each on its own; ",e.jsx(s.em,{children:"Assemble yourself"})," and ",e.jsx(s.em,{children:"Replace a piece"})," build a table out of them."]}),`
`,e.jsxs(s.li,{children:[e.jsx(n,{page:"tables-table-core-types-overview--docs",children:"Types"})," — Table Core's types, and those of TanStack, React, MUI."]}),`
`,e.jsx(s.li,{children:"Showcase — states of the whole table (for the KB screenshots), not a feature."}),`
`]}),`
`,e.jsx(s.h2,{id:"three-entries",children:"Three entries"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"@pnl-simulation/table-core"})," — everything: the table, its parts and, through it, the headless module."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"@pnl-simulation/table-core/headless"})," — a TanStack table with our features and no React: ",e.jsx(s.code,{children:"createTable({ ...tableCoreBase, … })"}),", ",e.jsx(s.code,{children:"tableOptionsOf"}),", the actions and the resolvers."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"@pnl-simulation/table-core/primitives"})," — the pieces of the grid (header cell, body row, menu, panel …): they take props and know nothing of the table."]}),`
`]}),`
`,e.jsx(s.p,{children:"No name is exported by two of them."}),`
`,e.jsx(s.h2,{id:"the-kb",children:"The KB"}),`
`,e.jsxs(s.p,{children:["The rules, the QA checks and the decisions are on the KB pages (",e.jsx(s.em,{children:"Table Core"})," in Confluence). They link here by a stable slug — ",e.jsx(s.code,{children:"…/?kb=sort-one-prop"})," — that survives a scene moving."]})]})}function y(t={}){const{wrapper:s}={...r(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(o,{...t})}):o(t)}export{y as default};
