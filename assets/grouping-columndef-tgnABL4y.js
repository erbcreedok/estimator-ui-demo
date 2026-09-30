import{j as e}from"./jsx-runtime-CEpjeC4Q.js";import{useMDXComponents as t}from"./index-JWoZMxqf.js";import{M as i,S as a,C as s}from"./index-DnbyNrd_.js";import{C as l,O as c,H as d}from"./grouping-columns.stories-DL5B-fyG.js";import{P as m}from"./reference-kit-BBQ-bL5f.js";import{G as u}from"./grouping-reference-DunTzLA2.js";import"./index-BjhrbhTf.js";import"./index-D841zMOb.js";import"./iframe-BXLXV2g8.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./grouping-lanes-kit-CQAIeY2J.js";import"./scene-kit-DXifMYYP.js";import"./styles-DXLXEQ3H.js";import"./utility-kit-B_r7tOEL.js";import"./RowSelection-BawG8FvK.js";import"./TableCore-kOYdxPhk.js";import"./TableStatusBar-BHCIeSi2.js";import"./panels-D6DlFR9J.js";import"./TableToolbar-C0bTLKMD.js";import"./createSvgIcon-s1BrOgA2.js";import"./employees-DtM5_3-O.js";import"./fixtures-CCjjPTo2.js";import"./issues-DfzTsQBU.js";import"./grouping-ways-code-rI-4u1W6.js";import"./grouping-ways-kit-BW-cfhgs.js";import"./index-DLqD3z3M.js";import"./grouping-play-CrknfM6n.js";import"./rich-cells-C4zdx3Ia.js";import"./RowActions-CWt-61bw.js";import"./mini-kit-1oofpOGO.js";import"./grouping-scenes-more-B3c05JTQ.js";import"./play-kit-Bu4SXy9H.js";import"./grouping-ways-sort-play-C961SKxJ.js";import"./types-reference-C4qaG4BC.js";function n(r){const o={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l,name:"ColumnDef"}),`
`,e.jsx(o.h1,{id:"grouping-in-a-columndef",children:"Grouping in a columnDef"}),`
`,e.jsxs(o.p,{children:["A column's own grouping lives in its ",e.jsx(o.code,{children:"columnDef"}),": TanStack's options next to it, TableCore's in ",e.jsx(o.code,{children:"meta"})," (write it with ",e.jsx(o.code,{children:"coreMeta({ … })"})," for types). Nothing is required: a plain ",e.jsx(o.code,{children:"{ accessorKey, header }"})," groups by its values, as is."]}),`
`,e.jsx(m,{rows:u}),`
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
`,e.jsx(s,{of:c}),`
`,e.jsx(o.p,{children:"The screen's own grouping — a column the user never sees grouped:"}),`
`,e.jsx(s,{of:d})]})}function z(r={}){const{wrapper:o}={...t(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(n,{...r})}):n(r)}export{z as default};
