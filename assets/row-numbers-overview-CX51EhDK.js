import{j as e,T as r}from"./products-CTiDOXRn.js";import{useMDXComponents as l}from"./index-DTba5wnT.js";import{M as s}from"./index-DCltYdiS.js";import{S as c}from"./row-numbers.stories-DFyl8bPU.js";import{S as h}from"./scene-list-DGvAMnq_.js";import"./iframe-CiaHYEQr.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";function n(t){const o={code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...l(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Tables/Table Core/Features/Drafts/Row numbers/Overview"}),`
`,e.jsx(o.h1,{id:"row-numbers",children:"Row numbers"}),`
`,e.jsx(o.p,{children:"The place of a row on the screen — 1, 2, 3 after sorting and grouping — and the row checkbox, as two separate blocks. v9 has neither the number nor the utility column, so they are ours."}),`
`,e.jsx(o.h2,{id:"turn-it-on",children:"Turn it on"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`const features = tableFeatures({
  rowSelectionFeature, // v9: which rows are selected; the checkbox of the utility column
  columnSizingFeature, // v9: the width of the utility column
})
// createUtilityColumn is ours: numbers and checkboxes in one column
const helper = createColumnHelper<typeof features, Employee>()

const columns = helper.columns([
  createUtilityColumn(helper),   // numbers + checkboxes in one column
  helper.accessor('name', { header: 'Name' }),
])
`})}),`
`,e.jsxs(o.p,{children:["Which rows can be selected is v9’s ",e.jsx(o.code,{children:"enableRowSelection"}),"; rows that cannot keep their number. ",e.jsx(o.code,{children:"enableRowNumbers={false}"})," turns the numbers off for the whole table."]}),`
`,e.jsx(o.h2,{id:"the-blocks",children:"The blocks"}),`
`,e.jsx(r,{headers:["Block","What"],rows:[{id:"0",cells:{Block:"`createUtilityColumn(helper)`",What:"number and checkbox in one column; `parts` says which it holds"}},{id:"1",cells:{Block:"`createUtilityColumn(helper, { parts: [rowNumber()] })`",What:"numbers only"}},{id:"2",cells:{Block:"`createUtilityColumn(helper, { parts: [rowCheckbox()] })`",What:"checkboxes only"}},{id:"3",cells:{Block:"`RowNumber`, `RowCheckbox`, `SelectAllCheckbox`",What:"the pieces, for any cell or header you write"}},{id:"4",cells:{Block:"`rowNumberOf(cellContext)`",What:"the number as a value"}}]}),`
`,e.jsxs(o.p,{children:["A number is the place of the row on the screen, from 1000 cut with an ellipsis (the full number is on hover). In the utility column the number sits where the checkbox is: hover, focus or selection swaps it for the checkbox, and the header’s ",e.jsx(o.strong,{children:"#"})," turns into ",e.jsx(o.em,{children:"select all"}),"."]}),`
`,e.jsx(h,{of:[c]}),`
`,e.jsx(o.h2,{id:"reference",children:"Reference"}),`
`,e.jsx(r,{headers:["Where","Name","What it does"],rows:[{id:"0",cells:{Where:"table",Name:"`enableRowNumbers`","What it does":"Row numbers on or off for the whole table; off, the utility column keeps its checkboxes."}},{id:"1",cells:{Where:"table",Name:"`enableRowSelection`","What it does":"v9’s: who has a checkbox; rows without one keep their number."}},{id:"2",cells:{Where:"column",Name:"`createUtilityColumn(helper, { id, label, rowNumbers, selection, icons })`","What it does":"Number and checkbox in one column."}},{id:"3",cells:{Where:"column",Name:"`createUtilityColumn(helper, { parts: [...] })`","What it does":"Numbers only, checkboxes only."}},{id:"4",cells:{Where:"cell",Name:"`<RowNumber context />`, `<RowCheckbox table row />`, `<SelectAllCheckbox table />`","What it does":"The pieces for any cell or header you write."}},{id:"5",cells:{Where:"value",Name:"`rowNumberOf(cellContext)`","What it does":"The number of the row on the screen."}},{id:"6",cells:{Where:"slot",Name:"`rowNumber`, `checkbox`","What it does":"The pieces themselves."}}]})]})}function w(t={}){const{wrapper:o}={...l(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{w as default};
