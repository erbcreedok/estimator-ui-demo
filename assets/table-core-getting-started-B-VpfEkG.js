import{j as e,D as n}from"./products-CTiDOXRn.js";import{useMDXComponents as l}from"./index-DTba5wnT.js";import{M as o,S as a}from"./index-DCltYdiS.js";import"./iframe-CiaHYEQr.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function r(t){const s={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Tables/Table Core/Getting started"}),`
`,e.jsx(s.h1,{id:"table-core",children:"Table Core"}),`
`,e.jsxs(s.p,{children:["A grid for the Estimator UI screens, as in the legacy Resource Plan. It is built on ",e.jsx(s.strong,{children:"TanStack Table v9"})," (the headless engine) and drawn with ",e.jsx(s.strong,{children:"MUI"}),". A table has no features until you list them."]}),`
`,e.jsx(s.h2,{id:"a-first-table",children:"A first table"}),`
`,e.jsx(a,{dark:!0,language:"tsx",code:`import {
  TableCore,
  createColumnHelper,
  tableFeatures,
} from '@pnl-simulation/table-core'

const features = tableFeatures({})

const helper = createColumnHelper<typeof features, Person>()
const columns = helper.columns([
  helper.accessor('name', { header: 'Name' }),
  helper.accessor('team', { header: 'Team' }),
])

<TableCore
  features={features}
  data={people}
  columns={columns}
  getRowId={(p) => p.id}
/>`}),`
`,e.jsxs(s.p,{children:["Add a feature by adding it to the list (",e.jsx(s.code,{children:"tableFeatures({ rowSortingFeature })"}),"); the type of the table follows the list. Every state slice is either left to the table or owned by the screen: pass it in ",e.jsx(s.code,{children:"state"})," with its ",e.jsx(s.code,{children:"on…Change"}),"."]}),`
`,e.jsx(s.h2,{id:"how-this-storybook-is-built",children:"How this Storybook is built"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"A feature"})," is a folder: an ",e.jsx(s.strong,{children:"Overview"})," (what it is, headless, the props), then scenes from the bare table up."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"A scene"})," starts bare and shows only the controls of its idea. ",e.jsx(s.strong,{children:"Code"})," is the whole component of what is on screen."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Checks."})," Switch ",e.jsx(s.em,{children:"Checks"})," on in the toolbar: the scene's play steps run; follow them in ",e.jsx(s.em,{children:"Interactions"}),"."]}),`
`]}),`
`,e.jsx(s.h2,{id:"where-to-start",children:"Where to start"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(n,{page:"tables-table-core-features-overview--docs",children:"Features"})," — what the table does, one page per feature."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(n,{page:"tables-table-core-features-bare-table-overview--docs",children:"Bare table"})," — the table with no features."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(n,{page:"tables-table-core-primitives-overview--docs",children:"Primitives"})," — the parts the table is drawn with, to replace one or assemble a table from them."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(n,{page:"tables-table-core-concepts-overview--docs",children:"Concepts"})," — icons and how to change them."]}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(n,{page:"tables-table-core-showcase-products-resource-plan--resource-plan",children:"Products"})," — the Resource Plan, Estimations and PnL tables of the product, on Table Core."]}),`
`]}),`
`]}),`
`,e.jsx(s.h2,{id:"entries",children:"Entries"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"@pnl-simulation/table-core"})," — everything: the table, its parts, v9 itself and the headless module."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"@pnl-simulation/table-core/headless"})," — our features and pure helpers, no React."]}),`
`]})]})}function x(t={}){const{wrapper:s}={...l(),...t.components};return s?e.jsx(s,{...t,children:e.jsx(r,{...t})}):r(t)}export{x as default};
