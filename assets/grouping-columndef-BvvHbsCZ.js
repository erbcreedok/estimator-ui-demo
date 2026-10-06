import{j as e}from"./jsx-runtime-Cnbe3ryz.js";import{useMDXComponents as n}from"./index-cWuaGVWk.js";import{M as i,S as a,C as t}from"./index-BWck6PEV.js";import{C as l,O as c,H as m}from"./grouping-columns.stories-BrlAAKbX.js";import{P as d}from"./reference-kit-BHZHy2IZ.js";import{G as p}from"./grouping-reference-DtFoGe3u.js";import"./index-3dRrDZpt.js";import"./iframe-CxMQY-6g.js";import"./index-C0mjCMcL.js";import"./index-DKTdOcjh.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./grouping-lanes-kit-C7Fb2jxG.js";import"./scene-kit-BsKxVgS1.js";import"./utility-kit-CR3CIJ2n.js";import"./RowSelection-DM7ASqJ8.js";import"./places-Dp9r7e0L.js";import"./TableCore-Y75h2oha.js";import"./table-core-base-DFRq_Vzl.js";import"./styles-HzBmg0bt.js";import"./icons-849xEHsl.js";import"./menu-DvyBTqNz.js";import"./TableStatusBar-4NxO8OsQ.js";import"./status-bar-CYB7-jUm.js";import"./panel-controls-DNzRkyVB.js";import"./SortingPanel-CpobHppH.js";import"./TableToolbar-DTYEmPN-.js";import"./toolbar-C5VRlWnq.js";import"./pin-controls-NGLUwJXC.js";import"./employees-CL5oqWiT.js";import"./fixtures-P-DSdYmm.js";import"./issues-nMSoXFwf.js";import"./grouping-ways-code-DK-8tfEK.js";import"./grouping-ways-kit-BwgE6Z80.js";import"./index-iBx7lKYd.js";import"./grouping-play-CTN_XQGq.js";import"./rich-cells-BHJWCIPe.js";import"./RowActions-BSIeJGF9.js";import"./mini-kit-DReMkWYx.js";import"./grouping-scenes-more-WLL5eXgm.js";import"./play-kit-Bu4SXy9H.js";import"./grouping-ways-sort-play-BNOH-tMO.js";import"./story-kit-GExFh5PP.js";import"./types-reference-CMrm5GSt.js";function s(r){const o={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l,name:"ColumnDef"}),`
`,e.jsx(o.h1,{id:"grouping-in-a-columndef",children:"Grouping in a columnDef"}),`
`,e.jsxs(o.p,{children:["A column's own grouping lives in its ",e.jsx(o.code,{children:"columnDef"}),": TanStack's options next to it, TableCore's in ",e.jsx(o.code,{children:"meta"})," (write it with ",e.jsx(o.code,{children:"coreMeta({ … })"})," for types). Nothing is required: a plain ",e.jsx(o.code,{children:"{ accessorKey, header }"})," groups by its values, as is."]}),`
`,e.jsx(d,{rows:p}),`
`,e.jsx(o.h2,{id:"what-a-row-groups-by",children:"What a row groups by"}),`
`,e.jsxs(o.ol,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"resolvers.getGroupingValue({ table, column, row }, value)"})," on the table — for any column;"]}),`
`,e.jsxs(o.li,{children:["otherwise the column's ",e.jsx(o.code,{children:"getGroupingValue(original)"})," (TanStack);"]}),`
`,e.jsxs(o.li,{children:["otherwise its value. A way (",e.jsx(o.code,{children:"meta.groupings"}),") has its own ",e.jsx(o.code,{children:"getValue"}),"."]}),`
`]}),`
`,e.jsx(o.h2,{id:"where-the-grouped-column-goes",children:"Where the grouped column goes"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["As is: into its lane (",e.jsx(o.code,{children:"whenGrouped: 'move'"}),", the default), or it also stays (",e.jsx(o.code,{children:"'keep'"}),", on the table or ",e.jsx(o.code,{children:"meta.whenGrouped"}),")."]}),`
`,e.jsxs(o.li,{children:["By a way (",e.jsx(o.code,{children:"level__letter"}),"): the column always stays; the way is a lane of its own."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"meta.groupingOnly"}),": never drawn — only its lane."]}),`
`]}),`
`,e.jsx(o.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(a,{dark:!0,language:"tsx",code:`const columns: ColumnDef<Row>[] = [
  // As is: nothing to set.
  { accessorKey: 'team', header: 'Team' },
  // A value of its own: Load in bands.
  { accessorKey: 'load', header: 'Load', getGroupingValue: (e) => band(e.load) },
  // Two ways: As is, or by the first letter.
  {
    accessorKey: 'level',
    header: 'Level',
    meta: coreMeta({ groupings: [{ id: 'letter', label: 'First letter', getValue: (e) => e.level[0] }] }),
  },
  // Only its ways, never the name as is; it never leaves the table.
  {
    accessorKey: 'name',
    header: 'Person',
    meta: coreMeta({ groupAsIs: false, groupings: [{ id: 'letter', label: 'First letter', getValue: (e) => e.name[0] }] }),
  },
  // Grouped, it stays in the table too.
  { accessorKey: 'country', header: 'Country', meta: coreMeta({ whenGrouped: 'keep' }) },
  // Only groups: offered by the screen's own button, nowhere else.
  { id: 'issues', accessorFn: issuesOf, header: 'Issues', meta: coreMeta({ groupingOnly: true, hideFrom: ['toolbar', 'statusBar', 'columnMenu'] }) },
  // The user cannot group by it.
  { accessorKey: 'rate', header: 'Rate', enableGrouping: false },
]`}),`
`,e.jsx(o.p,{children:"Every way, live, with its controls:"}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(o.p,{children:"The screen's own grouping — a column the user never sees grouped:"}),`
`,e.jsx(t,{of:m})]})}function te(r={}){const{wrapper:o}={...n(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(s,{...r})}):s(r)}export{te as default};
