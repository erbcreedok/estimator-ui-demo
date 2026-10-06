import{j as e}from"./jsx-runtime-Cnbe3ryz.js";import{useMDXComponents as l}from"./index-cWuaGVWk.js";import{M as t,C as o,S as c}from"./index-BWck6PEV.js";import{OneProp as h,ExternalControl as d}from"./freezing-basics.stories-CaWSclEM.js";import{P as i,a}from"./reference-kit-BHZHy2IZ.js";import{T as x,A as m}from"./freezing-reference-CeeCkCJ0.js";import"./index-3dRrDZpt.js";import"./iframe-CxMQY-6g.js";import"./index-C0mjCMcL.js";import"./index-DKTdOcjh.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./freezing-hints-ktsXkKrU.js";import"./feature-hints-BLpBNgTy.js";import"./scene-kit-BsKxVgS1.js";import"./freezing-page-BBwiIMYl.js";import"./feature-code-Dlz2p9Ie.js";import"./TableCore-Y75h2oha.js";import"./table-core-base-DFRq_Vzl.js";import"./places-Dp9r7e0L.js";import"./styles-HzBmg0bt.js";import"./icons-849xEHsl.js";import"./menu-DvyBTqNz.js";import"./TableStatusBar-4NxO8OsQ.js";import"./status-bar-CYB7-jUm.js";import"./panel-controls-DNzRkyVB.js";import"./SortingPanel-CpobHppH.js";import"./TableToolbar-DTYEmPN-.js";import"./toolbar-C5VRlWnq.js";import"./pin-controls-NGLUwJXC.js";import"./employees-CL5oqWiT.js";import"./fixtures-P-DSdYmm.js";import"./freezing-play-mBtlZnru.js";import"./index-iBx7lKYd.js";import"./grouping-play-CTN_XQGq.js";import"./play-kit-Bu4SXy9H.js";import"./types-reference-CMrm5GSt.js";function r(s){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Tables/Table Core/Features/Freezing/Overview"}),`
`,e.jsx(n.h1,{id:"freezing",children:"Freezing"}),`
`,e.jsx(n.p,{children:"Key columns (e.g. Name) stay on screen while the rest scroll — as the frozen columns of the legacy Resource Plan."}),`
`,e.jsx(n.h2,{id:"headless",children:"Headless"}),`
`,e.jsxs(n.p,{children:["Freezing is one piece of table state: ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"state.columnPinning"})}),", ",e.jsx(n.code,{children:"{ left: [ids], right: [ids] }"}),". The order of each list is the order on screen. The table freezes by it — whoever sets it: the screen's code, a button of its own, or the user in the table. The column menu and the Columns panel only read and write that state, and each of them is optional."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Freezing = pinning"}),": the UI and the docs say ",e.jsx(n.em,{children:"freeze"}),"; the code is TanStack's column pinning (",e.jsx(n.code,{children:"columnPinning"}),", ",e.jsx(n.code,{children:"column.pin()"}),", ",e.jsx(n.code,{children:"enablePinning"}),")."]}),`
`,e.jsx(n.p,{children:"Under the hood:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["TanStack ",e.jsx(n.code,{children:"ColumnPinningFeature"})]})," — the state, ",e.jsx(n.code,{children:"column.pin()"}),", ",e.jsx(n.code,{children:"getIsPinned"}),", ",e.jsx(n.code,{children:"getCanPin"}),", ",e.jsx(n.code,{children:"enablePinning"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"TableCore on top of it"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"the zones"})," — frozen columns stick side by side at the left or at the right, move only among themselves (never across a zone), get an edge when content goes under them;"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"the actions"})," — ",e.jsx(n.code,{children:"column.getPinActions(place)"}),": what the user may do in the column menu and the Columns panel, each action with the whole next state; ",e.jsx(n.code,{children:"table.applyPinAction(action)"})," writes it;"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"the rest of the table"})," — the lane of a frozen grouped column, a chain frozen by its first member, the utility column."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"The UI"})," — ",e.jsx(n.code,{children:"columnMenu"})," (its ",e.jsx(n.code,{children:"pinningSection"}),"), ",e.jsx(n.code,{children:"TableToolbar"})," (",e.jsx(n.em,{children:"Columns"})," → the panel: frozen at the left on top, frozen at the right at the bottom). Both only draw the actions. Each is a prop you pass or leave out."]}),`
`]}),`
`,e.jsx(n.h2,{id:"the-simplest-table",children:"The simplest table"}),`
`,e.jsx(n.p,{children:"One prop — the state as a constant — and the columns are frozen. No column menu, no toolbar."}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(n.h2,{id:"the-tables-props",children:"The table's props"}),`
`,e.jsx(i,{rows:x}),`
`,e.jsx(n.h2,{id:"turn-it-off",children:"Turn it off"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"No freezing at all"})," — leave out ",e.jsx(n.code,{children:"state.columnPinning"})," and set ",e.jsx(n.code,{children:"enableColumnPinning={false}"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"The user cannot freeze, the screen still does"})," — ",e.jsx(n.code,{children:"enableColumnPinning={false}"})," with ",e.jsx(n.code,{children:"state.columnPinning"}),": the Resource Plan case, scene 2."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"One column"})," — ",e.jsx(n.code,{children:"enablePinning: false"})," in its ",e.jsx(n.code,{children:"columnDef"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"One place"})," — a ",e.jsx(n.code,{children:"columnMenu"})," without ",e.jsx(n.code,{children:"pinningSection"}),", a toolbar without ",e.jsx(n.code,{children:"columnsControl"}),"; or one column out of the panel with ",e.jsx(n.code,{children:"meta.hideFrom: ['toolbar.columns']"}),"."]}),`
`]}),`
`,e.jsx(c,{dark:!0,language:"tsx",code:`<TableCore
  data={rows}
  columns={columns}
  enableColumnPinning={false}
  // the screen's frozen columns still apply:
  state={{ columnPinning: { left: ['name'], right: [] } }}
/>`}),`
`,e.jsx(n.h2,{id:"make-it-your-own",children:"Make it your own"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Your team's rules"})," — a ",e.jsx(n.code,{children:"getPinActions"})," resolver over the default answer: both sides, a fixed set, freeze up to here, one per side, at most N (",e.jsx(n.strong,{children:"Resolvers"}),", scenes 15–19). The helpers ",e.jsx(n.code,{children:"withPinned"}),", ",e.jsx(n.code,{children:"withoutPinned"}),", ",e.jsx(n.code,{children:"pinUpTo"})," build the next state. Drags: ",e.jsx(n.code,{children:"canMoveColumn"})," (a column that stays first, a zone of its own)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Your own menu"})," — ",e.jsx(n.code,{children:"columnMenu={{ sections: [sortingSection(), groupingSection()] }}"})," without ",e.jsx(n.code,{children:"pinningSection"}),", or a section of your own that draws ",e.jsx(n.code,{children:"column.getPinActions('columnMenu.pinning')"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Your own panel list"})," — ",e.jsx(n.code,{children:"placeOrder"})," and ",e.jsx(n.code,{children:"resolvers.getColumnsFor"})," decide what the Columns panel lists: ",e.jsx(a,{page:"tables-table-core-concepts-resolvers-overview--docs",children:"Resolvers"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Your own UI"})," — skip the table's and set the state from anywhere:"]}),`
`]}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(n.p,{children:"The API for your own UI:"}),`
`,e.jsx(i,{rows:m,type:"From"}),`
`,e.jsx(n.h2,{id:"the-scenes",children:"The scenes"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Basics › One prop"})," — ",e.jsx(n.code,{children:"state.columnPinning"})," alone, a constant."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Basics › External control"})," — buttons outside the table set the state; ",e.jsx(n.code,{children:"enableColumnPinning={false}"})," (Resource Plan)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Places › Column menu"})," — ",e.jsx(n.em,{children:"Freeze column"})," / ",e.jsx(n.em,{children:"Unfreeze column"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Places › Columns panel"})," — ",e.jsx(n.em,{children:"Freeze"}),", the frozen list on top."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Two sides › Left and right"})," — ",e.jsx(n.code,{children:"enableRightPinning"}),": ",e.jsx(n.em,{children:"Freeze column ›"})," Left / Right (a frozen column moves across), ",e.jsx(n.em,{children:"← Freeze →"})," in the panel."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Two sides › Right only"})," — ",e.jsx(n.code,{children:"enableLeftPinning={false}"}),": one plain ",e.jsx(n.em,{children:"Freeze"}),", to the right."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Two sides › A side per column"})," — ",e.jsx(n.code,{children:"meta.pinOnly"}),", ",e.jsx(n.code,{children:"enablePinning: false"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Two sides › A chain across the sides"})," — a chain goes across whole."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Columns › Column setup"})," — a column always frozen, one never frozen, one not dragged. The options: ",e.jsx(n.strong,{children:"Columns › ColumnDef"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Behaviour › Reorder"})," — drag among the frozen columns."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Behaviour › Edge"})," — the border and shadow while scrolling."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Look › With grouping lanes"})," — the lane of a frozen grouped column sticks."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Look › With column chains"})," — a chain freezes as a whole."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Look › Utility column"})," — row numbers and checkboxes frozen first."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Resolvers › Both sides"})," — ",e.jsx(n.em,{children:"Freeze at the left / at the right"}),"; the right zone."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Resolvers › A fixed set at the right"})," — always frozen, no action, no drag."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Resolvers › Freeze up to here"})," — the side becomes every column up to the one picked."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Resolvers › One per side"})," — a new one replaces the old."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Resolvers › At most 2 left, Workload right"})," — an action off, with why."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Every scene has its controls (only the ones of its idea) and the full code of what is on screen in ",e.jsx(n.em,{children:"Code"}),". The rules and the QA checks are on the KB page ",e.jsx(n.em,{children:"Table Core · Freezing (pinning)"}),"."]})]})}function V(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{V as default};
