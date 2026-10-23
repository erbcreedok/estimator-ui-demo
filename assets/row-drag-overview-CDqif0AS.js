import{j as e,D as h,T as t}from"./products-CTiDOXRn.js";import{useMDXComponents as a}from"./index-DTba5wnT.js";import{M as d}from"./index-DCltYdiS.js";import{O as i}from"./order.stories-BjBUiqGK.js";import{G as l}from"./groups.stories-BIjFk5N5.js";import{B as c}from"./big.stories-C6Ynmeae.js";import{P as p}from"./playground.stories-CQMGnI5L.js";import{S as s}from"./scene-list-DGvAMnq_.js";import"./iframe-CiaHYEQr.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./order-table-Be873fAN.js";import"./handlers-DXU2ZPok.js";import"./checks-Df_c61wn.js";import"./scene-B-pT2pmB.js";import"./groups-table-SMxKwff6.js";import"./full-table-C6c0YjtD.js";function n(o){const r={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Tables/Table Core/Features/Row drag and drop/Overview"}),`
`,e.jsx(r.h1,{id:"row-drag-and-drop",children:"Row drag and drop"}),`
`,e.jsxs(r.p,{children:["In TanStack v9 there is no built-in drag and drop of rows: its example uses dnd-kit and the application itself changes the order. ",e.jsx(r.code,{children:"rowDragFeature"})," is ours. In a flat table it is a ",e.jsx(r.strong,{children:"reorder"})," (",e.jsx(r.code,{children:"onRowsReorder"}),": the screen puts the rows where they were dropped); in a grouped table it is a ",e.jsx(r.strong,{children:"move to another group"})," (the grouping columns of the row are written through ",e.jsx(r.code,{children:"writeCells"}),", the way an edit writes). For a plain reorder one feature is enough."]}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:["A group can jump to another place or leave the window when a row is edited, dropped or added: see ",e.jsx(h,{page:"tables-table-core-concepts-when-rows-and-groups-change-place-overview--docs",children:"When rows and groups change place"}),"."]}),`
`]}),`
`,e.jsx(r.h2,{id:"turn-it-on",children:"Turn it on"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`const features = tableFeatures({
  rowDragFeature, // ours: which rows can be taken, what a drop does
})

const columns = helper.columns([
  createUtilityColumn(helper, { parts: [rowDragHandle()] }), // ours: the column of handles
  helper.accessor('name', { header: 'Name' }),
])

<TableCore
  features={features}
  enableRowDragging       // true, false, or (row) => boolean
  onRowsReorder={({ rowIds, beforeRowId }) => …} // the order is the screen's
/>
`})}),`
`,e.jsx(r.p,{children:"More only when the table needs more:"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`rowSelectionFeature,   // v9: the selected rows go together
canDrop={({ rows, target, position }) => true} // ours: the screen's rule, or the reason it is not
// to move rows between groups:
columnGroupingFeature, rowExpandingFeature, // v9: the groups
groupRowsFeature,      // ours: the bands and lanes
cellEditingFeature,    // ours: a drop writes the grouping column through writeCells
rowSortingFeature,     // v9: a sorted table keeps the order of its sort
`})}),`
`,e.jsx(r.h2,{id:"what-a-drop-does",children:"What a drop does"}),`
`,e.jsx(t,{headers:["Dropped","What happens"],rows:[{id:"0",cells:{Dropped:"between two rows of one group (or of a table with no groups)","What happens":"`onRowsReorder({ rowIds, beforeRowId, groupPath })`: the screen puts the rows there. A sorted table refuses it: *Sorted by Name: the order is the sort’s*."}},{id:"1",cells:{Dropped:"on a band, a lane or a row of another group","What happens":"the grouping columns that differ are written through `writeCells` (`meta.onEdit`), from the first level where the two places differ; then `onRowsReorder` if the screen keeps an order"}},{id:"2",cells:{Dropped:"on a node of a hierarchy","What happens":"the same: the levels are written (`hierarchyColumns({ editable: true })`), the levels below the node are emptied (`null`)"}},{id:"3",cells:{Dropped:"where a cell cannot be written, or `canDrop` says no","What happens":"nothing moves; the hint is red with the reason of the cell (`getCanEdit`, `meta.parse`, the save) or of the rule"}}]}),`
`,e.jsxs(r.p,{children:["While the rows are over a target the hint says what changes (",e.jsx(r.strong,{children:"Team: Platform → Payments"}),") or why not. A selected row is taken with all the selected rows. ",e.jsx(r.strong,{children:"Esc"})," puts everything back."]}),`
`,e.jsx(r.h2,{id:"how-it-is-taken",children:"How it is taken"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Mouse"}),": press the handle and drag."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Touch"}),": hold the handle a moment, then drag; a short touch scrolls the page."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Keys"}),": focus the handle, ",e.jsx(r.strong,{children:"Space"})," takes the row, ",e.jsx(r.strong,{children:"↑"})," and ",e.jsx(r.strong,{children:"↓"})," move the line, ",e.jsx(r.strong,{children:"Enter"})," drops, ",e.jsx(r.strong,{children:"Esc"})," leaves. The hint is read out."]}),`
`,e.jsx(r.li,{children:"At the top or bottom edge of the table it scrolls by itself."}),`
`]}),`
`,e.jsx(r.h2,{id:"handle-a-drop-yourself",children:"Handle a drop yourself"}),`
`,e.jsxs(r.p,{children:["Two levels. ",e.jsx(r.strong,{children:"Ready"}),": the screen keeps its rows in an array and puts them in order with ",e.jsx(r.code,{children:"applyRowsReorder"}),"; the rest is the table's."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`onRowsReorder={(change) =>
  setRows((all) => applyRowsReorder(all, change, (person) => person.id))
}
`})}),`
`,e.jsxs(r.p,{children:["In a grouped table ",e.jsx(r.code,{children:"change.order"})," is the whole data in the order that keeps the groups where they stand (v9 puts the groups in the order of their first row in the data, so a row taken out of the first group would otherwise turn the groups over). To keep the groups from jumping, apply the order: ",e.jsx(r.code,{children:"applyRowsReorder"})," does it. ",e.jsx(r.code,{children:"order"})," is absent when the table is sorted or does not group its own rows (",e.jsx(r.code,{children:"manual*"}),", ",e.jsx(r.code,{children:"getSubRows"}),"): there is nothing to keep. In a table with a filter the rows it hides keep their places; with pages, ",e.jsx(r.code,{children:"order"})," is the data of all of them."]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Your own"}),": ",e.jsx(r.code,{children:"onRowsReorder"})," gets ",e.jsx(r.code,{children:"{ rowIds, beforeRowId, groupPath, order? }"})," and does what the screen does: its own ",e.jsx(r.code,{children:"sortIndex"}),", a request to the server."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`onRowsReorder={async ({ rowIds, beforeRowId, groupPath }) => {
  await api.moveRows({ rowIds, before: beforeRowId, group: groupPath }) // null: last in the group
  refetch()
}}
`})}),`
`,e.jsx(r.p,{children:"Where the screen decides:"}),`
`,e.jsx(t,{headers:["Where","What it decides"],rows:[{id:"0",cells:{Where:"`canDrop({ rows, target, position })`","What it decides":"the rule of the screen and its reason: `true`, or the text shown at the pointer (*Not on a Friday*)"}},{id:"1",cells:{Where:"`meta.onEdit`, `meta.parse` (on the column)","What it decides":"what is written into the cell of the grouping column: the value the screen keeps, e.g. the `unitId` of a team instead of its name"}},{id:"2",cells:{Where:"`resolvers.getCanEdit`","What it decides":"which cell may be written; a cell that may not stops the whole drop with its reason"}},{id:"3",cells:{Where:"`rowDragMessage(plan)`","What it decides":"the text of the hint over a target"}},{id:"4",cells:{Where:"`enableRowDragging`","What it decides":"which rows can be taken"}},{id:"5",cells:{Where:"v9 sorting","What it decides":"a sorted table keeps the order of its sort: a drop inside a group is refused, a drop into another group is written and the sort puts the row in"}}]}),`
`,e.jsxs(r.p,{children:["A value of the grouping column changed in its cell (an edit) moves the row to another group, and the groups stand by the first row of each in the data. A drop carries the order (",e.jsx(r.code,{children:"change.order"}),")."]}),`
`,e.jsx(s,{of:[i,l,c]}),`
`,e.jsx(r.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(s,{of:[p]}),`
`,e.jsx(r.h2,{id:"reference",children:"Reference"}),`
`,e.jsx(t,{headers:["Name","What"],rows:[{id:"0",cells:{Name:"`enableRowDragging`",What:"`boolean` or `(row) => boolean`: which rows can be taken. Only rows are taken; a read-only table takes none."}},{id:"1",cells:{Name:"`onRowsReorder(change)`",What:"`{ rowIds, beforeRowId | null, groupPath, order? }`: the rows now stand before `beforeRowId`, or last in the group; `order` is the data in the order that keeps the groups. `applyRowsReorder(rows, change, getRowId)` applies it. Without `onRowsReorder` a drop inside a group is refused."}},{id:"2",cells:{Name:"`canDrop({ rows, target, position })`",What:"the screen’s rule: `true`, or the reason shown at the pointer. It speaks last."}},{id:"3",cells:{Name:"`table.planRowDrop(rowIds, { rowId, position })`",What:"what a drop would do, without doing it: `{ ok, writes, changes, reorder, message }` or `{ ok: false, reason }`"}},{id:"4",cells:{Name:"`table.dropRows(plan)`",What:"does it: the writes (all or none: a refused cell stops it), then the order"}},{id:"5",cells:{Name:"`table.getRowsToDrag(rowId)`",What:"the rows that go with this one"}},{id:"6",cells:{Name:"`createUtilityColumn(helper, { parts: [rowDragHandle()] })`, `RowDragHandle`",What:"the column of handles (see Utility column), and the handle for any cell"}}]})]})}function C(o={}){const{wrapper:r}={...a(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(n,{...o})}):n(o)}export{C as default};
