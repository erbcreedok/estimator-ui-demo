import{j as e,T as o}from"./products-CTiDOXRn.js";import{useMDXComponents as t}from"./index-DTba5wnT.js";import{M as l}from"./index-DCltYdiS.js";import{B as r}from"./basics.stories-DxWTn5x2.js";import{C as a}from"./columns.stories-BjTzQww6.js";import{B as c}from"./behaviour.stories-BVjxrxiA.js";import{P as h}from"./places.stories-C5MwqQQ3.js";import{R as d}from"./rules.stories-B9tmkgIu.js";import{S as m}from"./scene-list-DGvAMnq_.js";import"./iframe-CiaHYEQr.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./scene-KH-578yJ.js";import"./rows-l3LcChQt.js";import"./checks-BTK7xNcN.js";import"./controls-B40_76Du.js";import"./presets-DuCk3XAW.js";function i(s){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Tables/Table Core/Features/Column visibility/Overview"}),`
`,e.jsx(n.h1,{id:"column-visibility",children:"Column visibility"}),`
`,e.jsx(n.p,{children:"A user hides the columns they do not need and brings them back, as in the legacy Resource Plan."}),`
`,e.jsx(n.h2,{id:"turn-it-on",children:"Turn it on"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const features = tableFeatures({
  columnVisibilityFeature, // v9: state.columnVisibility, getIsVisible, toggleVisibility
})

<TableCore
  features={features} columns={columns} data={rows} getRowId={…}
  toolbar={(table) => <TableToolbar table={table} controls={[columnsControl()]} />}
  columnMenu={{ sections: [sortingSection(), hidingSection()] }}
/>
`})}),`
`,e.jsxs(n.p,{children:["The state, ",e.jsx(n.code,{children:"column.getIsVisible()"}),", ",e.jsx(n.code,{children:"getCanHide()"})," and ",e.jsx(n.code,{children:"toggleVisibility()"})," are v9’s. The table draws the visible columns only: the header, the rows, the widths, the keys and Copy of the selection all follow. The Columns panel (the toolbar’s ",e.jsx(n.em,{children:"Columns"})," button) and ",e.jsx(n.em,{children:"Hide column"})," in the column menu call the same methods; both are optional."]}),`
`,e.jsx(n.h2,{id:"what-you-can-set",children:"What you can set"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"A column"})," — ",e.jsx(n.code,{children:"enableHiding: false"}),": its tick is off (",e.jsx(n.em,{children:"Cannot be hidden"}),") and its menu has no ",e.jsx(n.em,{children:"Hide column"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"The table"})," — ",e.jsx(n.code,{children:"enableHiding: false"}),": every tick is off; the screen’s hidden columns stay hidden."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"The state"})," — ",e.jsx(n.code,{children:"state.columnVisibility"})," with ",e.jsx(n.code,{children:"onColumnVisibilityChange"}),": ",e.jsx(n.code,{children:"{ [columnId]: false }"}),"; a column not listed is shown. The state may hide any column: the switches limit only the user."]}),`
`]}),`
`,e.jsx(n.h2,{id:"the-scenes",children:"The scenes"}),`
`,e.jsx(m,{of:[r,a,c,h,d]}),`
`,e.jsx(n.h2,{id:"reference",children:"Reference"}),`
`,e.jsx(o,{headers:["Where","Name","What it does"],rows:[{id:"0",cells:{Where:"state",Name:"`columnVisibility`","What it does":"`{ [columnId]: false }` for the hidden columns."}},{id:"1",cells:{Where:"table",Name:"`enableHiding`","What it does":"v9’s: `false` turns every tick off."}},{id:"2",cells:{Where:"column",Name:"`enableHiding`","What it does":"v9’s: `false` keeps this column shown for the user."}},{id:"3",cells:{Where:"column",Name:"`getIsVisible()`, `toggleVisibility()`","What it does":"v9’s own methods, used as they are."}},{id:"4",cells:{Where:"controls",Name:"`columnsControl()`, `hidingSection()`","What it does":"The toolbar’s *Columns* button with its panel; *Hide column* in the menu."}}]})]})}function k(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{k as default};
