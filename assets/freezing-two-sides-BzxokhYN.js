import{j as e}from"./jsx-runtime-Cnbe3ryz.js";import{useMDXComponents as r}from"./index-cWuaGVWk.js";import{M as i,S as a,C as o}from"./index-BWck6PEV.js";import{S as m,L as h,R as l,P as c,C as d}from"./freezing-two-sides.stories-DhlLu9gV.js";import{P as p,T as f}from"./reference-kit-BHZHy2IZ.js";import{S as u,a as x,b as g}from"./freezing-reference-CeeCkCJ0.js";import"./index-3dRrDZpt.js";import"./iframe-CxMQY-6g.js";import"./index-C0mjCMcL.js";import"./index-DKTdOcjh.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./freezing-hints-ktsXkKrU.js";import"./feature-hints-BLpBNgTy.js";import"./scene-kit-BsKxVgS1.js";import"./freezing-page-BBwiIMYl.js";import"./feature-code-Dlz2p9Ie.js";import"./TableCore-Y75h2oha.js";import"./table-core-base-DFRq_Vzl.js";import"./places-Dp9r7e0L.js";import"./styles-HzBmg0bt.js";import"./icons-849xEHsl.js";import"./menu-DvyBTqNz.js";import"./TableStatusBar-4NxO8OsQ.js";import"./status-bar-CYB7-jUm.js";import"./panel-controls-DNzRkyVB.js";import"./SortingPanel-CpobHppH.js";import"./TableToolbar-DTYEmPN-.js";import"./toolbar-C5VRlWnq.js";import"./pin-controls-NGLUwJXC.js";import"./employees-CL5oqWiT.js";import"./fixtures-P-DSdYmm.js";import"./freezing-play-mBtlZnru.js";import"./index-iBx7lKYd.js";import"./grouping-play-CTN_XQGq.js";import"./play-kit-Bu4SXy9H.js";import"./types-reference-CMrm5GSt.js";function s(n){const t={code:"code",em:"em",h1:"h1",h2:"h2",p:"p",strong:"strong",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:m,name:"Overview"}),`
`,e.jsx(t.h1,{id:"freezing-at-both-sides",children:"Freezing at both sides"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"state.columnPinning.right"})," freezes columns at the right edge whoever sets it — the table draws the right zone, its edge and its shadow on its own. This page is about what the ",e.jsx(t.strong,{children:"default UI"})," offers the user: the ",e.jsx(t.em,{children:"Freeze"})," of the column menu and of the Columns panel."]}),`
`,e.jsxs(t.p,{children:["By default it offers the left side only: one ",e.jsx(t.em,{children:"Freeze column"}),". Two props and one column option change that."]}),`
`,e.jsx(p,{rows:u}),`
`,e.jsx(t.h2,{id:"what-the-user-sees",children:"What the user sees"}),`
`,e.jsx(f,{headers:g,rows:x}),`
`,e.jsxs(t.p,{children:["A frozen column keeps the choice: in the menu ",e.jsx(t.em,{children:"Left"})," and ",e.jsx(t.em,{children:"Right"})," with its side ticked (the other one moves it across without unfreezing) and ",e.jsx(t.em,{children:"Unfreeze column"}),"; in the panel the lit arrow (press it to unfreeze) and the other one on hover. A chain freezes whole, at the side picked."]}),`
`,e.jsxs(t.p,{children:["These are the default answer of ",e.jsx(t.code,{children:"column.getPinActions(place)"}),"; a team's own rules (a flat list, a fixed set, at most N) are a ",e.jsx(t.code,{children:"getPinActions"})," resolver over it — ",e.jsx(t.strong,{children:"Resolvers"}),"."]}),`
`,e.jsx(t.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(a,{dark:!0,language:"tsx",code:`// Both sides in the menu and in the panel.
<TableCore columns={columns} enableRightPinning />

// A table that freezes only at the right (an actions column, Workload).
<TableCore columns={columns} enableLeftPinning={false} enableRightPinning />

// One side per column, the table offers both.
const columns: ColumnDef<Row>[] = [
  { accessorKey: 'team', header: 'Team', meta: coreMeta({ pinOnly: 'left' }) },
  { accessorKey: 'end', header: 'End', meta: coreMeta({ pinOnly: 'right' }) },
  { accessorKey: 'email', header: 'Email', enablePinning: false },
]`}),`
`,e.jsx(t.h2,{id:"scenes",children:"Scenes"}),`
`,e.jsx(o,{of:h}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(o,{of:d})]})}function te(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{te as default};
