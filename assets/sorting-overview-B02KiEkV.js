import{j as e,T as r}from"./products-CTiDOXRn.js";import{useMDXComponents as s}from"./index-DTba5wnT.js";import{M as i}from"./index-DCltYdiS.js";import{B as a}from"./basics.stories-CJ5SpxhB.js";import{C as l}from"./columns.stories-aQpNvGVW.js";import{M as h}from"./multi.stories-C-MHXuAD.js";import{P as c}from"./places.stories-FyFaMmEc.js";import{S as d}from"./server.stories-IAnWngzT.js";import{S as u}from"./scene-list-DGvAMnq_.js";import"./iframe-CiaHYEQr.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./scene-DY5gZaw6.js";import"./rows-l3LcChQt.js";import"./checks-Cdgb-MqO.js";import"./sortings-CKkx76aO.js";import"./scene-D--uP8Uf.js";function n(o){const t={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Tables/Table Core/Features/Sorting/Overview"}),`
`,e.jsx(t.h1,{id:"sorting",children:"Sorting"}),`
`,e.jsx(t.p,{children:"Rows in order by one column or several, in the priority the user or the screen sets. A click on a header sorts; the column menu, the toolbar’s Sort button, the Sorting panel and the status bar’s chip are the other ways, each optional."}),`
`,e.jsx(t.h2,{id:"turn-it-on",children:"Turn it on"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const features = tableFeatures({
  rowSortingFeature,                                // v9: state.sorting, toggleSorting, getIsSorted
  sortedRowModel: createSortedRowModel(),           // v9: the rows in the order of the sort
  sortFns: sceneSortFns,  // v9: how two values compare
})

<TableCore
  features={features} data={rows} columns={columns} getRowId={…}
  enableMultiSort                                           // Shift+click, Then by
  columnMenu={defaultColumnMenu()}                          // a click opens the menu
  toolbar={(table) => <TableToolbar table={table} controls={[sortingControl()]} />}
  statusBar={(table) => <TableStatusBar table={table} chips={[sortingChip()]} />}
/>
`})}),`
`,e.jsxs(t.p,{children:["The sorting is v9’s: the state, the sort functions and the order of the rows. The header, the menu, the panel and the chip call the column’s own methods (",e.jsx(t.code,{children:"toggleSorting"}),", ",e.jsx(t.code,{children:"clearSorting"}),", ",e.jsx(t.code,{children:"getIsSorted"}),", ",e.jsx(t.code,{children:"getSortIndex"}),"). Without ",e.jsx(t.code,{children:"rowSortingFeature"})," the table has none of them and draws plain labels."]}),`
`,e.jsx(t.h2,{id:"on-the-server",children:"On the server"}),`
`,e.jsxs(t.p,{children:["A server that sorts says so: ",e.jsx(t.code,{children:"manualSorting"})," with the sorting in the request. The table writes the state and waits; it keeps the rows it has until the answer comes (",e.jsx(t.code,{children:"loading"})," says it waits) and counts the server’s rows (",e.jsx(t.code,{children:"rowCount"}),"), not the ones that came."]}),`
`,e.jsx(t.h2,{id:"what-you-can-set",children:"What you can set"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"A column"})," — ",e.jsx(t.code,{children:"enableSorting: false"})," (never sorts: no button, no menu, not in the panel); ",e.jsx(t.code,{children:"sortFn"}),", v9’s own, or ",e.jsx(t.code,{children:"sortByOrder([...])"})," for a fixed order (High, Medium, Low); ",e.jsx(t.code,{children:"meta.sort"})," for the words and icons: ",e.jsx(t.code,{children:"type"})," (",e.jsx(t.code,{children:"text"}),", ",e.jsx(t.code,{children:"number"}),", ",e.jsx(t.code,{children:"date"}),"), ",e.jsx(t.code,{children:"labels: { asc, desc }"}),", ",e.jsx(t.code,{children:"icons: { asc, desc }"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"The table"})," — ",e.jsx(t.code,{children:"enableSorting"}),", ",e.jsx(t.code,{children:"enableMultiSort"})," (v9’s). ",e.jsx(t.code,{children:"columnMenu"}),", ",e.jsx(t.code,{children:"toolbar"}),", ",e.jsx(t.code,{children:"statusBar"})," are optional; leave one out and that place is not there."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"The state"})," — ",e.jsx(t.code,{children:"state.sorting"})," with ",e.jsx(t.code,{children:"onSortingChange"}),": the sorts in priority order, ",e.jsx(t.code,{children:"[{ id, desc }]"}),". A sort of a column that is not on the screen is the screen’s own: the panel and the chip do not list it, ",e.jsx(t.em,{children:"Clear all"})," leaves it."]}),`
`]}),`
`,e.jsx(t.h2,{id:"the-scenes",children:"The scenes"}),`
`,e.jsx(u,{of:[a,l,h,c,d]}),`
`,e.jsx(t.h2,{id:"reference",children:"Reference"}),`
`,e.jsx(r,{headers:["Where","Name","What it does"],rows:[{id:"0",cells:{Where:"state",Name:"`sorting`","What it does":"`[{ id, desc }]` in priority order."}},{id:"1",cells:{Where:"table",Name:"`enableSorting`, `enableMultiSort`","What it does":"v9’s switches: nothing sorts / one sort at a time."}},{id:"2",cells:{Where:"table",Name:"`columnMenu`","What it does":"`defaultColumnMenu()` or `{ sections }`: the menu a header click opens."}},{id:"3",cells:{Where:"table",Name:"`toolbar`, `statusBar`","What it does":"Regions: `(table) => <TableToolbar … />`."}},{id:"4",cells:{Where:"column",Name:"`enableSorting`, `sortFn`","What it does":"v9’s."}},{id:"5",cells:{Where:"column",Name:"`sortFn: sortByOrder(order)`","What it does":"A fixed order of values; unknown values last."}},{id:"6",cells:{Where:"column",Name:"`meta.sort`","What it does":"`{ type, labels, icons }`: the words and icons of the directions."}},{id:"7",cells:{Where:"controls",Name:"`sortingControl()`, `sortingChip()`","What it does":"The toolbar button and the chip; both open `SortingPanel`."}}]})]})}function B(o={}){const{wrapper:t}={...s(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{B as default};
