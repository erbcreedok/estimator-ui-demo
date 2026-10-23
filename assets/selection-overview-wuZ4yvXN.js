import{j as e,T as l}from"./products-CTiDOXRn.js";import{useMDXComponents as s}from"./index-DTba5wnT.js";import{M as r}from"./index-DCltYdiS.js";import{B as c}from"./basics.stories-wb1FIHvz.js";import{B as a}from"./behaviour.stories-CCro0KMJ.js";import{P as i}from"./places.stories-spST_d_h.js";import{S as d}from"./scene-list-DGvAMnq_.js";import"./iframe-CiaHYEQr.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./scene-D8X4FZf0.js";import"./rows-l3LcChQt.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Tables/Table Core/Features/Row selection & bulk actions/Overview"}),`
`,e.jsx(o.h1,{id:"row-selection--bulk-actions",children:"Row selection & bulk actions"}),`
`,e.jsx(o.p,{children:"Rows with a checkbox, a count, and actions for the selected ones, as in the legacy Resource Plan."}),`
`,e.jsx(o.h2,{id:"turn-it-on",children:"Turn it on"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`const features = tableFeatures({
  rowSelectionFeature, // v9: state.rowSelection, getIsSelected, toggleSelected, select all
})
const columns = helper.columns([createUtilityColumn(helper), /* … */])

<TableCore
  features={features} columns={columns} data={rows} getRowId={…}
  bulkBar={(table) => <TableBulkBar table={table} getActions={(rows) => […]} />}
/>
`})}),`
`,e.jsxs(o.p,{children:["The state (",e.jsx(o.code,{children:"state.rowSelection"}),", row ids), ",e.jsx(o.code,{children:"row.getIsSelected()"}),", ",e.jsx(o.code,{children:"toggleSelected()"}),", ",e.jsx(o.code,{children:"getCanSelect()"})," (",e.jsx(o.code,{children:"enableRowSelection"}),") and select all are v9’s. The utility column (",e.jsx(o.code,{children:"createUtilityColumn"}),": the row number swapped for the checkbox on hover; ",e.jsx(o.code,{children:"parts: [rowCheckbox()]"}),": checkboxes only), the group checkbox and the bulk bar are the UI on top; each is optional. The checkbox of a parent row shows its children: ticked when all are, a dash when some are. A read-only table selects no rows."]}),`
`,e.jsx(o.h2,{id:"what-you-can-set",children:"What you can set"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"The table"})," — ",e.jsx(o.code,{children:"enableRowSelection"})," (v9’s: ",e.jsx(o.code,{children:"false"}),", or a function of the row), ",e.jsx(o.code,{children:"enableMultiRowSelection"}),", ",e.jsx(o.code,{children:"enableSubRowSelection"}),", ",e.jsx(o.code,{children:"readOnly"}),", ",e.jsx(o.code,{children:"enableGroupSelect"})," (the group checkbox), ",e.jsx(o.code,{children:"enableRowNumbers"}),"."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"The bulk bar"})," — ",e.jsx(o.code,{children:"getActions(rows)"})," returns the screen’s actions (",e.jsx(o.code,{children:"{ id, label, icon, onClick, disabledReason }"}),"); ",e.jsx(o.code,{children:"labels"})," and ",e.jsx(o.code,{children:"icons"})," say the words and the cross in another way."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"The state"})," — ",e.jsx(o.code,{children:"state.rowSelection"})," with ",e.jsx(o.code,{children:"onRowSelectionChange"}),"."]}),`
`]}),`
`,e.jsx(o.h2,{id:"the-scenes",children:"The scenes"}),`
`,e.jsx(d,{of:[c,a,i]}),`
`,e.jsx(o.h2,{id:"reference",children:"Reference"}),`
`,e.jsx(l,{headers:["Where","Name","What it does"],rows:[{id:"0",cells:{Where:"state",Name:"`rowSelection`","What it does":"`{ [rowId]: true }`."}},{id:"1",cells:{Where:"table",Name:"`enableRowSelection`","What it does":"v9’s: `false` or `(row) => boolean`."}},{id:"2",cells:{Where:"table",Name:"`readOnly`","What it does":"No row can be selected or edited."}},{id:"3",cells:{Where:"table",Name:"`enableGroupSelect`","What it does":"`false`: no checkbox on a group."}},{id:"4",cells:{Where:"table",Name:"`bulkBar`","What it does":"`(table) => <TableBulkBar … />`, over the bottom of the grid."}},{id:"5",cells:{Where:"column",Name:"`createUtilityColumn(helper)`","What it does":"The row number and checkbox column (`parts`: `rowCheckbox()`, `rowNumber()`, `rowDragHandle()`)."}},{id:"6",cells:{Where:"row",Name:"`getIsSelected()`, `toggleSelected()`","What it does":"v9’s own methods, used as they are."}}]})]})}function T(t={}){const{wrapper:o}={...s(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{T as default};
