import{j as e,T as n,aE as s}from"./products-CTiDOXRn.js";import{useMDXComponents as a}from"./index-DTba5wnT.js";import{M as l,C as r,S as h}from"./index-DCltYdiS.js";import{H as c,a as d,b as x,F as p,O as g}from"./header.stories-Dv4019pA.js";import"./iframe-CiaHYEQr.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./primitives-play-COclK1bJ.js";import"./primitives-source-Cn11Ag2m.js";function i(o){const t={b:"b",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c,name:"Guide"}),`
`,e.jsx(t.h1,{id:"header-pieces-what-is-for-what",children:"Header pieces: what is for what"}),`
`,e.jsxs(t.p,{children:["A header is a ",e.jsx(t.strong,{children:"row"})," of ",e.jsx(t.strong,{children:"cells"}),"; a cell holds a ",e.jsx(t.strong,{children:"label button"}),", and around it a grip, a resize handle, a chain toggle and adornments of your own. Each is a piece that knows nothing of a table: it gets plain props and shows them."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{children:`HeaderRow                      the sticky row
└─ HeaderCell                  one column's cell
   ├─ grip        (DragGrip)             — the tab you grab to move the column
   ├─ startAdornment                     — an icon of your own, before the label
   ├─ children    (HeaderLabelButton)    — the label, the sort mark, the menu; or PlainHeaderContent
   ├─ endAdornment                       — an icon of your own, after the label
   ├─ chainToggle (ChainToggleButton)    — expand / collapse a chain of columns
   ├─ resize      (ResizeHandle)         — the edge you drag to resize
   └─ edge                               — the frozen-edge slot
`})}),`
`,e.jsx(r,{of:d}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Click the label"})," in the scene: the sort goes none → asc → desc. The piece only reports the click (",e.jsx(t.code,{children:"onClick"}),"); the scene decides what it means."]}),`
`,e.jsx(t.h2,{id:"how-to-read-the-controls",children:"How to read the controls"}),`
`,e.jsxs(t.p,{children:["The name of a control is the code it gives. A piece's own prop is named as the prop (",e.jsx(t.code,{children:"sorted"}),", ",e.jsx(t.code,{children:"width"}),"). A prop that only some columns of a row get is named as the whole prop — ",e.jsx(t.code,{children:'<HeaderCell sorted="asc">'})," — and its value is the list of columns that get it (tick Name, Team, Role), like ",e.jsx(t.code,{children:"column enablePinning: false"})," in Freezing. The Code panel and ",e.jsx(t.em,{children:"Show code"})," write the same pieces with these values. A control with no real prop behind it does not exist."]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Header row"})," scene: ",e.jsx(t.code,{children:'<HeaderCell sorted="asc">'}),", ",e.jsx(t.code,{children:"align"}),", ",e.jsx(t.code,{children:"dragging"}),", ",e.jsx(t.code,{children:"chain"}),", ",e.jsx(t.code,{children:"grip"}),", ",e.jsx(t.code,{children:"resize"}),", ",e.jsx(t.code,{children:"lastColumn"}),", ",e.jsx(t.code,{children:"width"})," are given to the ticked columns; a click on a label moves its column through none → asc → desc (the lists change)."]}),`
`,e.jsx(t.h2,{id:"headerrow",children:"HeaderRow"}),`
`,e.jsx(n,{headers:["Prop","What it does"],rows:[{id:"width",cells:{Prop:e.jsx(s,{c:"width"}),"What it does":e.jsxs(e.Fragment,{children:["The row's width: a number (px) or any CSS width. Not set: as wide as its container. In the scene it is a text field: ",e.jsx(s,{c:"auto"}),", ",e.jsx(s,{c:"fit-content"}),", ",e.jsx(s,{c:"480"}),", ",e.jsx(s,{c:"50%"}),"."]})}}]}),`
`,e.jsx(t.h2,{id:"headercell",children:"HeaderCell"}),`
`,e.jsx(n,{headers:["Prop","What it does","Where you see it"],rows:[{id:"columnId",cells:{Prop:e.jsx(s,{c:"columnId"}),"What it does":e.jsxs(e.Fragment,{children:["The column's id, written as ",e.jsx(s,{c:"data-header-id"}),": the drag and the keyboard find the cell by it."]}),"Where you see it":"In the DOM only."}},{id:"sorted",cells:{Prop:e.jsx(s,{c:"sorted"}),"What it does":e.jsxs(e.Fragment,{children:["The column's sort for ",e.jsx(s,{c:"aria-sort"})," (screen readers). It draws nothing itself: the arrow is the label button's ",e.jsx(s,{c:"sort"}),"."]}),"Where you see it":e.jsx(e.Fragment,{children:"In the accessibility tree. In the scene the label's arrow follows it."})}},{id:"align",cells:{Prop:e.jsx(s,{c:"align"}),"What it does":"Where the label sits in the cell: left, center or right.","Where you see it":"The label moves."}},{id:"lane",cells:{Prop:e.jsx(s,{c:"lane"}),"What it does":e.jsxs(e.Fragment,{children:["The cell of a grouping lane (the tall block grouped rows stand in), not of a column. It writes ",e.jsx(s,{c:"data-lane-id"})," instead of ",e.jsx(s,{c:"data-header-id"})," and has the lane look: a divider on the right, wider gaps. Pinned like a column, with ",e.jsx(s,{c:"frozen"}),"; give it no resize, chain or align."]}),"Where you see it":"A divider on its right; in the DOM, data-lane-id."}},{id:"width",cells:{Prop:e.jsx(s,{c:"width"}),"What it does":"The cell's width (number = px, or a CSS width). Not set: as its content and container say.","Where you see it":"The cell grows and shrinks."}},{id:"frozen",cells:{Prop:e.jsx(s,{c:"frozen"}),"What it does":e.jsxs(e.Fragment,{children:[e.jsx(s,{c:"{ side, offset, edge }"}),": the cell sticks to that side at that offset while the row scrolls; ",e.jsx(s,{c:"edge"})," marks the last cell of the frozen zone, where the scroller draws its line and shadow."]}),"Where you see it":e.jsxs(e.Fragment,{children:["Only when the row scrolls: see ",e.jsx(t.b,{children:"Frozen header cells"})," below."]})}},{id:"last",cells:{Prop:e.jsx(s,{c:"lastColumn"}),"What it does":"The last cell on screen: its resize handle moves from sticking out of the right edge to inside it, so the handle cannot make the grid scroll sideways.","Where you see it":"The handle moves by a few pixels (hover the cell to see it)."}},{id:"dragging",cells:{Prop:e.jsx(s,{c:"dragging"}),"What it does":"The cell is being dragged: tinted, its content hidden (the ghost follows the pointer).","Where you see it":"The cell turns blue."}},{id:"chain",cells:{Prop:e.jsx(s,{c:"chain"}),"What it does":e.jsxs(e.Fragment,{children:[e.jsx(s,{c:"{ state, primary }"}),": the cell belongs to a chain of columns, collapsed or expanded, and is (or is not) its shown member."]}),"Where you see it":"Expanded: a tinted block, the primary one underlined."}},{id:"effect",cells:{Prop:e.jsx(s,{c:"chainEffect"}),"What it does":"What the drag in progress does to this cell's chain: the dragged column joins it (solid) or leaves it (dashed).","Where you see it":"A solid underline or a dashed outline."}},{id:"nodes",cells:{Prop:e.jsx(s,{c:"grip, resize, chainToggle"}),"What it does":"The small parts, as nodes: the pieces of the same names, or your own.","Where you see it":"The grip and the handle show on hover."}},{id:"adorn",cells:{Prop:e.jsx(s,{c:"startAdornment, endAdornment"}),"What it does":"An icon, a badge or a button of your own before and after the label, outside its button (a click on it does not sort).","Where you see it":"The stars in the scene."}}]}),`
`,e.jsx(t.h2,{id:"headerlabelbutton",children:"HeaderLabelButton"}),`
`,e.jsx(n,{headers:["Prop","What it does"],rows:[{id:"sortable",cells:{Prop:e.jsx(s,{c:"sortable"}),"What it does":"Clicking does something: the pointer and the Tab stop. Not sortable: a plain label."}},{id:"sort",cells:{Prop:e.jsx(s,{c:"sort"}),"What it does":e.jsxs(e.Fragment,{children:[e.jsx(s,{c:"{ dir, index }"}),": the sort mark after the label (an icon of the direction) and, with several sorts, its priority."]})}},{id:"sortIcon",cells:{Prop:e.jsx(s,{c:"sortIcon"}),"What it does":e.jsxs(e.Fragment,{children:["The icon of the sort mark, as a node. Not set: the generic icon of the direction. The piece does not know the column's sort type: give ",e.jsx(s,{c:"<AscTextIcon />"})," (A–Z), a number, date or order icon, or your own. In a table the icon follows the column's sort type and ",e.jsx(s,{c:"slots.icons"})," replaces it."]})}},{id:"menu",cells:{Prop:e.jsx(s,{c:"menu"}),"What it does":e.jsxs(e.Fragment,{children:["The label opens a menu: ",e.jsx(s,{c:"closed"})," or ",e.jsx(s,{c:"open"})," (sets ",e.jsx(s,{c:"aria-haspopup"})," and ",e.jsx(s,{c:"aria-expanded"}),")."]})}},{id:"adorn",cells:{Prop:e.jsx(s,{c:"startAdornment, endAdornment"}),"What it does":"An icon inside the button, before and after the text: it clicks with the label."}},{id:"click",cells:{Prop:e.jsx(s,{c:"onClick"}),"What it does":"What a click means (sort, open the menu) is yours: the piece only reports it."}}]}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(t.h2,{id:"frozen-header-cells",children:"Frozen header cells"}),`
`,e.jsxs(t.p,{children:["A frozen cell is ",e.jsx(s,{c:"position: sticky"})," at its side; it is visible only when the row is wider than its scroller and is scrolled. The scene is always scrolled (the row is wider than its scroller): tick the columns that get ",e.jsx(s,{c:"frozen"})," at each side. ",e.jsx(t.code,{children:"offset"})," of a cell is the width of the frozen cells before it, ",e.jsx(t.code,{children:"edge"})," is on the last cell of the zone, where the scroller draws its line and shadow."]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(t.h2,{id:"customization",children:"Customization"}),`
`,e.jsxs(t.p,{children:["The drag grip, the drag ghost, the resize handle and the chain toggle can be replaced by a component of your own, which can look and stand anywhere in the cell. One mechanism: ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"slots"})})," of ",e.jsx(t.code,{children:"TableCore"}),", as in MUI. A slot gets the props of the piece it replaces; you draw it, wire what it asks for, and the table does the rest (the drag, the resize, the chain)."]}),`
`,e.jsx(r,{of:g}),`
`,e.jsxs(t.p,{children:["Tick slots in the control: each ticked slot is filled with a component of the scene (a pill in the corner for the grip, a dark chip for the ghost, a bar for the resize handle, a text button for the chain toggle). Drag the pill, drag the bar, press the ",e.jsx(t.code,{children:"+"}),"."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`<TableCore
  data={employees}
  columns={columns}
  getRowId={(e) => e.id}
  slots={{ dragGrip: MyGrip, dragGhost: MyGhost, resizeHandle: MyResize, chainToggle: MyToggle }}
/>
`})}),`
`,e.jsx(t.h3,{id:"where-the-grips-stand",children:"Where the grips stand"}),`
`,e.jsxs(t.p,{children:["Without any slot there are two looks, one prop for all of them: ",e.jsx(t.strong,{children:e.jsx(t.code,{children:"gripPlacement"})}),"."]}),`
`,e.jsx(n,{headers:["Value","Look"],rows:[{id:"top",cells:{Value:e.jsx(s,{c:"'top'"}),Look:"The default. A tab sticking out above the header, shown on hover. The drag ghost carries the same tab on its top edge."}},{id:"start",cells:{Value:e.jsx(s,{c:"'start'"}),Look:e.jsx(e.Fragment,{children:"The dots in front of the title, always shown (TanStack's default). The ghost carries the dots in front of its title."})}}]}),`
`,e.jsxs(t.p,{children:["The same prop is ",e.jsx(t.code,{children:"placement"})," of the pieces ",e.jsx(t.code,{children:"DragGrip"})," and ",e.jsx(t.code,{children:"DragGhost"}),". It applies to the headers and to the lanes of grouping."]}),`
`,e.jsx(t.h3,{id:"what-each-slot-gets-and-must-do",children:"What each slot gets and must do"}),`
`,e.jsx(n,{headers:["Slot","Gets","Must"],rows:[{id:"grip",cells:{Slot:e.jsx(s,{c:"dragGrip"}),Gets:e.jsxs(e.Fragment,{children:[e.jsx(s,{c:"label"})," (the aria label), ",e.jsx(s,{c:"placement"}),", ",e.jsx(s,{c:"icon"}),", ",e.jsx(s,{c:"onPointerDown"})]}),Must:e.jsxs(e.Fragment,{children:["Put ",e.jsx(s,{c:"onPointerDown"})," on the element the user grabs. Anything else is yours: where it stands, how it looks, whether it shows on hover. Draw it inside the cell (the cell is ",e.jsx(s,{c:"position: relative"}),")."]})}},{id:"ghost",cells:{Slot:e.jsx(s,{c:"dragGhost"}),Gets:e.jsxs(e.Fragment,{children:[e.jsx(s,{c:"label"}),", ",e.jsx(s,{c:"width"})," (the dragged header's), ",e.jsx(s,{c:"forbidden"}),", ",e.jsx(s,{c:"hint"})," (what the drop does), ",e.jsx(s,{c:"placement"}),", ",e.jsx(s,{c:"icon"}),", a ",e.jsx(s,{c:"ref"})]}),Must:e.jsxs(e.Fragment,{children:["Pass the ",e.jsx(s,{c:"ref"})," to its root element (a ",e.jsx(s,{c:"forwardRef"})," component): the table moves it with ",e.jsx(s,{c:"transform"}),". Make it ",e.jsx(s,{c:"position: absolute"})," and ",e.jsx(s,{c:"pointer-events: none"}),". Show ",e.jsx(s,{c:"forbidden"})," (the drop is refused) in any way you like."]})}},{id:"resize",cells:{Slot:e.jsx(s,{c:"resizeHandle"}),Gets:e.jsxs(e.Fragment,{children:[e.jsx(s,{c:"resizing"}),", ",e.jsx(s,{c:"onPointerDown"}),", ",e.jsx(s,{c:"onDoubleClick"})," (resets the width)"]}),Must:e.jsxs(e.Fragment,{children:["Put ",e.jsx(s,{c:"onPointerDown"})," (and ",e.jsx(s,{c:"onDoubleClick"}),") on the element the user grabs, at the cell's right edge."]})}},{id:"toggle",cells:{Slot:e.jsx(s,{c:"chainToggle"}),Gets:e.jsxs(e.Fragment,{children:[e.jsx(s,{c:"state"})," (",e.jsx(s,{c:"'closed'"})," on the shown member of a closed chain, ",e.jsx(s,{c:"'open'"})," on the last one of an open chain), ",e.jsx(s,{c:"icon"}),", ",e.jsx(s,{c:"onToggle"})]}),Must:e.jsxs(e.Fragment,{children:["Call ",e.jsx(s,{c:"onToggle"})," on click. For a toggle of one chain only use ",e.jsx(s,{c:"chain.toggle"})," in the chain's definition."]})}}]}),`
`,e.jsx(t.h3,{id:"an-example",children:"An example"}),`
`,e.jsx(h,{dark:!0,language:"tsx",code:`import { forwardRef } from 'react'
import type { DragGripProps, DragGhostProps, ResizeHandleProps, ChainToggleButtonProps } from '@pnl-simulation/table-core'

// A pill in the corner of the header. The user grabs it.
const MyGrip = ({ label, onPointerDown }: DragGripProps) => (
  <span
    aria-label={label}
    onPointerDown={onPointerDown}
    style={{ position: 'absolute', right: 4, bottom: 3, cursor: 'grab', touchAction: 'none' }}
  >
    drag
  </span>
)

// The copy that follows the pointer: the ref goes to the root.
const MyGhost = forwardRef<HTMLDivElement, DragGhostProps>(({ label, forbidden, style }, ref) => (
  <div
    ref={ref}
    style={{
      position: 'absolute', left: 0, top: 8, pointerEvents: 'none',
      background: forbidden ? '#D93A3A' : '#303240', color: '#fff', ...style,
    }}
  >
    {label}
  </div>
))

const MyResize = ({ resizing, onPointerDown, onDoubleClick }: ResizeHandleProps) => (
  <span
    onPointerDown={onPointerDown}
    onDoubleClick={onDoubleClick}
    style={{ position: 'absolute', right: -2, top: 8, bottom: 8, width: 4, cursor: 'col-resize', touchAction: 'none' }}
  />
)

const MyToggle = ({ state, onToggle }: ChainToggleButtonProps) => (
  <button type="button" onClick={onToggle}>{state === 'closed' ? '+' : '−'}</button>
)`}),`
`,e.jsx(t.h3,{id:"the-icons-of-these-parts",children:"The icons of these parts"}),`
`,e.jsxs(t.p,{children:["If only the icon differs, you need no slot: ",e.jsx(t.code,{children:"DragGrip icon"}),", ",e.jsx(t.code,{children:"DragGhost icon"}),", ",e.jsx(t.code,{children:"ChainToggleButton icon"})," and ",e.jsx(t.code,{children:"slots.icons"})," (",e.jsx(s,{c:"grip"}),", ",e.jsx(s,{c:"chainExpand"}),", ",e.jsx(s,{c:"chainCollapse"}),") change it. The parts above are for a different shape or place."]}),`
`,e.jsx(t.h3,{id:"the-pieces-on-their-own",children:"The pieces on their own"}),`
`,e.jsx(t.p,{children:"Each of these four is a piece of the kit (the scenes Drag grip, Drag ghost, Resize handle and Chain toggle of this page) with its own props: a screen that assembles its table by hand uses them, or its own, the same way."}),`
`,e.jsx(t.h2,{id:"why-the-text-is-in-capitals",children:"Why the text is in capitals"}),`
`,e.jsxs(t.p,{children:["That is the table's theme, not a prop of a piece: the token ",e.jsx(s,{c:"headerTransform"})," is ",e.jsx(s,{c:"uppercase"})," (as in the legacy table). Change it:"]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"for one table"})," — ",e.jsx(s,{c:"theme={{ headerTransform: 'none' }}"}),";"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"for one piece"})," — ",e.jsx(s,{c:"sx={{ textTransform: 'none' }}"})," on the cell."]}),`
`]})]})}function P(o={}){const{wrapper:t}={...a(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(i,{...o})}):i(o)}export{P as default};
