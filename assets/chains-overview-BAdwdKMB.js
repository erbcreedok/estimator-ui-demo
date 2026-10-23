import{j as e,T as t}from"./products-CTiDOXRn.js";import{useMDXComponents as i}from"./index-DTba5wnT.js";import{M as a}from"./index-DCltYdiS.js";import{B as l}from"./basics.stories-C4ZJkB2J.js";import{C as h}from"./column-setup.stories-Bsr2SiTs.js";import{P as r}from"./places.stories-DvR_w1OT.js";import{S as c}from"./scene-list-DGvAMnq_.js";import"./iframe-CiaHYEQr.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./scene-BrjB9l3a.js";import"./rows-l3LcChQt.js";import"./checks-7aYUsQNN.js";function s(o){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Tables/Table Core/Features/Column chains/Overview"}),`
`,e.jsx(n.h1,{id:"column-chains",children:"Column chains"}),`
`,e.jsxs(n.p,{children:["Related columns shown as one column until the user opens them — Country, Tier and City as ",e.jsx(n.em,{children:"Location"})," — as in the legacy Resource Plan."]}),`
`,e.jsx(n.h2,{id:"turn-it-on",children:"Turn it on"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const features = tableFeatures({
  columnOrderingFeature,          // v9: the order the chain moves in
  columnVisibilityFeature,        // v9: what a chain hides and shows
  columnChainsFeature,            // ours, after the two it settles: columns that fold into one
})

<TableCore
  features={features} columns={columns} data={rows} getRowId={…}
  chains={[
    { id: 'location', label: 'Location', columns: ['country', 'tier', { id: 'city', optional: true }] },
    { id: 'contact', label: 'Contact', columns: ['email', 'phone'] },
  ]}
/>
`})}),`
`,e.jsxs(n.p,{children:["v9 has no word for a chain, so the feature is ours, built the v9 way (",e.jsx(n.code,{children:"declare module"}),", state slices, table and column methods). It plugs into v9’s own: the order of the columns is the chains’ layout (members side by side, in chain order), ",e.jsx(n.code,{children:"column.getIsVisible()"})," also hides the members of a folded chain (the user’s own ",e.jsx(n.code,{children:"columnVisibility"})," stays clean), and freezing one member freezes the whole chain (",e.jsx(n.code,{children:"pinColumn"}),"). A folded chain shows its first member (",e.jsx(n.code,{children:"primary: 'last'"}),": the last) with a toggle; a drag inside an open chain reorders it; an optional member leaves by a drag out and joins back by a drag in; a required member cannot leave and no other column can land inside — the header drag and the Columns panel say what a drop does. A state the chains disagree with is settled by documented rules, and ",e.jsx(n.code,{children:"table.getColumnChainLayout().conflicts"})," says what changed."]}),`
`,e.jsx(n.h2,{id:"what-you-can-set",children:"What you can set"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"A chain"})," — ",e.jsx(n.code,{children:"id"}),", ",e.jsx(n.code,{children:"label"}),", ",e.jsx(n.code,{children:"columns"})," (an id, or ",e.jsx(n.code,{children:"{ id, optional: true }"}),"), ",e.jsx(n.code,{children:"primary"})," (",e.jsx(n.code,{children:"'first'"})," or ",e.jsx(n.code,{children:"'last'"}),"), ",e.jsx(n.code,{children:"toggle"})," (your own toggle on the shown member)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"The table"})," — ",e.jsx(n.code,{children:"chains"}),", ",e.jsx(n.code,{children:"enableColumnChains"})," (switch it off without removing it)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"The state"})," — ",e.jsx(n.code,{children:"columnChainExpanded"})," (",e.jsx(n.code,{children:"{ [chainId]: true }"}),") with ",e.jsx(n.code,{children:"onColumnChainExpandedChange"}),", ",e.jsx(n.code,{children:"columnChainMembers"})," (",e.jsx(n.code,{children:"{ [chainId]: ids }"}),") with ",e.jsx(n.code,{children:"onColumnChainMembersChange"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"the-scenes",children:"The scenes"}),`
`,e.jsx(c,{of:[l,h,r]}),`
`,e.jsx(n.h2,{id:"reference",children:"Reference"}),`
`,e.jsx(t,{headers:["Where","Name","What it does"],rows:[{id:"0",cells:{Where:"table",Name:"`chains`, `enableColumnChains`","What it does":"The chains; `false` switches the feature off."}},{id:"1",cells:{Where:"state",Name:"`columnChainExpanded`, `columnChainMembers`","What it does":"Which chains are open, who is in each."}},{id:"2",cells:{Where:"table",Name:"`getColumnChains()`, `getColumnChainLayout()`","What it does":"The chains as they are now; the settled layout and its conflicts."}},{id:"3",cells:{Where:"column",Name:"`getColumnChain()`, `toggleColumnChainExpanded()`","What it does":"The chain of a column; open / fold it."}},{id:"4",cells:{Where:"column",Name:"`getIsColumnChainPrimary()`, `getColumnChainHiddenCount()`","What it does":"Is it the member shown folded; how many members the fold hides."}},{id:"5",cells:{Where:"helper",Name:"`pinColumn(column, position)`","What it does":"Freezes a column, a chain whole."}}]})]})}function T(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{T as default};
