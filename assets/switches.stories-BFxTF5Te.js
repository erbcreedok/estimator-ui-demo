import{j as r}from"./styles-DXLXEQ3H.js";import{u as m,e as s,a as j,w as d}from"./index-DLqD3z3M.js";import{r as L}from"./index-BjhrbhTf.js";import{T as U}from"./TableCore-kOYdxPhk.js";import{U as F,c as A}from"./RowSelection-BawG8FvK.js";import{T as z}from"./TableStatusBar-BHCIeSi2.js";import{T as V}from"./TableToolbar-C0bTLKMD.js";import{m as H,a as i}from"./employees-DtM5_3-O.js";import{c as G}from"./play-kit-Bu4SXy9H.js";import{w as P,d as I,t as _,S as $}from"./scene-kit-DXifMYYP.js";import"./jsx-runtime-CEpjeC4Q.js";import"./index-D841zMOb.js";import"./panels-D6DlFR9J.js";import"./createSvgIcon-s1BrOgA2.js";import"./fixtures-CCjjPTo2.js";const g=["enableSorting","enableMultiSort","enableGrouping","enableMultiGroup","enableColumnReorder","enableColumnResizing","enableColumnPinning","enableColumnHiding","enableCellSelection","enableRowSelection","enableRowNumbers","enableGroupCollapse","enableGroupSelect","enableGroupLevelCollapse"],J=Object.fromEntries(g.map(e=>[e,!0])),W=Object.fromEntries(g.map(e=>[e,!1])),Y=[A(),i("name","Name",200),i("team","Team",120),i("role","Role",150),i("level","Level",90),i("country","Country",120),i("start","Start",110)],K=e=>r.jsxDEV(V,{table:e},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/switches.stories.tsx",lineNumber:29,columnNumber:51},void 0),Q=e=>r.jsxDEV(z,{table:e},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/switches.stories.tsx",lineNumber:30,columnNumber:53},void 0),X=({args:e,hint:t})=>{const n=L.useMemo(()=>H(40),[]),l=Object.fromEntries(g.map(a=>[a,e[a]]));return r.jsxDEV($,{hint:t,children:r.jsxDEV(U,{data:n,columns:Y,getRowId:a=>a.id,...l,readOnly:e.readOnly,columnMenu:e.columnMenu?void 0:!1,initialState:{sorting:e.sorting,columnPinning:{left:[F,"name"],right:[]}},toolbar:e.toolbar?K:void 0,statusBar:e.toolbar?Q:void 0},JSON.stringify(e),!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/switches.stories.tsx",lineNumber:41,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/switches.stories.tsx",lineNumber:40,columnNumber:10},void 0)},w=e=>{const t=g.filter(a=>!e[a]).map(a=>`
  ${a}={false}`);e.readOnly&&t.push(`
  readOnly`),e.columnMenu||t.push(`
  columnMenu={false}`);const n=e.toolbar?`
  toolbar={(table) => <TableToolbar table={table} />}
  statusBar={(table) => <TableStatusBar table={table} />}`:"",l=e.sorting.length?`
  initialState={{ sorting: ${_(e.sorting,"  ")} }}`:"";return`import { TableCore } from '@pnl-simulation/table-core'

<TableCore
  data={employees}
  columns={columns}
  getRowId={(e) => e.id}${t.join("")}${l}${n}
/>`},o=(e,t="switches")=>({description:e,control:"boolean",table:{category:t}}),de={title:"Tables/Table Core/Draft/Feature switches",tags:["autodocs"],decorators:[P],render:(e,{parameters:t})=>r.jsxDEV(X,{args:e,hint:t.hint},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/switches.stories.tsx",lineNumber:83,columnNumber:9},void 0),args:{...J,readOnly:!1,columnMenu:!0,toolbar:!0,sorting:[]},argTypes:{enableSorting:o("Header click, column menu and Sort panel sort rows. Off: state.sorting still applies."),enableMultiSort:o('Several sorts: Shift+click, "Then by …" in the menu, adding in the panel. Off: a sort replaces the previous one.'),enableGrouping:o("Group from the column menu and the Group panel. Off: state.grouping still applies."),enableMultiGroup:o(`Several groupings: "Then by …" in the menu, adding in the Group panel. Off: a grouping replaces the previous one; the screen's own (hidden) grouping stays.`),enableColumnReorder:o("Drag columns by the header grip or in the Columns panel."),enableColumnResizing:o("Drag the header edge to resize."),enableColumnPinning:o("Freeze / Unfreeze in the Columns panel."),enableColumnHiding:o("Show / hide columns in the Columns panel."),enableCellSelection:o("Active cell, arrows, Tab, ranges (Shift+click, drag)."),enableRowSelection:o("Row checkboxes and the bulk bar."),enableRowNumbers:o("Row numbers (the utility column keeps checkboxes)."),enableGroupCollapse:o("−/+ on each group in a lane."),enableGroupSelect:o("The group checkbox in a lane."),enableGroupLevelCollapse:o("−/+ in a lane header (the whole level)."),readOnly:o("No editing and no row selection.","other"),columnMenu:o("Header click opens the column menu (false = no menu).","other"),toolbar:o("Toolbar and status bar (they are slots: leave them out).","other"),sorting:{name:"initialState.sorting",control:"object",table:{category:"state"}}},parameters:{layout:"fullscreen",sceneCode:w,docs:{codePanel:!0,story:{inline:!1,height:"520px"},source:I(w),description:{component:"\nEvery interactive feature of Table Core has a switch. All are **on** by default; a screen turns off what it does not support.\n\n| Prop | Off means |\n|---|---|\n| `enableSorting` | headers do not sort, no *Sort ›* in the menu, no *Sort* button; `state.sorting` still applies |\n| `enableMultiSort` | one sort at a time: Shift+click is a plain click, no *Then by …*, the Sort panel replaces |\n| `enableGrouping` | no *Group by*, no *Group* button; `state.grouping` still applies |\n| `enableMultiGroup` | one grouping of the user at a time: no *Then by …*, the Group panel replaces; a hidden grouping of the screen (Issues) does not count |\n| `enableColumnReorder` | no drag grip, no ⋮⋮ in the Columns panel |\n| `enableColumnResizing` | no resize edge |\n| `enableColumnPinning` | no *Freeze* in the Columns panel; `state.columnPinning` still applies |\n| `enableColumnHiding` | column checkboxes in the Columns panel are locked |\n| `enableCellSelection` | no active cell, no keyboard navigation, no ranges |\n| `enableRowSelection` | no row checkboxes, no bulk bar |\n| `enableRowNumbers` | no row numbers and no #; the utility column keeps its checkboxes |\n| `enableGroupCollapse` | no −/+ on the groups; `state.expanded` still applies |\n| `enableGroupSelect` | no group checkbox; rows stay selectable |\n| `enableGroupLevelCollapse` | no −/+ in the lane headers |\n| `readOnly` | no editing, no row selection |\n| `columnMenu={false}` | no header menu |\n| `toolbar`, `statusBar` | slots: leave them out for none |\n\n**Dumb table**: all of them off — the table only shows rows (scroll, fill width, frozen columns from state still work)."}}}},q=e=>d(()=>{const t=e.querySelector("[role=grid], [role=table]");if(!(t!=null&&t.querySelector("[data-cell]")))throw new Error("grid not ready");return t}),h=(e,t)=>e.querySelector(`[data-header-id="${t}"]`),c={tags:["kb:switches-dumb"],name:"1 · Dumb table",args:{...W,readOnly:!0,columnMenu:!1,toolbar:!1},parameters:{hint:r.jsxDEV(r.Fragment,{children:"Every switch off: click a header — nothing sorts; no grips, no resize edge, no checkboxes; clicking a cell makes no active cell. Turn any switch back on below."},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/switches.stories.tsx",lineNumber:179,columnNumber:11},void 0)},play:async e=>{if(G(e))return;const t=e.canvasElement,n=await q(t),l=h(t,"name"),a=l.querySelector("button");a&&await m.click(a),await s(l.getAttribute("aria-sort")).toBe("none"),await s(document.querySelector("[role=menu]")).toBeNull(),await s(n.querySelector("[data-grip]")).toBeNull(),await s(n.querySelector("[data-resizer]")).toBeNull(),await s(n.querySelector('[role="checkbox"]')).toBeNull();const b=n.querySelector("[data-cell]");await m.click(b),await s(n.querySelector('[data-selection="active"]')).toBeNull()}},u={tags:["kb:switches-one-sort"],name:"2 · One sort at a time",args:{enableMultiSort:!1,sorting:[{id:"team",desc:!1}]},parameters:{hint:r.jsxDEV(r.Fragment,{children:[r.jsxDEV("code",{children:["enableMultiSort=","{false}"]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/switches.stories.tsx",lineNumber:216,columnNumber:17},void 0),". Sorted by Team. Open"," ",r.jsxDEV("b",{children:"Level"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/switches.stories.tsx",lineNumber:217,columnNumber:17},void 0)," → ",r.jsxDEV("b",{children:"Sort ›"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/switches.stories.tsx",lineNumber:217,columnNumber:32},void 0),": no ",r.jsxDEV("i",{children:"Then by"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/switches.stories.tsx",lineNumber:217,columnNumber:50},void 0),", a new sort replaces Team. Shift+click opens the menu like a plain click."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/switches.stories.tsx",lineNumber:215,columnNumber:11},void 0)},play:async e=>{var b,f;if(G(e))return;const t=e.canvasElement;await q(t);const n=j(document.body),l=(b=h(t,"level"))==null?void 0:b.querySelector("button"),a=m.setup();await a.keyboard("{Shift>}"),await a.click(l),await a.keyboard("{/Shift}"),await d(()=>s(n.getByRole("menu")).toBeTruthy()),await m.click(n.getByRole("menuitem",{name:"Sort"})),await d(()=>s(n.getAllByRole("menuitemradio").length).toBeGreaterThan(0)),await s(n.queryByRole("menuitem",{name:/^Then by/})).toBeNull(),await m.click(n.getAllByRole("menuitemradio")[0]),await d(()=>{var y;return s((y=h(t,"level"))==null?void 0:y.getAttribute("aria-sort")).toBe("ascending")}),await s((f=h(t,"team"))==null?void 0:f.getAttribute("aria-sort")).toBe("none")}},p={tags:["kb:switches-playground"],parameters:{hint:r.jsxDEV(r.Fragment,{children:"Everything on. Turn switches off below and watch the table."},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/switches.stories.tsx",lineNumber:247,columnNumber:11},void 0)}};var k,S,v,x,N;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(v=(S=c.parameters)==null?void 0:S.docs)==null?void 0:v.source},description:{story:"Everything off: a table that only shows rows.",...(N=(x=c.parameters)==null?void 0:x.docs)==null?void 0:N.description}}};var T,E,C,B,D;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(C=(E=u.parameters)==null?void 0:E.docs)==null?void 0:C.source},description:{story:"Multi-sort off: one sort at a time.",...(D=(B=u.parameters)==null?void 0:B.docs)==null?void 0:D.description}}};var O,R,M;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  tags: ['kb:switches-playground'],
  parameters: {
    hint: <>Everything on. Turn switches off below and watch the table.</>
  }
}`,...(M=(R=p.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};const he=["Dumb","OneSort","Playground"];export{c as Dumb,u as OneSort,p as Playground,he as __namedExportsOrder,de as default};
