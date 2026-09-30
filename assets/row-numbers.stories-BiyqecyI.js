import{j as t,c as ve}from"./styles-DXLXEQ3H.js";import{w as i,e as r,u as Ue,a as S}from"./index-DLqD3z3M.js";import{r as D}from"./index-BjhrbhTf.js";import{T as Le}from"./TableCore-kOYdxPhk.js";import{R,S as v,U as Te,a as U,b as T,c as je,d as _e,e as Ve,f as Me}from"./RowSelection-BawG8FvK.js";import{T as Fe}from"./TableStatusBar-BHCIeSi2.js";import{T as qe}from"./TableToolbar-C0bTLKMD.js";import{m as Ae,a as d}from"./employees-DtM5_3-O.js";import{c as m}from"./play-kit-Bu4SXy9H.js";import{w as He,d as Pe,t as $e,S as We}from"./scene-kit-DXifMYYP.js";import{a as Ge,b as Ye,l as ze,c as Ke}from"./utility-kit-B_r7tOEL.js";import"./jsx-runtime-CEpjeC4Q.js";import"./index-D841zMOb.js";import"./panels-D6DlFR9J.js";import"./createSvgIcon-s1BrOgA2.js";import"./fixtures-CCjjPTo2.js";const Je=["team"],Qe=e=>e==="all"&&!0||e==="none"&&!1||(o=>o.original.state!=="blocked"),p=[d("name","Name",200),d("team","Team",120),d("role","Role",150),{id:"status",header:"Status",accessorFn:e=>({ok:"Included",blocked:"Blocked",excluded:"Excluded"})[e.state],size:120,meta:ve({label:"Status"})},d("country","Country",120),d("start","Start",110)],Xe=e=>t.jsxDEV("span",{style:{display:"flex",alignItems:"center",gap:10,minWidth:0},children:[t.jsxDEV("span",{style:{width:26,textAlign:"right"},children:t.jsxDEV(Ve,{context:e},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-numbers.stories.tsx",lineNumber:68,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-numbers.stories.tsx",lineNumber:64,columnNumber:9},void 0),t.jsxDEV(Me,{row:e.row},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-numbers.stories.tsx",lineNumber:70,columnNumber:9},void 0),t.jsxDEV("span",{style:{overflow:"hidden",textOverflow:"ellipsis"},children:e.row.original.name},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-numbers.stories.tsx",lineNumber:71,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-numbers.stories.tsx",lineNumber:58,columnNumber:69},void 0),Ze={id:"name",accessorKey:"name",size:260,cell:Xe,header:({table:e})=>t.jsxDEV("span",{style:{display:"flex",alignItems:"center",gap:10,width:"100%"},children:[t.jsxDEV("span",{style:{width:26}},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-numbers.stories.tsx",lineNumber:91,columnNumber:13},void 0),t.jsxDEV(_e,{table:e},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-numbers.stories.tsx",lineNumber:94,columnNumber:13},void 0),"Name"]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-numbers.stories.tsx",lineNumber:85,columnNumber:9},void 0),meta:ve({plainHeader:!0})},eo={utility:{columns:()=>[je(),...p],pinned:[Te,"name"]},numbers:{columns:()=>[U(),...p],pinned:[R,"name"]},checkboxes:{columns:()=>[T(),...p],pinned:[v,"name"]},separate:{columns:()=>[U(),T(),...p],pinned:[R,v,"name"]},inCell:{columns:()=>[Ze,...p.slice(1)],pinned:["name"]}},oo=e=>t.jsxDEV(qe,{table:e},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-numbers.stories.tsx",lineNumber:129,columnNumber:51},void 0),to=e=>t.jsxDEV(Fe,{table:e},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-numbers.stories.tsx",lineNumber:130,columnNumber:53},void 0),ro=({args:e,hint:o})=>{const n=D.useMemo(()=>Ae(e.rows).map((B,Oe)=>({...B,name:`${Oe+1}. ${B.name}`})),[e.rows]),a=eo[e.layout],l=D.useMemo(()=>a.columns(),[a]),[u,Ie]=D.useState(e.sorting);return t.jsxDEV(We,{hint:o,children:t.jsxDEV(Le,{data:n,columns:l,getRowId:B=>B.id,enableRowSelection:Qe(e.enableRowSelection),enableRowNumbers:e.enableRowNumbers,resolvers:Ke(e.lanesPosition),state:{sorting:u},onSortingChange:Ie,initialState:{columnPinning:{left:a.pinned,right:[]},grouping:e.grouped?Je:[]},toolbar:oo,statusBar:to},`${e.layout}:${e.enableRowSelection}:${e.rows}:${e.grouped}`,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-numbers.stories.tsx",lineNumber:151,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-numbers.stories.tsx",lineNumber:150,columnNumber:10},void 0)},so={utility:{imports:"UTILITY_COLUMN_ID, createUtilityColumn",columns:`// The utility column: numbers + checkboxes (legacy look).
// createUtilityColumn({ rowNumbers: false }) / ({ selection: false }) turn one off.
const columns = [createUtilityColumn<Employee>(), ...employeeColumns]`,pinned:"UTILITY_COLUMN_ID"},numbers:{imports:"ROW_NUMBER_COLUMN_ID, createRowNumberColumn",columns:`// Numbers only.
const columns = [createRowNumberColumn<Employee>(), ...employeeColumns]`,pinned:"ROW_NUMBER_COLUMN_ID"},checkboxes:{imports:"SELECTION_COLUMN_ID, createSelectionColumn",columns:`// Checkboxes only.
const columns = [createSelectionColumn<Employee>(), ...employeeColumns]`,pinned:"SELECTION_COLUMN_ID"},separate:{imports:"ROW_NUMBER_COLUMN_ID, SELECTION_COLUMN_ID, createRowNumberColumn, createSelectionColumn",columns:`// A column each, in any order and place.
const columns = [
  createRowNumberColumn<Employee>(),
  createSelectionColumn<Employee>(),
  ...employeeColumns,
]`,pinned:"ROW_NUMBER_COLUMN_ID, SELECTION_COLUMN_ID"},inCell:{imports:"RowCheckbox, RowNumber, SelectAllCheckbox, coreMeta",columns:`// No utility column: the blocks inside the Name cell.
const nameColumn = {
  id: 'name',
  accessorKey: 'name',
  header: ({ table }) => <><SelectAllCheckbox table={table} /> Name</>,
  cell: (context) => (
    <>
      <RowNumber context={context} />
      <RowCheckbox row={context.row} />
      {context.row.original.name}
    </>
  ),
  meta: coreMeta({ plainHeader: true }),
}
const columns = [nameColumn, ...otherColumns]`,pinned:""}},I=e=>{const o=so[e.layout],n=e.enableRowSelection==="none"&&`
  enableRowSelection={false}`||e.enableRowSelection==="notBlocked"&&`
  enableRowSelection={(row) => row.original.state !== 'blocked'}`||"",a=[o.pinned,"'name'"].filter(Boolean).join(", "),l=e.enableRowNumbers?"":`
  // Row numbers off for the table: only the checkboxes stay.
  enableRowNumbers={false}`,u=ze(e.lanesPosition);return`import { TableCore, ${o.imports} } from '@pnl-simulation/table-core'

${o.columns}

<TableCore
  data={employees}
  columns={columns}
  getRowId={(e) => e.id}${n}${l}${u?`
  ${u.replace(/\n {6}/g,`
  `)}`:""}
  initialState={{
    columnPinning: { left: [${a}] },${e.grouped?`
    grouping: ['team'],`:""}${e.sorting.length?`
    sorting: ${$e(e.sorting,"    ")},`:""}
  }}
/>`},xo={title:"Tables/Table Core/Draft/Row numbers",tags:["autodocs"],decorators:[He],render:(e,{parameters:o})=>t.jsxDEV(ro,{args:e,hint:o.hint},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-numbers.stories.tsx",lineNumber:247,columnNumber:9},void 0),args:{layout:"utility",enableRowSelection:"all",enableRowNumbers:!0,grouped:!1,lanesPosition:"start",sorting:[],rows:30},argTypes:{layout:{name:"where the blocks go",description:"Utility column (both, legacy), numbers only, checkboxes only, a column each, or inside the Name cell.",options:["utility","numbers","checkboxes","separate","inCell"],control:{type:"radio",labels:{utility:"createUtilityColumn() — both",numbers:"createRowNumberColumn()",checkboxes:"createSelectionColumn()",separate:"a column each",inCell:"RowNumber + RowCheckbox in a cell"}},table:{category:"columns"}},enableRowSelection:{description:"Who has a checkbox. Rows without one keep their number on hover.",options:["all","none","notBlocked"],control:{type:"radio",labels:{all:"true (every row)",none:"false (numbers only)",notBlocked:'(row) => row.original.state !== "blocked"'}}},enableRowNumbers:{description:"Row numbers on / off for the whole table; off, the utility column keeps only its checkboxes.",control:"boolean",table:{category:"switches"}},grouped:{name:"initialState.grouping: [team]",description:"Group by Team: the lane stands in the left zone with the pinned columns.",control:"boolean",table:{category:"state"}},lanesPosition:{name:"resolvers.getLanesPosition",description:"Where the lane block stands among the pinned columns. Default `start`: lanes first, the utility column right after them (prod). Only when grouped.",options:Ye,control:{type:"radio",labels:Ge},table:{category:"resolvers"}},sorting:{name:"initialState.sorting",description:"Numbers follow the order on screen, not the data.",control:"object",table:{category:"state"}},rows:{description:"Number of rows (fake data).",control:{type:"range",min:5,max:1500,step:5}}},parameters:{layout:"fullscreen",sceneCode:I,docs:{codePanel:!0,story:{inline:!1,height:"560px"},source:Pe(I),description:{component:"\n**Row numbers** and **row checkboxes** are two separate blocks. Under the hood the legacy *utility column* is just both of them in one column; the screen can put them wherever it wants.\n\n**How it works**\n- A row's **number** is its place **on screen**: 1, 2, 3… in the order the user sees, after sorting and grouping. From **1000** the number is cut with an ellipsis; the full number is on hover.\n- In the **utility column** the number sits where the checkbox is: **hover** the row, **focus** the checkbox or **select** the row and the number turns into the checkbox. The header shows **#** and turns into *select all* on hover or once any row is selected.\n- Rows that **cannot be selected** (`enableRowSelection`) keep their number.\n\n**The blocks**\n| Block | What | Where |\n|---|---|---|\n| `createUtilityColumn()` | number + checkbox, one column (legacy) | `{ rowNumbers: false }` or `{ selection: false }` turns one off |\n| `createRowNumberColumn()` | numbers only | a column of its own |\n| `createSelectionColumn()` | checkboxes only | a column of its own |\n| `RowNumber`, `RowCheckbox`, `SelectAllCheckbox` | the pieces | any cell or header you write |\n| `RowUtility`, `RowUtilityHeader` | the swap (number ↔ checkbox) | any cell or header |\n| `rowNumberOf(cellContext)` | the number as a value | your own code |\n\n**Turn on / off.** Numbers: use `createUtilityColumn()` or `createRowNumberColumn()`; leave them out (or `createUtilityColumn({ rowNumbers: false })`) for none. Checkboxes: `createUtilityColumn()`, `createSelectionColumn()` or `RowCheckbox`; `enableRowSelection={false}` turns selection off everywhere.\n\n**Here.** *where the blocks go* switches the layout; *Code* shows the matching code."}}}},s=(e,o)=>e.querySelector(`[role="row"][aria-rowindex="${o+2}"]`),c=e=>(e==null?void 0:e.querySelector("[data-row-number]"))??null,b=e=>(e==null?void 0:e.querySelector("[data-row-check]"))??null,h={tags:["kb:row-numbers-numbers-and-checkboxes"],name:"1 · Utility column",parameters:{hint:t.jsxDEV(t.Fragment,{children:["Hover a row: its number turns into a checkbox. Tick it: the ticked checkbox stays. The header shows ",t.jsxDEV("b",{children:"#"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-numbers.stories.tsx",lineNumber:382,columnNumber:50},void 0)," until you hover it or select a row."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-numbers.stories.tsx",lineNumber:380,columnNumber:11},void 0)},play:async e=>{var a,l;if(m(e))return;const o=e.canvasElement;await i(()=>r(c(s(o,0))).not.toBeNull()),await r((a=c(s(o,0)))==null?void 0:a.textContent).toBe("1"),await r((l=c(s(o,2)))==null?void 0:l.textContent).toBe("3"),await r(getComputedStyle(b(s(o,2))).opacity).toBe("0"),await Ue.click(S(b(s(o,2))).getByRole("checkbox")),await i(()=>r(getComputedStyle(b(s(o,2))).opacity).toBe("1")),await r(getComputedStyle(c(s(o,2))).visibility).toBe("hidden");const n=o.querySelector("[data-row-number-hash]");await r(getComputedStyle(n).visibility).toBe("hidden")}},w={tags:["kb:row-numbers-screen-order"],name:"2 · Numbers follow the screen",args:{sorting:[{id:"team",desc:!1}]},parameters:{hint:t.jsxDEV(t.Fragment,{children:"Name starts with the row's place in the data. Sorted by Team: the names are shuffled (7., 2., 15.…), the row numbers still go 1, 2, 3 from the top. Sort by another column — they follow what you see."},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-numbers.stories.tsx",lineNumber:415,columnNumber:11},void 0)},play:async e=>{var n,a;if(m(e))return;const o=e.canvasElement;await i(()=>r(c(s(o,0))).not.toBeNull()),await r((n=c(s(o,0)))==null?void 0:n.textContent).toBe("1"),await r((a=c(s(o,1)))==null?void 0:a.textContent).toBe("2")}},y={tags:["kb:row-numbers-numbers-only"],name:"3 · Numbers only",args:{layout:"numbers"},parameters:{hint:t.jsxDEV(t.Fragment,{children:[t.jsxDEV("code",{children:"createRowNumberColumn()"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-numbers.stories.tsx",lineNumber:439,columnNumber:17},void 0),": numbers, no checkboxes; the header is ",t.jsxDEV("b",{children:"#"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-numbers.stories.tsx",lineNumber:440,columnNumber:20},void 0),". Same as the utility column with"," ",t.jsxDEV("code",{children:["enableRowSelection=","{false}"]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-numbers.stories.tsx",lineNumber:441,columnNumber:17},void 0),"."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-numbers.stories.tsx",lineNumber:438,columnNumber:11},void 0)},play:async e=>{if(m(e))return;const o=e.canvasElement;await i(()=>r(c(s(o,0))).not.toBeNull()),await r(o.querySelector("[data-row-check]")).toBeNull(),await r(o.querySelector("[data-select-all]")).toBeNull()}},f={tags:["kb:row-numbers-checkboxes-only"],name:"4 · Checkboxes only",args:{layout:"checkboxes"},parameters:{hint:t.jsxDEV(t.Fragment,{children:[t.jsxDEV("code",{children:"createSelectionColumn()"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-numbers.stories.tsx",lineNumber:462,columnNumber:17},void 0),": no numbers, the checkboxes are always there, the header is ",t.jsxDEV("i",{children:"select all"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-numbers.stories.tsx",lineNumber:463,columnNumber:45},void 0),"."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-numbers.stories.tsx",lineNumber:461,columnNumber:11},void 0)},play:async e=>{if(m(e))return;const o=e.canvasElement;await i(()=>r(b(s(o,0))).not.toBeNull()),await r(o.querySelector("[data-row-number]")).toBeNull(),await r(o.querySelector("[data-row-number-hash]")).toBeNull(),await r(getComputedStyle(b(s(o,0))).opacity).toBe("1")}},k={tags:["kb:row-numbers-column-each"],name:"5 · A column each",args:{layout:"separate"},parameters:{hint:t.jsxDEV(t.Fragment,{children:[t.jsxDEV("code",{children:"createRowNumberColumn()"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-numbers.stories.tsx",lineNumber:485,columnNumber:17},void 0)," and"," ",t.jsxDEV("code",{children:"createSelectionColumn()"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-numbers.stories.tsx",lineNumber:486,columnNumber:17},void 0),": two columns, both pinned. Put them in any order or place."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-numbers.stories.tsx",lineNumber:484,columnNumber:11},void 0)},play:async e=>{if(m(e))return;const o=e.canvasElement;await i(()=>r(s(o,0)).not.toBeNull());const n=s(o,0);await r(n.querySelector('[data-column-id="row-number"] [data-row-number]')).not.toBeNull(),await r(n.querySelector('[data-column-id="row-select"] [role="checkbox"]')).not.toBeNull()}},g={tags:["kb:row-numbers-inside-any-cell"],name:"6 · Inside any cell",args:{layout:"inCell"},parameters:{hint:t.jsxDEV(t.Fragment,{children:["No utility column: ",t.jsxDEV("code",{children:"RowNumber"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-numbers.stories.tsx",lineNumber:509,columnNumber:36},void 0),", ",t.jsxDEV("code",{children:"RowCheckbox"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-numbers.stories.tsx",lineNumber:509,columnNumber:60},void 0)," and"," ",t.jsxDEV("code",{children:"SelectAllCheckbox"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-numbers.stories.tsx",lineNumber:510,columnNumber:17},void 0)," sit in the Name cell and its header. Tick a row there."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-numbers.stories.tsx",lineNumber:508,columnNumber:11},void 0)},play:async e=>{var a,l;if(m(e))return;const o=e.canvasElement;await i(()=>r(s(o,0)).not.toBeNull());const n=(a=s(o,1))==null?void 0:a.querySelector('[data-column-id="name"]');await r((l=n.querySelector("[data-row-number]"))==null?void 0:l.textContent).toBe("2"),await Ue.click(S(n).getByRole("checkbox")),await i(()=>{var u;return r((u=s(o,1))==null?void 0:u.getAttribute("data-selected")).toBe("true")})}},N={tags:["kb:row-numbers-large-numbers"],name:"7 · From 1000 on",args:{rows:1200},parameters:{hint:t.jsxDEV(t.Fragment,{children:"1 200 rows: scroll to the bottom. From row 1000 the number is cut with an ellipsis; hover it to see the full number."},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-numbers.stories.tsx",lineNumber:533,columnNumber:11},void 0)},play:async e=>{var a;if(m(e))return;const o=e.canvasElement,n=await S(o).findByRole("grid");n.scrollTop=n.scrollHeight,await i(()=>r(s(o,1199)).not.toBeNull()),await r((a=c(s(o,1199)))==null?void 0:a.getAttribute("title")).toBe("1200")}},x={tags:["kb:row-numbers-when-grouped"],name:"8 · When grouped",args:{grouped:!0},parameters:{hint:t.jsxDEV(t.Fragment,{children:["Grouped by Team. By default the lane comes first and the utility column right after it, as in Resource Plan; numbers still go 1, 2, 3 across the groups. Switch ",t.jsxDEV("i",{children:"resolvers.getLanesPosition"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-numbers.stories.tsx",lineNumber:559,columnNumber:32},void 0)," below to"," ",t.jsxDEV("code",{children:"'end'"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-numbers.stories.tsx",lineNumber:560,columnNumber:17},void 0)," to put the lane after the pinned columns."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-numbers.stories.tsx",lineNumber:556,columnNumber:11},void 0)},play:async e=>{var l;if(m(e))return;const o=e.canvasElement,n=await S(o).findByRole("grid"),a=u=>n.querySelector(u).getBoundingClientRect().x;await i(()=>r(n.querySelector("[data-lane-id]")).not.toBeNull()),await r(a('[data-lane-id="team"]')).toBeLessThan(a(`[data-header-id="${Te}"]`)),await r((l=c(s(o,0)))==null?void 0:l.textContent).toBe("1")}},C={tags:["kb:row-numbers-numbers-off"],name:"9 · Numbers off",args:{enableRowNumbers:!1},parameters:{hint:t.jsxDEV(t.Fragment,{children:[t.jsxDEV("code",{children:"enableRowNumbers"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-numbers.stories.tsx",lineNumber:583,columnNumber:17},void 0)," is off: no numbers and no ",t.jsxDEV("b",{children:"#"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-numbers.stories.tsx",lineNumber:583,columnNumber:73},void 0),"; the utility column keeps its checkboxes."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/row-numbers.stories.tsx",lineNumber:582,columnNumber:11},void 0)},play:async e=>{if(m(e))return;const o=e.canvasElement;await S(o).findByRole("grid"),await i(()=>r(b(s(o,0))).not.toBeNull()),await r(o.querySelector("[data-row-number]")).toBeNull(),await r(o.querySelector("[data-row-number-hash]")).toBeNull()}},E={tags:["kb:row-numbers-playground"]};var O,L,j,_,V;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['kb:row-numbers-numbers-and-checkboxes'],
  name: '1 · Utility column',
  parameters: {
    hint: <>
                Hover a row: its number turns into a checkbox. Tick it: the ticked
                checkbox stays. The header shows <b>#</b> until you hover it or select a
                row.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const root = ctx.canvasElement;
    await waitFor(() => expect(numberIn(rowEl(root, 0))).not.toBeNull());
    await expect(numberIn(rowEl(root, 0))?.textContent).toBe('1');
    await expect(numberIn(rowEl(root, 2))?.textContent).toBe('3');
    // Not selected: the number shows, the checkbox is hidden.
    await expect(getComputedStyle(checkIn(rowEl(root, 2)) as HTMLElement).opacity).toBe('0');
    await userEvent.click(within(checkIn(rowEl(root, 2)) as HTMLElement).getByRole('checkbox'));
    // Selected: the ticked checkbox shows, the number hides.
    await waitFor(() => expect(getComputedStyle(checkIn(rowEl(root, 2)) as HTMLElement).opacity).toBe('1'));
    await expect(getComputedStyle(numberIn(rowEl(root, 2)) as HTMLElement).visibility).toBe('hidden');
    // Header: "#" gives way to select all once a row is selected.
    const hash = root.querySelector<HTMLElement>('[data-row-number-hash]');
    await expect(getComputedStyle(hash as HTMLElement).visibility).toBe('hidden');
  }
}`,...(j=(L=h.parameters)==null?void 0:L.docs)==null?void 0:j.source},description:{story:"The utility column (default): numbers, the checkbox on hover or selection.",...(V=(_=h.parameters)==null?void 0:_.docs)==null?void 0:V.description}}};var M,F,q,A,H;w.parameters={...w.parameters,docs:{...(M=w.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['kb:row-numbers-screen-order'],
  name: '2 · Numbers follow the screen',
  args: {
    sorting: [{
      id: 'team',
      desc: false
    }]
  },
  parameters: {
    hint: <>
                Name starts with the row&apos;s place in the data. Sorted by Team: the
                names are shuffled (7., 2., 15.…), the row numbers still go 1, 2, 3 from
                the top. Sort by another column — they follow what you see.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const root = ctx.canvasElement;
    await waitFor(() => expect(numberIn(rowEl(root, 0))).not.toBeNull());
    await expect(numberIn(rowEl(root, 0))?.textContent).toBe('1');
    await expect(numberIn(rowEl(root, 1))?.textContent).toBe('2');
  }
}`,...(q=(F=w.parameters)==null?void 0:F.docs)==null?void 0:q.source},description:{story:"Numbers follow the screen, not the data.",...(H=(A=w.parameters)==null?void 0:A.docs)==null?void 0:H.description}}};var P,$,W,G,Y;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['kb:row-numbers-numbers-only'],
  name: '3 · Numbers only',
  args: {
    layout: 'numbers'
  },
  parameters: {
    hint: <>
                <code>createRowNumberColumn()</code>: numbers, no checkboxes; the header
                is <b>#</b>. Same as the utility column with{' '}
                <code>enableRowSelection={'{false}'}</code>.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const root = ctx.canvasElement;
    await waitFor(() => expect(numberIn(rowEl(root, 0))).not.toBeNull());
    await expect(root.querySelector('[data-row-check]')).toBeNull();
    await expect(root.querySelector('[data-select-all]')).toBeNull();
  }
}`,...(W=($=y.parameters)==null?void 0:$.docs)==null?void 0:W.source},description:{story:"Numbers only: a column of its own.",...(Y=(G=y.parameters)==null?void 0:G.docs)==null?void 0:Y.description}}};var z,K,J,Q,X;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
  tags: ['kb:row-numbers-checkboxes-only'],
  name: '4 · Checkboxes only',
  args: {
    layout: 'checkboxes'
  },
  parameters: {
    hint: <>
                <code>createSelectionColumn()</code>: no numbers, the checkboxes are
                always there, the header is <i>select all</i>.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const root = ctx.canvasElement;
    await waitFor(() => expect(checkIn(rowEl(root, 0))).not.toBeNull());
    await expect(root.querySelector('[data-row-number]')).toBeNull();
    await expect(root.querySelector('[data-row-number-hash]')).toBeNull();
    await expect(getComputedStyle(checkIn(rowEl(root, 0)) as HTMLElement).opacity).toBe('1');
  }
}`,...(J=(K=f.parameters)==null?void 0:K.docs)==null?void 0:J.source},description:{story:"Checkboxes only: a column of its own.",...(X=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var Z,ee,oe,te,re;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['kb:row-numbers-column-each'],
  name: '5 · A column each',
  args: {
    layout: 'separate'
  },
  parameters: {
    hint: <>
                <code>createRowNumberColumn()</code> and{' '}
                <code>createSelectionColumn()</code>: two columns, both pinned. Put them
                in any order or place.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const root = ctx.canvasElement;
    await waitFor(() => expect(rowEl(root, 0)).not.toBeNull());
    const row = rowEl(root, 0) as HTMLElement;
    await expect(row.querySelector('[data-column-id="row-number"] [data-row-number]')).not.toBeNull();
    await expect(row.querySelector('[data-column-id="row-select"] [role="checkbox"]')).not.toBeNull();
  }
}`,...(oe=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:oe.source},description:{story:"A column each: numbers and checkboxes side by side.",...(re=(te=k.parameters)==null?void 0:te.docs)==null?void 0:re.description}}};var se,ne,ae,le,ie;g.parameters={...g.parameters,docs:{...(se=g.parameters)==null?void 0:se.docs,source:{originalSource:`{
  tags: ['kb:row-numbers-inside-any-cell'],
  name: '6 · Inside any cell',
  args: {
    layout: 'inCell'
  },
  parameters: {
    hint: <>
                No utility column: <code>RowNumber</code>, <code>RowCheckbox</code> and{' '}
                <code>SelectAllCheckbox</code> sit in the Name cell and its header. Tick
                a row there.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const root = ctx.canvasElement;
    await waitFor(() => expect(rowEl(root, 0)).not.toBeNull());
    const name = rowEl(root, 1)?.querySelector<HTMLElement>('[data-column-id="name"]') as HTMLElement;
    await expect(name.querySelector('[data-row-number]')?.textContent).toBe('2');
    await userEvent.click(within(name).getByRole('checkbox'));
    await waitFor(() => expect(rowEl(root, 1)?.getAttribute('data-selected')).toBe('true'));
  }
}`,...(ae=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:ae.source},description:{story:"No utility column: the blocks inside the Name cell.",...(ie=(le=g.parameters)==null?void 0:le.docs)==null?void 0:ie.description}}};var ce,ue,me,be,de;N.parameters={...N.parameters,docs:{...(ce=N.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  tags: ['kb:row-numbers-large-numbers'],
  name: '7 · From 1000 on',
  args: {
    rows: 1200
  },
  parameters: {
    hint: <>
                1 200 rows: scroll to the bottom. From row 1000 the number is cut with
                an ellipsis; hover it to see the full number.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const root = ctx.canvasElement;
    const grid = await within(root).findByRole('grid');
    grid.scrollTop = grid.scrollHeight;
    await waitFor(() => expect(rowEl(root, 1199)).not.toBeNull());
    await expect(numberIn(rowEl(root, 1199))?.getAttribute('title')).toBe('1200');
  }
}`,...(me=(ue=N.parameters)==null?void 0:ue.docs)==null?void 0:me.source},description:{story:"From 1000 the number is cut; the full one is on hover.",...(de=(be=N.parameters)==null?void 0:be.docs)==null?void 0:de.description}}};var pe,he,we,ye,fe;x.parameters={...x.parameters,docs:{...(pe=x.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  tags: ['kb:row-numbers-when-grouped'],
  name: '8 · When grouped',
  args: {
    grouped: true
  },
  parameters: {
    hint: <>
                Grouped by Team. By default the lane comes first and the utility column
                right after it, as in Resource Plan; numbers still go 1, 2, 3 across the
                groups. Switch <i>resolvers.getLanesPosition</i> below to{' '}
                <code>&apos;end&apos;</code> to put the lane after the pinned columns.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const root = ctx.canvasElement;
    const grid = await within(root).findByRole('grid');
    const x = (selector: string) => (grid.querySelector(selector) as HTMLElement).getBoundingClientRect().x;
    await waitFor(() => expect(grid.querySelector('[data-lane-id]')).not.toBeNull());
    await expect(x('[data-lane-id="team"]')).toBeLessThan(x(\`[data-header-id="\${UTILITY_COLUMN_ID}"]\`));
    await expect(numberIn(rowEl(root, 0))?.textContent).toBe('1');
  }
}`,...(we=(he=x.parameters)==null?void 0:he.docs)==null?void 0:we.source},description:{story:"Grouped: the utility column right after the lane (default), or before it.",...(fe=(ye=x.parameters)==null?void 0:ye.docs)==null?void 0:fe.description}}};var ke,ge,Ne,xe,Ce;C.parameters={...C.parameters,docs:{...(ke=C.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  tags: ['kb:row-numbers-numbers-off'],
  name: '9 · Numbers off',
  args: {
    enableRowNumbers: false
  },
  parameters: {
    hint: <>
                <code>enableRowNumbers</code> is off: no numbers and no <b>#</b>; the
                utility column keeps its checkboxes.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const root = ctx.canvasElement;
    await within(root).findByRole('grid');
    await waitFor(() => expect(checkIn(rowEl(root, 0))).not.toBeNull());
    await expect(root.querySelector('[data-row-number]')).toBeNull();
    await expect(root.querySelector('[data-row-number-hash]')).toBeNull();
  }
}`,...(Ne=(ge=C.parameters)==null?void 0:ge.docs)==null?void 0:Ne.source},description:{story:"enableRowNumbers={false}: the utility column keeps only its checkboxes.",...(Ce=(xe=C.parameters)==null?void 0:xe.docs)==null?void 0:Ce.description}}};var Ee,Se,Be,De,Re;E.parameters={...E.parameters,docs:{...(Ee=E.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  tags: ['kb:row-numbers-playground']
}`,...(Be=(Se=E.parameters)==null?void 0:Se.docs)==null?void 0:Be.source},description:{story:"Everything together.",...(Re=(De=E.parameters)==null?void 0:De.docs)==null?void 0:Re.description}}};const Co=["NumbersAndCheckboxes","ScreenOrder","NumbersOnly","CheckboxesOnly","ColumnEach","InsideAnyCell","LargeNumbers","WhenGrouped","NumbersOff","Playground"];export{f as CheckboxesOnly,k as ColumnEach,g as InsideAnyCell,N as LargeNumbers,h as NumbersAndCheckboxes,C as NumbersOff,y as NumbersOnly,E as Playground,w as ScreenOrder,x as WhenGrouped,Co as __namedExportsOrder,xo as default};
