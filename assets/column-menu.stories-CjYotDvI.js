import{j as t}from"./styles-DXLXEQ3H.js";import{u as c,w as i,a as w}from"./index-DLqD3z3M.js";import{r as x}from"./index-BjhrbhTf.js";import{h as Y,p as K,b as J,s as Q,T as ee}from"./TableCore-kOYdxPhk.js";import{T as ne}from"./TableStatusBar-BHCIeSi2.js";import{m as te,a as l}from"./employees-DtM5_3-O.js";import{c as k}from"./play-kit-Bu4SXy9H.js";import{w as oe,d as se,S as re}from"./scene-kit-DXifMYYP.js";import"./jsx-runtime-CEpjeC4Q.js";import"./index-D841zMOb.js";import"./panels-D6DlFR9J.js";import"./fixtures-CCjjPTo2.js";const ie=[l("name","Name",190),l("team","Team",130),l("role","Role",160),l("level","Level",100),l("country","Country",130),l("rate","Rate",90)],ae={id:"export",getItems:({label:e})=>[{id:"copy",label:`Copy ${e} values`,onClick:()=>{}}]},_={sorting:Q,grouping:J,pinning:K,hiding:Y,export:ae},ce={sorting:"sortingSection",grouping:"groupingSection",pinning:"pinningSection",hiding:"hidingSection",export:"exportSection"},W=["sorting","grouping"],ue=e=>t.jsxDEV(ne,{table:e},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-menu.stories.tsx",lineNumber:53,columnNumber:53},void 0),le=({args:e,hint:n})=>{const[o]=x.useState(()=>te(30)),r=x.useMemo(()=>e.sections.map(a=>_[a]),[e.sections]);return t.jsxDEV(re,{hint:n,children:t.jsxDEV(ee,{data:o,columns:ie,getRowId:a=>a.id,columnMenu:e.columnMenu?r:!1,statusBar:ue},`${e.columnMenu}`,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-menu.stories.tsx",lineNumber:64,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-menu.stories.tsx",lineNumber:63,columnNumber:10},void 0)},S=e=>{const n=e.sections.join()===W.join(),o=e.sections.map(f=>ce[f]),r=["TableCore",...o.filter(f=>f!=="exportSection"),...e.sections.includes("export")?["type ColumnMenuSection"]:[]],a=e.sections.includes("export")?`

// A section of your own: items get the column and its label.
const exportSection: ColumnMenuSection = {
  id: 'export',
  getItems: ({ column, label }) => [
    { id: 'copy', label: \`Copy \${label} values\`, onClick: () => copy(column) },
  ],
}`:"";let m="";return e.columnMenu?n||(m=`
    columnMenu={[${o.join(", ")}]}`):m=`
    // No menu: a header click sorts.
    columnMenu={false}`,`import {
  ${(e.columnMenu&&!n?r:["TableCore"]).join(`,
  `)},
} from '@pnl-simulation/table-core'${e.columnMenu&&!n?a:""}

export const EmployeesTable = ({ employees }: { employees: Employee[] }) => (
  <TableCore
    data={employees}
    columns={employeeColumns}
    getRowId={(e) => e.id}${m}
  />
)`},Ee={title:"Tables/Table Core/Draft/Column menu",tags:["autodocs"],decorators:[oe],render:function(n,{parameters:o}){return t.jsxDEV(le,{args:n,hint:o.hint},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-menu.stories.tsx",lineNumber:105,columnNumber:12},this)},args:{columnMenu:!0,sections:W},argTypes:{columnMenu:{description:"Off (`false`): no menu, a header click sorts.",control:"boolean"},sections:{name:"columnMenu sections",description:"Sections in the order you tick them. Default: sorting, grouping. `export` is a section of the screen’s own.",options:Object.keys(_),control:"check"}},parameters:{layout:"fullscreen",sceneCode:S,docs:{codePanel:!0,story:{inline:!1,height:"600px"},source:se(S),description:{component:"\n**Column menu**: a header click opens the actions for that column, as in the legacy Resource Plan. The screen decides which actions are there.\n\n- **Default**: *Sort ›* (a submenu: two directions and *Clear sort*) and *Group by X* / *Ungroup by X*, separated by a line.\n- **Sections**: the screen passes `columnMenu` — built-in sections (`sortingSection`, `groupingSection`, `pinningSection`, `hidingSection`) and its own, in its order; empty sections are skipped.\n- **Keyboard**: ↑ / ↓ move, Enter picks, → opens a submenu, ← / Esc closes it, Esc closes the menu.\n- **Off**: `columnMenu={false}` — a header click sorts directly."}}}},s=(e,n)=>{if(!e)throw new Error(`Story check failed: ${n}`)},me=e=>i(()=>{const n=e.querySelector("[role=grid]");if(!n||!n.querySelector("[data-cell]"))throw new Error("grid not ready");return n}),X=async(e,n)=>w(await me(e)).getByRole("button",{name:new RegExp(`^${n}`)}),v=async(e,n)=>{const o=await X(e,n);return await c.click(o),await i(()=>w(document.body).getByRole("menu")),o},u=()=>w(document.body),y=(e,n,o)=>{var r;return((r=e.querySelector(`[data-row-index="${n}"][data-col-index="${o}"]`))==null?void 0:r.textContent)??""},d={tags:["kb:column-menu-open-menu"],name:"1 · Open the menu",parameters:{hint:t.jsxDEV(t.Fragment,{children:["Click the ",t.jsxDEV("b",{children:"Team"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-menu.stories.tsx",lineNumber:178,columnNumber:27},void 0)," header: the menu opens under it and the header stays highlighted. Pick ",t.jsxDEV("b",{children:"Group by Team"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-menu.stories.tsx",lineNumber:179,columnNumber:41},void 0),": the rows are grouped and the menu closes."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-menu.stories.tsx",lineNumber:177,columnNumber:11},void 0)},play:async e=>{if(k(e))return;const{canvasElement:n}=e,o=await v(n,"Team");s(o.getAttribute("aria-expanded")==="true","header marked"),s(u().getByRole("menuitem",{name:"Sort"}),"Sort ›"),s(!u().queryByRole("menuitem",{name:"Hide column"}),"Hide is not in the default menu"),await c.click(u().getByRole("menuitem",{name:"Group by Team"})),await i(()=>s(n.querySelector('[data-lane-id="team"]'),"grouped via the menu")),await i(()=>s(!document.querySelector("[role=menu]"),"menu closed"))}},p={tags:["kb:column-menu-submenu"],name:"2 · Sort submenu",parameters:{hint:t.jsxDEV(t.Fragment,{children:["Open ",t.jsxDEV("b",{children:"Name"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-menu.stories.tsx",lineNumber:210,columnNumber:22},void 0)," and hover ",t.jsxDEV("b",{children:"Sort ›"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-menu.stories.tsx",lineNumber:210,columnNumber:44},void 0),": the submenu opens. With the keyboard: ↓ to ",t.jsxDEV("b",{children:"Sort"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-menu.stories.tsx",lineNumber:211,columnNumber:32},void 0),", → opens it, ← closes only the submenu, Enter picks."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-menu.stories.tsx",lineNumber:209,columnNumber:11},void 0)},play:async e=>{if(k(e))return;const{canvasElement:n}=e;await v(n,"Name");const o=u().getByRole("menuitem",{name:"Sort"}),r=()=>document.querySelector('[data-column-submenu="sort"]');s(o.getAttribute("aria-haspopup")==="menu","Sort has a submenu"),await c.hover(o),await i(()=>s(r(),"hover opens it"),{timeout:3e3}),await c.unhover(o),await i(()=>s(!r(),"leaving closes it"),{timeout:3e3}),o.focus(),await c.keyboard("{ArrowRight}"),await i(()=>{var a;return s(((a=document.activeElement)==null?void 0:a.textContent)==="Sort A–Z","→ moves into the submenu")}),await c.keyboard("{ArrowLeft}"),await i(()=>s(!r(),"← closes the submenu")),s(document.querySelector("[role=menu]"),"menu still open"),await c.keyboard("{ArrowRight}"),await i(()=>s(r(),"open again")),await c.keyboard("{Enter}"),await i(()=>{const a=y(n,0,0),m=y(n,1,0);s(a.localeCompare(m)<=0,"sorted A–Z")}),await i(()=>s(!document.querySelector("[role=menu]"),"menu closed after pick"))}},b={tags:["kb:column-menu-sections"],name:"3 · Your own sections",args:{sections:["sorting","grouping","pinning","hiding","export"]},parameters:{hint:t.jsxDEV(t.Fragment,{children:["The screen added Freeze, Hide and a section of its own (",t.jsxDEV("i",{children:"Copy … values"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-menu.stories.tsx",lineNumber:262,columnNumber:17},void 0),"). Open ",t.jsxDEV("b",{children:"Level"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-menu.stories.tsx",lineNumber:262,columnNumber:45},void 0)," → ",t.jsxDEV("b",{children:"Hide column"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-menu.stories.tsx",lineNumber:262,columnNumber:60},void 0),". Untick sections in the controls: empty ones are skipped."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-menu.stories.tsx",lineNumber:260,columnNumber:11},void 0)},play:async e=>{if(k(e))return;const{canvasElement:n}=e;await v(n,"Level"),s(u().getByRole("menuitem",{name:"Copy Level values"}),"own section"),s(u().getByRole("menuitem",{name:"Freeze column"}),"Freeze section"),await c.click(u().getByRole("menuitem",{name:"Hide column"})),await i(()=>s(!n.querySelector('[data-header-id="level"]'),"Level hidden"))}},h={tags:["kb:column-menu-off"],name:"4 · Menu off",args:{columnMenu:!1},parameters:{hint:t.jsxDEV(t.Fragment,{children:[t.jsxDEV("code",{children:["columnMenu=","{false}"]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-menu.stories.tsx",lineNumber:294,columnNumber:17},void 0),": no menu. A click on ",t.jsxDEV("b",{children:"Name"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-menu.stories.tsx",lineNumber:294,columnNumber:74},void 0)," ","sorts right away; click again to flip."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-menu.stories.tsx",lineNumber:293,columnNumber:11},void 0)},play:async e=>{if(k(e))return;const{canvasElement:n}=e;await c.click(await X(n,"Name")),await i(()=>{const o=y(n,0,0),r=y(n,1,0);s(o.localeCompare(r)<=0,"sorted by click")}),s(!document.querySelector("[role=menu]"),"no menu")}},g={tags:["kb:column-menu-playground"],args:{sections:["sorting","grouping","pinning","hiding"]},parameters:{hint:t.jsxDEV(t.Fragment,{children:"Everything together: tick and order the sections, switch the menu off."},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/column-menu.stories.tsx",lineNumber:318,columnNumber:11},void 0)}};var E,N,D,C,T;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['kb:column-menu-open-menu'],
  name: '1 · Open the menu',
  parameters: {
    hint: <>
                Click the <b>Team</b> header: the menu opens under it and the header
                stays highlighted. Pick <b>Group by Team</b>: the rows are grouped and
                the menu closes.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    const button = await openMenu(canvasElement, 'Team');
    check(button.getAttribute('aria-expanded') === 'true', 'header marked');
    check(body().getByRole('menuitem', {
      name: 'Sort'
    }), 'Sort ›');
    check(!body().queryByRole('menuitem', {
      name: 'Hide column'
    }), 'Hide is not in the default menu');
    await userEvent.click(body().getByRole('menuitem', {
      name: 'Group by Team'
    }));
    await waitFor(() => check(canvasElement.querySelector('[data-lane-id="team"]'), 'grouped via the menu'));
    await waitFor(() => check(!document.querySelector('[role=menu]'), 'menu closed'));
  }
}`,...(D=(N=d.parameters)==null?void 0:N.docs)==null?void 0:D.source},description:{story:"Header click → menu; picking an item runs it and closes the menu.",...(T=(C=d.parameters)==null?void 0:C.docs)==null?void 0:T.description}}};var M,R,j,F,U;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['kb:column-menu-submenu'],
  name: '2 · Sort submenu',
  parameters: {
    hint: <>
                Open <b>Name</b> and hover <b>Sort ›</b>: the submenu opens. With the
                keyboard: ↓ to <b>Sort</b>, → opens it, ← closes only the submenu, Enter
                picks.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await openMenu(canvasElement, 'Name');
    const sort = body().getByRole('menuitem', {
      name: 'Sort'
    });
    const submenu = () => document.querySelector<HTMLElement>('[data-column-submenu="sort"]');
    check(sort.getAttribute('aria-haspopup') === 'menu', 'Sort has a submenu');
    await userEvent.hover(sort);
    await waitFor(() => check(submenu(), 'hover opens it'), {
      timeout: 3000
    });
    await userEvent.unhover(sort);
    await waitFor(() => check(!submenu(), 'leaving closes it'), {
      timeout: 3000
    });
    sort.focus();
    await userEvent.keyboard('{ArrowRight}');
    await waitFor(() => check(document.activeElement?.textContent === 'Sort A–Z', '→ moves into the submenu'));
    await userEvent.keyboard('{ArrowLeft}');
    await waitFor(() => check(!submenu(), '← closes the submenu'));
    check(document.querySelector('[role=menu]'), 'menu still open');
    await userEvent.keyboard('{ArrowRight}');
    await waitFor(() => check(submenu(), 'open again'));
    await userEvent.keyboard('{Enter}');
    await waitFor(() => {
      const first = cellText(canvasElement, 0, 0);
      const second = cellText(canvasElement, 1, 0);
      check(first.localeCompare(second) <= 0, 'sorted A–Z');
    });
    await waitFor(() => check(!document.querySelector('[role=menu]'), 'menu closed after pick'));
  }
}`,...(j=(R=p.parameters)==null?void 0:R.docs)==null?void 0:j.source},description:{story:"The Sort › submenu: hover, click, keyboard.",...(U=(F=p.parameters)==null?void 0:F.docs)==null?void 0:U.description}}};var B,O,q,A,V;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['kb:column-menu-sections'],
  name: '3 · Your own sections',
  args: {
    sections: ['sorting', 'grouping', 'pinning', 'hiding', 'export']
  },
  parameters: {
    hint: <>
                The screen added Freeze, Hide and a section of its own (
                <i>Copy … values</i>). Open <b>Level</b> → <b>Hide column</b>. Untick
                sections in the controls: empty ones are skipped.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await openMenu(canvasElement, 'Level');
    check(body().getByRole('menuitem', {
      name: 'Copy Level values'
    }), 'own section');
    check(body().getByRole('menuitem', {
      name: 'Freeze column'
    }), 'Freeze section');
    await userEvent.click(body().getByRole('menuitem', {
      name: 'Hide column'
    }));
    await waitFor(() => check(!canvasElement.querySelector('[data-header-id="level"]'), 'Level hidden'));
  }
}`,...(q=(O=b.parameters)==null?void 0:O.docs)==null?void 0:q.source},description:{story:"The screen's own sections, in its order.",...(V=(A=b.parameters)==null?void 0:A.docs)==null?void 0:V.description}}};var L,H,$,z,I;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['kb:column-menu-off'],
  name: '4 · Menu off',
  args: {
    columnMenu: false
  },
  parameters: {
    hint: <>
                <code>columnMenu={'{false}'}</code>: no menu. A click on <b>Name</b>{' '}
                sorts right away; click again to flip.
            </>
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await userEvent.click(await headerButton(canvasElement, 'Name'));
    await waitFor(() => {
      const first = cellText(canvasElement, 0, 0);
      const second = cellText(canvasElement, 1, 0);
      check(first.localeCompare(second) <= 0, 'sorted by click');
    });
    check(!document.querySelector('[role=menu]'), 'no menu');
  }
}`,...($=(H=h.parameters)==null?void 0:H.docs)==null?void 0:$.source},description:{story:"`columnMenu={false}`: a header click sorts.",...(I=(z=h.parameters)==null?void 0:z.docs)==null?void 0:I.description}}};var P,G,Z;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['kb:column-menu-playground'],
  args: {
    sections: ['sorting', 'grouping', 'pinning', 'hiding']
  },
  parameters: {
    hint: <>
                Everything together: tick and order the sections, switch the menu off.
            </>
  }
}`,...(Z=(G=g.parameters)==null?void 0:G.docs)==null?void 0:Z.source}}};const Ne=["OpenMenu","Submenu","Sections","Off","Playground"];export{h as Off,d as OpenMenu,g as Playground,b as Sections,p as Submenu,Ne as __namedExportsOrder,Ee as default};
