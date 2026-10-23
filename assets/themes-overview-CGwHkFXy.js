import{j as e,T as r}from"./products-CTiDOXRn.js";import{useMDXComponents as s}from"./index-DTba5wnT.js";import{M as a}from"./index-DCltYdiS.js";import{S as l}from"./themes.stories-DOH6oP-q.js";import{S as i}from"./scene-list-DGvAMnq_.js";import"./iframe-CiaHYEQr.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function n(o){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Tables/Table Core/Features/Drafts/Themes/Overview"}),`
`,e.jsx(t.h1,{id:"themes",children:"Themes"}),`
`,e.jsxs(t.p,{children:["One table, several looks. ",e.jsx(t.code,{children:"theme"})," is a plain object of tokens — colours, fonts, header style, zebra rows, a frame, the header height; any token left out keeps the default (Resource Plan) look. Menus, panels and tooltips of the table follow the theme too. The theme is ours: v9 has no look."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const theme: TableCoreTheme = { headerBg: '#EBEDF5', headerHeight: 34, rowHover: '#FAFAFC' }

<TableCore features={features} columns={columns} data={rows} getRowId={…} theme={theme} rowHeight={42} />
`})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Default"})," — the Resource Plan look."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Picker in a side panel"})," — a calm table in a drawer, one row picked with a radio."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"PnL (scenario results)"})," — quarters that open into months (each a column chain), a grey year total, a wide first column, bold expandable lines, coloured margin and seniority."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Internal PnL"})," — grey compact header, months as columns, a bar in each number cell, coloured expand arrows, grey child lines, a divider before January, the dark margin line."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Neon"})," — deliberately nothing like the default: dark, neon accent, monospace numbers, rounded frame."]}),`
`]}),`
`,e.jsx(i,{of:[l]}),`
`,e.jsx(t.h2,{id:"reference",children:"Reference"}),`
`,e.jsx(r,{headers:["Where","Name","What it does"],rows:[{id:"0",cells:{Where:"table",Name:"`theme`","What it does":"A plain object of look tokens; any token left out keeps the default."}},{id:"1",cells:{Where:"table",Name:"`rowHeight`","What it does":"Row height in px."}},{id:"2",cells:{Where:"table",Name:"`sx`, `className`","What it does":"MUI `sx` and a class on the table’s root."}},{id:"3",cells:{Where:"tokens",Name:"`TableCoreTheme`","What it does":"Colours, fonts, header style, zebra rows, frame, header height: the list is on Types › UI."}},{id:"4",cells:{Where:"popups",Name:"menus, panels, tooltips","What it does":"Follow the theme of the table."}}]})]})}function j(o={}){const{wrapper:t}={...s(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{j as default};
