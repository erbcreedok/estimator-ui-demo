import{j as e,T as l}from"./products-CTiDOXRn.js";import{useMDXComponents as o}from"./index-DTba5wnT.js";import{M as r}from"./index-DCltYdiS.js";import{S as a}from"./custom-cells.stories-DUm9AHNr.js";import{S as c}from"./scene-list-DGvAMnq_.js";import"./iframe-CiaHYEQr.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function s(n){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Tables/Table Core/Features/Drafts/Custom cells/Overview"}),`
`,e.jsx(t.h1,{id:"custom-cells",children:"Custom cells"}),`
`,e.jsxs(t.p,{children:["A column’s ",e.jsx(t.code,{children:"cell"})," is an ordinary React component. It gets the value, the row and the table, and draws what the screen needs: a person with an email, a badge, money, a load bar, a date. It is v9’s ",e.jsx(t.code,{children:"cell"}),"; the table adds nothing to it."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`helper.accessor((e) => STATUS[e.state], {
  id: 'status',
  header: 'Status',
  cell: ({ getValue }) => <Badge>{getValue()}</Badge>,
})
`})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Value and look."})," Sorting, grouping and copy use the column’s value (",e.jsx(t.code,{children:"accessorKey"}),", ",e.jsx(t.code,{children:"accessorFn"}),"); the cell only decides how it looks."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Row actions anywhere."})," ",e.jsx(t.code,{children:"RowActionsButton"})," (or ",e.jsx(t.code,{children:"ActionsMenu"}),", not tied to a row) works in any cell or outside the table; ",e.jsx(t.code,{children:'reveal="hover"'})," shows it on row hover."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Keyboard"})," still works: cells stay focusable and navigable whatever they render."]}),`
`,e.jsxs(t.li,{children:["Taller content: raise ",e.jsx(t.code,{children:"rowHeight"}),"."]}),`
`]}),`
`,e.jsx(c,{of:[a]}),`
`,e.jsx(t.h2,{id:"reference",children:"Reference"}),`
`,e.jsx(l,{headers:["Where","Name","What it does"],rows:[{id:"0",cells:{Where:"column",Name:"`cell`","What it does":"v9’s: a React component of the cell context (`getValue`, `row`, `table`)."}},{id:"1",cells:{Where:"column",Name:"`accessorKey`, `accessorFn`","What it does":"What sorting, grouping and copy use: the value, not the look."}},{id:"2",cells:{Where:"column",Name:"`meta.align`","What it does":"Where the content stands: left, center or right."}},{id:"3",cells:{Where:"table",Name:"`rowHeight`","What it does":"Row height in px; raise it for taller cells."}},{id:"4",cells:{Where:"cell",Name:"`<RowActionsButton />`","What it does":"Row actions inside a cell."}}]})]})}function p(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{p as default};
