import{j as e}from"./jsx-runtime-Cnbe3ryz.js";import{useMDXComponents as i}from"./index-cWuaGVWk.js";import{M as t,C as o,S as c}from"./index-BWck6PEV.js";import{OneProp as d,ExternalControl as h}from"./grouping-basics.stories-DJW4dTTz.js";import{P as r,a}from"./reference-kit-BHZHy2IZ.js";import{a as u,b as x}from"./grouping-reference-DtFoGe3u.js";import"./index-3dRrDZpt.js";import"./iframe-CxMQY-6g.js";import"./index-C0mjCMcL.js";import"./index-DKTdOcjh.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./grouping-page-4KeVIvA-.js";import"./feature-hints-BLpBNgTy.js";import"./scene-kit-BsKxVgS1.js";import"./index-iBx7lKYd.js";import"./grouping-play-CTN_XQGq.js";import"./play-kit-Bu4SXy9H.js";import"./feature-code-Dlz2p9Ie.js";import"./TableCore-Y75h2oha.js";import"./table-core-base-DFRq_Vzl.js";import"./places-Dp9r7e0L.js";import"./styles-HzBmg0bt.js";import"./icons-849xEHsl.js";import"./menu-DvyBTqNz.js";import"./TableStatusBar-4NxO8OsQ.js";import"./status-bar-CYB7-jUm.js";import"./panel-controls-DNzRkyVB.js";import"./SortingPanel-CpobHppH.js";import"./TableToolbar-DTYEmPN-.js";import"./toolbar-C5VRlWnq.js";import"./pin-controls-NGLUwJXC.js";import"./employees-CL5oqWiT.js";import"./fixtures-P-DSdYmm.js";import"./types-reference-CMrm5GSt.js";function l(s){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Tables/Table Core/Features/Grouping/Overview"}),`
`,e.jsx(n.h1,{id:"grouping",children:"Grouping"}),`
`,e.jsxs(n.p,{children:["Rows with the same value together — by ",e.jsx(n.em,{children:"Team"}),", then by ",e.jsx(n.em,{children:"Level"})," — as in the legacy Resource Plan."]}),`
`,e.jsx(n.h2,{id:"headless",children:"Headless"}),`
`,e.jsxs(n.p,{children:["Grouping is one piece of table state: ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"state.grouping"})}),", the grouped columns, outer first. The table groups its rows by it — whoever sets it: the screen's code, a button of its own, or the user in the table. Everything you see (the lanes, the column menu, the Group panel, the chip) only reads and writes that state, and each of them is optional. ",e.jsx(n.code,{children:"state.expanded"})," says which groups are open."]}),`
`,e.jsx(n.p,{children:"Under the hood:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["TanStack ",e.jsx(n.code,{children:"GroupingFeature"})]})," and ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"ExpandingFeature"})})," — the state, ",e.jsx(n.code,{children:"getGroupedRowModel"}),", ",e.jsx(n.code,{children:"getGroupingValue"}),", ",e.jsx(n.code,{children:"aggregationFn"}),", ",e.jsx(n.code,{children:"enableGrouping"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"TableCore on top of it"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"ways to group"})," — ",e.jsx(n.code,{children:"meta.groupings"}),", ",e.jsx(n.code,{children:"groupAsIs"}),", ",e.jsx(n.code,{children:"groupingOnly"}),", ",e.jsx(n.code,{children:"resolvers.getGroupingValue"}),";"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"where the column goes"})," — ",e.jsx(n.code,{children:"whenGrouped"}),": into its lane, or it also stays;"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"levels"})," — ",e.jsx(n.code,{children:"enableMultiGroup"}),", the order of the lanes, folding a whole level;"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"places"})," — ",e.jsx(n.code,{children:"meta.hideFrom"})," and ",e.jsx(n.code,{children:"resolvers"}),": what the menu, the panel and the chip list, and what their actions touch;"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"group sorting"})," — a lane's menu sorts its own groups;"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"the look"})," — ",e.jsx(n.code,{children:"groupLayout"})," (lanes or rows), ",e.jsx(n.code,{children:"groupTotals"}),", ",e.jsx(n.code,{children:"meta.groupCell"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"The UI"})," — ",e.jsx(n.code,{children:"columnMenu"})," (",e.jsx(n.em,{children:"Group by"}),", ",e.jsx(n.em,{children:"Then by"}),", ",e.jsx(n.em,{children:"Ungroup"}),"), ",e.jsx(n.code,{children:"TableToolbar"})," (the ",e.jsx(n.em,{children:"Group"})," button and panel), ",e.jsx(n.code,{children:"TableStatusBar"})," (the chip and ",e.jsx(n.em,{children:"Clear all"}),"), the lanes or group rows themselves."]}),`
`]}),`
`,e.jsx(n.h2,{id:"the-simplest-table",children:"The simplest table"}),`
`,e.jsx(n.p,{children:"One prop — the state as a constant — and the rows are grouped. No column menu, no toolbar, no status bar."}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(n.h2,{id:"the-tables-props",children:"The table's props"}),`
`,e.jsx(r,{rows:u}),`
`,e.jsx(n.h2,{id:"turn-it-off",children:"Turn it off"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"No grouping at all"})," — leave out ",e.jsx(n.code,{children:"state.grouping"})," and set ",e.jsx(n.code,{children:"enableGrouping={false}"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"The user cannot group, the screen still does"})," — ",e.jsx(n.code,{children:"enableGrouping={false}"})," with ",e.jsx(n.code,{children:"state.grouping"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"One column"})," — ",e.jsx(n.code,{children:"enableGrouping: false"})," in its ",e.jsx(n.code,{children:"columnDef"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"One place"})," — ",e.jsx(n.code,{children:"columnMenu={false}"}),", a toolbar without ",e.jsx(n.code,{children:"groupingControl"}),", no status bar; or one column out of a place with ",e.jsx(n.code,{children:"meta.hideFrom"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Parts of a group"})," — ",e.jsx(n.code,{children:"enableGroupCollapse"}),", ",e.jsx(n.code,{children:"enableGroupSelect"}),", ",e.jsx(n.code,{children:"enableGroupLevelCollapse"}),"."]}),`
`]}),`
`,e.jsx(c,{dark:!0,language:"tsx",code:`<TableCore
  data={rows}
  columns={columns}
  enableGrouping={false}
  // the screen's grouping still applies:
  state={{ grouping: ['team'] }}
/>`}),`
`,e.jsx(n.h2,{id:"make-it-your-own",children:"Make it your own"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"What rows group by"})," — ",e.jsx(n.code,{children:"resolvers.getGroupingValue"})," for the whole table, ",e.jsx(n.code,{children:"getGroupingValue"})," on a column, or more ways with ",e.jsx(n.code,{children:"meta.groupings"}),". See ",e.jsx(n.em,{children:"Columns › ColumnDef"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"What each place lists"})," — ",e.jsx(n.code,{children:"placeOrder"})," for the order of the panels, ",e.jsx(n.code,{children:"resolvers"})," (",e.jsx(n.code,{children:"getGroupingFor"}),", ",e.jsx(n.code,{children:"getColumnsFor"}),", or one place) for anything else: ",e.jsx(a,{page:"tables-table-core-concepts-resolvers-overview--docs",children:"Resolvers"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"A column that only groups"})," — ",e.jsx(n.code,{children:"meta.groupingOnly"}),", offered where ",e.jsx(n.code,{children:"meta.hideFrom"})," allows."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"How groups look"})," — ",e.jsx(n.code,{children:"groupLayout"})," (lanes or rows), totals (",e.jsx(n.code,{children:"aggregationFn"}),"), ",e.jsx(n.code,{children:"meta.groupCell"})," (edge, tooltip, style, your own content). See ",e.jsx(n.em,{children:"Look"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Your own UI"})," — skip the table's and set the state from anywhere:"]}),`
`]}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.p,{children:"The API for your own UI:"}),`
`,e.jsx(r,{rows:x,type:"From"}),`
`,e.jsx(n.h2,{id:"the-scenes",children:"The scenes"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Basics › One prop"})," — ",e.jsx(n.code,{children:"state.grouping"})," alone, a constant."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Basics › External control"})," — buttons outside the table set the state; ",e.jsx(n.code,{children:"enableGrouping"}),", ",e.jsx(n.code,{children:"enableMultiGroup"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Places › Column menu"})," — ",e.jsx(n.em,{children:"Group by"}),", the lane header's ",e.jsx(n.em,{children:"Ungroup"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Places › Toolbar & Status bar"})," — the Group panel and the chip for the table; ",e.jsx(n.code,{children:"meta.hideFrom"})," per column."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Columns › Own ways to group"})," — a value of your own, more ways, only the ways. The options: ",e.jsx(n.strong,{children:"Columns › ColumnDef"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Columns › Grouping-only columns"})," — columns that only group, offered in different places."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Columns › Keep the column"})," — ",e.jsx(n.code,{children:"whenGrouped: 'keep'"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Columns › Hidden grouping"})," — the screen's own grouping the user does not manage."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Multi-group › Several levels"})," — Then by, the order of the lanes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Group sorting"})," — a lane's groups sorted from its menu, 10 and 11."]}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Look › Lanes"})," — pinning, selecting a group, the utility column, sorting and chains."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Look › Rows"})," — groups as header rows, totals, mixed levels."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Look › Group cell"})," — edges, tooltips, styles, your own content."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Every scene has its controls and the full code of what is on screen in ",e.jsx(n.em,{children:"Code"}),". The rules and the QA checks are on the KB page ",e.jsx(n.em,{children:"Table Core · Grouping"}),"."]})]})}function q(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}export{q as default};
