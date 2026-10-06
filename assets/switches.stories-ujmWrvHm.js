import{j as r}from"./jsx-runtime-Cnbe3ryz.js";import{u as m,e as l,a as L,w as d}from"./index-iBx7lKYd.js";import{r as F}from"./index-3dRrDZpt.js";import{T as A}from"./TableCore-Y75h2oha.js";import{U as z,c as H}from"./RowSelection-DM7ASqJ8.js";import{T as D}from"./TableStatusBar-4NxO8OsQ.js";import{T as P}from"./TableToolbar-DTYEmPN-.js";import{m as _,a as i}from"./employees-CL5oqWiT.js";import{c as N}from"./play-kit-Bu4SXy9H.js";import{w as I,d as $,t as U,S as J}from"./scene-kit-BsKxVgS1.js";import{D as W}from"./reference-kit-BHZHy2IZ.js";import"./index-C0mjCMcL.js";import"./index-DKTdOcjh.js";import"./table-core-base-DFRq_Vzl.js";import"./places-Dp9r7e0L.js";import"./styles-HzBmg0bt.js";import"./icons-849xEHsl.js";import"./menu-DvyBTqNz.js";import"./status-bar-CYB7-jUm.js";import"./panel-controls-DNzRkyVB.js";import"./SortingPanel-CpobHppH.js";import"./toolbar-C5VRlWnq.js";import"./pin-controls-NGLUwJXC.js";import"./fixtures-P-DSdYmm.js";import"./types-reference-CMrm5GSt.js";const g=["enableSorting","enableMultiSort","enableGrouping","enableMultiGroup","enableColumnReorder","enableColumnResizing","enableColumnPinning","enableHiding","enableCellSelection","enableRowSelection","enableRowNumbers","enableGroupCollapse","enableGroupSelect","enableGroupLevelCollapse"],Y=Object.fromEntries(g.map(e=>[e,!0])),K=Object.fromEntries(g.map(e=>[e,!1])),Q=[H(),i("name","Name",200),i("team","Team",120),i("role","Role",150),i("level","Level",90),i("country","Country",120),i("start","Start",110)],V=e=>r.jsx(P,{table:e}),X=e=>r.jsx(D,{table:e}),Z=({args:e,hint:t})=>{const a=F.useMemo(()=>_(40),[]),s=Object.fromEntries(g.map(n=>[n,e[n]]));return r.jsx(J,{hint:t,children:r.jsx(A,{data:a,columns:Q,getRowId:n=>n.id,...s,readOnly:e.readOnly,columnMenu:e.columnMenu?void 0:!1,initialState:{sorting:e.sorting,columnPinning:{left:[z,"name"],right:[]}},toolbar:e.toolbar?V:void 0,statusBar:e.toolbar?X:void 0},JSON.stringify(e))})},w=e=>{const t=g.filter(n=>!e[n]).map(n=>`
  ${n}={false}`);e.readOnly&&t.push(`
  readOnly`),e.columnMenu||t.push(`
  columnMenu={false}`);const a=e.toolbar?`
  toolbar={(table) => <TableToolbar table={table} />}
  statusBar={(table) => <TableStatusBar table={table} />}`:"",s=e.sorting.length?`
  initialState={{ sorting: ${U(e.sorting,"  ")} }}`:"";return`import { TableCore } from '@pnl-simulation/table-core'

<TableCore
  data={employees}
  columns={columns}
  getRowId={(e) => e.id}${t.join("")}${s}${a}
/>`},o=(e,t="switches")=>({description:e,control:"boolean",table:{category:t}}),Be={title:"Tables/Table Core/Features/Feature switches",tags:["autodocs"],decorators:[I],render:(e,{parameters:t})=>r.jsx(Z,{args:e,hint:t.hint}),args:{...Y,readOnly:!1,columnMenu:!0,toolbar:!0,sorting:[]},argTypes:{enableSorting:o("Header click, column menu and Sort panel sort rows. Off: state.sorting still applies."),enableMultiSort:o('Several sorts: Shift+click, "Then by …" in the menu, adding in the panel. Off: a sort replaces the previous one.'),enableGrouping:o("Group from the column menu and the Group panel. Off: state.grouping still applies."),enableMultiGroup:o(`Several groupings: "Then by …" in the menu, adding in the Group panel. Off: a grouping replaces the previous one; the screen's own (hidden) grouping stays.`),enableColumnReorder:o("Drag columns by the header grip or in the Columns panel."),enableColumnResizing:o("Drag the header edge to resize."),enableColumnPinning:o("Freeze / Unfreeze in the Columns panel."),enableHiding:o("Show / hide columns in the Columns panel."),enableCellSelection:o("Active cell, arrows, Tab, ranges (Shift+click, drag)."),enableRowSelection:o("Row checkboxes and the bulk bar."),enableRowNumbers:o("Row numbers (the utility column keeps checkboxes)."),enableGroupCollapse:o("−/+ on each group in a lane."),enableGroupSelect:o("The group checkbox in a lane."),enableGroupLevelCollapse:o("−/+ in a lane header (the whole level)."),readOnly:o("No editing and no row selection.","other"),columnMenu:o("Header click opens the column menu (false = no menu).","other"),toolbar:o("Toolbar and status bar (they are slots: leave them out).","other"),sorting:{name:"initialState.sorting",control:"object",table:{category:"state"}}},parameters:{layout:"fullscreen",sceneCode:w,docs:{codePanel:!0,story:{inline:!1,height:"520px"},source:$(w),description:{component:`${W}


Every interactive feature of Table Core has a switch. All are **on** by default; a screen turns off what it does not support.

| Prop | Off means |
|---|---|
| \`enableSorting\` | headers do not sort, no *Sort ›* in the menu, no *Sort* button; \`state.sorting\` still applies |
| \`enableMultiSort\` | one sort at a time: Shift+click is a plain click, no *Then by …*, the Sort panel replaces |
| \`enableGrouping\` | no *Group by*, no *Group* button; \`state.grouping\` still applies |
| \`enableMultiGroup\` | one grouping of the user at a time: no *Then by …*, the Group panel replaces; a hidden grouping of the screen (Issues) does not count |
| \`enableColumnReorder\` | no drag grip, no ⋮⋮ in the Columns panel |
| \`enableColumnResizing\` | no resize edge |
| \`enableColumnPinning\` | no *Freeze* in the Columns panel; \`state.columnPinning\` still applies |
| \`enableHiding\` | column checkboxes in the Columns panel are locked |
| \`enableCellSelection\` | no active cell, no keyboard navigation, no ranges |
| \`enableRowSelection\` | no row checkboxes, no bulk bar |
| \`enableRowNumbers\` | no row numbers and no #; the utility column keeps its checkboxes |
| \`enableGroupCollapse\` | no −/+ on the groups; \`state.expanded\` still applies |
| \`enableGroupSelect\` | no group checkbox; rows stay selectable |
| \`enableGroupLevelCollapse\` | no −/+ in the lane headers |
| \`readOnly\` | no editing, no row selection |
| \`columnMenu={false}\` | no header menu |
| \`toolbar\`, \`statusBar\` | slots: leave them out for none |

**Dumb table**: all of them off — the table only shows rows (scroll, fill width, frozen columns from state still work).`}}}},j=e=>d(()=>{const t=e.querySelector("[role=grid], [role=table]");if(!(t!=null&&t.querySelector("[data-cell]")))throw new Error("grid not ready");return t}),h=(e,t)=>e.querySelector(`[data-header-id="${t}"]`),c={tags:["kb:switches-dumb"],name:"1 · Dumb table",args:{...K,readOnly:!0,columnMenu:!1,toolbar:!1},parameters:{hint:r.jsx(r.Fragment,{children:"Every switch off: click a header — nothing sorts; no grips, no resize edge, no checkboxes; clicking a cell makes no active cell. Turn any switch back on below."})},play:async e=>{if(N(e))return;const t=e.canvasElement,a=await j(t),s=h(t,"name"),n=s.querySelector("button");n&&await m.click(n),await l(s.getAttribute("aria-sort")).toBe("none"),await l(document.querySelector("[role=menu]")).toBeNull(),await l(a.querySelector("[data-grip]")).toBeNull(),await l(a.querySelector("[data-resizer]")).toBeNull(),await l(a.querySelector('[role="checkbox"]')).toBeNull();const b=a.querySelector("[data-cell]");await m.click(b),await l(a.querySelector('[data-selection="active"]')).toBeNull()}},u={tags:["kb:switches-one-sort"],name:"2 · One sort at a time",args:{enableMultiSort:!1,sorting:[{id:"team",desc:!1}]},parameters:{hint:r.jsxs(r.Fragment,{children:[r.jsxs("code",{children:["enableMultiSort=","{false}"]}),". Sorted by Team. Open"," ",r.jsx("b",{children:"Level"})," → ",r.jsx("b",{children:"Sort ›"}),": no ",r.jsx("i",{children:"Then by"}),", a new sort replaces Team. Shift+click opens the menu like a plain click."]})},play:async e=>{var b,y;if(N(e))return;const t=e.canvasElement;await j(t);const a=L(document.body),s=(b=h(t,"level"))==null?void 0:b.querySelector("button"),n=m.setup();await n.keyboard("{Shift>}"),await n.click(s),await n.keyboard("{/Shift}"),await d(()=>l(a.getByRole("menu")).toBeTruthy()),await m.click(a.getByRole("menuitem",{name:"Sort"})),await d(()=>l(a.getAllByRole("menuitemradio").length).toBeGreaterThan(0)),await l(a.queryByRole("menuitem",{name:/^Then by/})).toBeNull(),await m.click(a.getAllByRole("menuitemradio")[0]),await d(()=>{var f;return l((f=h(t,"level"))==null?void 0:f.getAttribute("aria-sort")).toBe("ascending")}),await l((y=h(t,"team"))==null?void 0:y.getAttribute("aria-sort")).toBe("none")}},p={tags:["kb:switches-playground"],parameters:{hint:r.jsx(r.Fragment,{children:"Everything on. Turn switches off below and watch the table."})}};var S,k,T,v,x;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['kb:switches-dumb'],
  name: '1 · Dumb table',
  args: {
    ...ALL_OFF,
    readOnly: true,
    columnMenu: false,
    toolbar: false
  },
  parameters: {
    hint: <>
                Every switch off: click a header — nothing sorts; no grips, no resize
                edge, no checkboxes; clicking a cell makes no active cell. Turn any
                switch back on below.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const root = ctx.canvasElement;
    const el = await grid(root);
    const name = header(root, 'name') as HTMLElement;
    const label = name.querySelector<HTMLElement>('button');
    if (label) await userEvent.click(label);
    await expect(name.getAttribute('aria-sort')).toBe('none');
    await expect(document.querySelector('[role=menu]')).toBeNull();
    await expect(el.querySelector('[data-grip]')).toBeNull();
    await expect(el.querySelector('[data-resizer]')).toBeNull();
    await expect(el.querySelector('[role="checkbox"]')).toBeNull();
    const cell = el.querySelector<HTMLElement>('[data-cell]') as HTMLElement;
    await userEvent.click(cell);
    await expect(el.querySelector('[data-selection="active"]')).toBeNull();
  }
}`,...(T=(k=c.parameters)==null?void 0:k.docs)==null?void 0:T.source},description:{story:"Everything off: a table that only shows rows.",...(x=(v=c.parameters)==null?void 0:v.docs)==null?void 0:x.description}}};var B,C,O,E,R;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['kb:switches-one-sort'],
  name: '2 · One sort at a time',
  args: {
    enableMultiSort: false,
    sorting: [{
      id: 'team',
      desc: false
    }]
  },
  parameters: {
    hint: <>
                <code>enableMultiSort={'{false}'}</code>. Sorted by Team. Open{' '}
                <b>Level</b> → <b>Sort ›</b>: no <i>Then by</i>, a new sort replaces
                Team. Shift+click opens the menu like a plain click.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const root = ctx.canvasElement;
    await grid(root);
    const body = within(document.body);
    const level = header(root, 'level')?.querySelector('button') as HTMLElement;
    const user = userEvent.setup();
    await user.keyboard('{Shift>}');
    await user.click(level);
    await user.keyboard('{/Shift}');
    await waitFor(() => expect(body.getByRole('menu')).toBeTruthy());
    await userEvent.click(body.getByRole('menuitem', {
      name: 'Sort'
    }));
    await waitFor(() => expect(body.getAllByRole('menuitemradio').length).toBeGreaterThan(0));
    await expect(body.queryByRole('menuitem', {
      name: /^Then by/
    })).toBeNull();
    await userEvent.click(body.getAllByRole('menuitemradio')[0]);
    await waitFor(() => expect(header(root, 'level')?.getAttribute('aria-sort')).toBe('ascending'));
    await expect(header(root, 'team')?.getAttribute('aria-sort')).toBe('none');
  }
}`,...(O=(C=u.parameters)==null?void 0:C.docs)==null?void 0:O.source},description:{story:"Multi-sort off: one sort at a time.",...(R=(E=u.parameters)==null?void 0:E.docs)==null?void 0:R.description}}};var M,G,q;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['kb:switches-playground'],
  parameters: {
    hint: <>Everything on. Turn switches off below and watch the table.</>
  }
}`,...(q=(G=p.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};const Ce=["Dumb","OneSort","Playground"];export{c as Dumb,u as OneSort,p as Playground,Ce as __namedExportsOrder,Be as default};
