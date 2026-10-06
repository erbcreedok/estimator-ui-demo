import{j as e}from"./jsx-runtime-Cnbe3ryz.js";import{useMDXComponents as i}from"./index-cWuaGVWk.js";import{M as a,C as t}from"./index-BWck6PEV.js";import{L as l,P as c,F as h,S as d,O as p,a as m}from"./resolvers-lists.stories-BIyP0YWm.js";import{P as s}from"./reference-kit-BHZHy2IZ.js";import{G as x,P as j}from"./resolvers-reference-qV7ipcPT.js";import"./index-3dRrDZpt.js";import"./iframe-CxMQY-6g.js";import"./index-C0mjCMcL.js";import"./index-DKTdOcjh.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./index-iBx7lKYd.js";import"./feature-hints-BLpBNgTy.js";import"./scene-kit-BsKxVgS1.js";import"./grouping-play-CTN_XQGq.js";import"./play-kit-Bu4SXy9H.js";import"./places-Dp9r7e0L.js";import"./mini-kit-DReMkWYx.js";import"./TableCore-Y75h2oha.js";import"./table-core-base-DFRq_Vzl.js";import"./styles-HzBmg0bt.js";import"./icons-849xEHsl.js";import"./menu-DvyBTqNz.js";import"./TableStatusBar-4NxO8OsQ.js";import"./status-bar-CYB7-jUm.js";import"./panel-controls-DNzRkyVB.js";import"./SortingPanel-CpobHppH.js";import"./TableToolbar-DTYEmPN-.js";import"./toolbar-C5VRlWnq.js";import"./pin-controls-NGLUwJXC.js";import"./employees-CL5oqWiT.js";import"./fixtures-P-DSdYmm.js";import"./types-reference-CMrm5GSt.js";function n(o){const r={code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:l,name:"How lists work"}),`
`,e.jsx(r.h1,{id:"what-each-place-lists",children:"What each place lists"}),`
`,e.jsxs(r.p,{children:["A place is where a column shows in the table's UI (",e.jsx(r.code,{children:"TablePlace"}),"): a toolbar panel, a status bar chip, the header, a column menu list. What a place lists is asked in a chain: ",e.jsx(r.strong,{children:"the place's own resolver → the general resolver → the default"})," (",e.jsx(r.code,{children:"meta.hideFrom"}),", ",e.jsx(r.code,{children:"placeOrder"}),", the table's order)."]}),`
`,e.jsx(r.h2,{id:"the-general-resolvers",children:"The general resolvers"}),`
`,e.jsx(r.p,{children:"One per kind of list, for every place; the place is in the arguments."}),`
`,e.jsx(s,{rows:x}),`
`,e.jsx(r.h2,{id:"the-resolvers-of-one-place",children:"The resolvers of one place"}),`
`,e.jsxs(r.p,{children:["Each gets the general answer as its ",e.jsx(r.code,{children:"defaults"}),"."]}),`
`,e.jsx(s,{rows:j,type:"Place"}),`
`,e.jsx(r.h2,{id:"placeorder--the-default-order",children:"placeOrder — the default order"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"placeOrder={{ toolbar: { first: ['person'], last: ['contract', 'country'] } }}"}),": who comes first and who last in a place's list of columns; the rest in the table's order. Only the ones you name — an id the place does not have is skipped, a new column goes to the middle. A parent place covers its children (",e.jsx(r.code,{children:"toolbar"})," = every panel); a place of its own overrides it. A way to group (",e.jsx(r.code,{children:"level__letter"}),") goes with its column. It is data: it may come from a server and change at any time. In your own resolver the same rule is ",e.jsx(r.code,{children:"orderColumns(columns, { first, last })"}),"."]}),`
`,e.jsxs(r.p,{children:["The applied sorts and grouping keep their priority order: ",e.jsx(r.code,{children:"placeOrder"})," does not touch them."]}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(r.h2,{id:"one-resolver-for-every-place",children:"One resolver for every place"}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(t,{of:d}),`
`,e.jsx(r.h2,{id:"one-place-on-its-own",children:"One place on its own"}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(r.h2,{id:"a-list-decides-what-the-actions-touch",children:"A list decides what the actions touch"}),`
`,e.jsx(t,{of:m})]})}function Q(o={}){const{wrapper:r}={...i(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(n,{...o})}):n(o)}export{Q as default};
