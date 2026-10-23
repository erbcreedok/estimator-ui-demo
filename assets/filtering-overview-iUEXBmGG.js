import{j as e,T as l}from"./products-CTiDOXRn.js";import{useMDXComponents as n}from"./index-DTba5wnT.js";import{M as i}from"./index-DCltYdiS.js";import{B as o}from"./basics.stories-DHS68ykr.js";import{S as a}from"./server.stories-cQSIz4J2.js";import{S as c}from"./scene-list-DGvAMnq_.js";import"./iframe-CiaHYEQr.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./scene-CA7bFVvb.js";import"./rows-l3LcChQt.js";import"./filters-CUv8qRVT.js";import"./scene-D--uP8Uf.js";function s(r){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Tables/Table Core/Features/Filtering/Overview"}),`
`,e.jsx(t.h1,{id:"filtering",children:"Filtering"}),`
`,e.jsx(t.p,{children:"Rows left by a filter on a column. Table Core has no interface for it yet (a field, a mark on the header, a panel come later): filtering is TanStack v9’s, and the screen sets the filters with its own controls."}),`
`,e.jsx(t.h2,{id:"turn-it-on",children:"Turn it on"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const features = tableFeatures({
  columnFilteringFeature,                       // v9: state.columnFilters, setFilterValue
  filteredRowModel: createFilteredRowModel(),   // v9: the rows left by the filters (or manualFiltering: the server filters)
  filterFns: { includesString: filterFn_includesString },  // v9: how a filter matches a value
})

<TableCore
  features={features} data={rows} columns={columns} getRowId={…}
  state={{ columnFilters }} onColumnFiltersChange={setColumnFilters}   // the screen owns the filters
/>
`})}),`
`,e.jsx(t.h2,{id:"set-the-filters-from-the-screen",children:"Set the filters from the screen"}),`
`,e.jsxs(t.p,{children:["Pass ",e.jsx(t.code,{children:"state.columnFilters"})," with ",e.jsx(t.code,{children:"onColumnFiltersChange"})," (",e.jsx(t.code,{children:"[{ id, value }]"}),"), or call the column yourself: ",e.jsx(t.code,{children:"column.setFilterValue(value)"}),", ",e.jsx(t.code,{children:"column.getCanFilter()"}),", ",e.jsx(t.code,{children:"table.resetColumnFilters()"}),". A column says ",e.jsx(t.code,{children:"enableColumnFilter: false"})," or its own ",e.jsx(t.code,{children:"filterFn"}),"."]}),`
`,e.jsx(t.h2,{id:"on-the-server",children:"On the server"}),`
`,e.jsxs(t.p,{children:["A server that filters says so: ",e.jsx(t.code,{children:"manualFiltering"}),". The table keeps the rows it has until the answer comes (",e.jsx(t.code,{children:"loading"})," says it waits) and counts the server’s rows (",e.jsx(t.code,{children:"rowCount"}),"). The same goes for ",e.jsx(t.code,{children:"manualSorting"})," and ",e.jsx(t.code,{children:"manualGrouping"}),"."]}),`
`,e.jsx(t.h2,{id:"the-scenes",children:"The scenes"}),`
`,e.jsx(c,{of:[o,a]}),`
`,e.jsx(t.h2,{id:"reference",children:"Reference"}),`
`,e.jsx(l,{headers:["Where","Name","What it does"],rows:[{id:"0",cells:{Where:"state",Name:"`columnFilters`","What it does":"v9’s: `[{ id, value }]`."}},{id:"1",cells:{Where:"table",Name:"`enableFilters`, `manualFiltering`","What it does":"v9’s: nothing filters / the server filters."}},{id:"2",cells:{Where:"table",Name:"`rowCount`, `loading`","What it does":"The server’s count of the rows, and the table waits for an answer."}},{id:"3",cells:{Where:"column",Name:"`enableColumnFilter`, `filterFn`","What it does":"v9’s."}},{id:"4",cells:{Where:"column",Name:"`setFilterValue()`, `getCanFilter()`","What it does":"v9’s: the screen sets a filter and asks whether the column filters."}}]})]})}function b(r={}){const{wrapper:t}={...n(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(s,{...r})}):s(r)}export{b as default};
