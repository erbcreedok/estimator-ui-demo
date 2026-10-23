import{j as e,T as n}from"./products-CTiDOXRn.js";import{useMDXComponents as s}from"./index-DTba5wnT.js";import{M as a}from"./index-DCltYdiS.js";import{B as h}from"./row-insert.stories-AFpMl4E2.js";import{S as i}from"./scene-list-DGvAMnq_.js";import"./iframe-CiaHYEQr.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./rows-l3LcChQt.js";function r(o){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Tables/Table Core/Features/Row insert/Overview"}),`
`,e.jsx(t.h1,{id:"row-insert",children:"Row insert"}),`
`,e.jsxs(t.p,{children:["A new row between two rows, where the user points at it: a line and a ",e.jsx(t.strong,{children:"+"})," button show at the boundary the pointer is near, and a press tells the screen. The table makes no row: the screen does, and says where it stands. The line and the buttons are one layer over the rows, so they follow a sort, groups and the window of a virtualized body, and the cells under the line keep the pointer."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const features = tableFeatures({
  rowInsertFeature, // the + between two rows
  groupRowsFeature, // the display the layer reads
})

<TableCore
  features={features}
  onRowInsert={(event) => add({ after: event.afterRowId })}
/>
`})}),`
`,e.jsx(i,{of:[h]}),`
`,e.jsx(t.h2,{id:"what-the-screen-is-told",children:"What the screen is told"}),`
`,e.jsx(n,{headers:["Field","What it is"],rows:[{id:"0",cells:{Field:"`afterRowId`","What it is":"the row above the boundary"}},{id:"1",cells:{Field:"`beforeRowId`","What it is":"the row below it, none at the end of the rows"}},{id:"2",cells:{Field:"`groupPath`","What it is":"the values of the groups from the top down to the group the row goes into. A row in groups has a button for each level: the first inserts into the group of the first level (`[Team]`), the last into the group of the row above (`[Team, Role]`). Without groups there is one button and the path is empty."}}]}),`
`,e.jsx(t.h2,{id:"where-the-new-row-stands",children:"Where the new row stands"}),`
`,e.jsxs(t.p,{children:["The new row is the screen's. With ",e.jsx(t.code,{children:"holdOrder"})," and ",e.jsx(t.code,{children:"placeNewRows"})," (",e.jsx(t.code,{children:"placeNewRowsBy.after(event.afterRowId)"}),") it stands under the row above it and stays there under a sort, a grouping or an edit; ",e.jsx(t.code,{children:"placeNewRowsBy.atEnd"})," is the screen's other choice. The product places a new row by its values, which is what a table does without the hold."]}),`
`,e.jsx(t.h2,{id:"where-the-button-shows",children:"Where the button shows"}),`
`,e.jsx(n,{headers:["Boundary","Button"],rows:[{id:"0",cells:{Boundary:"under a row of data",Button:"shown while the pointer is within 16 px of the boundary, over a row or between"}},{id:"1",cells:{Boundary:"under a pinned row, a group row, a totals row",Button:"none"}},{id:"2",cells:{Boundary:"a read only table, a row `enableRowInsert` refuses",Button:"none"}},{id:"3",cells:{Boundary:"a touch screen",Button:"none: there is no pointer to hover"}}]}),`
`,e.jsx(t.p,{children:"The buttons stay at the left of what is seen while the table scrolls sideways, past the frozen columns, and stand over the cells, the frozen ones too, and under the bands and the header."}),`
`,e.jsx(t.h2,{id:"reference",children:"Reference"}),`
`,e.jsx(n,{headers:["Name","What it is"],rows:[{id:"0",cells:{Name:"`onRowInsert(event)`","What it is":"the screen is asked for a row; the buttons are there only with it"}},{id:"1",cells:{Name:"`enableRowInsert`","What it is":"all, none, or by the row: `(row) => boolean`. @default true"}},{id:"2",cells:{Name:"`table.insertRowAfter(rowId, groupPath?)`","What it is":"what a button does: asks the screen for a row after this one, into the group of `groupPath` (default: the row’s own); a menu or a key can call it"}},{id:"3",cells:{Name:"`table.getCanInsertRowAfter(row)`","What it is":"the row may have one: not read only, a row of data, not pinned, `enableRowInsert` allows it"}},{id:"4",cells:{Name:"slot `rowInsertHandle`","What it is":"your own button: it gets `label` and the `onClick` it must keep; give it `data-row-insert-button`"}}]})]})}function x(o={}){const{wrapper:t}={...s(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(r,{...o})}):r(o)}export{x as default};
