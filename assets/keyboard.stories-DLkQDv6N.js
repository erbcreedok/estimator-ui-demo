import{j as t}from"./styles-DXLXEQ3H.js";import{u as n,w as o,a as F}from"./index-DLqD3z3M.js";import{r as A}from"./index-BjhrbhTf.js";import{T as Ve}from"./TableCore-kOYdxPhk.js";import{U as Re,c as qe}from"./RowSelection-BawG8FvK.js";import{T as Oe}from"./TableStatusBar-BHCIeSi2.js";import{a as $}from"./TableToolbar-C0bTLKMD.js";import{a as m,m as Be}from"./employees-DtM5_3-O.js";import{c as b}from"./play-kit-Bu4SXy9H.js";import{w as He,d as Ie,S as Pe}from"./scene-kit-DXifMYYP.js";import"./jsx-runtime-CEpjeC4Q.js";import"./index-D841zMOb.js";import"./panels-D6DlFR9J.js";import"./createSvgIcon-s1BrOgA2.js";import"./fixtures-CCjjPTo2.js";const T=[m("name","Name",190),m("team","Team",130),m("role","Role",160),m("level","Level",100),m("country","Country",130),m("rate","Rate",90),m("start","Start",120)],Le=[qe(),...T],Ke=a=>t.jsxDEV(Oe,{table:a},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/keyboard.stories.tsx",lineNumber:33,columnNumber:53},void 0),Me=({args:a,hint:e,goTo:r,rowCheckboxes:c,outsideButton:l})=>{const h=A.useMemo(()=>Be(a.rows),[a.rows]),w=A.useRef(null),j=h[Math.min(24,h.length-1)];return t.jsxDEV(Pe,{hint:e,children:t.jsxDEV("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[l&&t.jsxDEV("div",{style:{paddingBottom:8},children:t.jsxDEV($,{type:"button","data-outside":!0,children:"A button outside the table"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/keyboard.stories.tsx",lineNumber:61,columnNumber:25},void 0)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/keyboard.stories.tsx",lineNumber:58,columnNumber:35},void 0),r&&t.jsxDEV("div",{style:{paddingBottom:8},children:t.jsxDEV($,{type:"button","data-go-to":!0,onClick:()=>{var C;return(C=w.current)==null?void 0:C.focusCell(j.id,"rate")},children:["Go to ",j.name," · Rate"]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/keyboard.stories.tsx",lineNumber:68,columnNumber:25},void 0)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/keyboard.stories.tsx",lineNumber:65,columnNumber:26},void 0),t.jsxDEV("div",{style:{flex:1,minHeight:0},children:t.jsxDEV(Ve,{ref:w,data:h,columns:c?Le:T,initialState:c?{columnPinning:{left:[Re]}}:void 0,getRowId:C=>C.id,rowHeight:a.rowHeight,readOnly:a.readOnly,enableCellSelection:a.enableCellSelection,statusBar:Ke},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/keyboard.stories.tsx",lineNumber:76,columnNumber:21},void 0)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/keyboard.stories.tsx",lineNumber:72,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/keyboard.stories.tsx",lineNumber:53,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/keyboard.stories.tsx",lineNumber:52,columnNumber:10},void 0)},V=(a,e)=>`import { useRef } from 'react'
import { TableCore, type TableCoreHandle } from '@pnl-simulation/table-core'

export const EmployeesTable = ({ employees }: { employees: Employee[] }) => {${e.goTo?`
  const ref = useRef<TableCoreHandle<Employee>>(null)
  // From outside: make a cell active and focus it (scrolls to it).
  const goTo = (id: string) => ref.current?.focusCell(id, 'rate')
`:""}
  return (
    <TableCore${e.goTo?`
      ref={ref}`:""}
      data={employees}
      columns={employeeColumns}
      getRowId={(e) => e.id}${a.rowHeight!==48?`
      rowHeight={${a.rowHeight}}`:""}${a.readOnly?`
      readOnly`:""}${a.enableCellSelection===!1?`
      // A native table: no active cell, the browser handles focus and Tab.
      enableCellSelection={false}`:""}
    />
  )
}`,oa={title:"Tables/Table Core/Draft/Keyboard & Selection",tags:["autodocs"],decorators:[He],render:function(e,{parameters:r}){return t.jsxDEV(Me,{args:e,hint:r.hint,goTo:!!r.goTo,rowCheckboxes:r.rowCheckboxes===!0,outsideButton:r.outsideButton===!0},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/keyboard.stories.tsx",lineNumber:113,columnNumber:12},this)},args:{rows:30,rowHeight:48,readOnly:!1,enableCellSelection:!0},argTypes:{rows:{name:"data: rows",description:"Demo data only: how many rows.",options:[30,1e4],control:{type:"radio",labels:{30:"30",1e4:"10 000"}},table:{category:"demo data"}},rowHeight:{description:"Row height for virtualization, px.",control:{type:"number",min:32,max:64,step:4}},readOnly:{description:"Navigation and ranges still work; editing is off.",control:"boolean"},enableCellSelection:{name:"enableCellSelection",description:"On: the spreadsheet mode (active cell, ranges, arrows, Tab between cells). Off: a native table — no cell focus, every checkbox and button is a Tab stop, roles table / row / cell.",control:"boolean",table:{category:"switches"}}},parameters:{layout:"fullscreen",sceneCode:V,docs:{codePanel:!0,story:{inline:!1,height:"600px"},source:Ie(V),description:{component:`
**Keyboard & Selection**: the user moves around the table like in a spreadsheet and selects ranges of cells with the mouse or the keyboard.

- A click makes a cell **active** (outlined). Arrows move it, and the table scrolls to keep it visible. Home / End go to the first / last cell of the row, PageUp / PageDown one screen.
- **Tab / Shift+Tab** go to the next / previous cell and wrap to the next / previous row; from the last / first cell the focus leaves the table.
- The outline shows only while the table holds the focus; the range stays, pale, when the focus is elsewhere. **Esc** drops the range, then the active cell.
- Checkboxes and buttons in body cells are no Tab stops: **Space** on the active cell presses them (**Enter** when the cell cannot be edited).
- \`enableCellSelection={false}\`: a native table, the browser alone handles focus and Tab.
- **Shift + arrows**, **Shift + click** or a **mouse drag** select a rectangular range (light blue).
- Only the visible rows are rendered, so 10 000 rows scroll smoothly.
- From outside: \`ref.focusCell(rowId, columnId)\` and \`ref.scrollToRow(rowId)\`.`}}}},s=(a,e)=>{if(!a)throw new Error(`Story check failed: ${e}`)},u=a=>o(()=>{const e=a.querySelector("[role=grid]");if(!e||!e.querySelector("[data-cell]"))throw new Error("grid not ready");return e}),d=(a,e,r)=>a.querySelector(`[data-row-index="${e}"][data-col-index="${r}"]`),k=a=>a.querySelector('[data-selection="active"]'),i=a=>{const e=k(a);return e?`${e.dataset.rowIndex}:${e.dataset.colIndex}`:"none"},p={tags:["kb:keyboard-arrows"],name:"1 · Active cell and arrows",parameters:{hint:t.jsxDEV(t.Fragment,{children:["Click a cell: it is outlined. Move with the arrows; ",t.jsxDEV("b",{children:"Home"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/keyboard.stories.tsx",lineNumber:215,columnNumber:69},void 0)," /"," ",t.jsxDEV("b",{children:"End"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/keyboard.stories.tsx",lineNumber:216,columnNumber:17},void 0)," jump to the first / last cell of the row."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/keyboard.stories.tsx",lineNumber:214,columnNumber:11},void 0)},play:async a=>{if(b(a))return;const{canvasElement:e}=a;await u(e),await n.click(d(e,0,1)),await o(()=>s(i(e)==="0:1","clicked cell")),await n.keyboard("{ArrowDown}{ArrowRight}"),await o(()=>s(i(e)==="1:2",`arrows, at ${i(e)}`)),await o(()=>s(document.activeElement===k(e),"focus follows")),await n.keyboard("{End}"),await o(()=>s(i(e)===`1:${T.length-1}`,"End")),await n.keyboard("{Home}"),await o(()=>s(i(e)==="1:0","Home"))}},g={tags:["kb:keyboard-tab-keys"],name:"2 · Tab and Shift+Tab",parameters:{hint:t.jsxDEV(t.Fragment,{children:["Click the last cell of a row and press ",t.jsxDEV("b",{children:"Tab"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/keyboard.stories.tsx",lineNumber:243,columnNumber:56},void 0),": the first cell of the next row. ",t.jsxDEV("b",{children:"Shift+Tab"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/keyboard.stories.tsx",lineNumber:244,columnNumber:27},void 0)," goes back."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/keyboard.stories.tsx",lineNumber:242,columnNumber:11},void 0)},play:async a=>{if(b(a))return;const{canvasElement:e}=a;await u(e);const r=T.length-1;await n.click(d(e,1,r)),await n.keyboard("{Tab}"),await o(()=>s(i(e)==="2:0",`Tab wraps, at ${i(e)}`)),await n.keyboard("{Shift>}{Tab}{/Shift}"),await o(()=>s(i(e)===`1:${r}`,"Shift+Tab wraps back"))}},f={tags:["kb:keyboard-pages"],name:"3 · PageUp and PageDown",parameters:{hint:t.jsxDEV(t.Fragment,{children:["Click a cell in the first row and press ",t.jsxDEV("b",{children:"PageDown"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/keyboard.stories.tsx",lineNumber:268,columnNumber:57},void 0),": one screen down, the table scrolls with it. ",t.jsxDEV("b",{children:"PageUp"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/keyboard.stories.tsx",lineNumber:269,columnNumber:50},void 0)," comes back."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/keyboard.stories.tsx",lineNumber:267,columnNumber:11},void 0)},play:async a=>{if(b(a))return;const{canvasElement:e}=a,r=await u(e);await n.click(d(e,0,0)),await n.keyboard("{PageDown}"),await o(()=>{var l;const c=Number(((l=k(e))==null?void 0:l.dataset.rowIndex)??0);s(c>=5,`a screen down, at row ${c}`)}),await o(()=>s(r.scrollTop>0,"scrolled")),await n.keyboard("{PageUp}"),await o(()=>s(i(e)==="0:0","back up"))}},y={tags:["kb:keyboard-range"],name:"4 · Select a range",parameters:{hint:t.jsxDEV(t.Fragment,{children:["Click a cell, then ",t.jsxDEV("b",{children:"Shift + arrows"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/keyboard.stories.tsx",lineNumber:296,columnNumber:36},void 0),", or ",t.jsxDEV("b",{children:"Shift + click"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/keyboard.stories.tsx",lineNumber:296,columnNumber:62},void 0)," ","another cell, or drag with the mouse: a light blue rectangle."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/keyboard.stories.tsx",lineNumber:295,columnNumber:11},void 0)},play:async a=>{if(b(a))return;const{canvasElement:e}=a;await u(e);const r=()=>e.querySelectorAll('[data-selection="range"]').length;await n.click(d(e,1,1)),await n.keyboard("{Shift>}{ArrowRight}{ArrowRight}{/Shift}"),await o(()=>s(r()===2,`Shift+arrows: 3 cells, got ${r()+1}`)),await n.click(d(e,0,0));const c=n.setup();await c.keyboard("{Shift>}"),await c.click(d(e,2,2)),await c.keyboard("{/Shift}"),await o(()=>s(r()===8,`Shift+click: 3×3 cells, got ${r()+1}`))}},v={tags:["kb:keyboard-large-data"],name:"5 · 10 000 rows",args:{rows:1e4},parameters:{hint:t.jsxDEV(t.Fragment,{children:["10 000 rows: scroll fast, or hold ",t.jsxDEV("b",{children:"PageDown"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/keyboard.stories.tsx",lineNumber:328,columnNumber:51},void 0)," on a cell. Only the rows on screen are in the page."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/keyboard.stories.tsx",lineNumber:327,columnNumber:11},void 0)},play:async a=>{if(b(a))return;const{canvasElement:e}=a,r=await u(e),c=()=>new Set(Array.from(e.querySelectorAll("[data-row-index]")).map(l=>l.dataset.rowIndex)).size;s(c()<100,`only visible rows, ${c()} rendered`),r.scrollTop=r.scrollHeight,r.dispatchEvent(new Event("scroll")),await o(()=>s(e.querySelector('[data-row-index="9999"]'),"last row rendered after scrolling")),s(c()<100,"still only visible rows")}},E={tags:["kb:keyboard-from-outside"],name:"6 · Focus a cell from outside",parameters:{goTo:!0,hint:t.jsxDEV(t.Fragment,{children:["The button calls ",t.jsxDEV("code",{children:"ref.focusCell(rowId, 'rate')"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/keyboard.stories.tsx",lineNumber:354,columnNumber:34},void 0),": the table scrolls to row 25 and its Rate cell becomes active."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/keyboard.stories.tsx",lineNumber:353,columnNumber:11},void 0)},play:async a=>{if(b(a))return;const{canvasElement:e}=a;await u(e),await n.click(F(e).getByRole("button",{name:/^Go to/})),await o(()=>s(i(e)===`24:${T.length-2}`,`row 25, Rate: at ${i(e)}`)),s(document.activeElement===k(e),"focused")}},x={tags:["kb:keyboard-leave-and-come-back"],name:"8 · Leave and come back",parameters:{outsideButton:!0,hint:t.jsxDEV(t.Fragment,{children:"Select a range (click, then Shift + arrows), then click the button above: the outline goes, the range stays pale. Tab or click back into the table: you go on from the same cell."},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/keyboard.stories.tsx",lineNumber:378,columnNumber:11},void 0)},play:async a=>{if(b(a))return;const{canvasElement:e}=a;await u(e),await n.click(d(e,0,1)),await n.keyboard("{Shift>}{ArrowDown}{ArrowRight}{/Shift}");const r=()=>e.querySelector('[data-selection="range"]');await o(()=>s(r(),"a range"));const c=()=>getComputedStyle(k(e)).boxShadow,l=()=>getComputedStyle(r()).backgroundColor;s(c()!=="none","outlined while focused");const h=l();await n.click(e.querySelector("[data-outside]")),await o(()=>s(c()==="none","no outline with focus outside (KEY-11)")),s(r(),"the range stays"),s(l()!==h,`range pale: ${l()}`);const w=k(e);s(w.tabIndex===0,"the active cell is the Tab stop to come back"),w.focus(),await o(()=>s(c()!=="none","outlined again")),s(i(e)==="1:2",`same cell, at ${i(e)}`)}},S={tags:["kb:keyboard-escape"],name:"9 · Esc",parameters:{hint:t.jsxDEV(t.Fragment,{children:["Select a range and press ",t.jsxDEV("b",{children:"Esc"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/keyboard.stories.tsx",lineNumber:416,columnNumber:42},void 0),": the range goes, the active cell stays. ",t.jsxDEV("b",{children:"Esc"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/keyboard.stories.tsx",lineNumber:417,columnNumber:24},void 0)," again: no active cell; Tab brings you back to the first cell."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/keyboard.stories.tsx",lineNumber:415,columnNumber:11},void 0)},play:async a=>{if(b(a))return;const{canvasElement:e}=a,r=await u(e);await n.click(d(e,1,1)),await n.keyboard("{Shift>}{ArrowDown}{/Shift}"),await o(()=>s(e.querySelector('[data-selection="range"]'),"a range")),await n.keyboard("{Escape}"),await o(()=>s(!e.querySelector('[data-selection="range"]'),"Esc drops the range (KEY-10)")),s(i(e)==="2:1",`active cell stays, at ${i(e)}`),await n.keyboard("{Escape}"),await o(()=>s(i(e)==="none","second Esc drops the active cell")),await o(()=>s(r.tabIndex===0,"the grid is a Tab stop"))}},N={tags:["kb:keyboard-controls-in-cells"],name:"10 · Controls in cells",parameters:{rowCheckboxes:!0,hint:t.jsxDEV(t.Fragment,{children:["The row checkbox is no Tab stop: click a Name cell, press ← to the checkbox cell and ",t.jsxDEV("b",{children:"Space"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/keyboard.stories.tsx",lineNumber:447,columnNumber:35},void 0)," — the row is ticked; ",t.jsxDEV("b",{children:"Enter"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/keyboard.stories.tsx",lineNumber:447,columnNumber:69},void 0)," unticks it. Tab goes on to the next cell, not to a checkbox."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/keyboard.stories.tsx",lineNumber:445,columnNumber:11},void 0)},play:async a=>{if(b(a))return;const{canvasElement:e}=a;await u(e);const r=()=>F(d(e,0,0)).getByRole("checkbox",{name:"Select row"});s(r().tabIndex===-1,"the row checkbox is no Tab stop (KEY-13)"),await n.click(d(e,0,1)),await n.keyboard("{ArrowLeft}"),await o(()=>s(i(e)==="0:0","on the checkbox cell")),await n.keyboard(" "),await o(()=>s(r().getAttribute("aria-checked")==="true","Space ticks (KEY-12)")),await n.keyboard("{Enter}"),await o(()=>s(r().getAttribute("aria-checked")==="false","Enter unticks")),await n.keyboard("{Tab}"),await o(()=>s(i(e)==="0:1","Tab: the next cell")),s(document.activeElement===k(e),"focus on the cell")}},D={tags:["kb:keyboard-native-table"],name:"11 · Native table",args:{enableCellSelection:!1},parameters:{rowCheckboxes:!0,hint:t.jsxDEV(t.Fragment,{children:[t.jsxDEV("code",{children:"enableCellSelection"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/keyboard.stories.tsx",lineNumber:484,columnNumber:17},void 0)," is off: a plain table. Click a cell — no outline. Tab goes from one row checkbox to the next, like any checkboxes on a page. Switch it on below for the spreadsheet mode."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/keyboard.stories.tsx",lineNumber:483,columnNumber:11},void 0)},play:async a=>{if(b(a))return;const{canvasElement:e}=a,r=await o(()=>{const l=e.querySelector("[role=table]");if(!(l!=null&&l.querySelector("[data-cell]")))throw new Error("table not ready");return l});s(!r.querySelector("[data-cell][tabindex]"),"cells take no focus"),s(!e.querySelector("[role=grid]"),"no grid role");const c=F(r).getAllByRole("checkbox",{name:"Select row"});c[0].focus(),await n.tab(),s(document.activeElement===c[1],"Tab: next row checkbox"),await n.click(r.querySelector('[data-cell][data-col-index="2"]')),s(!r.querySelector("[data-cell][data-selection]"),"a click makes no active cell")}},U={tags:["kb:keyboard-playground"],parameters:{hint:t.jsxDEV(t.Fragment,{children:"Everything together: click, arrows, Tab, ranges; switch the data to 10 000 rows below."},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/keyboard.stories.tsx",lineNumber:514,columnNumber:11},void 0)}};var R,q,O,B,H;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['kb:keyboard-arrows'],
  name: '1 · Active cell and arrows',
  parameters: {
    hint: <>
                Click a cell: it is outlined. Move with the arrows; <b>Home</b> /{' '}
                <b>End</b> jump to the first / last cell of the row.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    await userEvent.click(cell(canvasElement, 0, 1));
    await waitFor(() => check(at(canvasElement) === '0:1', 'clicked cell'));
    await userEvent.keyboard('{ArrowDown}{ArrowRight}');
    await waitFor(() => check(at(canvasElement) === '1:2', \`arrows, at \${at(canvasElement)}\`));
    await waitFor(() => check(document.activeElement === active(canvasElement), 'focus follows'));
    await userEvent.keyboard('{End}');
    await waitFor(() => check(at(canvasElement) === \`1:\${columns.length - 1}\`, 'End'));
    await userEvent.keyboard('{Home}');
    await waitFor(() => check(at(canvasElement) === '1:0', 'Home'));
  }
}`,...(O=(q=p.parameters)==null?void 0:q.docs)==null?void 0:O.source},description:{story:"Click a cell; arrows, Home, End move the active cell.",...(H=(B=p.parameters)==null?void 0:B.docs)==null?void 0:H.description}}};var I,P,L,K,M;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['kb:keyboard-tab-keys'],
  name: '2 · Tab and Shift+Tab',
  parameters: {
    hint: <>
                Click the last cell of a row and press <b>Tab</b>: the first cell of the
                next row. <b>Shift+Tab</b> goes back.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    const last = columns.length - 1;
    await userEvent.click(cell(canvasElement, 1, last));
    await userEvent.keyboard('{Tab}');
    await waitFor(() => check(at(canvasElement) === '2:0', \`Tab wraps, at \${at(canvasElement)}\`));
    await userEvent.keyboard('{Shift>}{Tab}{/Shift}');
    await waitFor(() => check(at(canvasElement) === \`1:\${last}\`, 'Shift+Tab wraps back'));
  }
}`,...(L=(P=g.parameters)==null?void 0:P.docs)==null?void 0:L.source},description:{story:"Tab and Shift+Tab wrap between rows.",...(M=(K=g.parameters)==null?void 0:K.docs)==null?void 0:M.description}}};var Y,_,z,G,J;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['kb:keyboard-pages'],
  name: '3 · PageUp and PageDown',
  parameters: {
    hint: <>
                Click a cell in the first row and press <b>PageDown</b>: one screen
                down, the table scrolls with it. <b>PageUp</b> comes back.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    const el = await grid(canvasElement);
    await userEvent.click(cell(canvasElement, 0, 0));
    await userEvent.keyboard('{PageDown}');
    await waitFor(() => {
      const row = Number(active(canvasElement)?.dataset.rowIndex ?? 0);
      check(row >= 5, \`a screen down, at row \${row}\`);
    });
    await waitFor(() => check(el.scrollTop > 0, 'scrolled'));
    await userEvent.keyboard('{PageUp}');
    await waitFor(() => check(at(canvasElement) === '0:0', 'back up'));
  }
}`,...(z=(_=f.parameters)==null?void 0:_.docs)==null?void 0:z.source},description:{story:"PageUp / PageDown move one screen.",...(J=(G=f.parameters)==null?void 0:G.docs)==null?void 0:J.description}}};var Q,W,X,Z,ee;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ['kb:keyboard-range'],
  name: '4 · Select a range',
  parameters: {
    hint: <>
                Click a cell, then <b>Shift + arrows</b>, or <b>Shift + click</b>{' '}
                another cell, or drag with the mouse: a light blue rectangle.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    const range = () => canvasElement.querySelectorAll('[data-selection="range"]').length;
    await userEvent.click(cell(canvasElement, 1, 1));
    await userEvent.keyboard('{Shift>}{ArrowRight}{ArrowRight}{/Shift}');
    await waitFor(() => check(range() === 2, \`Shift+arrows: 3 cells, got \${range() + 1}\`));
    await userEvent.click(cell(canvasElement, 0, 0));
    const user = userEvent.setup();
    await user.keyboard('{Shift>}');
    await user.click(cell(canvasElement, 2, 2));
    await user.keyboard('{/Shift}');
    await waitFor(() => check(range() === 8, \`Shift+click: 3×3 cells, got \${range() + 1}\`));
  }
}`,...(X=(W=y.parameters)==null?void 0:W.docs)==null?void 0:X.source},description:{story:"Shift + arrows or Shift + click select a range.",...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var ae,te,se,re,ne;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  tags: ['kb:keyboard-large-data'],
  name: '5 · 10 000 rows',
  args: {
    rows: 10000
  },
  parameters: {
    hint: <>
                10 000 rows: scroll fast, or hold <b>PageDown</b> on a cell. Only the
                rows on screen are in the page.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    const el = await grid(canvasElement);
    const rendered = () => new Set(Array.from(canvasElement.querySelectorAll<HTMLElement>('[data-row-index]')).map(c => c.dataset.rowIndex)).size;
    check(rendered() < 100, \`only visible rows, \${rendered()} rendered\`);
    el.scrollTop = el.scrollHeight;
    el.dispatchEvent(new Event('scroll'));
    await waitFor(() => check(canvasElement.querySelector('[data-row-index="9999"]'), 'last row rendered after scrolling'));
    check(rendered() < 100, 'still only visible rows');
  }
}`,...(se=(te=v.parameters)==null?void 0:te.docs)==null?void 0:se.source},description:{story:"Only the visible rows are rendered.",...(ne=(re=v.parameters)==null?void 0:re.docs)==null?void 0:ne.description}}};var oe,ce,ie,le,de;E.parameters={...E.parameters,docs:{...(oe=E.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  tags: ['kb:keyboard-from-outside'],
  name: '6 · Focus a cell from outside',
  parameters: {
    goTo: true,
    hint: <>
                The button calls <code>ref.focusCell(rowId, &apos;rate&apos;)</code>:
                the table scrolls to row 25 and its Rate cell becomes active.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    await userEvent.click(within(canvasElement).getByRole('button', {
      name: /^Go to/
    }));
    await waitFor(() => check(at(canvasElement) === \`24:\${columns.length - 2}\`, \`row 25, Rate: at \${at(canvasElement)}\`));
    check(document.activeElement === active(canvasElement), 'focused');
  }
}`,...(ie=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:ie.source},description:{story:"`ref.focusCell` from outside.",...(de=(le=E.parameters)==null?void 0:le.docs)==null?void 0:de.description}}};var be,ue,me,ke,he;x.parameters={...x.parameters,docs:{...(be=x.parameters)==null?void 0:be.docs,source:{originalSource:`{
  tags: ['kb:keyboard-leave-and-come-back'],
  name: '8 · Leave and come back',
  parameters: {
    outsideButton: true,
    hint: <>
                Select a range (click, then Shift + arrows), then click the button
                above: the outline goes, the range stays pale. Tab or click back into
                the table: you go on from the same cell.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    await userEvent.click(cell(canvasElement, 0, 1));
    await userEvent.keyboard('{Shift>}{ArrowDown}{ArrowRight}{/Shift}');
    const range = () => canvasElement.querySelector<HTMLElement>('[data-selection="range"]');
    await waitFor(() => check(range(), 'a range'));
    const outline = () => getComputedStyle(active(canvasElement)!).boxShadow;
    const rangeBg = () => getComputedStyle(range()!).backgroundColor;
    check(outline() !== 'none', 'outlined while focused');
    const focusedBg = rangeBg();
    await userEvent.click(canvasElement.querySelector<HTMLElement>('[data-outside]')!);
    await waitFor(() => check(outline() === 'none', 'no outline with focus outside (KEY-11)'));
    check(range(), 'the range stays');
    check(rangeBg() !== focusedBg, \`range pale: \${rangeBg()}\`);
    const back = active(canvasElement)!;
    check(back.tabIndex === 0, 'the active cell is the Tab stop to come back');
    back.focus();
    await waitFor(() => check(outline() !== 'none', 'outlined again'));
    check(at(canvasElement) === '1:2', \`same cell, at \${at(canvasElement)}\`);
  }
}`,...(me=(ue=x.parameters)==null?void 0:ue.docs)==null?void 0:me.source},description:{story:"Focus leaves: the outline goes, the range stays pale; back on the same cell.",...(he=(ke=x.parameters)==null?void 0:ke.docs)==null?void 0:he.description}}};var we,pe,ge,fe,ye;S.parameters={...S.parameters,docs:{...(we=S.parameters)==null?void 0:we.docs,source:{originalSource:`{
  tags: ['kb:keyboard-escape'],
  name: '9 · Esc',
  parameters: {
    hint: <>
                Select a range and press <b>Esc</b>: the range goes, the active cell
                stays. <b>Esc</b> again: no active cell; Tab brings you back to the
                first cell.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    const table = await grid(canvasElement);
    await userEvent.click(cell(canvasElement, 1, 1));
    await userEvent.keyboard('{Shift>}{ArrowDown}{/Shift}');
    await waitFor(() => check(canvasElement.querySelector('[data-selection="range"]'), 'a range'));
    await userEvent.keyboard('{Escape}');
    await waitFor(() => check(!canvasElement.querySelector('[data-selection="range"]'), 'Esc drops the range (KEY-10)'));
    check(at(canvasElement) === '2:1', \`active cell stays, at \${at(canvasElement)}\`);
    await userEvent.keyboard('{Escape}');
    await waitFor(() => check(at(canvasElement) === 'none', 'second Esc drops the active cell'));
    await waitFor(() => check(table.tabIndex === 0, 'the grid is a Tab stop'));
  }
}`,...(ge=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:ge.source},description:{story:"Esc: the range first, then the active cell.",...(ye=(fe=S.parameters)==null?void 0:fe.docs)==null?void 0:ye.description}}};var ve,Ee,xe,Se,Ne;N.parameters={...N.parameters,docs:{...(ve=N.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  tags: ['kb:keyboard-controls-in-cells'],
  name: '10 · Controls in cells',
  parameters: {
    rowCheckboxes: true,
    hint: <>
                The row checkbox is no Tab stop: click a Name cell, press ← to the
                checkbox cell and <b>Space</b> — the row is ticked; <b>Enter</b> unticks
                it. Tab goes on to the next cell, not to a checkbox.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    const box = () => within(cell(canvasElement, 0, 0)).getByRole('checkbox', {
      name: 'Select row'
    });
    check(box().tabIndex === -1, 'the row checkbox is no Tab stop (KEY-13)');
    await userEvent.click(cell(canvasElement, 0, 1));
    await userEvent.keyboard('{ArrowLeft}');
    await waitFor(() => check(at(canvasElement) === '0:0', 'on the checkbox cell'));
    await userEvent.keyboard(' ');
    await waitFor(() => check(box().getAttribute('aria-checked') === 'true', 'Space ticks (KEY-12)'));
    await userEvent.keyboard('{Enter}');
    await waitFor(() => check(box().getAttribute('aria-checked') === 'false', 'Enter unticks'));
    await userEvent.keyboard('{Tab}');
    await waitFor(() => check(at(canvasElement) === '0:1', 'Tab: the next cell'));
    check(document.activeElement === active(canvasElement), 'focus on the cell');
  }
}`,...(xe=(Ee=N.parameters)==null?void 0:Ee.docs)==null?void 0:xe.source},description:{story:"Controls in cells: no Tab stops; Space / Enter on the cell press them.",...(Ne=(Se=N.parameters)==null?void 0:Se.docs)==null?void 0:Ne.description}}};var De,Te,Ce,Ue,Fe;D.parameters={...D.parameters,docs:{...(De=D.parameters)==null?void 0:De.docs,source:{originalSource:`{
  tags: ['kb:keyboard-native-table'],
  name: '11 · Native table',
  args: {
    enableCellSelection: false
  },
  parameters: {
    rowCheckboxes: true,
    hint: <>
                <code>enableCellSelection</code> is off: a plain table. Click a cell —
                no outline. Tab goes from one row checkbox to the next, like any
                checkboxes on a page. Switch it on below for the spreadsheet mode.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    const table = await waitFor(() => {
      const el = canvasElement.querySelector<HTMLElement>('[role=table]');
      if (!el?.querySelector('[data-cell]')) throw new Error('table not ready');
      return el;
    });
    check(!table.querySelector('[data-cell][tabindex]'), 'cells take no focus');
    check(!canvasElement.querySelector('[role=grid]'), 'no grid role');
    const boxes = within(table).getAllByRole('checkbox', {
      name: 'Select row'
    });
    boxes[0].focus();
    await userEvent.tab();
    check(document.activeElement === boxes[1], 'Tab: next row checkbox');
    await userEvent.click(table.querySelector('[data-cell][data-col-index="2"]')!);
    check(!table.querySelector('[data-cell][data-selection]'), 'a click makes no active cell');
  }
}`,...(Ce=(Te=D.parameters)==null?void 0:Te.docs)==null?void 0:Ce.source},description:{story:"enableCellSelection={false}: the browser alone handles focus and Tab.",...(Fe=(Ue=D.parameters)==null?void 0:Ue.docs)==null?void 0:Fe.description}}};var je,Ae,$e;U.parameters={...U.parameters,docs:{...(je=U.parameters)==null?void 0:je.docs,source:{originalSource:`{
  tags: ['kb:keyboard-playground'],
  parameters: {
    hint: <>
                Everything together: click, arrows, Tab, ranges; switch the data to 10
                000 rows below.
            </>
  }
}`,...($e=(Ae=U.parameters)==null?void 0:Ae.docs)==null?void 0:$e.source}}};const ca=["Arrows","TabKeys","Pages","Range","LargeData","FromOutside","LeaveAndComeBack","Escape","ControlsInCells","NativeTable","Playground"];export{p as Arrows,N as ControlsInCells,S as Escape,E as FromOutside,v as LargeData,x as LeaveAndComeBack,D as NativeTable,f as Pages,U as Playground,y as Range,g as TabKeys,ca as __namedExportsOrder,oa as default};
