import{j as e}from"./jsx-runtime-Cnbe3ryz.js";import{useMDXComponents as a}from"./index-cWuaGVWk.js";import{M as l,C as r,S as h}from"./index-BWck6PEV.js";import{H as c,a as d,b as p,F as x,O as g}from"./primitives-header.stories-CaipXPBF.js";import{T as n,C as t}from"./reference-kit-BHZHy2IZ.js";import"./index-3dRrDZpt.js";import"./iframe-CxMQY-6g.js";import"./index-C0mjCMcL.js";import"./index-DKTdOcjh.js";import"./index-DgH-xKnr.js";import"./index-Bhqu_tAV.js";import"./primitives-play-Dhsl9Hk3.js";import"./menu-DvyBTqNz.js";import"./styles-HzBmg0bt.js";import"./icons-849xEHsl.js";import"./panel-controls-DNzRkyVB.js";import"./pin-controls-NGLUwJXC.js";import"./bulk-bar-DzOf8FOc.js";import"./status-bar-CYB7-jUm.js";import"./toolbar-C5VRlWnq.js";import"./scene-kit-BsKxVgS1.js";import"./index-iBx7lKYd.js";import"./primitives-source-Cn11Ag2m.js";import"./play-kit-Bu4SXy9H.js";import"./TableCore-Y75h2oha.js";import"./table-core-base-DFRq_Vzl.js";import"./places-Dp9r7e0L.js";import"./employees-CL5oqWiT.js";import"./fixtures-P-DSdYmm.js";import"./types-reference-CMrm5GSt.js";function i(o){const s={b:"b",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c,name:"Guide"}),`
`,e.jsx(s.h1,{id:"header-pieces-what-is-for-what",children:"Header pieces: what is for what"}),`
`,e.jsxs(s.p,{children:["A header is a ",e.jsx(s.strong,{children:"row"})," of ",e.jsx(s.strong,{children:"cells"}),"; a cell holds a ",e.jsx(s.strong,{children:"label button"}),", and around it a grip, a resize handle, a chain toggle and adornments of your own. Each is a piece that knows nothing of a table: it gets plain props and shows them."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`HeaderRow                      the sticky row
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
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Click the label"})," in the scene: the sort goes none → asc → desc. The piece only reports the click (",e.jsx(s.code,{children:"onClick"}),"); the scene decides what it means."]}),`
`,e.jsx(s.h2,{id:"how-to-read-the-controls",children:"How to read the controls"}),`
`,e.jsxs(s.p,{children:["The name of a control is the code it gives. A piece's own prop is named as the prop (",e.jsx(s.code,{children:"sorted"}),", ",e.jsx(s.code,{children:"width"}),", ",e.jsx(s.code,{children:"gripSpace"}),"). A prop that only some columns of a row get is named as the whole prop — ",e.jsx(s.code,{children:'<HeaderCell sorted="asc">'})," — and its value is the list of columns that get it (tick Name, Team, Role), like ",e.jsx(s.code,{children:"column enablePinning: false"})," in Freezing. The Code panel and ",e.jsx(s.em,{children:"Show code"})," write the same pieces with these values. A control with no real prop behind it does not exist."]}),`
`,e.jsxs(s.p,{children:["The ",e.jsx(s.strong,{children:"Header row"})," scene: ",e.jsx(s.code,{children:'<HeaderCell sorted="asc">'}),", ",e.jsx(s.code,{children:"align"}),", ",e.jsx(s.code,{children:"dragging"}),", ",e.jsx(s.code,{children:"chain"}),", ",e.jsx(s.code,{children:"grip"}),", ",e.jsx(s.code,{children:"resize"}),", ",e.jsx(s.code,{children:"lastColumn"}),", ",e.jsx(s.code,{children:"width"})," are given to the ticked columns; a click on a label moves its column through none → asc → desc (the lists change)."]}),`
`,e.jsx(s.h2,{id:"headerrow",children:"HeaderRow"}),`
`,e.jsx(n,{headers:["Prop","What it does"],rows:[{id:"width",cells:{Prop:e.jsx(t,{c:"width"}),"What it does":e.jsxs(e.Fragment,{children:["The row's width: a number (px) or any CSS width. Not set: as wide as its container. In the scene it is a text field: ",e.jsx(t,{c:"auto"}),", ",e.jsx(t,{c:"fit-content"}),", ",e.jsx(t,{c:"480"}),", ",e.jsx(t,{c:"50%"}),"."]})}},{id:"grip",cells:{Prop:e.jsx(t,{c:"gripSpace"}),"What it does":e.jsx(e.Fragment,{children:"The strip above the cells. The grip tab sticks out of a cell on hover, and the table keeps room for it (default on). Off: the row is just the cells (the scenes)."})}}]}),`
`,e.jsx(s.h2,{id:"headercell",children:"HeaderCell"}),`
`,e.jsx(n,{headers:["Prop","What it does","Where you see it"],rows:[{id:"columnId",cells:{Prop:e.jsx(t,{c:"columnId"}),"What it does":e.jsxs(e.Fragment,{children:["The column's id, written as ",e.jsx(t,{c:"data-header-id"}),": the drag and the keyboard find the cell by it."]}),"Where you see it":"In the DOM only."}},{id:"sorted",cells:{Prop:e.jsx(t,{c:"sorted"}),"What it does":e.jsxs(e.Fragment,{children:["The column's sort for ",e.jsx(t,{c:"aria-sort"})," (screen readers). It draws nothing itself: the arrow is the label button's ",e.jsx(t,{c:"sort"}),"."]}),"Where you see it":e.jsx(e.Fragment,{children:"In the accessibility tree. In the scene the label's arrow follows it."})}},{id:"align",cells:{Prop:e.jsx(t,{c:"align"}),"What it does":"Where the label sits in the cell: left, center or right.","Where you see it":"The label moves."}},{id:"lane",cells:{Prop:e.jsx(t,{c:"lane"}),"What it does":e.jsxs(e.Fragment,{children:["The cell of a grouping lane (the tall block grouped rows stand in), not of a column. It writes ",e.jsx(t,{c:"data-lane-id"})," instead of ",e.jsx(t,{c:"data-header-id"})," and has the lane look: a divider on the right, wider gaps. Pinned like a column, with ",e.jsx(t,{c:"frozen"}),"; give it no resize, chain or align."]}),"Where you see it":"A divider on its right; in the DOM, data-lane-id."}},{id:"width",cells:{Prop:e.jsx(t,{c:"width"}),"What it does":"The cell's width (number = px, or a CSS width). Not set: as its content and container say.","Where you see it":"The cell grows and shrinks."}},{id:"frozen",cells:{Prop:e.jsx(t,{c:"frozen"}),"What it does":e.jsxs(e.Fragment,{children:[e.jsx(t,{c:"{ side, offset, edge }"}),": the cell sticks to that side at that offset while the row scrolls; ",e.jsx(t,{c:"edge"})," marks the last cell of the frozen zone, where the scroller draws its line and shadow."]}),"Where you see it":e.jsxs(e.Fragment,{children:["Only when the row scrolls: see ",e.jsx(s.b,{children:"Frozen header cells"})," below."]})}},{id:"last",cells:{Prop:e.jsx(t,{c:"lastColumn"}),"What it does":"The last cell on screen: its resize handle moves from sticking out of the right edge to inside it, so the handle cannot make the grid scroll sideways.","Where you see it":"The handle moves by a few pixels (hover the cell to see it)."}},{id:"dragging",cells:{Prop:e.jsx(t,{c:"dragging"}),"What it does":"The cell is being dragged: tinted, its content hidden (the ghost follows the pointer).","Where you see it":"The cell turns blue."}},{id:"chain",cells:{Prop:e.jsx(t,{c:"chain"}),"What it does":e.jsxs(e.Fragment,{children:[e.jsx(t,{c:"{ state, primary }"}),": the cell belongs to a chain of columns, collapsed or expanded, and is (or is not) its shown member."]}),"Where you see it":"Expanded: a tinted block, the primary one underlined."}},{id:"effect",cells:{Prop:e.jsx(t,{c:"chainEffect"}),"What it does":"What the drag in progress does to this cell's chain: the dragged column joins it (solid) or leaves it (dashed).","Where you see it":"A solid underline or a dashed outline."}},{id:"nodes",cells:{Prop:e.jsx(t,{c:"grip, resize, chainToggle"}),"What it does":"The small parts, as nodes: the pieces of the same names, or your own.","Where you see it":"The grip and the handle show on hover."}},{id:"adorn",cells:{Prop:e.jsx(t,{c:"startAdornment, endAdornment"}),"What it does":"An icon, a badge or a button of your own before and after the label, outside its button (a click on it does not sort).","Where you see it":"The stars in the scene."}}]}),`
`,e.jsx(s.h2,{id:"headerlabelbutton",children:"HeaderLabelButton"}),`
`,e.jsx(n,{headers:["Prop","What it does"],rows:[{id:"sortable",cells:{Prop:e.jsx(t,{c:"sortable"}),"What it does":"Clicking does something: the pointer and the Tab stop. Not sortable: a plain label."}},{id:"sort",cells:{Prop:e.jsx(t,{c:"sort"}),"What it does":e.jsxs(e.Fragment,{children:[e.jsx(t,{c:"{ dir, index }"}),": the sort mark after the label (an icon of the direction) and, with several sorts, its priority."]})}},{id:"sortIcon",cells:{Prop:e.jsx(t,{c:"sortIcon"}),"What it does":e.jsxs(e.Fragment,{children:["The icon of the sort mark, as a node. Not set: the generic icon of the direction. The piece does not know the column's sort type: give ",e.jsx(t,{c:"<AscTextIcon />"})," (A–Z), a number, date or order icon, or your own. In a table the icon follows the column's sort type and ",e.jsx(t,{c:"slots.icons"})," replaces it."]})}},{id:"menu",cells:{Prop:e.jsx(t,{c:"menu"}),"What it does":e.jsxs(e.Fragment,{children:["The label opens a menu: ",e.jsx(t,{c:"closed"})," or ",e.jsx(t,{c:"open"})," (sets ",e.jsx(t,{c:"aria-haspopup"})," and ",e.jsx(t,{c:"aria-expanded"}),")."]})}},{id:"adorn",cells:{Prop:e.jsx(t,{c:"startAdornment, endAdornment"}),"What it does":"An icon inside the button, before and after the text: it clicks with the label."}},{id:"click",cells:{Prop:e.jsx(t,{c:"onClick"}),"What it does":"What a click means (sort, open the menu) is yours: the piece only reports it."}}]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(s.h2,{id:"frozen-header-cells",children:"Frozen header cells"}),`
`,e.jsxs(s.p,{children:["A frozen cell is ",e.jsx(t,{c:"position: sticky"})," at its side; it is visible only when the row is wider than its scroller and is scrolled. The scene is always scrolled (the row is wider than its scroller): tick the columns that get ",e.jsx(t,{c:"frozen"})," at each side. ",e.jsx(s.code,{children:"offset"})," of a cell is the width of the frozen cells before it, ",e.jsx(s.code,{children:"edge"})," is on the last cell of the zone, where the scroller draws its line and shadow."]}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(s.h2,{id:"customization",children:"Customization"}),`
`,e.jsxs(s.p,{children:["The drag grip, the drag ghost, the resize handle and the chain toggle can be replaced by a component of your own, which can look and stand anywhere in the cell. One mechanism: ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"slots"})})," of ",e.jsx(s.code,{children:"TableCore"}),", as in MUI. A slot gets the props of the piece it replaces; you draw it, wire what it asks for, and the table does the rest (the drag, the resize, the chain)."]}),`
`,e.jsx(r,{of:g}),`
`,e.jsxs(s.p,{children:["Tick slots in the control: each ticked slot is filled with a component of the scene (a pill in the corner for the grip, a dark chip for the ghost, a bar for the resize handle, a text button for the chain toggle). Drag the pill, drag the bar, press the ",e.jsx(s.code,{children:"+"}),"."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`<TableCore
  data={employees}
  columns={columns}
  getRowId={(e) => e.id}
  slots={{ dragGrip: MyGrip, dragGhost: MyGhost, resizeHandle: MyResize, chainToggle: MyToggle }}
/>
`})}),`
`,e.jsx(s.h3,{id:"where-the-grips-stand",children:"Where the grips stand"}),`
`,e.jsxs(s.p,{children:["Without any slot there are two looks, one prop for all of them: ",e.jsx(s.strong,{children:e.jsx(s.code,{children:"gripPlacement"})}),"."]}),`
`,e.jsx(n,{headers:["Value","Look"],rows:[{id:"top",cells:{Value:e.jsx(t,{c:"'top'"}),Look:"The default. A tab sticking out above the header, shown on hover. The drag ghost carries the same tab on its top edge."}},{id:"start",cells:{Value:e.jsx(t,{c:"'start'"}),Look:e.jsx(e.Fragment,{children:"The dots in front of the title, always shown (TanStack's default). The ghost carries the dots in front of its title."})}}]}),`
`,e.jsxs(s.p,{children:["The same prop is ",e.jsx(s.code,{children:"placement"})," of the pieces ",e.jsx(s.code,{children:"DragGrip"})," and ",e.jsx(s.code,{children:"DragGhost"}),". It applies to the headers and to the lanes of grouping."]}),`
`,e.jsx(s.h3,{id:"what-each-slot-gets-and-must-do",children:"What each slot gets and must do"}),`
`,e.jsx(n,{headers:["Slot","Gets","Must"],rows:[{id:"grip",cells:{Slot:e.jsx(t,{c:"dragGrip"}),Gets:e.jsxs(e.Fragment,{children:[e.jsx(t,{c:"label"})," (the aria label), ",e.jsx(t,{c:"placement"}),", ",e.jsx(t,{c:"icon"}),", ",e.jsx(t,{c:"onPointerDown"})]}),Must:e.jsxs(e.Fragment,{children:["Put ",e.jsx(t,{c:"onPointerDown"})," on the element the user grabs. Anything else is yours: where it stands, how it looks, whether it shows on hover. Draw it inside the cell (the cell is ",e.jsx(t,{c:"position: relative"}),")."]})}},{id:"ghost",cells:{Slot:e.jsx(t,{c:"dragGhost"}),Gets:e.jsxs(e.Fragment,{children:[e.jsx(t,{c:"label"}),", ",e.jsx(t,{c:"width"})," (the dragged header's), ",e.jsx(t,{c:"forbidden"}),", ",e.jsx(t,{c:"hint"})," (what the drop does), ",e.jsx(t,{c:"placement"}),", ",e.jsx(t,{c:"icon"}),", a ",e.jsx(t,{c:"ref"})]}),Must:e.jsxs(e.Fragment,{children:["Pass the ",e.jsx(t,{c:"ref"})," to its root element (a ",e.jsx(t,{c:"forwardRef"})," component): the table moves it with ",e.jsx(t,{c:"transform"}),". Make it ",e.jsx(t,{c:"position: absolute"})," and ",e.jsx(t,{c:"pointer-events: none"}),". Show ",e.jsx(t,{c:"forbidden"})," (the drop is refused) in any way you like."]})}},{id:"resize",cells:{Slot:e.jsx(t,{c:"resizeHandle"}),Gets:e.jsxs(e.Fragment,{children:[e.jsx(t,{c:"resizing"}),", ",e.jsx(t,{c:"onPointerDown"}),", ",e.jsx(t,{c:"onDoubleClick"})," (resets the width)"]}),Must:e.jsxs(e.Fragment,{children:["Put ",e.jsx(t,{c:"onPointerDown"})," (and ",e.jsx(t,{c:"onDoubleClick"}),") on the element the user grabs, at the cell's right edge."]})}},{id:"toggle",cells:{Slot:e.jsx(t,{c:"chainToggle"}),Gets:e.jsxs(e.Fragment,{children:[e.jsx(t,{c:"state"})," (",e.jsx(t,{c:"'closed'"})," on the shown member of a closed chain, ",e.jsx(t,{c:"'open'"})," on the last one of an open chain), ",e.jsx(t,{c:"icon"}),", ",e.jsx(t,{c:"onToggle"})]}),Must:e.jsxs(e.Fragment,{children:["Call ",e.jsx(t,{c:"onToggle"})," on click. For a toggle of one chain only use ",e.jsx(t,{c:"chain.toggle"})," in the chain's definition."]})}}]}),`
`,e.jsx(s.h3,{id:"an-example",children:"An example"}),`
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
`,e.jsx(s.h3,{id:"the-icons-of-these-parts",children:"The icons of these parts"}),`
`,e.jsxs(s.p,{children:["If only the icon differs, you need no slot: ",e.jsx(s.code,{children:"DragGrip icon"}),", ",e.jsx(s.code,{children:"DragGhost icon"}),", ",e.jsx(s.code,{children:"ChainToggleButton icon"})," and ",e.jsx(s.code,{children:"slots.icons"})," (",e.jsx(t,{c:"grip"}),", ",e.jsx(t,{c:"chainExpand"}),", ",e.jsx(t,{c:"chainCollapse"}),") change it. The parts above are for a different shape or place."]}),`
`,e.jsx(s.h3,{id:"the-pieces-on-their-own",children:"The pieces on their own"}),`
`,e.jsx(s.p,{children:"Each of these four is a piece of the kit (the scenes Drag grip, Drag ghost, Resize handle and Chain toggle of this page) with its own props: a screen that assembles its table by hand uses them, or its own, the same way."}),`
`,e.jsx(s.h2,{id:"why-the-text-is-in-capitals",children:"Why the text is in capitals"}),`
`,e.jsxs(s.p,{children:["That is the table's theme, not a prop of a piece: the token ",e.jsx(t,{c:"headerTransform"})," is ",e.jsx(t,{c:"uppercase"})," (as in the legacy table). Change it:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"for one table"})," — ",e.jsx(t,{c:"theme={{ headerTransform: 'none' }}"}),";"]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"for one piece"})," — ",e.jsx(t,{c:"sx={{ textTransform: 'none' }}"})," on the cell."]}),`
`]})]})}function _(o={}){const{wrapper:s}={...a(),...o.components};return s?e.jsx(s,{...o,children:e.jsx(i,{...o})}):i(o)}export{_ as default};
