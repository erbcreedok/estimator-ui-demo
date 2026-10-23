import{j as e,T as o}from"./products-CTiDOXRn.js";import{useMDXComponents as t}from"./index-DTba5wnT.js";import{M as l}from"./index-DCltYdiS.js";import{B as r}from"./basics.stories-BWeHQFcM.js";import{C as a}from"./columns.stories-DsES4s7A.js";import{R as h}from"./resize.stories-DouQ60Kz.js";import{F as d}from"./fill.stories-DOKGOpm5.js";import{S as c}from"./scene-list-DGvAMnq_.js";import"./iframe-CiaHYEQr.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./scene-9u2Hg12_.js";import"./checks-BFc4Mdy7.js";import"./sizings-DRFY_sSL.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Tables/Table Core/Features/Column sizing/Overview"}),`
`,e.jsx(n.h1,{id:"column-sizing",children:"Column sizing"}),`
`,e.jsxs(n.p,{children:["Columns have the widths their ",e.jsx(n.code,{children:"size"})," says; a user drags the edge of a header to change one. A table narrower than its frame stretches to the full width, as in the legacy Resource Plan."]}),`
`,e.jsx(n.h2,{id:"turn-it-on",children:"Turn it on"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const features = tableFeatures({
  columnSizingFeature,   // v9: the widths, state.columnSizing
  columnResizingFeature, // v9: the handle in the header
})

<TableCore features={features} columns={columns} data={rows} getRowId={…} />
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"columnSizingFeature"})," is the widths (",e.jsx(n.code,{children:"size"}),", ",e.jsx(n.code,{children:"minSize"}),", ",e.jsx(n.code,{children:"maxSize"})," of a column, ",e.jsx(n.code,{children:"state.columnSizing"}),"), ",e.jsx(n.code,{children:"columnResizingFeature"})," is the handle in the header. Without the second the widths are fixed; without both a column has the default 150 px."]}),`
`,e.jsx(n.h2,{id:"what-you-can-set",children:"What you can set"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"A column"})," — ",e.jsx(n.code,{children:"size"}),", ",e.jsx(n.code,{children:"minSize"}),", ",e.jsx(n.code,{children:"maxSize"}),", ",e.jsx(n.code,{children:"enableResizing: false"})," (no handle), ",e.jsx(n.code,{children:"meta.grow: false"})," (it does not take spare width: row actions, checkboxes)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"The table"})," — ",e.jsx(n.code,{children:"fill"}),": ",e.jsx(n.code,{children:"'fill'"})," shares the spare width among the columns that may grow, in proportion to their sizes (none past its ",e.jsx(n.code,{children:"maxSize"}),"); ",e.jsx(n.code,{children:"'natural'"})," keeps every size. ",e.jsx(n.code,{children:"enableColumnResizing={false}"})," takes every handle away."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"The state"})," — ",e.jsx(n.code,{children:"state.columnSizing"})," with ",e.jsx(n.code,{children:"onColumnSizingChange"}),": the widths the user set, by column id; only the resized columns are in it. A resized column keeps its width."]}),`
`]}),`
`,e.jsx(n.h2,{id:"the-scenes",children:"The scenes"}),`
`,e.jsx(c,{of:[r,a,h,d]}),`
`,e.jsx(n.h2,{id:"reference",children:"Reference"}),`
`,e.jsx(o,{headers:["Where","Name","What it does"],rows:[{id:"0",cells:{Where:"column",Name:"`size`, `minSize`, `maxSize`","What it does":"The width and its limits, px."}},{id:"1",cells:{Where:"column",Name:"`enableResizing`","What it does":"`false`: no handle on this column."}},{id:"2",cells:{Where:"column",Name:"`meta.grow`","What it does":"`false`: the column does not take spare width."}},{id:"3",cells:{Where:"table",Name:"`fill`","What it does":"`'fill'` (default) or `'natural'`."}},{id:"4",cells:{Where:"table",Name:"`enableColumnResizing`","What it does":"`false`: no handles."}},{id:"5",cells:{Where:"table",Name:"`columnResizeMode`","What it does":"v9’s: `'onChange'` (live) or `'onEnd'`."}},{id:"6",cells:{Where:"state",Name:"`columnSizing`","What it does":"`{ [columnId]: width }` of the resized columns."}},{id:"7",cells:{Where:"column",Name:"`getSize()`, `resetSize()`, `getIsResizing()`","What it does":"v9’s own methods, used as they are."}}]})]})}function y(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{y as default};
