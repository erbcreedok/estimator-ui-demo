import{j as e}from"./jsx-runtime-CEpjeC4Q.js";import{useMDXComponents as n}from"./index-JWoZMxqf.js";import{M as i,S as a,C as r}from"./index-DnbyNrd_.js";import{C as c,a as d,H as m}from"./sorting-columns.stories-g2qaHqiJ.js";import{P as l}from"./reference-kit-BBQ-bL5f.js";import{C as h}from"./sorting-reference-Da51x_9U.js";import"./index-BjhrbhTf.js";import"./index-D841zMOb.js";import"./iframe-BXLXV2g8.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./sorting-page-BEurg12m.js";import"./styles-DXLXEQ3H.js";import"./feature-code-DArJNGHI.js";import"./TableCore-kOYdxPhk.js";import"./TableStatusBar-BHCIeSi2.js";import"./panels-D6DlFR9J.js";import"./TableToolbar-C0bTLKMD.js";import"./createSvgIcon-s1BrOgA2.js";import"./employees-DtM5_3-O.js";import"./fixtures-CCjjPTo2.js";import"./scene-kit-DXifMYYP.js";import"./feature-hints-CH2Kq8R8.js";import"./sorting-play-BR_ct78p.js";import"./index-DLqD3z3M.js";import"./play-kit-Bu4SXy9H.js";import"./types-reference-C4qaG4BC.js";function s(o){const t={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c,name:"ColumnDef"}),`
`,e.jsx(t.h1,{id:"sorting-in-a-columndef",children:"Sorting in a columnDef"}),`
`,e.jsxs(t.p,{children:["A column's own sorting lives in its ",e.jsx(t.code,{children:"columnDef"}),": TanStack's options next to it, TableCore's in ",e.jsx(t.code,{children:"meta"})," (write it with ",e.jsx(t.code,{children:"coreMeta({ … })"})," for types). Nothing is required: a plain ",e.jsx(t.code,{children:"{ accessorKey, header }"})," sorts as its values do."]}),`
`,e.jsx(l,{rows:h}),`
`,e.jsx(t.h2,{id:"how-the-kind-is-picked",children:"How the kind is picked"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"meta.sort.type"})," or ",e.jsx(t.code,{children:"meta.sort.order"}),", if set;"]}),`
`,e.jsxs(t.li,{children:["otherwise the column's ",e.jsx(t.code,{children:"sortingFn"}),": ",e.jsx(t.code,{children:"text"}),", ",e.jsx(t.code,{children:"alphanumeric"})," → text; ",e.jsx(t.code,{children:"basic"})," → number; ",e.jsx(t.code,{children:"datetime"})," → date;"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"sortingFn: 'auto'"})," (the default) looks at the first row's value."]}),`
`]}),`
`,e.jsxs(t.p,{children:["A date kept as an ISO string sorts right as text, but reads as text in the menu: say ",e.jsx(t.code,{children:"meta.sort.type: 'date'"}),"."]}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(a,{dark:!0,language:"tsx",code:`const columns: ColumnDef<Row>[] = [
  // Text: nothing to set.
  { accessorKey: 'name', header: 'Name' },
  // A date as an ISO string: Oldest first / Newest first.
  { accessorKey: 'start', header: 'Start', meta: coreMeta({ sort: { type: 'date' } }) },
  // Shown one way, sorted another: its own compare.
  {
    accessorKey: 'period',
    header: 'Period', // "Q2 2026"
    sortingFn: (a, b) => a.original.start.localeCompare(b.original.start),
    meta: coreMeta({ sort: { type: 'date' } }),
  },
  // A fixed order: High first / Low first.
  { accessorKey: 'priority', header: 'Priority', meta: coreMeta({ sort: { order: ['High', 'Medium', 'Low'] } }) },
  // Locked: the user cannot sort by it.
  { accessorKey: 'team', header: 'Team', enableSorting: false },
  // Sorts from its menu, left out of the panel and the chip.
  { accessorKey: 'country', header: 'Country', meta: coreMeta({ hideFrom: ['toolbar.sorting', 'statusBar.sorting'] }) },
]`}),`
`,e.jsx(t.p,{children:"Every one of these, live, with its controls:"}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(t.p,{children:"The screen's own sort — a column the user never sees sorted:"}),`
`,e.jsx(r,{of:m})]})}function _(o={}){const{wrapper:t}={...n(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{_ as default};
