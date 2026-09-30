import{j as e}from"./jsx-runtime-CEpjeC4Q.js";import{useMDXComponents as r}from"./index-JWoZMxqf.js";import{M as i,S as a}from"./index-DnbyNrd_.js";import{D as n}from"./reference-kit-BBQ-bL5f.js";import"./index-BjhrbhTf.js";import"./index-D841zMOb.js";import"./iframe-BXLXV2g8.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./styles-DXLXEQ3H.js";import"./types-reference-C4qaG4BC.js";function o(t){const s={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Tables/Table Core/Getting started"}),`
`,e.jsx(s.h1,{id:"table-core",children:"Table Core"}),`
`,e.jsxs(s.p,{children:["A grid for the Estimator UI screens, as in the legacy Resource Plan: sorting, grouping in lanes or rows, freezing, column chains, editing, selection, keyboard. It is built on ",e.jsx(s.strong,{children:"TanStack Table"})," (the headless engine) and drawn with ",e.jsx(s.strong,{children:"MUI"}),"; everything it does is headless first — table state and methods any screen can drive — and every part you see is optional."]}),`
`,e.jsx(s.h2,{id:"a-first-table",children:"A first table"}),`
`,e.jsx(a,{dark:!0,language:"tsx",code:`import { TableCore, TableToolbar, TableStatusBar } from '@pnl-simulation/table-core'

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
`,e.jsxs(s.li,{children:[e.jsx(n,{page:"tables-table-core-sorting-overview--docs",children:"Sorting"})," — one or several columns, kinds, places, the screen's own sort."]}),`
`,e.jsxs(s.li,{children:[e.jsx(n,{page:"tables-table-core-grouping-overview--docs",children:"Grouping"})," — lanes or rows, levels, ways to group, totals, the group cell."]}),`
`,e.jsxs(s.li,{children:[e.jsx(n,{page:"tables-table-core-concepts-overview--docs",children:"Concepts"})," — how Table Core works and how a screen extends it: resolvers …"]}),`
`,e.jsxs(s.li,{children:[e.jsx(n,{page:"tables-table-core-types-overview--docs",children:"Types"})," — Table Core's types, and those of TanStack, React, MUI."]}),`
`,e.jsxs(s.li,{children:[e.jsx(n,{page:"tables-table-core-draft-overview--docs",children:"Draft"})," — the features not rebuilt this way yet."]}),`
`]}),`
`,e.jsx(s.h2,{id:"the-kb",children:"The KB"}),`
`,e.jsxs(s.p,{children:["The rules, the QA checks and the decisions are on the KB pages (",e.jsx(s.em,{children:"Table Core"})," in Confluence). They link here by a stable slug — ",e.jsx(s.code,{children:"…/?kb=sort-one-prop"})," — that survives a scene moving."]})]})}function w(t={}){const{wrapper:s}={...r(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(o,{...t})}):o(t)}export{w as default};
