import{j as t}from"./jsx-runtime-Cnbe3ryz.js";import{u as r,w as c,a as $}from"./index-iBx7lKYd.js";import{r as P}from"./index-3dRrDZpt.js";import{T as Oe}from"./TableCore-Y75h2oha.js";import{U as De,c as Be}from"./RowSelection-DM7ASqJ8.js";import{T as He}from"./TableStatusBar-4NxO8OsQ.js";import{T as q}from"./toolbar-C5VRlWnq.js";import{a as b,m as Ie}from"./employees-CL5oqWiT.js";import{c as h}from"./play-kit-Bu4SXy9H.js";import{w as Ue,d as Le,S as Ke}from"./scene-kit-BsKxVgS1.js";import{D as Ne}from"./reference-kit-BHZHy2IZ.js";import"./index-C0mjCMcL.js";import"./index-DKTdOcjh.js";import"./table-core-base-DFRq_Vzl.js";import"./places-Dp9r7e0L.js";import"./styles-HzBmg0bt.js";import"./icons-849xEHsl.js";import"./menu-DvyBTqNz.js";import"./status-bar-CYB7-jUm.js";import"./panel-controls-DNzRkyVB.js";import"./SortingPanel-CpobHppH.js";import"./fixtures-P-DSdYmm.js";import"./types-reference-CMrm5GSt.js";const F=[b("name","Name",190),b("team","Team",130),b("role","Role",160),b("level","Level",100),b("country","Country",130),b("rate","Rate",90),b("start","Start",120)],Me=[Be(),...F],Ye=a=>t.jsx(He,{table:a}),_e=({args:a,hint:e,goTo:o,rowCheckboxes:s,outsideButton:i})=>{const u=P.useMemo(()=>Ie(a.rows),[a.rows]),g=P.useRef(null),R=u[Math.min(24,u.length-1)];return t.jsx(Ke,{hint:e,children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[i&&t.jsx("div",{style:{paddingBottom:8},children:t.jsx(q,{"data-outside":!0,children:"A button outside the table"})}),o&&t.jsx("div",{style:{paddingBottom:8},children:t.jsxs(q,{"data-go-to":!0,onClick:()=>{var j;return(j=g.current)==null?void 0:j.focusCell(R.id,"rate")},children:["Go to ",R.name," · Rate"]})}),t.jsx("div",{style:{flex:1,minHeight:0},children:t.jsx(Oe,{ref:g,data:u,columns:s?Me:F,initialState:s?{columnPinning:{left:[De]}}:void 0,getRowId:j=>j.id,rowHeight:a.rowHeight,readOnly:a.readOnly,enableCellSelection:a.enableCellSelection,statusBar:Ye})})]})})},O=(a,e)=>`import { useRef } from 'react'
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
}`,ua={title:"Tables/Table Core/Features/Keyboard & Selection",tags:["autodocs"],decorators:[Ue],render:function(e,{parameters:o}){return t.jsx(_e,{args:e,hint:o.hint,goTo:!!o.goTo,rowCheckboxes:o.rowCheckboxes===!0,outsideButton:o.outsideButton===!0})},args:{rows:30,rowHeight:48,readOnly:!1,enableCellSelection:!0},argTypes:{rows:{name:"data: rows",description:"Demo data only: how many rows.",options:[30,1e4],control:{type:"radio",labels:{30:"30",1e4:"10 000"}},table:{category:"demo data"}},rowHeight:{description:"Row height for virtualization, px.",control:{type:"number",min:32,max:64,step:4}},readOnly:{description:"Navigation and ranges still work; editing is off.",control:"boolean"},enableCellSelection:{name:"enableCellSelection",description:"On: the spreadsheet mode (active cell, ranges, arrows, Tab between cells). Off: a native table — no cell focus, every checkbox and button is a Tab stop, roles table / row / cell.",control:"boolean",table:{category:"switches"}}},parameters:{layout:"fullscreen",sceneCode:O,docs:{codePanel:!0,story:{inline:!1,height:"600px"},source:Le(O),description:{component:`${Ne}


**Keyboard & Selection**: the user moves around the table like in a spreadsheet and selects ranges of cells with the mouse or the keyboard.

- A click makes a cell **active** (outlined). Arrows move it, and the table scrolls to keep it visible. Home / End go to the first / last cell of the row, PageUp / PageDown one screen.
- **Tab / Shift+Tab** go to the next / previous cell and wrap to the next / previous row; from the last / first cell the focus leaves the table.
- The outline shows only while the table holds the focus; the range stays, pale, when the focus is elsewhere. **Esc** drops the range, then the active cell.
- Checkboxes and buttons in body cells are no Tab stops: **Space** on the active cell presses them (**Enter** when the cell cannot be edited).
- \`enableCellSelection={false}\`: a native table, the browser alone handles focus and Tab.
- **Shift + arrows**, **Shift + click** or a **mouse drag** select a rectangular range (light blue).
- Only the visible rows are rendered, so 10 000 rows scroll smoothly.
- From outside: \`ref.focusCell(rowId, columnId)\` and \`ref.scrollToRow(rowId)\`.`}}}},n=(a,e)=>{if(!a)throw new Error(`Story check failed: ${e}`)},w=a=>c(()=>{const e=a.querySelector("[role=grid]");if(!e||!e.querySelector("[data-cell]"))throw new Error("grid not ready");return e}),d=(a,e,o)=>a.querySelector(`[data-row-index="${e}"][data-col-index="${o}"]`),m=a=>a.querySelector('[data-selection="active"]'),l=a=>{const e=m(a);return e?`${e.dataset.rowIndex}:${e.dataset.colIndex}`:"none"},k={tags:["kb:keyboard-arrows"],name:"1 · Active cell and arrows",parameters:{hint:t.jsxs(t.Fragment,{children:["Click a cell: it is outlined. Move with the arrows; ",t.jsx("b",{children:"Home"})," /"," ",t.jsx("b",{children:"End"})," jump to the first / last cell of the row."]})},play:async a=>{if(h(a))return;const{canvasElement:e}=a;await w(e),await r.click(d(e,0,1)),await c(()=>n(l(e)==="0:1","clicked cell")),await r.keyboard("{ArrowDown}{ArrowRight}"),await c(()=>n(l(e)==="1:2",`arrows, at ${l(e)}`)),await c(()=>n(document.activeElement===m(e),"focus follows")),await r.keyboard("{End}"),await c(()=>n(l(e)===`1:${F.length-1}`,"End")),await r.keyboard("{Home}"),await c(()=>n(l(e)==="1:0","Home"))}},p={tags:["kb:keyboard-tab-keys"],name:"2 · Tab and Shift+Tab",parameters:{hint:t.jsxs(t.Fragment,{children:["Click the last cell of a row and press ",t.jsx("b",{children:"Tab"}),": the first cell of the next row. ",t.jsx("b",{children:"Shift+Tab"})," goes back."]})},play:async a=>{if(h(a))return;const{canvasElement:e}=a;await w(e);const o=F.length-1;await r.click(d(e,1,o)),await r.keyboard("{Tab}"),await c(()=>n(l(e)==="2:0",`Tab wraps, at ${l(e)}`)),await r.keyboard("{Shift>}{Tab}{/Shift}"),await c(()=>n(l(e)===`1:${o}`,"Shift+Tab wraps back"))}},y={tags:["kb:keyboard-pages"],name:"3 · PageUp and PageDown",parameters:{hint:t.jsxs(t.Fragment,{children:["Click a cell in the first row and press ",t.jsx("b",{children:"PageDown"}),": one screen down, the table scrolls with it. ",t.jsx("b",{children:"PageUp"})," comes back."]})},play:async a=>{if(h(a))return;const{canvasElement:e}=a,o=await w(e);await r.click(d(e,0,0)),await r.keyboard("{PageDown}"),await c(()=>{var i;const s=Number(((i=m(e))==null?void 0:i.dataset.rowIndex)??0);n(s>=5,`a screen down, at row ${s}`)}),await r.keyboard("{PageDown}{PageDown}"),await c(()=>n(o.scrollTop>0,"scrolled")),await r.keyboard("{PageUp}{PageUp}{PageUp}"),await c(()=>n(l(e)==="0:0","back up"))}},f={tags:["kb:keyboard-range"],name:"4 · Select a range",parameters:{hint:t.jsxs(t.Fragment,{children:["Click a cell, then ",t.jsx("b",{children:"Shift + arrows"}),", or ",t.jsx("b",{children:"Shift + click"})," ","another cell, or drag with the mouse: a light blue rectangle."]})},play:async a=>{if(h(a))return;const{canvasElement:e}=a;await w(e);const o=()=>e.querySelectorAll('[data-selection="range"]').length;await r.click(d(e,1,1)),await r.keyboard("{Shift>}{ArrowRight}{ArrowRight}{/Shift}"),await c(()=>n(o()===2,`Shift+arrows: 3 cells, got ${o()+1}`)),await r.click(d(e,0,0));const s=r.setup();await s.keyboard("{Shift>}"),await s.click(d(e,2,2)),await s.keyboard("{/Shift}"),await c(()=>n(o()===8,`Shift+click: 3×3 cells, got ${o()+1}`))}},v={tags:["kb:keyboard-large-data"],name:"5 · 10 000 rows",args:{rows:1e4},parameters:{hint:t.jsxs(t.Fragment,{children:["10 000 rows: scroll fast, or hold ",t.jsx("b",{children:"PageDown"})," on a cell. Only the rows on screen are in the page."]})},play:async a=>{if(h(a))return;const{canvasElement:e}=a,o=await w(e),s=()=>new Set(Array.from(e.querySelectorAll("[data-row-index]")).map(i=>i.dataset.rowIndex)).size;n(s()<100,`only visible rows, ${s()} rendered`),o.scrollTop=o.scrollHeight,o.dispatchEvent(new Event("scroll")),await c(()=>n(e.querySelector('[data-row-index="9999"]'),"last row rendered after scrolling")),n(s()<100,"still only visible rows")}},E={tags:["kb:keyboard-from-outside"],name:"6 · Focus a cell from outside",parameters:{goTo:!0,hint:t.jsxs(t.Fragment,{children:["The button calls ",t.jsx("code",{children:"ref.focusCell(rowId, 'rate')"}),": the table scrolls to row 25 and its Rate cell becomes active."]})},play:async a=>{if(h(a))return;const{canvasElement:e}=a;await w(e),await r.click($(e).getByRole("button",{name:/^Go to/})),await c(()=>n(l(e)===`24:${F.length-2}`,`row 25, Rate: at ${l(e)}`)),n(document.activeElement===m(e),"focused")}},x={tags:["kb:keyboard-leave-and-come-back"],name:"8 · Leave and come back",parameters:{outsideButton:!0,hint:t.jsx(t.Fragment,{children:"Select a range (click, then Shift + arrows), then click the button above: the outline goes, the range stays pale. Tab or click back into the table: you go on from the same cell."})},play:async a=>{if(h(a))return;const{canvasElement:e}=a;await w(e),await r.click(d(e,0,1)),await r.keyboard("{Shift>}{ArrowDown}{ArrowRight}{/Shift}");const o=()=>e.querySelector('[data-selection="range"]');await c(()=>n(o(),"a range"));const s=()=>getComputedStyle(m(e)).boxShadow,i=()=>getComputedStyle(o()).backgroundColor;n(s()!=="none","outlined while focused");const u=i();await r.click(e.querySelector("[data-outside]")),await c(()=>n(s()==="none","no outline with focus outside (KEY-11)")),n(o(),"the range stays"),n(i()!==u,`range pale: ${i()}`);const g=m(e);n(g.tabIndex===0,"the active cell is the Tab stop to come back"),g.focus(),await c(()=>n(s()!=="none","outlined again")),n(l(e)==="1:2",`same cell, at ${l(e)}`)}},S={tags:["kb:keyboard-escape"],name:"9 · Esc",parameters:{hint:t.jsxs(t.Fragment,{children:["Select a range and press ",t.jsx("b",{children:"Esc"}),": the range goes, the active cell stays. ",t.jsx("b",{children:"Esc"})," again: no active cell; Tab brings you back to the first cell."]})},play:async a=>{if(h(a))return;const{canvasElement:e}=a,o=await w(e);await r.click(d(e,1,1)),await r.keyboard("{Shift>}{ArrowDown}{/Shift}"),await c(()=>n(e.querySelector('[data-selection="range"]'),"a range")),await r.keyboard("{Escape}"),await c(()=>n(!e.querySelector('[data-selection="range"]'),"Esc drops the range (KEY-10)")),n(l(e)==="2:1",`active cell stays, at ${l(e)}`),await r.keyboard("{Escape}"),await c(()=>n(l(e)==="none","second Esc drops the active cell")),await c(()=>n(o.tabIndex===0,"the grid is a Tab stop"))}},T={tags:["kb:keyboard-controls-in-cells"],name:"10 · Controls in cells",parameters:{rowCheckboxes:!0,hint:t.jsxs(t.Fragment,{children:["The row checkbox is no Tab stop: click a Name cell, press ← to the checkbox cell and ",t.jsx("b",{children:"Space"})," — the row is ticked; ",t.jsx("b",{children:"Enter"})," unticks it. Tab goes on to the next cell, not to a checkbox."]})},play:async a=>{if(h(a))return;const{canvasElement:e}=a;await w(e);const o=()=>$(d(e,0,0)).getByRole("checkbox",{name:"Select row"});n(o().tabIndex===-1,"the row checkbox is no Tab stop (KEY-13)"),await r.click(d(e,0,1)),await r.keyboard("{ArrowLeft}"),await c(()=>n(l(e)==="0:0","on the checkbox cell")),await r.keyboard(" "),await c(()=>n(o().getAttribute("aria-checked")==="true","Space ticks (KEY-12)")),await r.keyboard("{Enter}"),await c(()=>n(o().getAttribute("aria-checked")==="false","Enter unticks")),await r.keyboard("{Tab}"),await c(()=>n(l(e)==="0:1","Tab: the next cell")),n(document.activeElement===m(e),"focus on the cell")}},C={tags:["kb:keyboard-native-table"],name:"11 · Native table",args:{enableCellSelection:!1},parameters:{rowCheckboxes:!0,hint:t.jsxs(t.Fragment,{children:[t.jsx("code",{children:"enableCellSelection"})," is off: a plain table. Click a cell — no outline. Tab goes from one row checkbox to the next, like any checkboxes on a page. Switch it on below for the spreadsheet mode."]})},play:async a=>{if(h(a))return;const{canvasElement:e}=a,o=await c(()=>{const i=e.querySelector("[role=table]");if(!(i!=null&&i.querySelector("[data-cell]")))throw new Error("table not ready");return i});n(!o.querySelector("[data-cell][tabindex]"),"cells take no focus"),n(!e.querySelector("[role=grid]"),"no grid role");const s=$(o).getAllByRole("checkbox",{name:"Select row"});s[0].focus(),await r.tab(),n(document.activeElement===s[1],"Tab: next row checkbox"),await r.click(o.querySelector('[data-cell][data-col-index="2"]')),n(!o.querySelector("[data-cell][data-selection]"),"a click makes no active cell")}},A={tags:["kb:keyboard-playground"],parameters:{hint:t.jsx(t.Fragment,{children:"Everything together: click, arrows, Tab, ranges; switch the data to 10 000 rows below."})}};var D,B,H,I,U;k.parameters={...k.parameters,docs:{...(D=k.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(H=(B=k.parameters)==null?void 0:B.docs)==null?void 0:H.source},description:{story:"Click a cell; arrows, Home, End move the active cell.",...(U=(I=k.parameters)==null?void 0:I.docs)==null?void 0:U.description}}};var L,K,N,M,Y;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(N=(K=p.parameters)==null?void 0:K.docs)==null?void 0:N.source},description:{story:"Tab and Shift+Tab wrap between rows.",...(Y=(M=p.parameters)==null?void 0:M.docs)==null?void 0:Y.description}}};var _,z,G,J,Q;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
    // One screen may fit the pane (a tall one): go on until the active row is below it.
    await userEvent.keyboard('{PageDown}{PageDown}');
    await waitFor(() => check(el.scrollTop > 0, 'scrolled'));
    await userEvent.keyboard('{PageUp}{PageUp}{PageUp}');
    await waitFor(() => check(at(canvasElement) === '0:0', 'back up'));
  }
}`,...(G=(z=y.parameters)==null?void 0:z.docs)==null?void 0:G.source},description:{story:"PageUp / PageDown move one screen.",...(Q=(J=y.parameters)==null?void 0:J.docs)==null?void 0:Q.description}}};var V,W,X,Z,ee;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(X=(W=f.parameters)==null?void 0:W.docs)==null?void 0:X.source},description:{story:"Shift + arrows or Shift + click select a range.",...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var ae,te,ne,oe,re;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ne=(te=v.parameters)==null?void 0:te.docs)==null?void 0:ne.source},description:{story:"Only the visible rows are rendered.",...(re=(oe=v.parameters)==null?void 0:oe.docs)==null?void 0:re.description}}};var ce,se,le,ie,de;E.parameters={...E.parameters,docs:{...(ce=E.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(le=(se=E.parameters)==null?void 0:se.docs)==null?void 0:le.source},description:{story:"`ref.focusCell` from outside.",...(de=(ie=E.parameters)==null?void 0:ie.docs)==null?void 0:de.description}}};var he,we,be,me,ue;x.parameters={...x.parameters,docs:{...(he=x.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(be=(we=x.parameters)==null?void 0:we.docs)==null?void 0:be.source},description:{story:"Focus leaves: the outline goes, the range stays pale; back on the same cell.",...(ue=(me=x.parameters)==null?void 0:me.docs)==null?void 0:ue.description}}};var ge,ke,pe,ye,fe;S.parameters={...S.parameters,docs:{...(ge=S.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(pe=(ke=S.parameters)==null?void 0:ke.docs)==null?void 0:pe.source},description:{story:"Esc: the range first, then the active cell.",...(fe=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:fe.description}}};var ve,Ee,xe,Se,Te;T.parameters={...T.parameters,docs:{...(ve=T.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(xe=(Ee=T.parameters)==null?void 0:Ee.docs)==null?void 0:xe.source},description:{story:"Controls in cells: no Tab stops; Space / Enter on the cell press them.",...(Te=(Se=T.parameters)==null?void 0:Se.docs)==null?void 0:Te.description}}};var Ce,Fe,je,Ae,$e;C.parameters={...C.parameters,docs:{...(Ce=C.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(je=(Fe=C.parameters)==null?void 0:Fe.docs)==null?void 0:je.source},description:{story:"enableCellSelection={false}: the browser alone handles focus and Tab.",...($e=(Ae=C.parameters)==null?void 0:Ae.docs)==null?void 0:$e.description}}};var Re,Pe,qe;A.parameters={...A.parameters,docs:{...(Re=A.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  tags: ['kb:keyboard-playground'],
  parameters: {
    hint: <>
                Everything together: click, arrows, Tab, ranges; switch the data to 10
                000 rows below.
            </>
  }
}`,...(qe=(Pe=A.parameters)==null?void 0:Pe.docs)==null?void 0:qe.source}}};const ga=["Arrows","TabKeys","Pages","Range","LargeData","FromOutside","LeaveAndComeBack","Escape","ControlsInCells","NativeTable","Playground"];export{k as Arrows,T as ControlsInCells,S as Escape,E as FromOutside,v as LargeData,x as LeaveAndComeBack,C as NativeTable,y as Pages,A as Playground,f as Range,p as TabKeys,ga as __namedExportsOrder,ua as default};
