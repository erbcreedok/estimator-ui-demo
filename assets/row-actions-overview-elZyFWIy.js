import{j as e,T as i}from"./products-CTiDOXRn.js";import{useMDXComponents as s}from"./index-DTba5wnT.js";import{M as r}from"./index-DCltYdiS.js";import{S as a}from"./row-actions.stories-BRrbA6m5.js";import{S as c}from"./scene-list-DGvAMnq_.js";import"./iframe-CiaHYEQr.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function t(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Tables/Table Core/Features/Drafts/Row actions/Overview"}),`
`,e.jsx(n.h1,{id:"row-actions",children:"Row actions"}),`
`,e.jsx(n.p,{children:"A narrow ⋮ column: each row opens a menu of the actions the screen gives for it. v9 has nothing of the kind, so it is ours."}),`
`,e.jsx(n.h2,{id:"turn-it-on",children:"Turn it on"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const features = tableFeatures({
  columnSizingFeature,    // v9: the width of the actions column
  columnVisibilityFeature, // v9: the column is a column like any other
})
// createRowActionsColumn is ours: the ⋮ column and its menu
const helper = createColumnHelper<typeof features, Employee>()

const columns = helper.columns([
  helper.accessor('name', { header: 'Name' }),
  createRowActionsColumn(helper, (row) => [
    { id: 'duplicate', label: 'Duplicate', onClick: () => duplicate(row.original) },
    { id: 'delete', label: 'Delete', disabledReason: 'Blocked rows cannot be deleted', onClick: … },
  ]),
])
`})}),`
`,e.jsxs(n.p,{children:["The column is 48 px, it cannot be sorted, grouped, reordered, hidden or stretched, and the Columns panel does not offer it (",e.jsx(n.code,{children:"meta.utility"}),"). The menu belongs to its row. An action the screen does not return is not in the menu; ",e.jsx(n.code,{children:"disabledReason"})," keeps it visible but off and says why. ",e.jsx(n.code,{children:"readOnly"})," is not an action policy: the screen decides what its actions do in a read-only table."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"RowActionsButton"})," and ",e.jsx(n.code,{children:"ActionsMenu"})," do the same inside any cell or outside the table."]}),`
`,e.jsx(c,{of:[a]}),`
`,e.jsx(n.h2,{id:"reference",children:"Reference"}),`
`,e.jsx(i,{headers:["Where","Name","What it does"],rows:[{id:"0",cells:{Where:"column",Name:"`createRowActionsColumn(helper, getActions, { id, icon })`","What it does":"A fixed 48 px ⋮ column; `getActions(row)` is the screen’s list."}},{id:"1",cells:{Where:"cell",Name:"`<RowActionsButton row getActions reveal icon />`","What it does":'The button in any cell; `reveal="hover"` shows it on row hover.'}},{id:"2",cells:{Where:"anywhere",Name:"`<ActionsMenu getActions label icon />`","What it does":"The same menu, not tied to a row."}},{id:"3",cells:{Where:"action",Name:"`{ id, label, icon, onClick, disabledReason }`","What it does":"`disabledReason` keeps the action in the menu, off, and says why."}},{id:"4",cells:{Where:"slot",Name:"`rowMenuButton`","What it does":"The ⋮ button itself."}},{id:"5",cells:{Where:"meta",Name:"`utility: true`","What it does":"Set by the column: it is not in the Columns panel."}}]})]})}function f(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{f as default};
