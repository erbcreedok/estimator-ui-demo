import{j as e,T as s}from"./products-CTiDOXRn.js";import{useMDXComponents as o}from"./index-DTba5wnT.js";import{M as l}from"./index-DCltYdiS.js";import{B as a}from"./basics.stories-DglJEuir.js";import{C as i}from"./columns.stories-DzhliV8B.js";import{B as d}from"./behaviour.stories-cm5voJN5.js";import{P as h}from"./places.stories-g39d6LEG.js";import{R as c}from"./rules.stories-CpMLDm9P.js";import{S as m}from"./scene-list-DGvAMnq_.js";import"./iframe-CiaHYEQr.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./scene-BiGXqEVE.js";import"./rows-l3LcChQt.js";import"./checks-CPsh5bEU.js";import"./controls-B7VJbFXN.js";import"./presets-D_d35U2l.js";function t(n){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Tables/Table Core/Features/Column order/Overview"}),`
`,e.jsx(r.h1,{id:"column-order",children:"Column order"}),`
`,e.jsx(r.p,{children:"A user arranges the columns in the order they need, as in the legacy Resource Plan."}),`
`,e.jsx(r.h2,{id:"turn-it-on",children:"Turn it on"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`const features = tableFeatures({
  columnOrderingFeature, // v9: state.columnOrder, setColumnOrder
})

<TableCore
  features={features} columns={columns} data={rows} getRowId={…}
  toolbar={(table) => <TableToolbar table={table} controls={[columnsControl()]} />}
/>
`})}),`
`,e.jsxs(r.p,{children:["The state (",e.jsx(r.code,{children:"state.columnOrder"}),") and ",e.jsx(r.code,{children:"table.setColumnOrder"})," are v9’s; the table draws the header, the rows, the keys and Copy in that order. The user drags a header by its grip, or a row of the Columns panel by its handle; a drag writes the order while it goes, Esc puts it back. A column moves inside its zone (frozen at a side, or the rest); a drag never freezes a column."]}),`
`,e.jsx(r.h2,{id:"what-you-can-set",children:"What you can set"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"A column"})," — ",e.jsx(r.code,{children:"meta.disableReorder"}),": no grip, no handle in the panel (the state may still order it)."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"The table"})," — ",e.jsx(r.code,{children:"enableColumnReorder={false}"}),": no grips, no handles; ",e.jsx(r.code,{children:"gripPlacement"})," (",e.jsx(r.code,{children:"'top'"}),", the tab on the header’s edge, or ",e.jsx(r.code,{children:"'start'"}),", the dots before the title)."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Column groups of the header"})," — a column stands in its group while the table owns the order, and a group moves with its columns by the grip of its cell (Features › Headers). A screen that owns ",e.jsx(r.code,{children:"columnOrder"})," has its own rule."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"The state"})," — ",e.jsx(r.code,{children:"state.columnOrder"})," with ",e.jsx(r.code,{children:"onColumnOrderChange"}),": the ids in screen order; the ones not listed follow in the order of ",e.jsx(r.code,{children:"columns"}),"."]}),`
`]}),`
`,e.jsx(r.h2,{id:"the-scenes",children:"The scenes"}),`
`,e.jsx(m,{of:[a,i,d,h,c]}),`
`,e.jsx(r.h2,{id:"reference",children:"Reference"}),`
`,e.jsx(s,{headers:["Where","Name","What it does"],rows:[{id:"0",cells:{Where:"state",Name:"`columnOrder`","What it does":"The ids in screen order."}},{id:"1",cells:{Where:"table",Name:"`enableColumnReorder`","What it does":"`false`: no dragging."}},{id:"2",cells:{Where:"table",Name:"`gripPlacement`","What it does":"Where the grip stands: `'top'` or `'start'`."}},{id:"3",cells:{Where:"column",Name:"`meta.disableReorder`","What it does":"No grip and no handle for this column."}},{id:"4",cells:{Where:"table",Name:"`setColumnOrder()`","What it does":"v9’s own method; a drag calls it through `moveColumn`."}}]})]})}function F(n={}){const{wrapper:r}={...o(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(t,{...n})}):t(n)}export{F as default};
