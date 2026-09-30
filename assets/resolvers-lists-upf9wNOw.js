import{j as e}from"./jsx-runtime-CEpjeC4Q.js";import{useMDXComponents as a}from"./index-JWoZMxqf.js";import{M as i,C as s}from"./index-DnbyNrd_.js";import{L as l,P as c,F as h,S as d,O as p,a as m}from"./resolvers-lists.stories-BHlR7_bh.js";import{P as t}from"./reference-kit-BBQ-bL5f.js";import{G as x,P as j}from"./resolvers-reference-WK435yLa.js";import"./index-BjhrbhTf.js";import"./index-D841zMOb.js";import"./iframe-BXLXV2g8.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./styles-DXLXEQ3H.js";import"./index-DLqD3z3M.js";import"./feature-hints-CH2Kq8R8.js";import"./scene-kit-DXifMYYP.js";import"./grouping-play-CrknfM6n.js";import"./play-kit-Bu4SXy9H.js";import"./mini-kit-1oofpOGO.js";import"./TableCore-kOYdxPhk.js";import"./TableStatusBar-BHCIeSi2.js";import"./panels-D6DlFR9J.js";import"./TableToolbar-C0bTLKMD.js";import"./createSvgIcon-s1BrOgA2.js";import"./employees-DtM5_3-O.js";import"./fixtures-CCjjPTo2.js";import"./types-reference-C4qaG4BC.js";function n(o){const r={code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l,name:"How lists work"}),`
`,e.jsx(r.h1,{id:"what-each-place-lists",children:"What each place lists"}),`
`,e.jsxs(r.p,{children:["A place is where a column shows in the table's UI (",e.jsx(r.code,{children:"TablePlace"}),"): a toolbar panel, a status bar chip, the header, a column menu list. What a place lists is asked in a chain: ",e.jsx(r.strong,{children:"the place's own resolver → the general resolver → the default"})," (",e.jsx(r.code,{children:"meta.hideFrom"}),", ",e.jsx(r.code,{children:"placeOrder"}),", the table's order)."]}),`
`,e.jsx(r.h2,{id:"the-general-resolvers",children:"The general resolvers"}),`
`,e.jsx(r.p,{children:"One per kind of list, for every place; the place is in the arguments."}),`
`,e.jsx(t,{rows:x}),`
`,e.jsx(r.h2,{id:"the-resolvers-of-one-place",children:"The resolvers of one place"}),`
`,e.jsxs(r.p,{children:["Each gets the general answer as its ",e.jsx(r.code,{children:"defaults"}),"."]}),`
`,e.jsx(t,{rows:j,type:"Place"}),`
`,e.jsx(r.h2,{id:"placeorder--the-default-order",children:"placeOrder — the default order"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"placeOrder={{ toolbar: { first: ['person'], last: ['contract', 'country'] } }}"}),": who comes first and who last in a place's list of columns; the rest in the table's order. Only the ones you name — an id the place does not have is skipped, a new column goes to the middle. A parent place covers its children (",e.jsx(r.code,{children:"toolbar"})," = every panel); a place of its own overrides it. A way to group (",e.jsx(r.code,{children:"level__letter"}),") goes with its column. It is data: it may come from a server and change at any time. In your own resolver the same rule is ",e.jsx(r.code,{children:"orderColumns(columns, { first, last })"}),"."]}),`
`,e.jsxs(r.p,{children:["The applied sorts and grouping keep their priority order: ",e.jsx(r.code,{children:"placeOrder"})," does not touch them."]}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(r.h2,{id:"one-resolver-for-every-place",children:"One resolver for every place"}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(r.h2,{id:"one-place-on-its-own",children:"One place on its own"}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(r.h2,{id:"a-list-decides-what-the-actions-touch",children:"A list decides what the actions touch"}),`
`,e.jsx(s,{of:m})]})}function H(o={}){const{wrapper:r}={...a(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(n,{...o})}):n(o)}export{H as default};
