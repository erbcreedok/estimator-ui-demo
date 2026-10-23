import{j as e,T as j}from"./products-CTiDOXRn.js";import{useMDXComponents as f}from"./index-DTba5wnT.js";import{M as m,C as o,a as t}from"./index-DCltYdiS.js";import{FlatOrHierarchy as b,DifferentDepth as a,EmptyNodes as y,NodeView as v,Totals as N,LazyNodes as T,Pages as r,ServerPages as C,SortAndFilter as k,OwnGrouping as F,AsLanes as h,LanesAndRows as W,DepthAsLanes as d,LanesInsideRows as R,NodeHeaderLabels as i,NodeHeaderFull as l,OnlyNodeHeaders as c,NodeOwnCells as A,NodeOwnBand as S,SelectNode as p,RowNumbers as u,NoIndent as w}from"./basics.stories-BfBXG2kO.js";import{EstimatesTree as P,WorksWithTheTable as G}from"./together.stories-BvvOLcyX.js";import{Playground as g}from"./playground.stories-Da3phvCd.js";import{T as H}from"./basics.stories-BvSmS2pb.js";import{T as M}from"./places.stories-CWvuedLt.js";import{S as D}from"./scene-list-DGvAMnq_.js";import"./iframe-CiaHYEQr.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./delivery-C8x7O8Im.js";import"./checks-R4e5umqc.js";import"./node-pager-WHE38C50.js";import"./totals-CNUlOeK6.js";import"./checks-GA0zUtfG.js";import"./scene-CZYYx_oH.js";import"./rows-l3LcChQt.js";function x(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...f(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Tables/Table Core/Features/Hierarchy/Overview"}),`
`,e.jsx(n.h1,{id:"hierarchy",children:"Hierarchy"}),`
`,e.jsxs(n.p,{children:["A hierarchy is rows that stand in a tree: a country and its cities, an organisation and its units. The rows stay ",e.jsx(n.strong,{children:"flat"})," (a row says where it stands, with a path such as ",e.jsx(n.code,{children:"['Northwind', 'Europe', 'Engineering']"}),") and the table makes the tree. It is not a tree of its own: a hierarchy is ",e.jsx(n.strong,{children:"v9’s grouping"}),", with levels the table makes for you, so everything Grouping has works in it: nested groups, totals by ",e.jsx(n.code,{children:"aggregationFn"}),", sorting, filtering, expanding, pages. This page builds it one step at a time, and each step is switched on by itself."]}),`
`,e.jsx(n.h2,{id:"turn-it-on",children:"Turn it on"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const features = tableFeatures({
	columnGroupingFeature, // v9: state.grouping, the grouped row model's grouping
	rowExpandingFeature, // v9: a node opens and folds
	groupRowsFeature, // ours: draws the nodes as bands, sticky parents, totals, status, Show more
	rowHierarchyFeature, // ours: levels from a path, setHierarchy, node data
	rowAggregationFeature, // v9, optional: a column's aggregationFn gives a node its total
	rowSortingFeature, // v9, optional: sort inside nodes
	columnFilteringFeature, // v9, optional: filter the rows before they stand in nodes
	rowPaginationFeature, // v9, optional: pages of top-level nodes (paginateExpandedRows: false)
	groupedRowModel: createGroupedRowModel(),
	expandedRowModel: createExpandedRowModel(),
})
`})}),`
`,e.jsxs(n.p,{children:["The first two and the row models are TanStack Table v9’s own; ",e.jsx(n.code,{children:"groupRowsFeature"})," and ",e.jsx(n.code,{children:"rowHierarchyFeature"})," are ours and are the whole of what a hierarchy adds. Each of the optional ones is switched on by itself."]}),`
`,e.jsx(n.h2,{id:"1-flat-or-a-hierarchy",children:"1. Flat or a hierarchy"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"hierarchyColumns"})," turns a path into one hidden grouping column per level (",e.jsx(n.code,{children:"places-level1"}),", ",e.jsx(n.code,{children:"places-level2"}),"). They are never drawn as columns and never shown to the user as a grouping. A hierarchy that is on is those columns at the front of v9’s ",e.jsx(n.code,{children:"state.grouping"}),"; ",e.jsx(n.code,{children:"table.setHierarchy(id)"})," writes them and ",e.jsx(n.code,{children:"table.setHierarchy(null)"})," takes them away. There is no state of its own, ",e.jsx(n.code,{children:"table.getHierarchy()"})," reads the grouping."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const features = tableFeatures({
  columnGroupingFeature, rowExpandingFeature, groupRowsFeature,
  rowHierarchyFeature,                                  // ← new
  groupedRowModel: createGroupedRowModel(),
  expandedRowModel: createExpandedRowModel(),
})

const columns = [
  ...hierarchyColumns<Person>({                         // ← new
    places: { levels: 2, path: (person) => [person.country, person.city] },
  }),
  …
]

table.setHierarchy('places')                            // ← new
`})}),`
`,e.jsx(o,{of:b}),`
`,e.jsx(n.h2,{id:"2-rows-at-different-depth",children:"2. Rows at different depth"}),`
`,e.jsx(n.p,{children:"A path may stop above the last level. A level the path does not reach is not drawn: the row stands under the nearest real node, and no empty node appears."}),`
`,e.jsx(o,{of:a}),`
`,e.jsx(t,{of:a}),`
`,e.jsx(n.h2,{id:"3-nodes-with-no-rows",children:"3. Nodes with no rows"}),`
`,e.jsxs(n.p,{children:["A node exists even when nobody is in it yet. ",e.jsx(n.code,{children:"groupPaths"})," lists the nodes the screen knows of; the ones the rows did not make are drawn with ",e.jsx(n.strong,{children:"0"})," and nothing under them. They are not rows: no total, selection, copy or ",e.jsx(n.code,{children:"rowCount"})," sees them. While a filter is on they go."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<TableCore
	groupPaths={() => [
		['Northwind', 'Americas', 'Growth'],
		['Northwind', 'Support'],
	]} // ← new
/>
`})}),`
`,e.jsx(o,{of:y}),`
`,e.jsx(n.h2,{id:"4-a-node-with-its-own-name",children:"4. A node with its own name"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"groupData(path)"})," tells the table what the screen knows of a node by its path. Its ",e.jsx(n.code,{children:"name"})," replaces the path segment. A node row sticks while its rows scroll, and the nodes above it stay over it, the same piece as Grouping › Rows."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<TableCore groupData={(path) => ({ name: NAMES[path.join('>')] })} /> // ← new
`})}),`
`,e.jsx(o,{of:v}),`
`,e.jsx(n.h2,{id:"5-totals-of-a-node",children:"5. Totals of a node"}),`
`,e.jsxs(n.p,{children:["A column with an ",e.jsx(n.code,{children:"aggregationFn"})," has a total in every node, v9’s own, over every row under the node. What the server sends wins: ",e.jsx(n.code,{children:"groupData"})," may return ",e.jsx(n.code,{children:"totals"})," and a ",e.jsx(n.code,{children:"leafCount"})," that cover the whole node, rows here or not. A node with nothing and no totals says “—”, never a zero it cannot know."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`helper.accessor('hours', { aggregationFn: 'sum' })                                      // ← new
groupData={(path) => ({ leafCount: 12, totals: { rate: 61, hours: 1560 } })}         // ← new
`})}),`
`,e.jsx(o,{of:N}),`
`,e.jsx(n.h2,{id:"6-a-hierarchy-that-loads",children:"6. A hierarchy that loads"}),`
`,e.jsxs(n.p,{children:["A node with ",e.jsx(n.code,{children:"hasChildren"})," can be opened before its rows are here. Opening it calls ",e.jsx(n.code,{children:"onGroupOpen(path)"}),": the screen loads the rows and puts them in its data, and the node becomes a group like any other. While they come the node says ",e.jsx(n.code,{children:"status"}),": ",e.jsx(n.code,{children:"'loading'"})," shows ",e.jsx(n.strong,{children:"Loading…"})," under it, ",e.jsx(n.code,{children:"{ error }"})," shows the reason and a ",e.jsx(n.strong,{children:"Retry"}),", which asks again."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`groupData={(path) => ({ hasChildren: true, status: statusOf(path) })}   // ← new
onGroupOpen={load}                                                   // ← new
`})}),`
`,e.jsx(o,{of:T}),`
`,e.jsx(n.p,{children:"The hierarchy is a grouping, so what the server says of a node (its four numbers, Show more, a node selected as a whole) is the same as for a group by a column, and is shown once: see Grouping › On the server. What is the hierarchy’s own here is where a row’s path is written (hidden level columns) and rows that stop at any level (empty levels)."}),`
`,e.jsx(n.h2,{id:"7-pages",children:"7. Pages"}),`
`,e.jsxs(n.p,{children:["A page is a number of top-level nodes with everything under them, never a cut through one: the page size counts nodes. ",e.jsx(n.code,{children:"table.getNodeCount()"})," and ",e.jsx(n.code,{children:"getNodePageCount()"})," give the pager its numbers. With the server’s pages (",e.jsx(n.code,{children:"manualPagination"}),") the rows that are here are the page and ",e.jsx(n.code,{children:"rowCount"})," is the number of top-level nodes on the server."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`rowPaginationFeature,                                         // ← new
initialState={{ pagination: { pageIndex: 0, pageSize: 2 } }}  // ← new
`})}),`
`,e.jsx(o,{of:r}),`
`,e.jsx(t,{of:r}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`manualPagination // ← new
rowCount = { countries } // ← new
`})}),`
`,e.jsx(o,{of:C}),`
`,e.jsx(n.h2,{id:"8-sorting-and-filtering",children:"8. Sorting and filtering"}),`
`,e.jsx(n.p,{children:"Rows are filtered before they stand in nodes and sorted inside them, so a filter leaves the nodes that have a match, and a sort orders the rows of each node; the nodes keep their places."}),`
`,e.jsx(o,{of:k}),`
`,e.jsx(n.h2,{id:"9-the-users-own-grouping",children:"9. The user’s own grouping"}),`
`,e.jsxs(n.p,{children:["What follows the levels in ",e.jsx(n.code,{children:"state.grouping"})," is the user’s own grouping, nested by v9 inside the last node. The Grouping panel, the status chip and the column menu show and change only that part."]}),`
`,e.jsx(o,{of:F}),`
`,e.jsx(n.h2,{id:"10-levels-as-lanes",children:"10. Levels as lanes"}),`
`,e.jsxs(n.p,{children:["A level is drawn as a lane or as a header row, as any grouping's: ",e.jsx(n.code,{children:"layout"})," in ",e.jsx(n.code,{children:"hierarchyColumns"})," for the whole hierarchy (or a function of the level), ",e.jsx(n.code,{children:"meta.groupLayout"})," on a column of the user's own grouping. Any mix works: the hierarchy as lanes and Team as header rows inside, or the other way round. Where a path stops, the lane of a level it does not reach has a cell with nothing in it. ",e.jsx(n.code,{children:"labels"})," name the lanes."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`hierarchyColumns<Person>({
  places: { levels: 2, path: (p) => [p.country, p.city], layout: 'lanes', labels: ['Country', 'City'] },  // ← new
})
`})}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(o,{of:W}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(t,{of:d}),`
`,e.jsx(n.p,{children:"Every level is drawn inside the block of its parent, whatever the order: the band of a node spans its block, the lanes of the levels outside it stand beside it and the lanes of the levels inside start under it and end with the node."}),`
`,e.jsx(o,{of:R}),`
`,e.jsx(n.h2,{id:"11-the-header-under-a-node",children:"11. The header under a node"}),`
`,e.jsxs(n.p,{children:["An open group can repeat the table's header under its band: ",e.jsx(n.code,{children:"groupHeader: 'labels'"})," (the labels of the columns), ",e.jsx(n.code,{children:"'full'"})," (the table's own header, the same piece: a click sorts, the edge resizes, the menu opens, a column moves, all in the state of the one table) or ",e.jsx(n.code,{children:"'none'"})," (the default). A function of the path gives each level a view of its own. The repeated header sticks under the band of its group, in the stack of the parents, over the rows that scroll. For the groups drawn as header rows; a lane has none."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<TableCore groupHeader="labels" />  // ← new
<TableCore groupHeader={(path) => (path.length === 1 ? 'full' : 'labels')} />
`})}),`
`,e.jsx(o,{of:i}),`
`,e.jsx(t,{of:i}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(t,{of:l}),`
`,e.jsxs(n.p,{children:["With ",e.jsx(n.code,{children:"header: 'none'"})," the table draws no header of its own and the headers of the groups are the only ones; frozen columns, resize and the menu work from them."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<TableCore groupHeader="full" header="none" />  // ← new
`})}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(n.h2,{id:"12-what-a-node-row-shows",children:"12. What a node row shows"}),`
`,e.jsxs(n.p,{children:["A cell of a group is drawn by the column's ",e.jsx(n.code,{children:"aggregatedCell"}),", v9's own. Give a column one of its own and it draws anything: a chip, a progress, a link. The context has the row, and the row has ",e.jsx(n.code,{children:"getGroupPath()"})," (the values of the grouping down to it) and ",e.jsx(n.code,{children:"getGroupData()"}),": what the screen's ",e.jsx(n.code,{children:"groupData(path)"})," returned, of any type; the table reads only ",e.jsx(n.code,{children:"name"}),", ",e.jsx(n.code,{children:"totals"}),", the four counts, ",e.jsx(n.code,{children:"hasChildren"})," and ",e.jsx(n.code,{children:"status"}),". A column without an ",e.jsx(n.code,{children:"aggregatedCell"})," of its own shows its total, or “—”, as before. The name cell stays the column's own ",e.jsx(n.code,{children:"cell"})," (",e.jsx(n.code,{children:"cell.getIsGrouped()"})," is v9's)."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`helper.accessor('rate', { aggregatedCell: (info) => <progress value={info.row.getGroupData()?.progress} /> })  // ← new
<TableCore groupData={(path) => UNIT_INFO[path.join('>')]} />                                               // ← new
`})}),`
`,e.jsx(o,{of:A}),`
`,e.jsxs(n.p,{children:["The whole row of a group is a slot, ",e.jsx(n.code,{children:"nodeRow"}),": it gets the group, its path and data, the default cells and the default band. Draw a band of your own across the table, or wrap the default one."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<TableCore slots={{ nodeRow: ({ path, data, band }) => (path?.length === 1 ? <MyBand … /> : band) }} />  // ← new
`})}),`
`,e.jsx(o,{of:S}),`
`,e.jsx(n.h2,{id:"13-selecting-rows",children:"13. Selecting rows"}),`
`,e.jsxs(n.p,{children:["Selection is the one of every group, the same code. With v9's ",e.jsx(n.code,{children:"rowSelectionFeature"})," the band of a node has the checkbox of a group (",e.jsx(n.code,{children:"enableGroupSelect"}),", as in Grouping): it selects the rows under the node at any depth and only them, a part shows a dash, and the bulk bar counts the rows selected. ",e.jsx(n.code,{children:"createUtilityColumn"})," adds the numbers and the row checkboxes; the numbers run one after another over the rows of data, whatever stands between them (nodes, empty levels, lanes, teams)."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`rowSelectionFeature,                       // ← new
createUtilityColumn(helper),               // ← new
<TableCore bulkBar={(table) => <TableBulkBar table={table} getActions={() => []} />} />  // ← new
`})}),`
`,e.jsxs(n.p,{children:["When the table has a column of row checkboxes (the utility column), the checkbox of a node stands in it, on the band's line and on the vertical of the rows' checkboxes; the band keeps the −/+ and the name. Without such a column the checkbox is in the band. The rows of data stand in under their node, a step for each node above (",e.jsx(n.code,{children:"groupIndent"}),": ",e.jsx(n.code,{children:"'depth'"}),", the default, or ",e.jsx(n.code,{children:"'none'"}),"); the empty levels of a path and the lanes add none. The bulk bar stands under the rows, over none of them."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<TableCore groupIndent="none" />  // ← new: all the rows on one line
`})}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(o,{of:u}),`
`,e.jsx(t,{of:u}),`
`,e.jsxs(n.p,{children:["With pages the numbers go on from the page before (the third page of ten starts at 21): the table counts the rows of the nodes before its own page, and with the server's pages the screen says the first number (",e.jsx(n.code,{children:"firstRowNumber"}),"; with grouped rows and numbers on the types ask for it, the table does not compile without)."]}),`
`,e.jsxs(n.p,{children:["A node that has no rows here, empty or with rows still to load, is no row and has no checkbox; once its rows come, its checkbox selects the rows that are loaded. The bulk bar counts the loaded rows, or the server's ",e.jsx(n.code,{children:"rowCount"})," when the table has one."]}),`
`,e.jsx(o,{of:w}),`
`,e.jsx(t,{of:w}),`
`,e.jsx(n.h2,{id:"14-data-that-is-already-a-tree",children:"14. Data that is already a tree"}),`
`,e.jsxs(n.p,{children:["Rows that come nested (a team lead, their managers, their reports) need no path: ",e.jsx(n.code,{children:"getSubRows"})," says where a row's children are, and v9's expanding folds and opens them with a chevron and an indent. The selection of a parent with its children, sorting inside the levels and ",e.jsx(n.strong,{children:"Enter"})," on a cell work on top of it. ",e.jsx(n.code,{children:"treeColumn"})," puts the chevron in another column, ",e.jsx(n.code,{children:"treePlacement"})," at the end, ",e.jsx(n.code,{children:"treeMirrored"})," turns it for a right-to-left screen, and the ",e.jsx(n.code,{children:"treeIcon"})," slot takes an icon of your own."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const features = tableFeatures({
  rowExpandingFeature,
  expandedRowModel: createExpandedRowModel(),
})

<TableCore features={features} data={leads} getSubRows={(row) => row.reports} />
`})}),`
`,e.jsx(D,{of:[H,M]}),`
`,e.jsx(n.h2,{id:"put-together",children:"Put together"}),`
`,e.jsx(n.p,{children:"The Resource Plan’s tree of estimates is a hierarchy: positions are flat rows with the path of their unit, a unit is a node with its name, the totals the server sends before its people come, and the people of a unit load when it opens."}),`
`,e.jsx(o,{of:P}),`
`,e.jsx(n.h3,{id:"with-the-rest-of-the-table",children:"With the rest of the table"}),`
`,e.jsx(n.p,{children:"A hierarchy is v9’s grouping, so the rest of the table works in it as it is: a double click edits a rate and the totals of the units above follow, the arrows move the active cell through the people and the unit rows, a sort orders the rows inside each unit, a frozen column stays at the left."}),`
`,e.jsx(o,{of:G}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:"Everything above at once, with a control for each option."}),`
`,e.jsx(o,{of:g}),`
`,e.jsx(t,{of:g}),`
`,e.jsx(n.h2,{id:"reference",children:"Reference"}),`
`,e.jsx(j,{headers:["Where","Name","What it does"],rows:[{id:"0",cells:{Where:"feature",Name:"`rowHierarchyFeature`","What it does":"A hierarchy over v9’s grouping. Needs `columnGroupingFeature` and `rowExpandingFeature`."}},{id:"1",cells:{Where:"columns",Name:"`hierarchyColumns({ id: { levels, path } })`","What it does":"The hidden level columns of a hierarchy, `<id>-level1` … `<id>-levelN`."}},{id:"2",cells:{Where:"table",Name:"`setHierarchy(id | null)`, `getHierarchy()`","What it does":"Writes / reads the front of `state.grouping`; the user’s grouping stays after it."}},{id:"3",cells:{Where:"option",Name:"`groupPaths`","What it does":"Paths of groups that exist and have no rows (yet), for the grouping the table has: `(columnIds) => paths`."}},{id:"4",cells:{Where:"option",Name:"`groupData(path)`","What it does":"`name`, `totals`, `childNodeCount`, `childLeafCount`, `nodeCount`, `leafCount`, `hasChildren`, `status` of a node."}},{id:"5",cells:{Where:"option",Name:"`onGroupOpen(path)`","What it does":"A node with `hasChildren` was opened, or Retry was pressed: load its rows."}},{id:"6",cells:{Where:"option",Name:"`onGroupMore(path, what)`","What it does":"Show more was pressed. Not given: no Show more row."}},{id:"7",cells:{Where:"table",Name:"`getNodeCount()`, `getNodePageCount()`","What it does":"Top-level nodes to page through (`rowCount` with `manualPagination`) and the pages of them."}},{id:"8",cells:{Where:"slot",Name:"`nodeStatus`, `nodeMore`","What it does":"The Loading… / error row and the Show more row of a node."}}]})]})}function oe(s={}){const{wrapper:n}={...f(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(x,{...s})}):x(s)}export{oe as default};
