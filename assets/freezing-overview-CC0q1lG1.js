import{j as e,T as r}from"./products-CTiDOXRn.js";import{useMDXComponents as s}from"./index-DTba5wnT.js";import{M as i}from"./index-DCltYdiS.js";import{B as l}from"./basics.stories-DtytpwVf.js";import{C as a}from"./columns.stories-5f8k9SQv.js";import{B as h}from"./behaviour.stories-Dza0t5tC.js";import{P as c}from"./places.stories-CA0pfDii.js";import{T as d}from"./two-sides.stories-DoqZh1tE.js";import{L as m}from"./look.stories-C6URRe4L.js";import{R as u}from"./rules.stories-BjyjodQ5.js";import{S as f}from"./scene-list-DGvAMnq_.js";import"./iframe-CiaHYEQr.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./scene-DCjKWwYG.js";import"./rows-l3LcChQt.js";import"./table-CSYHSR_6.js";import"./checks-NmFlyDuA.js";import"./controls-umORIRv-.js";import"./presets-CL-lb5ZU.js";import"./scene-CB7jjebp.js";import"./checks-BwzfMUfK.js";function o(t){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Tables/Table Core/Features/Freezing/Overview"}),`
`,e.jsx(n.h1,{id:"freezing",children:"Freezing"}),`
`,e.jsx(n.p,{children:"Columns that stay in view while the table scrolls sideways, at the left or at the right, as in the legacy Resource Plan."}),`
`,e.jsx(n.h2,{id:"turn-it-on",children:"Turn it on"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const features = tableFeatures({
  columnPinningFeature, // v9: state.columnPinning, column.pin(); the table sticks the frozen columns (ours, on top)
})

<TableCore
  features={features} columns={columns} data={rows} getRowId={…}
  columnMenu={defaultColumnMenu()}                          // Freeze › Left / Right
  toolbar={(table) => <TableToolbar table={table} controls={[columnsControl()]} />}
  enableRightPinning                                        // the right side too
/>
`})}),`
`,e.jsxs(n.p,{children:["The state (",e.jsx(n.code,{children:"state.columnPinning"}),": ",e.jsx(n.code,{children:"{ start, end }"}),", the order of each list is the order on the screen), ",e.jsx(n.code,{children:"column.pin()"}),", ",e.jsx(n.code,{children:"getIsPinned()"})," and ",e.jsx(n.code,{children:"getCanPin()"})," are v9’s. The table sticks each frozen column at its side, shows the edge of the zone once content is under it, and keeps the frozen columns in front of the rest. The menu’s ",e.jsx(n.em,{children:"Freeze ›"})," and the Columns panel’s ",e.jsx(n.strong,{children:"← Freeze →"})," call ",e.jsx(n.code,{children:"column.pin"}),"; both are optional. Dragging a frozen column reorders the frozen ones; a drag never freezes a column."]}),`
`,e.jsx(n.h2,{id:"what-you-can-set",children:"What you can set"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"A column"})," — ",e.jsx(n.code,{children:"enablePinning: false"})," (no ",e.jsx(n.em,{children:"Freeze"}),"), ",e.jsx(n.code,{children:"meta.pinOnly: 'left' | 'right'"})," (one side only)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"The table"})," — ",e.jsx(n.code,{children:"enableColumnPinning={false}"})," (the user cannot freeze, the screen still does), ",e.jsx(n.code,{children:"enableLeftPinning"})," (on), ",e.jsx(n.code,{children:"enableRightPinning"})," (off): the sides the menu and the panel offer; ",e.jsx(n.code,{children:"frozenEdge"}),": ",e.jsx(n.code,{children:"'onScroll'"})," (default), ",e.jsx(n.code,{children:"'line'"}),", ",e.jsx(n.code,{children:"'always'"})," or a look per side."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"The state"})," — ",e.jsx(n.code,{children:"state.columnPinning"})," with ",e.jsx(n.code,{children:"onColumnPinningChange"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"the-scenes",children:"The scenes"}),`
`,e.jsx(f,{of:[l,a,h,c,d,m,u]}),`
`,e.jsx(n.h2,{id:"reference",children:"Reference"}),`
`,e.jsx(r,{headers:["Where","Name","What it does"],rows:[{id:"0",cells:{Where:"state",Name:"`columnPinning`","What it does":"`{ start: string[], end: string[] }`: the frozen columns at the left and the right."}},{id:"1",cells:{Where:"table",Name:"`enableColumnPinning`","What it does":"v9’s: `false` takes *Freeze* from the user."}},{id:"2",cells:{Where:"table",Name:"`enableLeftPinning`, `enableRightPinning`","What it does":"The sides the menu and the panel offer (left on, right off)."}},{id:"3",cells:{Where:"table",Name:"`frozenEdge`","What it does":"The edge of the frozen zone."}},{id:"4",cells:{Where:"column",Name:"`enablePinning`","What it does":"v9’s: `false`, no *Freeze* for this column."}},{id:"5",cells:{Where:"column",Name:"`meta.pinOnly`","What it does":"Freezes at this side only."}},{id:"6",cells:{Where:"column",Name:"`pin()`, `getIsPinned()`","What it does":"v9’s own methods, used as they are."}}]})]})}function E(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{E as default};
