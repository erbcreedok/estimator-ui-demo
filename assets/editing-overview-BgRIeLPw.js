import{j as e,D as o,T as f}from"./products-CTiDOXRn.js";import{useMDXComponents as g}from"./index-DTba5wnT.js";import{M as m,C as n,a as s}from"./index-DCltYdiS.js";import{OneProp as b,ExternalControl as y}from"./basics.stories-B1KcvJ7F.js";import{ClickOpensTheEditor as a,HoverShowsAField as v,LikeTheResourcePlan as k}from"./click-to-edit.stories-D1o_3KGs.js";import{CanEdit as r}from"./can-edit.stories-BncKiO09.js";import{EditingAlone as i}from"./edit-cell.stories-DaEzQjpu.js";import{Autocomplete as E,AsyncOptions as C,Typing as T,Failures as W,NameLevelCountryCity as F,DatesPeriodNumbers as N,RateThreeFields as A}from"./editors.stories-BO1UImUO.js";import{Issues as I}from"./issues.stories-6gnnPvR2.js";import{Start as d,Save as S,Cancel as O,NotEditable as D,ReadOnly as c}from"./keys.stories-DU02LRRT.js";import{Playground as h}from"./playground.stories-76pD6STf.js";import{Saving as R}from"./saving.stories-CkRCR6Zl.js";import{SelectCells as u}from"./select-cells.stories-sTjiUqI_.js";import{Validation as K}from"./validation.stories-BDL-9UAq.js";import{CopyAndPaste as x,DeleteAndFill as p,Refusals as j,SeveralBlocks as M,WalkAndFanOut as P,FillHandle as q}from"./writing.stories-B5eKVzuL.js";import"./iframe-CiaHYEQr.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./edit-cell-table-BkiS150E.js";import"./people-scene-CnMRUXe9.js";import"./controls-BCXw8klf.js";import"./plan-like-scene-Z3UmXR5t.js";import"./country-city-requests-Muz9l7yR.js";import"./clipboard-table-CX-6fC6A.js";function w(l){const t={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...g(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Tables/Table Core/Features/Editing/Overview"}),`
`,e.jsx(t.h1,{id:"editing",children:"Editing"}),`
`,e.jsx(t.p,{children:"A user clicks a cell, types, presses Enter, and the new value is saved. This page builds that up one step at a time: first a table that only edits, then who may be edited, saving, errors, ready-made editors, the keyboard, paste and Fill. Each step adds one thing and shows only the lines it adds."}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["A group can jump to another place or leave the window when a row is edited, dropped or added: see ",e.jsx(o,{page:"tables-table-core-concepts-when-rows-and-groups-change-place-overview--docs",children:"When rows and groups change place"}),"."]}),`
`]}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["An edit that fixes a row of Issues and moves it to another group, resolved by animation, by a Refresh button or by both: ",e.jsx(o,{page:"tables-table-core-features-grouping-overview--docs",children:"Grouping › Columns › 7 · Issues, as in the Resource Plan"}),"."]}),`
`]}),`
`,e.jsx(t.h2,{id:"turn-it-on",children:"Turn it on"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const features = tableFeatures({
	cellSelectionFeature, // v9: which cells are selected (state.cellSelection)
	cellKeyboardFeature, // ours: the active cell, the arrows, ranges, Copy
	cellEditingFeature, // ours: the editor in a cell, writeCells, the reasons a cell refuses
	cellKeyboardEditingFeature, // ours: Enter / F2, Tab, paste, Delete, Fill
})
`})}),`
`,e.jsxs(t.p,{children:["Only ",e.jsx(t.code,{children:"cellEditingFeature"})," is needed for a click to edit; the others add the keyboard, paste and Fill, and are the steps below."]}),`
`,e.jsx(t.h2,{id:"1-edit-a-cell",children:"1. Edit a cell"}),`
`,e.jsxs(t.p,{children:["Editing is one feature, ",e.jsx(t.code,{children:"cellEditingFeature"}),". With it a ",e.jsx(t.strong,{children:"double click"})," on a cell opens a field in the cell (",e.jsx(t.code,{children:"startEditing={editOn.click}"})," asks for a click instead), ",e.jsx(t.strong,{children:"Enter"})," saves what was typed, ",e.jsx(t.strong,{children:"Esc"})," leaves the old value, and a click on another cell ends the edit. Four lines of the table switch it on, and the scene below is exactly this table."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`// 1. The table can edit cells.
const features = tableFeatures({ cellEditingFeature })   // ← new

// 2. This column can be edited (Name has no such line, so it cannot).
helper.accessor('team', {
  meta: { editable: true },                               // ← new
  // 3. The editor is the column’s own cell: a field while the cell is edited.
  cell: (info) => <Editor {...info} />,                   // ← new
})

// 4. What was typed comes here: save it, the table shows the new rows.
<TableCore meta={{ onEdit }} />                           // ← new
`})}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"Editor"})," is the demo’s editor (",e.jsx(t.code,{children:"editor.tsx"}),", a plain input): it shows an input while ",e.jsx(t.code,{children:"cell.getIsEditing()"})," and saves through ",e.jsx(t.code,{children:"cell.commit"}),". Any component can be an editor, see step 5."]}),`
`,e.jsx(n,{of:i}),`
`,e.jsx(s,{of:i}),`
`,e.jsx(t.h3,{id:"the-screen-can-control-the-edited-cell",children:"The screen can control the edited cell"}),`
`,e.jsxs(t.p,{children:["The cell that is in edit mode is a part of the table state, ",e.jsx(t.code,{children:"state.editingCell"})," — ",e.jsx(t.code,{children:"{ rowId, columnId }"})," or ",e.jsx(t.code,{children:"null"}),". Normally the table keeps it; if the screen passes it, the screen decides. A constant opens the editor in that cell at once:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<TableCore state={{ editingCell: { rowId: 'p1', columnId: 'team' } }} /> // ← new
`})}),`
`,e.jsx(n,{of:b}),`
`,e.jsxs(t.p,{children:["With ",e.jsx(t.code,{children:"onEditingCellChange"})," as well, the screen owns the edit: its own buttons open and close the editor, and the user’s click and Esc reach the screen through the same state."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<TableCore
	state={{ editingCell }} // ← new
	onEditingCellChange={setEditingCell} // ← new (a function or a value, as for any state)
/>
`})}),`
`,e.jsx(n,{of:y}),`
`,e.jsx(t.h3,{id:"what-opens-the-editor-and-what-the-pointer-shows",children:"What opens the editor, and what the pointer shows"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"startEditing"})," is the screen's rule of what opens the editor of a cell that can be edited: a function of what happened (",e.jsx(t.code,{children:"'click'"}),", ",e.jsx(t.code,{children:"'doubleClick'"})," or ",e.jsx(t.code,{children:"'typing'"}),"), the cell and whether it was already the active one when the press began. Ready ones: ",e.jsx(t.code,{children:"editOn.doubleClick"})," (the default: a click selects, so the fill handle of the selection stands; a double tap on a phone), ",e.jsx(t.code,{children:"editOn.click"})," (one click, nothing to wait for on a phone; a scroll with the finger does not open it), ",e.jsx(t.code,{children:"editOn.selectedClick"})," (the first click selects, a click on the active cell opens); or a rule of yours, e.g. ",e.jsx(t.code,{children:"(trigger, cell) => trigger === 'click' && cell.column.id !== 'name'"}),". The ready rules let a typed key open the editor too. With the selection, a click makes the cell active (and, by ",e.jsx(t.code,{children:"editOn.click"}),", opens its editor), ",e.jsx(t.strong,{children:"Shift+click"})," and a ",e.jsx(t.strong,{children:"drag"})," select a range and open nothing, and a cell that cannot be edited is only selected. The first scene above has the switch. A table whose editors open by a click, as the Editors scenes do, sets ",e.jsx(t.code,{children:"startEditing={editOn.click}"}),"."]}),`
`,e.jsxs(t.p,{children:["A column whose editor is a field (",e.jsx(t.code,{children:"meta.typeToEdit: true"}),") takes typing: a printable key (no Ctrl, ⌘ or Alt, not during an IME composition) on the active cell opens the editor with that key in place of the value (",e.jsx(t.code,{children:"cell.getTyped()"}),"); the editor reads it like any typed key, so a mask applies. ",e.jsx(t.strong,{children:"Esc"})," gives the old value back. A list, a date or a popup does not set it, and a key does nothing there."]}),`
`,e.jsxs(t.p,{children:["While the pointer is over a cell that can be edited it gets a thin frame; a column can ask for a ",e.jsx(t.strong,{children:"▾"})," (",e.jsx(t.code,{children:"meta.hoverMark: 'list'"}),", its editor is a list) or a ",e.jsx(t.strong,{children:"+"})," while the cell is empty (",e.jsx(t.code,{children:"'add'"}),"). A cell that cannot be edited shows nothing, and a touch screen has no pointer. The mark is the ",e.jsx(t.code,{children:"hoverMark"})," slot."]}),`
`,e.jsx(n,{of:a}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n,{of:v}),`
`,e.jsxs(t.p,{children:["The planning table works with all of it at once: a click opens the editor, Shift+click and a drag select, Ctrl+V and Delete write the selected range, the dot on its corner fills, and ",e.jsx(t.strong,{children:"Esc"})," closes the editor with the cell still active. While an editor is open, Ctrl+V and Delete are the text field’s own; select the cell again (Esc) or a range (Shift+click) to write cells."]}),`
`,e.jsx(n,{of:k}),`
`,e.jsx(t.h2,{id:"2-which-cells-can-be-edited",children:"2. Which cells can be edited"}),`
`,e.jsxs(t.p,{children:["Three things decide it, and the table says no with a reason for each. A column opens an editor only with ",e.jsx(t.code,{children:"meta.editable"}),". ",e.jsx(t.code,{children:"readOnly"})," on the table switches every edit off. And the screen can take an edit away from a particular cell with ",e.jsx(t.code,{children:"resolvers.getCanEdit"}),": it answers ",e.jsx(t.code,{children:"true"}),", or the reason as a text. The screen cannot give an edit that the table refuses (a column without ",e.jsx(t.code,{children:"meta.editable"}),", ",e.jsx(t.code,{children:"readOnly"}),")."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`helper.accessor('team', { meta: { editable: true } })   // the column

<TableCore
  readOnly={readOnly}                                    // ← new
  resolvers={{                                           // ← new
    getCanEdit: ({ row }) =>
      row.id === lockedId ? 'Row locked by Payroll' : true,
  }}
/>

// A cell can tell why it was refused:
cell.getCannotEditReason()                               // ← new
`})}),`
`,e.jsx(n,{of:r}),`
`,e.jsx(s,{of:r}),`
`,e.jsx(t.h2,{id:"3-saving",children:"3. Saving"}),`
`,e.jsxs(t.p,{children:["Everything the user types goes through the screen’s ",e.jsx(t.code,{children:"meta.onEdit(rowId, columnId, value)"}),": the table never changes your rows itself. When the save takes time (a request), ",e.jsx(t.code,{children:"onEdit"})," returns a promise. While it runs the cell shows a spinner and the new value; when the promise throws, the cell goes back to the old value and shows a red ⚠ with the error’s message."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`meta={{
  onEdit: async (rowId, columnId, value) => {   // ← new: a promise
    await api.save(rowId, columnId, value)       // a throw refuses the value
    setRows(/* the new rows */)
  },
}}
`})}),`
`,e.jsx(n,{of:R}),`
`,e.jsx(t.h2,{id:"4-errors-and-warnings",children:"4. Errors and warnings"}),`
`,e.jsxs(t.p,{children:["What is wrong with a cell is the screen’s own data (its rules over its rows), so the table keeps none of it: ",e.jsx(t.code,{children:"resolvers.getCellIssue"})," answers ",e.jsx(t.code,{children:"{ error?, warning? }"})," for a cell, every time it is drawn. An error shows a red ⚠ and a red frame; a warning a yellow ⚠ (the value is allowed). The message is shown on hover, on a tap, and while the cell is the active one."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<TableCore
	resolvers={{
		getCellIssue: ({ column, row }) => {
			// ← new
			const person = row.original
			if (column.id === 'name' && !person.name.trim())
				return { error: 'Name is required' }
			if (column.id === 'level' && person.level < 'B1')
				return { warning: \`\${person.level} is below B1\` }
			return {}
		},
	}}
/>
`})}),`
`,e.jsx(n,{of:I}),`
`,e.jsx(t.p,{children:"A fuller example with a fake server: a required name, a level below B1, a city that is not in the country, a slow save and a server that refuses."}),`
`,e.jsx(n,{of:K}),`
`,e.jsx(t.h2,{id:"5-editors",children:"5. Editors"}),`
`,e.jsxs(t.p,{children:["An editor is just the column’s ",e.jsx(t.code,{children:"cell"}),": a component that shows a field while ",e.jsx(t.code,{children:"cell.getIsEditing()"})," and saves through ",e.jsx(t.code,{children:"cell.commit(what, target?)"}),": ",e.jsx(t.code,{children:"what"})," is ",e.jsx(t.code,{children:"{ text }"})," or ",e.jsx(t.code,{children:"{ value }"}),", ",e.jsx(t.code,{children:"target"})," is a function that names the cells the value goes to (",e.jsx(t.code,{children:"thisCell"})," by default). Nothing else in the table changes when you swap one for another. The text a user types or pastes becomes a value through the column’s ",e.jsx(t.code,{children:"meta.parse"}),", which can refuse it with a reason."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`helper.accessor('level', {
	meta: { editable: true, parse: oneOf(LEVELS, 'a level') }, // ← new: refuse what is not on the list
	cell: (info) => <AutocompleteEditor {...info} source={LEVELS} />, // ← new
})
`})}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"A list."})," An autocomplete over a fixed list: typing filters it, the arrows and Enter pick."]}),`
`,e.jsx(n,{of:E}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"An async list."})," The options come from a request that can use the row, the table and anything from React context (an API client, the user)."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`cell: (info) => <AutocompleteEditor {...info} source={loadCities} /> // ← new: a function, not an array
`})}),`
`,e.jsx(n,{of:C}),`
`,e.jsx(t.p,{children:"Typing is debounced and the previous request is aborted:"}),`
`,e.jsx(n,{of:T}),`
`,e.jsx(t.p,{children:"And a request or a save may fail; the editor says so and offers Retry:"}),`
`,e.jsx(n,{of:W}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Country, then city."})," The cities depend on the country of the same row."]}),`
`,e.jsx(n,{of:F}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Dates and a period, numbers."})," One scene shows them both: dates by a mask and a calendar, a period of two dates, and numbers with a step (↑ ↓) and a range."]}),`
`,e.jsx(n,{of:N}),`
`,e.jsx(t.h3,{id:"several-fields-in-one-cell",children:"Several fields in one cell"}),`
`,e.jsxs(t.p,{children:["A cell can show more than one field: a rate is a number, a currency and a type. The cell looks the same shown and edited (always three fields); a click on a field opens the edit with the focus in that field, ",e.jsx(t.strong,{children:"Tab"})," goes from field to field and leaves the cell after the last one, ",e.jsx(t.strong,{children:"Enter"})," saves the whole cell and ",e.jsx(t.strong,{children:"Esc"})," cancels it. The value is one object, saved by one ",e.jsx(t.code,{children:"writeCells({ value })"}),": the editor writes the object it has, and a paste goes through the column’s ",e.jsx(t.code,{children:"meta.parse"}),", which takes the parts in any order and refuses what it cannot read, with the reason. One rule, ",e.jsx(t.code,{children:"rateProblem"}),", is asked by the editor (a wrong rate keeps the edit open and says why), by ",e.jsx(t.code,{children:"parse"})," and by ",e.jsx(t.code,{children:"resolvers.getCellIssue"})," (for rates the screen already has). The currency and the type are the same lists as the other editors. ",e.jsx(t.code,{children:"meta.copy"})," gives the text back and ",e.jsx(t.code,{children:"meta.clear"})," is what Delete writes."]}),`
`,e.jsx(n,{of:A}),`
`,e.jsx(t.h2,{id:"6-edit-with-the-keyboard",children:"6. Edit with the keyboard"}),`
`,e.jsx(t.p,{children:"So far the table has no active cell: the keys do nothing. Two features add it, one at a time."}),`
`,e.jsxs(t.h3,{id:"-cellselectionfeature-and-cellkeyboardfeature",children:["+ ",e.jsx(t.code,{children:"cellSelectionFeature"})," and ",e.jsx(t.code,{children:"cellKeyboardFeature"})]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"cellSelectionFeature"})})," is v9’s: it keeps the state, which cell is active and which range is selected. ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"cellKeyboardFeature"})})," is ours: the keys, the roles and the look of the selection, on top of v9’s ",e.jsx(t.code,{children:"cellSelectionFeature"}),". Alone, neither shows anything on a table that edits, so they come together: a click selects a cell, the arrows move, a double click still edits, and ",e.jsx(t.strong,{children:"Enter does not open the editor yet"}),". More on them on ",e.jsx(o,{page:"tables-table-core-features-keyboard-selection-overview--docs",children:"Keyboard & Selection"}),"."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const features = tableFeatures({
	cellSelectionFeature, // ← new
	cellKeyboardFeature, // ← new
	cellEditingFeature,
})
`})}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(s,{of:u}),`
`,e.jsxs(t.h3,{id:"-cellkeyboardeditingfeature",children:["+ ",e.jsx(t.code,{children:"cellKeyboardEditingFeature"})]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:e.jsx(t.code,{children:"cellKeyboardEditingFeature"})})," joins the selection with the editing: ",e.jsx(t.strong,{children:"Enter and F2"})," open the editor in the active cell, ",e.jsx(t.strong,{children:"Tab and Enter"})," save and lead on (the next cell, a row down), ",e.jsx(t.strong,{children:"Esc"})," cancels, and paste, Delete, Ctrl+D and the fill handle write cells. It needs the three features above in the list and fails, naming the missing one, when the table is made without them. From here the table ends the edit after the key, and the same ",e.jsx(t.code,{children:"Editor"})," is used."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`const features = tableFeatures({
	cellSelectionFeature,
	cellKeyboardFeature,
	cellEditingFeature,
	cellKeyboardEditingFeature, // ← new
})
`})}),`
`,e.jsx(t.p,{children:"The scenes below use this table; each shows one thing it does."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Enter, F2 or a double click"})," open the editor."]}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(s,{of:d}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Enter and Tab"})," save; Enter moves a row down, Tab a cell to the right."]}),`
`,e.jsx(n,{of:S}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Esc"})," cancels, the old value stays."]}),`
`,e.jsx(n,{of:O}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Cells that cannot be edited"})," open nothing: a column without ",e.jsx(t.code,{children:"meta.editable"}),", a row the screen locked."]}),`
`,e.jsx(n,{of:D}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Read only"})," keeps the keys that move and takes editing away."]}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(t.h2,{id:"7-copy-paste-delete-ctrld",children:"7. Copy, paste, Delete, Ctrl+D"}),`
`,e.jsxs(t.p,{children:["With the selection and the editing together, a table can also write from the keyboard. All of it goes through one method of ",e.jsx(t.code,{children:"cellEditingFeature"}),", ",e.jsx(t.code,{children:"table.writeCells(writes)"}),", the same that the editor uses, so ",e.jsx(t.code,{children:"meta.parse"}),", the refusals and the saving state work the same for a typed value as for a pasted one. Each cell is ",e.jsx(t.em,{children:"applied"})," or ",e.jsx(t.em,{children:"rejected with a reason"}),"."]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Paste"})," — Ctrl/⌘+V lays tab-separated text from the top left of the selection; one value into a range goes to every cell of it; what is past the edge of the table is refused as ",e.jsx(t.em,{children:"outside the table"}),". Copy (Ctrl/⌘+C) is the selection’s, on ",e.jsx(o,{page:"tables-table-core-features-keyboard-selection-overview--docs",children:"Keyboard & Selection"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Delete"})," — writes ",e.jsx(t.code,{children:"meta.clear"})," of each column (an empty string by default)."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Ctrl/⌘+D and Ctrl/⌘+R"})," — fill down and right from the first row or column of the range."]}),`
`]}),`
`,e.jsxs(t.p,{children:["Typed into a field, all of them are the field’s. The cells that were refused are listed under the grid (the ",e.jsx(t.code,{children:"writeNotice"})," slot: replace it, or give a slot that draws nothing)."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(t.h3,{id:"several-blocks",children:"Several blocks"}),`
`,e.jsxs(t.p,{children:["With ",e.jsx(t.code,{children:"enableMultiCellRangeSelection"})," the writes work on every block of the selection. Copy joins blocks in the same rows (side by side) or in the same columns (one under another) and refuses any other shape with a notice; a pasted value goes to every cell of every block, a pasted block only into a selection of one block (else a notice); Delete clears every block; Ctrl/⌘+D and +R fill each block from its own first row or column. The fill handle is for one block with no hole."]}),`
`,e.jsx(n,{of:M}),`
`,e.jsxs(t.p,{children:["In a selection of more than one cell the editor's keys follow the selection: Enter and Tab save and go to the next cell of the selection (Enter down the columns of a block, Tab along its rows, round at the end; Esc keeps the selection), and ",e.jsx(t.strong,{children:"Ctrl/⌘+Enter"})," saves the value into every cell of the selection with one ",e.jsx(t.code,{children:"writeCells"}),". The cells that cannot be written are refused with their reasons, as for a paste. The editor says where its value goes: ",e.jsx(t.code,{children:"cell.commit(what, targetOfKey(event))"})," — ",e.jsx(t.code,{children:"targetOfKey"})," gives ",e.jsx(t.code,{children:"wholeSelection"})," for Ctrl/⌘+Enter and ",e.jsx(t.code,{children:"thisCell"})," for any other key; ",e.jsx(t.code,{children:"wholeSelection"})," and ",e.jsx(t.code,{children:"thisCell"})," are targets you can give yourself, and a target of your own is a function of the cell."]}),`
`,e.jsx(n,{of:P}),`
`,e.jsx(t.h2,{id:"8-fill-handle",children:"8. Fill handle"}),`
`,e.jsxs(t.p,{children:["The dot on the corner of the selection: drag it down, up, right, left or across and the cells it passes get the value (or the block repeated), written like a paste. Esc while dragging cancels. The dot is on a cell that can be written only; it is the ",e.jsx(t.code,{children:"fillHandle"})," slot."]}),`
`,e.jsx(n,{of:q}),`
`,e.jsx(t.h2,{id:"9-playground",children:"9. Playground"}),`
`,e.jsxs(t.p,{children:["Everything together, with switches for ",e.jsx(t.code,{children:"readOnly"})," and the readouts under the table."]}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(t.h2,{id:"reference",children:"Reference"}),`
`,e.jsx(f,{headers:["Where","Name","What it does"],rows:[{id:"0",cells:{Where:"state",Name:"`editingCell`","What it does":"`{ rowId, columnId }` or `null`: the cell in edit mode."}},{id:"1",cells:{Where:"state",Name:"`cellSaves`, `lastWrite`","What it does":"Saves on their way or failed (the spinner and the ⚠ read it); how each cell of the last write went."}},{id:"2",cells:{Where:"table",Name:"`onEditingCellChange`","What it does":"With `state.editingCell` the screen owns the edit."}},{id:"3",cells:{Where:"table",Name:"`readOnly`","What it does":"No editing, no writes, no row selection."}},{id:"4",cells:{Where:"table",Name:"`meta.onEdit(rowId, columnId, value)`","What it does":"How a cell is saved: the editor, a paste, Delete and Fill call it (through `writeCells`); return a promise for a save that takes time, a throw is a refusal."}},{id:"5",cells:{Where:"table",Name:"`resolvers.getCanEdit({ table, column, row })`","What it does":"The screen takes an edit away and says why (`true`, or the reason)."}},{id:"6",cells:{Where:"table",Name:"`resolvers.getCellIssue({ table, column, row })`","What it does":"What is wrong with a cell: `{ error?, warning? }` (an error hides a warning)."}},{id:"7",cells:{Where:"table",Name:"`onCellsWritten(results)`","What it does":"How each cell of a write went (`applied` or `rejected` with a reason)."}},{id:"8",cells:{Where:"table",Name:"`writeCells(writes)`","What it does":"The one method that writes, part of `cellEditingFeature`: a text (parsed by the column) or a value for each cell."}},{id:"9",cells:{Where:"column",Name:"`meta.editable`, `meta.parse`, `meta.clear`","What it does":"Whether the column opens an editor, how a text becomes a value, what Delete writes."}},{id:"10",cells:{Where:"cell",Name:"`getCanEdit()`, `getCannotEditReason()`, `getIsEditing()`, `startEditing()`, `stopEditing()`","What it does":"What the editor and the keys ask of a cell."}},{id:"11",cells:{Where:"cell",Name:"`getIssue()`, `getSave()`","What it does":"The cell’s error or warning, and its save while it is on its way or after it failed."}},{id:"12",cells:{Where:"slot",Name:"`writeNotice`","What it does":"The notice of the refused cells under the grid; a slot that draws nothing turns it off."}},{id:"13",cells:{Where:"slot",Name:"`cellMark`","What it does":"The ⚠ and the spinner of a cell."}}]})]})}function ce(l={}){const{wrapper:t}={...g(),...l.components};return t?e.jsx(t,{...l,children:e.jsx(w,{...l})}):w(l)}export{ce as default};
