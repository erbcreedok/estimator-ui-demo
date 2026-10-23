import{j as e}from"./products-CTiDOXRn.js";import{useMDXComponents as o}from"./index-DTba5wnT.js";import{M as i}from"./index-DCltYdiS.js";import{S as a}from"./saved-views.stories-CMf2sv81.js";import{S as c}from"./sorting-limits.stories-Blf4Ky7j.js";import{S as n}from"./scene-list-DGvAMnq_.js";import"./iframe-CiaHYEQr.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./rows-l3LcChQt.js";function r(s){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Tables/Table Core/Concepts/Recipes/Overview"}),`
`,e.jsx(t.h1,{id:"recipes",children:"Recipes"}),`
`,e.jsx(t.p,{children:"A recipe is a task of a screen solved with the table’s own state and options: no feature of its own, the screen’s code is the recipe. Each has scenes from the simplest to the full one; the code of a scene is the file of its table."}),`
`,e.jsx(t.h2,{id:"save-and-restore-the-layout",children:"Save and restore the layout"}),`
`,e.jsxs(t.p,{children:["The user’s layout of a table is v9’s state: ",e.jsx(t.code,{children:"columnOrder"}),", ",e.jsx(t.code,{children:"columnVisibility"}),", ",e.jsx(t.code,{children:"columnSizing"}),", ",e.jsx(t.code,{children:"columnPinning"}),", ",e.jsx(t.code,{children:"sorting"}),", ",e.jsx(t.code,{children:"grouping"}),". A view is those slices read from ",e.jsx(t.code,{children:"table.store.state"})," and written back with the table’s setters (",e.jsx(t.code,{children:"setColumnOrder"}),", ",e.jsx(t.code,{children:"setSorting"}),", …). The table keeps the state; the screen keeps the views: where (",e.jsx(t.code,{children:"storage"}),", a store with ",e.jsx(t.code,{children:"read"})," and ",e.jsx(t.code,{children:"write"}),") and which slices (",e.jsx(t.code,{children:"parts"}),"). In the Resource Plan this is what the presets of the table are."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const handle = useRef<TableCoreHandle<typeof features, Row>>(null)       // ← new
<TableCore ref={handle} features={features} />                           // ← new

const view = readView(handle.current.table, 'Team order', parts)         // ← new: name + the slices of \`parts\`
store.write([...views, view])                                            // ← new
applyView(handle.current.table, view)                                    // ← new: one setter per slice the view holds
`})}),`
`,e.jsx(n,{of:[a]}),`
`,e.jsx(t.h2,{id:"limit-the-sorts",children:"Limit the sorts"}),`
`,e.jsxs(t.p,{children:["The sorts are the screen’s when it sets ",e.jsx(t.code,{children:"state.sorting"})," and ",e.jsx(t.code,{children:"onSortingChange"}),": every change the user asks for (a click, Shift+click, the menu) comes to the screen, and what it sets is what the table sorts by. The number of sorts is v9’s ",e.jsx(t.code,{children:"maxMultiSortColCount"}),". A rule on which sorts stay is a function of the screen from the sorts asked for to the sorts that stay (",e.jsx(t.code,{children:"keepFirst(id, more)"}),", ",e.jsx(t.code,{children:"anySorting"}),"). In the Resource Plans list, ",e.jsx(t.code,{children:"client"})," is always the first sort and one more stands with it."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<TableCore
  enableMultiSort
  maxMultiSortColCount={2}                                                // ← new: v9, the oldest sort goes
  state={{ sorting }}                                                     // ← new
  onSortingChange={(updater) =>                                           // ← new
    setSorting((old) => rule(resolved(updater, old)))                     //   the rule of the screen
  }
/>
`})}),`
`,e.jsx(n,{of:[c]})]})}function g(s={}){const{wrapper:t}={...o(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(r,{...s})}):r(s)}export{g as default};
