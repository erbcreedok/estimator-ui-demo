import{j as e}from"./jsx-runtime-Cnbe3ryz.js";import{useMDXComponents as t}from"./index-cWuaGVWk.js";import{M as i,S as a,C as s}from"./index-BWck6PEV.js";import{C as m,a as l}from"./freezing-columns.stories-DpaCSe4Z.js";import{P as c}from"./reference-kit-BHZHy2IZ.js";import{C as h}from"./freezing-reference-CeeCkCJ0.js";import"./index-3dRrDZpt.js";import"./iframe-CxMQY-6g.js";import"./index-C0mjCMcL.js";import"./index-DKTdOcjh.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./freezing-hints-ktsXkKrU.js";import"./feature-hints-BLpBNgTy.js";import"./scene-kit-BsKxVgS1.js";import"./freezing-page-BBwiIMYl.js";import"./feature-code-Dlz2p9Ie.js";import"./TableCore-Y75h2oha.js";import"./table-core-base-DFRq_Vzl.js";import"./places-Dp9r7e0L.js";import"./styles-HzBmg0bt.js";import"./icons-849xEHsl.js";import"./menu-DvyBTqNz.js";import"./TableStatusBar-4NxO8OsQ.js";import"./status-bar-CYB7-jUm.js";import"./panel-controls-DNzRkyVB.js";import"./SortingPanel-CpobHppH.js";import"./TableToolbar-DTYEmPN-.js";import"./toolbar-C5VRlWnq.js";import"./pin-controls-NGLUwJXC.js";import"./employees-CL5oqWiT.js";import"./fixtures-P-DSdYmm.js";import"./freezing-play-mBtlZnru.js";import"./index-iBx7lKYd.js";import"./grouping-play-CTN_XQGq.js";import"./play-kit-Bu4SXy9H.js";import"./types-reference-CMrm5GSt.js";function r(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:m,name:"ColumnDef"}),`
`,e.jsx(n.h1,{id:"freezing-in-a-columndef",children:"Freezing in a columnDef"}),`
`,e.jsxs(n.p,{children:["Whether the user may freeze a column, and drag it, lives in its ",e.jsx(n.code,{children:"columnDef"}),": TanStack's ",e.jsx(n.code,{children:"enablePinning"}),", TableCore's ",e.jsx(n.code,{children:"meta"})," (write it with ",e.jsx(n.code,{children:"coreMeta({ … })"})," for types). Nothing is required: a plain ",e.jsx(n.code,{children:"{ accessorKey, header }"})," can be frozen and dragged."]}),`
`,e.jsx(c,{rows:h}),`
`,e.jsxs(n.p,{children:["The switches limit the user only. What is frozen is always ",e.jsx(n.code,{children:"state.columnPinning"}),": a column in ",e.jsx(n.code,{children:"left"})," is frozen whatever its ",e.jsx(n.code,{children:"enablePinning"}),"."]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(a,{dark:!0,language:"tsx",code:`const columns: ColumnDef<Row>[] = [
  // Always frozen and always first: in state.columnPinning.left, and the user
  // can neither unfreeze nor drag it.
  { accessorKey: 'name', header: 'Name', enablePinning: false, meta: coreMeta({ disableReorder: true }) },
  // Frozen by the user only at the right (a table with enableRightPinning).
  { accessorKey: 'workload', header: 'Workload', meta: coreMeta({ pinOnly: 'right' }) },
  // Never frozen by the user: no Freeze in its menu or in the Columns panel.
  { accessorKey: 'email', header: 'Email', enablePinning: false },
  // Not in the Columns panel (so not frozen from there); its menu still freezes.
  { accessorKey: 'city', header: 'City', meta: coreMeta({ hideFrom: ['toolbar.columns'] }) },
]

<TableCore columns={columns} state={{ columnPinning: { left: ['name'], right: [] } }} />`}),`
`,e.jsx(n.p,{children:"Every one of these, live, with its controls:"}),`
`,e.jsx(s,{of:l})]})}function Q(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{Q as default};
