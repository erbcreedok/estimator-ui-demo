import{j as e,T as n}from"./products-CTiDOXRn.js";import{useMDXComponents as t}from"./index-DTba5wnT.js";import{M as h}from"./index-DCltYdiS.js";import{B as l}from"./basics.stories-BZr3__mD.js";import{W as a}from"./workload.stories-B20hJP8F.js";import{P as i}from"./popup.stories-DEmmsvY-.js";import{S as c}from"./scene-list-DGvAMnq_.js";import"./iframe-CiaHYEQr.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./checks-BmVl_141.js";import"./rows-l3LcChQt.js";import"./plan-like-scene-Z3UmXR5t.js";function r(s){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Tables/Table Core/Features/Headers/Overview"}),`
`,e.jsx(o.h1,{id:"headers",children:"Headers"}),`
`,e.jsx(o.p,{children:"A header of several levels: a cell of a group stands over the columns it holds, as in the Resource Plan, where a year stands over its months."}),`
`,e.jsx(o.h2,{id:"turn-it-on",children:"Turn it on"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`const columns = helper.columns([
  helper.accessor('name', { header: 'Name' }),
  helper.group({
    id: 'person',
    header: 'Person',
    columns: helper.columns([
      helper.accessor('team', { header: 'Team' }),
      helper.accessor('role', { header: 'Role' }),
    ]),
  }),
])
`})}),`
`,e.jsxs(o.p,{children:["A column with ",e.jsx(o.code,{children:"columns"})," is a group (v9’s own). The header has a level for each depth of the groups; the table draws all of them, a cell of the group over its columns, as wide as they are together. A column that is in no group is as tall as the header; so are the utility column and the lanes of a grouping."]}),`
`,e.jsx(o.h2,{id:"how-the-groups-live-with-the-features",children:"How the groups live with the features"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Sticky header"})," — all the levels stick together; the bands of the groups stand under them."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Width"})," — a group has the width of the columns under it. A resize of a group (the handle on its cell) is v9’s: it shares the drag among its columns. The handle is there when every column under the group can be resized."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Freezing"})," — a group whose columns are frozen at one side sticks with them. A group whose columns are frozen in part is a cell for each side: the one over the frozen columns sticks, the other scrolls."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Order"})," — while the table owns ",e.jsx(o.code,{children:"columnOrder"})," a column stands in its group: a drag of it stops at the edge of the group. The grip of a group cell moves the group with all its columns, among the columns and groups next to it. A screen that owns ",e.jsx(o.code,{children:"columnOrder"})," (",e.jsx(o.code,{children:"state.columnOrder"})," with ",e.jsx(o.code,{children:"onColumnOrderChange"}),") has its own rule: any order it accepts is the order, and a group whose columns stand apart is a cell for each run."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Visibility"})," — v9’s: a group with no visible column has no cell. The Columns panel has a row for a group with a tick for all its columns (mixed while some are hidden) and the columns under it; its handle moves the group."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Chains"})," — a chain stands inside one group (or outside all of them). When its columns come from two groups, the group of the first column holds the chain and ",e.jsx(o.code,{children:"onChainConflicts"})," names the column that left it (",e.jsx(o.code,{children:"split-groups"}),")."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.strong,{children:"Utility column and lanes"})," — they take all the levels of the header."]}),`
`]}),`
`,e.jsx(o.h2,{id:"workload-as-in-the-resource-plan",children:"Workload as in the Resource Plan"}),`
`,e.jsxs(o.p,{children:["A group for each year with a column for each month under it, made from the months the rows have (",e.jsx(o.code,{children:"'2026-03'"}),"). The first year says ",e.jsx(o.strong,{children:"Workload 2026"}),", the others the year. The cells are v9’s cells: a click, Shift+click and a drag select, the arrows move, Ctrl/⌘+C and Ctrl/⌘+V copy and paste a range, Delete clears it, the dot on its corner fills up, down, right and left. The same table is the planning table of Editing (Like the Resource plan) and the Workload scenes of Editors."]}),`
`,e.jsx(o.h2,{id:"a-popup-at-a-cell",children:"A popup at a cell"}),`
`,e.jsxs(o.p,{children:["A tip or a note tied to a cell (a mark in a header, a mark in a body cell) is the screen's: it stands where the screen puts it. ",e.jsx(o.code,{children:"useAnchoredVisibility(anchor, popup)"})," adds one thing: the popup is seen only while its anchor is whole in the part of the table that scrolls. The anchor goes under a frozen column, past the edge or under the header, even half way, and the popup is hidden; it is back with the anchor. Where a seen popup goes over a frozen column or the header, it is cut there, as the cells are. Draw the popup from the cell of the anchor (a child, or a portal of it): a cell that leaves the window of the virtual rows or columns takes its popup with it."]}),`
`,e.jsx(o.h2,{id:"the-scenes",children:"The scenes"}),`
`,e.jsx(c,{of:[l,a,i]}),`
`,e.jsx(o.h2,{id:"reference",children:"Reference"}),`
`,e.jsx(n,{headers:["Where","Name","What it does"],rows:[{id:"0",cells:{Where:"column",Name:"`columns`","What it does":"v9’s: the column is a group over these columns."}},{id:"1",cells:{Where:"table",Name:"`getHeaderGroups()`","What it does":"v9’s: the header by level; the table draws every level."}},{id:"2",cells:{Where:"state",Name:"`columnOrder`","What it does":"A screen that owns it decides the order of the columns, groups included."}},{id:"3",cells:{Where:"column",Name:"`meta.disableReorder`","What it does":"No grip on the cell of the group or the column."}},{id:"4",cells:{Where:"table",Name:"`onChainConflicts`","What it does":"`split-groups`: a member of a chain is in another group than its first column."}},{id:"5",cells:{Where:"slot",Name:"`headerGroupCell`","What it does":"Your own cell for a group (`HeaderGroupCell` is the piece)."}},{id:"6",cells:{Where:"hook",Name:"`useAnchoredVisibility(anchor, popup)`","What it does":"Hides the popup while its anchor is not whole between the frozen columns and under the header; cuts it where it goes over them."}}]})]})}function k(s={}){const{wrapper:o}={...t(),...s.components};return o?e.jsx(o,{...s,children:e.jsx(r,{...s})}):r(s)}export{k as default};
