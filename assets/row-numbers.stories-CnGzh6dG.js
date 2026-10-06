import{j as o}from"./jsx-runtime-Cnbe3ryz.js";import{w as c,e as n,u as Ie,a as B}from"./index-iBx7lKYd.js";import{r as E}from"./index-3dRrDZpt.js";import{T as Ue}from"./TableCore-Y75h2oha.js";import{c as Oe}from"./places-Dp9r7e0L.js";import{R as T,S as I,U as ve,a as O,b as v,c as _e,d as Me,e as Fe,f as qe}from"./RowSelection-DM7ASqJ8.js";import{T as Ae}from"./TableStatusBar-4NxO8OsQ.js";import{T as He}from"./TableToolbar-DTYEmPN-.js";import{m as $e,a as h}from"./employees-CL5oqWiT.js";import{c as u}from"./play-kit-Bu4SXy9H.js";import{w as De,d as Pe,t as We,S as Ge}from"./scene-kit-BsKxVgS1.js";import{a as Ye,b as ze,l as Ke,c as Je}from"./utility-kit-CR3CIJ2n.js";import{D as Qe}from"./reference-kit-BHZHy2IZ.js";import"./index-C0mjCMcL.js";import"./index-DKTdOcjh.js";import"./table-core-base-DFRq_Vzl.js";import"./styles-HzBmg0bt.js";import"./icons-849xEHsl.js";import"./menu-DvyBTqNz.js";import"./status-bar-CYB7-jUm.js";import"./panel-controls-DNzRkyVB.js";import"./SortingPanel-CpobHppH.js";import"./toolbar-C5VRlWnq.js";import"./pin-controls-NGLUwJXC.js";import"./fixtures-P-DSdYmm.js";import"./types-reference-CMrm5GSt.js";const Ve=["team"],Xe=e=>e==="all"&&!0||e==="none"&&!1||(t=>t.original.state!=="blocked"),b=[h("name","Name",200),h("team","Team",120),h("role","Role",150),{id:"status",header:"Status",accessorFn:e=>({ok:"Included",blocked:"Blocked",excluded:"Excluded"})[e.state],size:120,meta:Oe({label:"Status"})},h("country","Country",120),h("start","Start",110)],Ze=e=>o.jsxs("span",{style:{display:"flex",alignItems:"center",gap:10,minWidth:0},children:[o.jsx("span",{style:{width:26,textAlign:"right"},children:o.jsx(Fe,{context:e})}),o.jsx(qe,{row:e.row}),o.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis"},children:e.row.original.name})]}),et={id:"name",accessorKey:"name",size:260,cell:Ze,header:({table:e})=>o.jsxs("span",{style:{display:"flex",alignItems:"center",gap:10,width:"100%"},children:[o.jsx("span",{style:{width:26}}),o.jsx(Me,{table:e}),"Name"]}),meta:Oe({plainHeader:!0})},tt={utility:{columns:()=>[_e(),...b],pinned:[ve,"name"]},numbers:{columns:()=>[O(),...b],pinned:[T,"name"]},checkboxes:{columns:()=>[v(),...b],pinned:[I,"name"]},separate:{columns:()=>[O(),v(),...b],pinned:[T,I,"name"]},inCell:{columns:()=>[et,...b.slice(1)],pinned:["name"]}},ot=e=>o.jsx(He,{table:e}),nt=e=>o.jsx(Ae,{table:e}),rt=({args:e,hint:t})=>{const a=E.useMemo(()=>$e(e.rows).map((R,je)=>({...R,name:`${je+1}. ${R.name}`})),[e.rows]),s=tt[e.layout],l=E.useMemo(()=>s.columns(),[s]),[m,Le]=E.useState(e.sorting);return o.jsx(Ge,{hint:t,children:o.jsx(Ue,{data:a,columns:l,getRowId:R=>R.id,enableRowSelection:Xe(e.enableRowSelection),enableRowNumbers:e.enableRowNumbers,resolvers:Je(e.lanesPosition),state:{sorting:m},onSortingChange:Le,initialState:{columnPinning:{left:s.pinned,right:[]},grouping:e.grouped?Ve:[]},toolbar:ot,statusBar:nt},`${e.layout}:${e.enableRowSelection}:${e.rows}:${e.grouped}`)})},at={utility:{imports:"UTILITY_COLUMN_ID, createUtilityColumn",columns:`// The utility column: numbers + checkboxes (legacy look).
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
const columns = [nameColumn, ...otherColumns]`,pinned:""}},L=e=>{const t=at[e.layout],a=e.enableRowSelection==="none"&&`
  enableRowSelection={false}`||e.enableRowSelection==="notBlocked"&&`
  enableRowSelection={(row) => row.original.state !== 'blocked'}`||"",s=[t.pinned,"'name'"].filter(Boolean).join(", "),l=e.enableRowNumbers?"":`
  // Row numbers off for the table: only the checkboxes stay.
  enableRowNumbers={false}`,m=Ke(e.lanesPosition);return`import { TableCore, ${t.imports} } from '@pnl-simulation/table-core'

${t.columns}

<TableCore
  data={employees}
  columns={columns}
  getRowId={(e) => e.id}${a}${l}${m?`
  ${m.replace(/\n {6}/g,`
  `)}`:""}
  initialState={{
    columnPinning: { left: [${s}] },${e.grouped?`
    grouping: ['team'],`:""}${e.sorting.length?`
    sorting: ${We(e.sorting,"    ")},`:""}
  }}
/>`},Lt={title:"Tables/Table Core/Features/Row numbers",tags:["autodocs"],decorators:[De],render:(e,{parameters:t})=>o.jsx(rt,{args:e,hint:t.hint}),args:{layout:"utility",enableRowSelection:"all",enableRowNumbers:!0,grouped:!1,lanesPosition:"start",sorting:[],rows:30},argTypes:{layout:{name:"where the blocks go",description:"Utility column (both, legacy), numbers only, checkboxes only, a column each, or inside the Name cell.",options:["utility","numbers","checkboxes","separate","inCell"],control:{type:"radio",labels:{utility:"createUtilityColumn() — both",numbers:"createRowNumberColumn()",checkboxes:"createSelectionColumn()",separate:"a column each",inCell:"RowNumber + RowCheckbox in a cell"}},table:{category:"columns"}},enableRowSelection:{description:"Who has a checkbox. Rows without one keep their number on hover.",options:["all","none","notBlocked"],control:{type:"radio",labels:{all:"true (every row)",none:"false (numbers only)",notBlocked:'(row) => row.original.state !== "blocked"'}}},enableRowNumbers:{description:"Row numbers on / off for the whole table; off, the utility column keeps only its checkboxes.",control:"boolean",table:{category:"switches"}},grouped:{name:"initialState.grouping: [team]",description:"Group by Team: the lane stands in the left zone with the pinned columns.",control:"boolean",table:{category:"state"}},lanesPosition:{name:"resolvers.getLanesPosition",description:"Where the lane block stands among the pinned columns. Default `start`: lanes first, the utility column right after them (prod). Only when grouped.",options:ze,control:{type:"radio",labels:Ye},table:{category:"resolvers"}},sorting:{name:"initialState.sorting",description:"Numbers follow the order on screen, not the data.",control:"object",table:{category:"state"}},rows:{description:"Number of rows (fake data).",control:{type:"range",min:5,max:1500,step:5}}},parameters:{layout:"fullscreen",sceneCode:L,docs:{codePanel:!0,story:{inline:!1,height:"560px"},source:Pe(L),description:{component:`${Qe}


**Row numbers** and **row checkboxes** are two separate blocks. Under the hood the legacy *utility column* is just both of them in one column; the screen can put them wherever it wants.

**How it works**
- A row's **number** is its place **on screen**: 1, 2, 3… in the order the user sees, after sorting and grouping. From **1000** the number is cut with an ellipsis; the full number is on hover.
- In the **utility column** the number sits where the checkbox is: **hover** the row, **focus** the checkbox or **select** the row and the number turns into the checkbox. The header shows **#** and turns into *select all* on hover or once any row is selected.
- Rows that **cannot be selected** (\`enableRowSelection\`) keep their number.

**The blocks**
| Block | What | Where |
|---|---|---|
| \`createUtilityColumn()\` | number + checkbox, one column (legacy) | \`{ rowNumbers: false }\` or \`{ selection: false }\` turns one off |
| \`createRowNumberColumn()\` | numbers only | a column of its own |
| \`createSelectionColumn()\` | checkboxes only | a column of its own |
| \`RowNumber\`, \`RowCheckbox\`, \`SelectAllCheckbox\` | the pieces | any cell or header you write |
| \`RowUtility\`, \`RowUtilityHeader\` | the swap (number ↔ checkbox) | any cell or header |
| \`rowNumberOf(cellContext)\` | the number as a value | your own code |

**Turn on / off.** Numbers: use \`createUtilityColumn()\` or \`createRowNumberColumn()\`; leave them out (or \`createUtilityColumn({ rowNumbers: false })\`) for none. Checkboxes: \`createUtilityColumn()\`, \`createSelectionColumn()\` or \`RowCheckbox\`; \`enableRowSelection={false}\` turns selection off everywhere.

**Here.** *where the blocks go* switches the layout; *Code* shows the matching code.`}}}},r=(e,t)=>e.querySelector(`[role="row"][aria-rowindex="${t+2}"]`),i=e=>(e==null?void 0:e.querySelector("[data-row-number]"))??null,d=e=>(e==null?void 0:e.querySelector("[data-row-check]"))??null,w={tags:["kb:row-numbers-numbers-and-checkboxes"],name:"1 · Utility column",parameters:{hint:o.jsxs(o.Fragment,{children:["Hover a row: its number turns into a checkbox. Tick it: the ticked checkbox stays. The header shows ",o.jsx("b",{children:"#"})," until you hover it or select a row."]})},play:async e=>{var s,l;if(u(e))return;const t=e.canvasElement;await c(()=>n(i(r(t,0))).not.toBeNull()),await n((s=i(r(t,0)))==null?void 0:s.textContent).toBe("1"),await n((l=i(r(t,2)))==null?void 0:l.textContent).toBe("3"),await n(getComputedStyle(d(r(t,2))).opacity).toBe("0"),await Ie.click(B(d(r(t,2))).getByRole("checkbox")),await c(()=>n(getComputedStyle(d(r(t,2))).opacity).toBe("1")),await n(getComputedStyle(i(r(t,2))).visibility).toBe("hidden");const a=t.querySelector("[data-row-number-hash]");await n(getComputedStyle(a).visibility).toBe("hidden")}},p={tags:["kb:row-numbers-screen-order"],name:"2 · Numbers follow the screen",args:{sorting:[{id:"team",desc:!1}]},parameters:{hint:o.jsx(o.Fragment,{children:"Name starts with the row's place in the data. Sorted by Team: the names are shuffled (7., 2., 15.…), the row numbers still go 1, 2, 3 from the top. Sort by another column — they follow what you see."})},play:async e=>{var a,s;if(u(e))return;const t=e.canvasElement;await c(()=>n(i(r(t,0))).not.toBeNull()),await n((a=i(r(t,0)))==null?void 0:a.textContent).toBe("1"),await n((s=i(r(t,1)))==null?void 0:s.textContent).toBe("2")}},y={tags:["kb:row-numbers-numbers-only"],name:"3 · Numbers only",args:{layout:"numbers"},parameters:{hint:o.jsxs(o.Fragment,{children:[o.jsx("code",{children:"createRowNumberColumn()"}),": numbers, no checkboxes; the header is ",o.jsx("b",{children:"#"}),". Same as the utility column with"," ",o.jsxs("code",{children:["enableRowSelection=","{false}"]}),"."]})},play:async e=>{if(u(e))return;const t=e.canvasElement;await c(()=>n(i(r(t,0))).not.toBeNull()),await n(t.querySelector("[data-row-check]")).toBeNull(),await n(t.querySelector("[data-select-all]")).toBeNull()}},x={tags:["kb:row-numbers-checkboxes-only"],name:"4 · Checkboxes only",args:{layout:"checkboxes"},parameters:{hint:o.jsxs(o.Fragment,{children:[o.jsx("code",{children:"createSelectionColumn()"}),": no numbers, the checkboxes are always there, the header is ",o.jsx("i",{children:"select all"}),"."]})},play:async e=>{if(u(e))return;const t=e.canvasElement;await c(()=>n(d(r(t,0))).not.toBeNull()),await n(t.querySelector("[data-row-number]")).toBeNull(),await n(t.querySelector("[data-row-number-hash]")).toBeNull(),await n(getComputedStyle(d(r(t,0))).opacity).toBe("1")}},g={tags:["kb:row-numbers-column-each"],name:"5 · A column each",args:{layout:"separate"},parameters:{hint:o.jsxs(o.Fragment,{children:[o.jsx("code",{children:"createRowNumberColumn()"})," and"," ",o.jsx("code",{children:"createSelectionColumn()"}),": two columns, both pinned. Put them in any order or place."]})},play:async e=>{if(u(e))return;const t=e.canvasElement;await c(()=>n(r(t,0)).not.toBeNull());const a=r(t,0);await n(a.querySelector('[data-column-id="row-number"] [data-row-number]')).not.toBeNull(),await n(a.querySelector('[data-column-id="row-select"] [role="checkbox"]')).not.toBeNull()}},f={tags:["kb:row-numbers-inside-any-cell"],name:"6 · Inside any cell",args:{layout:"inCell"},parameters:{hint:o.jsxs(o.Fragment,{children:["No utility column: ",o.jsx("code",{children:"RowNumber"}),", ",o.jsx("code",{children:"RowCheckbox"})," and"," ",o.jsx("code",{children:"SelectAllCheckbox"})," sit in the Name cell and its header. Tick a row there."]})},play:async e=>{var s,l;if(u(e))return;const t=e.canvasElement;await c(()=>n(r(t,0)).not.toBeNull());const a=(s=r(t,1))==null?void 0:s.querySelector('[data-column-id="name"]');await n((l=a.querySelector("[data-row-number]"))==null?void 0:l.textContent).toBe("2"),await Ie.click(B(a).getByRole("checkbox")),await c(()=>{var m;return n((m=r(t,1))==null?void 0:m.getAttribute("data-selected")).toBe("true")})}},k={tags:["kb:row-numbers-large-numbers"],name:"7 · From 1000 on",args:{rows:1200},parameters:{hint:o.jsx(o.Fragment,{children:"1 200 rows: scroll to the bottom. From row 1000 the number is cut with an ellipsis; hover it to see the full number."})},play:async e=>{var s;if(u(e))return;const t=e.canvasElement,a=await B(t).findByRole("grid");a.scrollTop=a.scrollHeight,await c(()=>n(r(t,1199)).not.toBeNull()),await n((s=i(r(t,1199)))==null?void 0:s.getAttribute("title")).toBe("1200")}},N={tags:["kb:row-numbers-when-grouped"],name:"8 · When grouped",args:{grouped:!0},parameters:{hint:o.jsxs(o.Fragment,{children:["Grouped by Team. By default the lane comes first and the utility column right after it, as in Resource Plan; numbers still go 1, 2, 3 across the groups. Switch ",o.jsx("i",{children:"resolvers.getLanesPosition"})," below to"," ",o.jsx("code",{children:"'end'"})," to put the lane after the pinned columns."]})},play:async e=>{var l;if(u(e))return;const t=e.canvasElement,a=await B(t).findByRole("grid"),s=m=>a.querySelector(m).getBoundingClientRect().x;await c(()=>n(a.querySelector("[data-lane-id]")).not.toBeNull()),await n(s('[data-lane-id="team"]')).toBeLessThan(s(`[data-header-id="${ve}"]`)),await n((l=i(r(t,0)))==null?void 0:l.textContent).toBe("1")}},C={tags:["kb:row-numbers-numbers-off"],name:"9 · Numbers off",args:{enableRowNumbers:!1},parameters:{hint:o.jsxs(o.Fragment,{children:[o.jsx("code",{children:"enableRowNumbers"})," is off: no numbers and no ",o.jsx("b",{children:"#"}),"; the utility column keeps its checkboxes."]})},play:async e=>{if(u(e))return;const t=e.canvasElement;await B(t).findByRole("grid"),await c(()=>n(d(r(t,0))).not.toBeNull()),await n(t.querySelector("[data-row-number]")).toBeNull(),await n(t.querySelector("[data-row-number-hash]")).toBeNull()}},S={tags:["kb:row-numbers-playground"]};var j,U,_,M,F;w.parameters={...w.parameters,docs:{...(j=w.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(_=(U=w.parameters)==null?void 0:U.docs)==null?void 0:_.source},description:{story:"The utility column (default): numbers, the checkbox on hover or selection.",...(F=(M=w.parameters)==null?void 0:M.docs)==null?void 0:F.description}}};var q,A,H,$,D;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(H=(A=p.parameters)==null?void 0:A.docs)==null?void 0:H.source},description:{story:"Numbers follow the screen, not the data.",...(D=($=p.parameters)==null?void 0:$.docs)==null?void 0:D.description}}};var P,W,G,Y,z;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(G=(W=y.parameters)==null?void 0:W.docs)==null?void 0:G.source},description:{story:"Numbers only: a column of its own.",...(z=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:z.description}}};var K,J,Q,V,X;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Q=(J=x.parameters)==null?void 0:J.docs)==null?void 0:Q.source},description:{story:"Checkboxes only: a column of its own.",...(X=(V=x.parameters)==null?void 0:V.docs)==null?void 0:X.description}}};var Z,ee,te,oe,ne;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:te.source},description:{story:"A column each: numbers and checkboxes side by side.",...(ne=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:ne.description}}};var re,ae,se,le,ce;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(se=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:se.source},description:{story:"No utility column: the blocks inside the Name cell.",...(ce=(le=f.parameters)==null?void 0:le.docs)==null?void 0:ce.description}}};var ie,me,ue,de,he;k.parameters={...k.parameters,docs:{...(ie=k.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ue=(me=k.parameters)==null?void 0:me.docs)==null?void 0:ue.source},description:{story:"From 1000 the number is cut; the full one is on hover.",...(he=(de=k.parameters)==null?void 0:de.docs)==null?void 0:he.description}}};var be,we,pe,ye,xe;N.parameters={...N.parameters,docs:{...(be=N.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(pe=(we=N.parameters)==null?void 0:we.docs)==null?void 0:pe.source},description:{story:"Grouped: the utility column right after the lane (default), or before it.",...(xe=(ye=N.parameters)==null?void 0:ye.docs)==null?void 0:xe.description}}};var ge,fe,ke,Ne,Ce;C.parameters={...C.parameters,docs:{...(ge=C.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ke=(fe=C.parameters)==null?void 0:fe.docs)==null?void 0:ke.source},description:{story:"enableRowNumbers={false}: the utility column keeps only its checkboxes.",...(Ce=(Ne=C.parameters)==null?void 0:Ne.docs)==null?void 0:Ce.description}}};var Se,Be,Re,Ee,Te;S.parameters={...S.parameters,docs:{...(Se=S.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  tags: ['kb:row-numbers-playground']
}`,...(Re=(Be=S.parameters)==null?void 0:Be.docs)==null?void 0:Re.source},description:{story:"Everything together.",...(Te=(Ee=S.parameters)==null?void 0:Ee.docs)==null?void 0:Te.description}}};const jt=["NumbersAndCheckboxes","ScreenOrder","NumbersOnly","CheckboxesOnly","ColumnEach","InsideAnyCell","LargeNumbers","WhenGrouped","NumbersOff","Playground"];export{x as CheckboxesOnly,g as ColumnEach,f as InsideAnyCell,k as LargeNumbers,w as NumbersAndCheckboxes,C as NumbersOff,y as NumbersOnly,S as Playground,p as ScreenOrder,N as WhenGrouped,jt as __namedExportsOrder,Lt as default};
