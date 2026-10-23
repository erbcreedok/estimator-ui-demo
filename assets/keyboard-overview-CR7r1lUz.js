import{j as e,D as a,T as f}from"./products-CTiDOXRn.js";import{useMDXComponents as j}from"./index-DTba5wnT.js";import{M as u,C as n,a as s}from"./index-DCltYdiS.js";import{OneProp as g,ExternalControl as b}from"./basics.stories-Bl2_siQn.js";import{CopySelection as m}from"./copy.stories-CIyDfxZJ.js";import{Arrows as o,TabKeys as c,Pages as i,Range as r,ManyRanges as d,WalkTheSelection as p,LargeData as w,FromOutsideScene as v,LeaveAndComeBack as y,Escape as k,ControlsInCells as S,NativeTable as C}from"./keys.stories-C5GytnGm.js";import{Playground as h}from"./playground.stories-CQCCiqYU.js";import{ButtonsSetTheSelection as T}from"./select-cells.stories-DQrgE5p7.js";import"./iframe-CiaHYEQr.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./checks-ZKrw2ksD.js";import"./scene-CixxnLkk.js";function x(l){const t={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...j(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Tables/Table Core/Features/Keyboard & Selection/Overview"}),`
`,e.jsx(t.h1,{id:"keyboard--selection",children:"Keyboard & Selection"}),`
`,e.jsx(t.p,{children:"A table you can use like a spreadsheet: one cell is active, the arrows move it, Shift makes a range, Ctrl/⌘+C copies it. It is built in three steps, and each step is one more feature in the list: first the selection alone (it only keeps and answers), then the grid (it draws the selection and gives the keys), then editing on top of both."}),`
`,e.jsx(t.h2,{id:"turn-it-on",children:"Turn it on"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const features = tableFeatures({
  cellSelectionFeature, // v9: which cells are selected (state.cellSelection)
  cellKeyboardFeature,  // ours: the active cell, the arrows, Shift ranges, Home / End, Copy
})
`})}),`
`,e.jsxs(t.p,{children:["Editing on top of both is ",e.jsx(t.code,{children:"cellEditingFeature"})," and ",e.jsx(t.code,{children:"cellKeyboardEditingFeature"})," (see Editing)."]}),`
`,e.jsx(t.h2,{id:"1--select-cells",children:"1 · Select cells"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"cellSelectionFeature"})," comes from TanStack Table v9. It keeps ",e.jsx(t.em,{children:"which cells are selected"})," — ",e.jsx(t.code,{children:"state.cellSelection"}),", a list of ranges, each from an ",e.jsx(t.code,{children:"anchor"})," cell to a ",e.jsx(t.code,{children:"focus"})," cell, both named by the ids of their row and column — and gives methods to read and set it. It draws nothing and listens to no key, so on its own it is a selection the screen drives."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const features = tableFeatures({
  cellSelectionFeature, // ← new
})
`})}),`
`,e.jsxs(t.p,{children:["The buttons below call ",e.jsx(t.code,{children:"table.selectCellRange(...)"}),"; the screen reads the answer from ",e.jsx(t.code,{children:"state.cellSelection"})," and ",e.jsx(t.code,{children:"table.getFocusedCell()"}),", the cell the selection starts from. The table itself stays plain: no cell is marked."]}),`
`,e.jsx(n,{of:T}),`
`,e.jsx(t.h3,{id:"11--the-screen-says-what-is-selected",children:"1.1 · The screen says what is selected"}),`
`,e.jsxs(t.p,{children:["To see a selection you need the grid of step 2, so the two scenes below already have it in their list (the table code shows it). Give the table ",e.jsx(t.code,{children:"state.cellSelection"})," and it is a constant: the cells of the range are selected from the start."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<TableCore state={{ cellSelection }} /> // ← new: the screen decides
`})}),`
`,e.jsx(n,{of:g}),`
`,e.jsx(t.h3,{id:"12--the-screen-keeps-the-selection",children:"1.2 · The screen keeps the selection"}),`
`,e.jsxs(t.p,{children:["Add ",e.jsx(t.code,{children:"onCellSelectionChange"})," and the table tells the screen every time a click or a key changes the selection. The screen is now the owner: its buttons and the table work on the same ranges."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<TableCore
  state={{ cellSelection }}
  onCellSelectionChange={setCellSelection} // ← new
/>
`})}),`
`,e.jsx(n,{of:b}),`
`,e.jsx(t.h2,{id:"2--draw-it-and-use-the-keys",children:"2 · Draw it and use the keys"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"cellKeyboardFeature"})," is ours: the keys, the roles and the look of the selection, on top of v9’s ",e.jsx(t.code,{children:"cellSelectionFeature"}),". It puts the selection on the grid: the roles ",e.jsx(t.code,{children:"grid"})," and ",e.jsx(t.code,{children:"gridcell"}),", one cell that is the Tab stop, the mark and the frame of the range, and no text selected while the pointer is down. It also gives the keys v9 does not have: ",e.jsx(t.strong,{children:"Ctrl/⌘ with an arrow"}),", ",e.jsx(t.strong,{children:"Home"}),", ",e.jsx(t.strong,{children:"End"}),", ",e.jsx(t.strong,{children:"PageUp"}),", ",e.jsx(t.strong,{children:"PageDown"}),", ",e.jsx(t.strong,{children:"Tab"}),", ",e.jsx(t.strong,{children:"Shift+Tab"})," and the order of ",e.jsx(t.strong,{children:"Esc"}),". It needs ",e.jsx(t.code,{children:"cellSelectionFeature"})," in the list and says so, by name, when the table is made without it."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const features = tableFeatures({
  cellSelectionFeature,
  cellKeyboardFeature, // ← new
})
`})}),`
`,e.jsx(t.h3,{id:"21--active-cell-and-arrows",children:"2.1 · Active cell and arrows"}),`
`,e.jsx(t.p,{children:"A click makes a cell active; the arrows, Home and End move it, and Ctrl/⌘ goes to the edge of the table."}),`
`,e.jsx(n,{of:o}),`
`,e.jsx(s,{of:o}),`
`,e.jsx(t.h3,{id:"22--tab-and-shifttab",children:"2.2 · Tab and Shift+Tab"}),`
`,e.jsx(t.p,{children:"Tab goes to the next cell and wraps to the next row; Tab into the table lands on the first cell, and Shift+Tab from the first cell leaves the table."}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(t.h3,{id:"23--pageup-and-pagedown",children:"2.3 · PageUp and PageDown"}),`
`,e.jsx(t.p,{children:"The active cell moves a screen of rows and the table scrolls with it."}),`
`,e.jsx(n,{of:i}),`
`,e.jsx(s,{of:i}),`
`,e.jsx(t.h3,{id:"24--select-a-range",children:"2.4 · Select a range"}),`
`,e.jsx(t.p,{children:"Shift + arrows, Shift + click or a drag select a range: one frame round it, the active cell outlined, no text selected."}),`
`,e.jsx(n,{of:r}),`
`,e.jsx(s,{of:r}),`
`,e.jsx(t.h3,{id:"24b--several-ranges",children:"2.4b · Several ranges"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"enableMultiCellRangeSelection"})," (v9's option, off by default) lets a user add blocks: ⌘/Ctrl+click adds a cell, on a selected cell it takes it out, ⌘/Ctrl+drag adds a block. Shift (click or arrows) grows only the last block, the active one; an arrow without Shift leaves one cell. ",e.jsx(t.code,{children:"state.cellSelection"})," is the list of ranges, the last one is active; ",e.jsx(t.code,{children:"table.getCellSelectionBounds()"})," gives the rectangles they leave, one beside another."]}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(t.h3,{id:"24c--tab-and-enter-in-a-selection",children:"2.4c · Tab and Enter in a selection"}),`
`,e.jsx(t.p,{children:"With more than one cell selected, Tab and Shift+Tab walk the cells of the selection along the rows of a block, Enter and Shift+Enter down its columns; at the end of a block the next block comes, and after the last one the first. The selection stays, only the active cell moves; Esc leaves. With one cell selected the keys are the usual ones."}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(t.h3,{id:"25--10-000-rows",children:"2.5 · 10 000 rows"}),`
`,e.jsx(t.p,{children:"Only the visible rows are drawn, so keys and a drag stay fast."}),`
`,e.jsx(n,{of:w}),`
`,e.jsx(t.h3,{id:"26--a-button-moves-the-active-cell",children:"2.6 · A button moves the active cell"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"ref.focusCell(rowId, columnId)"})," makes a cell active, scrolls to it and focuses it, as a click would."]}),`
`,e.jsx(n,{of:v}),`
`,e.jsx(t.h3,{id:"27--tab-leaves-the-table-and-comes-back",children:"2.7 · Tab leaves the table and comes back"}),`
`,e.jsx(t.p,{children:"When the focus leaves, the outline goes and the range stays pale; coming back continues from the same cell."}),`
`,e.jsx(n,{of:y}),`
`,e.jsx(t.h3,{id:"28--esc",children:"2.8 · Esc"}),`
`,e.jsx(t.p,{children:"Esc drops the range first, then the active cell."}),`
`,e.jsx(n,{of:k}),`
`,e.jsx(t.h3,{id:"29--a-checkbox-in-a-cell",children:"2.9 · A checkbox in a cell"}),`
`,e.jsx(t.p,{children:"A control in a cell is not a Tab stop: the active cell reaches it and Space or Enter presses it."}),`
`,e.jsx(n,{of:S}),`
`,e.jsx(t.h3,{id:"210--copy",children:"2.10 · Copy"}),`
`,e.jsxs(t.p,{children:["Ctrl/⌘+C puts the active cell or the range on the clipboard as tab-separated text: the value of each cell, or what its column’s ",e.jsx(t.code,{children:"meta.copy"})," says. It only reads, so it needs no editing; typed into a field, Copy is the field’s. One more line in the features, ",e.jsx(t.code,{children:"columnMeta"}),", only tells TypeScript that a column’s ",e.jsx(t.code,{children:"meta"})," may have ",e.jsx(t.code,{children:"copy"}),"."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:"helper.accessor('level', {\n  meta: { copy: (cell) => `Level ${cell.getValue()}` }, // ← new\n})\n"})}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(t.h2,{id:"3--edit-cells",children:"3 · Edit cells"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"cellKeyboardEditingFeature"})," joins the selection with the editing: Enter and F2 open, Tab and Enter lead on, and paste, Delete, Ctrl+D and the fill handle write. With ",e.jsx(t.code,{children:"cellEditingFeature"})," in the list, ",e.jsx(t.strong,{children:"Enter and F2"})," open the editor on the active cell, Enter, Tab and Esc end the edit and move on, and paste, Delete and Fill write cells. The steps, the editor and the scenes are on ",e.jsx(a,{page:"tables-table-core-features-editing-overview--docs",children:"Editing"}),"."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const features = tableFeatures({
  cellSelectionFeature,
  cellKeyboardFeature,
  cellEditingFeature,
  cellKeyboardEditingFeature, // ← new
})
`})}),`
`,e.jsx(t.h2,{id:"without-the-selection",children:"Without the selection"}),`
`,e.jsxs(t.p,{children:["A table without these features is the ",e.jsx(a,{page:"tables-table-core-features-bare-table-overview--docs",children:"bare table"}),": no cell is active, no key does anything, and a control in a cell is a Tab stop like any control on a page."]}),`
`,e.jsx(n,{of:C}),`
`,e.jsx(t.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(t.h2,{id:"reference",children:"Reference"}),`
`,e.jsx(f,{headers:["Where","Name","What it does"],rows:[{id:"0",cells:{Where:"state",Name:"`cellSelection`","What it does":"v9’s: ranges of cells by the ids of their corners; the focused cell is the one the keys move from."}},{id:"1",cells:{Where:"table",Name:"`enableCellSelection`","What it does":"v9’s switch: off, the table is a native one (roles table / cell, no keys, no cell focus)."}},{id:"2",cells:{Where:"table",Name:"`onCellSelectionChange`","What it does":"v9’s: with `state.cellSelection` the screen owns the selection."}},{id:"3",cells:{Where:"table",Name:"`getFocusedCell()`, `setFocusedCell(rowId, columnId)`","What it does":"v9’s: the cell the keys move from."}},{id:"4",cells:{Where:"table",Name:"`selectCellRange(range)`, `setCellSelection(ranges)`","What it does":"v9’s: set the selection from the screen (`anchorRowId`, `anchorColumnId`, `focusRowId`, `focusColumnId`)."}},{id:"5",cells:{Where:"handle",Name:"`ref.focusCell(rowId, columnId)`","What it does":"Makes a cell the focused one, scrolls to it and focuses it (needs the grid feature)."}},{id:"6",cells:{Where:"column",Name:"`meta.copy(cell)`","What it does":"The text Copy puts on the clipboard for a cell of the column."}},{id:"7",cells:{Where:"keys",Name:"Ctrl/⌘ + arrow, Home, End, PageUp, PageDown, Tab, Shift+Tab, Esc, Space, Enter, Ctrl/⌘+C","What it does":"Ours, on the grid (`cellKeyboardFeature`); a plain arrow, with Shift or not, is v9’s."}},{id:"8",cells:{Where:"keys",Name:"Enter, F2","What it does":"Open the editor on the active cell (`cellKeyboardEditingFeature`, with editing)."}}]})]})}function H(l={}){const{wrapper:t}={...j(),...l.components};return t?e.jsx(t,{...l,children:e.jsx(x,{...l})}):x(l)}export{H as default};
