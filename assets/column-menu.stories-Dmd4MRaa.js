import{j as t}from"./jsx-runtime-Cnbe3ryz.js";import{u as i,w as s,a as k}from"./index-iBx7lKYd.js";import{r as v}from"./index-3dRrDZpt.js";import{p as K,g as J,s as Q,T as V}from"./TableCore-Y75h2oha.js";import{T as ee}from"./TableStatusBar-4NxO8OsQ.js";import{m as ne,a as m}from"./employees-CL5oqWiT.js";import{c as w}from"./play-kit-Bu4SXy9H.js";import{w as te,d as oe,S as ae}from"./scene-kit-BsKxVgS1.js";import{D as re}from"./reference-kit-BHZHy2IZ.js";import{h as se}from"./hiding-BQUyP7rl.js";import"./index-C0mjCMcL.js";import"./index-DKTdOcjh.js";import"./table-core-base-DFRq_Vzl.js";import"./places-Dp9r7e0L.js";import"./styles-HzBmg0bt.js";import"./icons-849xEHsl.js";import"./menu-DvyBTqNz.js";import"./status-bar-CYB7-jUm.js";import"./panel-controls-DNzRkyVB.js";import"./SortingPanel-CpobHppH.js";import"./fixtures-P-DSdYmm.js";import"./types-reference-CMrm5GSt.js";const ce=[m("name","Name",190),m("team","Team",130),m("role","Role",160),m("level","Level",100),m("country","Country",130),m("rate","Rate",90)],ie={id:"export",getItems:({label:e})=>[{id:"copy",label:`Copy ${e} values`,onClick:()=>{}}]},W={sorting:Q(),grouping:J(),pinning:K(),hiding:se(),export:ie},ue={sorting:"sortingSection",grouping:"groupingSection",pinning:"pinningSection",hiding:"hidingSection",export:"exportSection"},X=["sorting","grouping","pinning"],me=e=>t.jsx(ee,{table:e}),le=({args:e,hint:n})=>{const[o]=v.useState(()=>ne(30)),r=v.useMemo(()=>e.sections.map(c=>W[c]),[e.sections]);return t.jsx(ae,{hint:n,children:t.jsx(V,{data:o,columns:ce,getRowId:c=>c.id,columnMenu:e.columnMenu?{sections:r}:!1,statusBar:me},`${e.columnMenu}`)})},x=e=>{const n=e.sections.join()===X.join(),o=e.sections.map(f=>ue[f]),r=["TableCore",...o.filter(f=>f!=="exportSection"),...e.sections.includes("export")?["type ColumnMenuSection"]:[]],c=e.sections.includes("export")?`

// A section of your own: items get the column and its label.
const exportSection: ColumnMenuSection<Employee> = {
  id: 'export',
  getItems: ({ column, label }) => [
    { id: 'copy', label: \`Copy \${label} values\`, onClick: () => copy(column) },
  ],
}`:"";let l="";return e.columnMenu?n||(l=`
    columnMenu={{ sections: [${o.join(", ")}] }}`):l=`
    // No menu: a header click sorts.
    columnMenu={false}`,`import {
  ${(e.columnMenu&&!n?r:["TableCore"]).join(`,
  `)},
} from '@pnl-simulation/table-core'${e.columnMenu&&!n?c:""}

export const EmployeesTable = ({ employees }: { employees: Employee[] }) => (
  <TableCore
    data={employees}
    columns={employeeColumns}
    getRowId={(e) => e.id}${l}
  />
)`},Ne={title:"Tables/Table Core/Features/Column menu",tags:["autodocs"],decorators:[te],render:function(n,{parameters:o}){return t.jsx(le,{args:n,hint:o.hint})},args:{columnMenu:!0,sections:X},argTypes:{columnMenu:{description:"Off (`false`): no menu, a header click sorts.",control:"boolean"},sections:{name:"columnMenu sections",description:"Sections in the order you tick them. Default: sorting, grouping. `export` is a section of the screen’s own.",options:Object.keys(W),control:"check"}},parameters:{layout:"fullscreen",sceneCode:x,docs:{codePanel:!0,story:{inline:!1,height:"600px"},source:oe(x),description:{component:`${re}


**Column menu**: a header click opens the actions for that column, as in the legacy Resource Plan. The screen decides which actions are there.

- **Default**: *Sort ›* (a submenu: two directions and *Clear sort*) and *Group by X* / *Ungroup by X*, separated by a line.
- **Sections**: the screen passes \`columnMenu\` — built-in sections (\`sortingSection\`, \`groupingSection\`, \`pinningSection\`, \`hidingSection\`) and its own, in its order; empty sections are skipped.
- **Keyboard**: ↑ / ↓ move, Enter picks, → opens a submenu, ← / Esc closes it, Esc closes the menu.
- **Off**: \`columnMenu={false}\` — a header click sorts directly.`}}}},a=(e,n)=>{if(!e)throw new Error(`Story check failed: ${n}`)},de=e=>s(()=>{const n=e.querySelector("[role=grid]");if(!n||!n.querySelector("[data-cell]"))throw new Error("grid not ready");return n}),Y=async(e,n)=>k(await de(e)).getByRole("button",{name:new RegExp(`^${n}`)}),S=async(e,n)=>{const o=await Y(e,n);return await i.click(o),await s(()=>k(document.body).getByRole("menu")),o},u=()=>k(document.body),b=(e,n,o)=>{var r;return((r=e.querySelector(`[data-row-index="${n}"][data-col-index="${o}"]`))==null?void 0:r.textContent)??""},d={tags:["kb:column-menu-open-menu"],name:"1 · Open the menu",parameters:{hint:t.jsxs(t.Fragment,{children:["Click the ",t.jsx("b",{children:"Team"})," header: the menu opens under it and the header stays highlighted. Pick ",t.jsx("b",{children:"Group by Team"}),": the rows are grouped and the menu closes."]})},play:async e=>{if(w(e))return;const{canvasElement:n}=e,o=await S(n,"Team");a(o.getAttribute("aria-expanded")==="true","header marked"),a(u().getByRole("menuitem",{name:"Sort"}),"Sort ›"),a(!u().queryByRole("menuitem",{name:"Hide column"}),"Hide is not in the default menu"),await i.click(u().getByRole("menuitem",{name:"Group by Team"})),await s(()=>a(n.querySelector('[data-lane-id="team"]'),"grouped via the menu")),await s(()=>a(!document.querySelector("[role=menu]"),"menu closed"))}},p={tags:["kb:column-menu-submenu"],name:"2 · Sort submenu",parameters:{hint:t.jsxs(t.Fragment,{children:["Open ",t.jsx("b",{children:"Name"})," and hover ",t.jsx("b",{children:"Sort ›"}),": the submenu opens. With the keyboard: ↓ to ",t.jsx("b",{children:"Sort"}),", → opens it, ← closes only the submenu, Enter picks."]})},play:async e=>{if(w(e))return;const{canvasElement:n}=e;await S(n,"Name");const o=u().getByRole("menuitem",{name:"Sort"}),r=()=>document.querySelector('[data-column-submenu="sort"]');a(o.getAttribute("aria-haspopup")==="menu","Sort has a submenu"),await i.hover(o),await s(()=>a(r(),"hover opens it"),{timeout:3e3}),await i.unhover(o),await s(()=>a(!r(),"leaving closes it"),{timeout:3e3}),o.focus(),await i.keyboard("{ArrowRight}"),await s(()=>{var c;return a(((c=document.activeElement)==null?void 0:c.textContent)==="Sort A–Z","→ moves into the submenu")}),await i.keyboard("{ArrowLeft}"),await s(()=>a(!r(),"← closes the submenu")),a(document.querySelector("[role=menu]"),"menu still open"),await i.keyboard("{ArrowRight}"),await s(()=>a(r(),"open again")),await i.keyboard("{Enter}"),await s(()=>{const c=b(n,0,0),l=b(n,1,0);a(c.localeCompare(l)<=0,"sorted A–Z")}),await s(()=>a(!document.querySelector("[role=menu]"),"menu closed after pick"))}},h={tags:["kb:column-menu-sections"],name:"3 · Your own sections",args:{sections:["sorting","grouping","pinning","hiding","export"]},parameters:{hint:t.jsxs(t.Fragment,{children:["The screen added Hide and a section of its own (",t.jsx("i",{children:"Copy … values"}),"). Open ",t.jsx("b",{children:"Level"})," → ",t.jsx("b",{children:"Hide column"}),". Untick sections in the controls: empty ones are skipped."]})},play:async e=>{if(w(e))return;const{canvasElement:n}=e;await S(n,"Level"),a(u().getByRole("menuitem",{name:"Copy Level values"}),"own section"),a(u().getByRole("menuitem",{name:"Freeze column"}),"Freeze section"),await i.click(u().getByRole("menuitem",{name:"Hide column"})),await s(()=>a(!n.querySelector('[data-header-id="level"]'),"Level hidden"))}},y={tags:["kb:column-menu-off"],name:"4 · Menu off",args:{columnMenu:!1},parameters:{hint:t.jsxs(t.Fragment,{children:[t.jsxs("code",{children:["columnMenu=","{false}"]}),": no menu. A click on ",t.jsx("b",{children:"Name"})," ","sorts right away; click again to flip."]})},play:async e=>{if(w(e))return;const{canvasElement:n}=e;await i.click(await Y(n,"Name")),await s(()=>{const o=b(n,0,0),r=b(n,1,0);a(o.localeCompare(r)<=0,"sorted by click")}),a(!document.querySelector("[role=menu]"),"no menu")}},g={tags:["kb:column-menu-playground"],args:{sections:["sorting","grouping","pinning","hiding"]},parameters:{hint:t.jsx(t.Fragment,{children:"Everything together: tick and order the sections, switch the menu off."})}};var E,T,C,M,R;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(C=(T=d.parameters)==null?void 0:T.docs)==null?void 0:C.source},description:{story:"Header click → menu; picking an item runs it and closes the menu.",...(R=(M=d.parameters)==null?void 0:M.docs)==null?void 0:R.description}}};var j,F,O,B,A;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(O=(F=p.parameters)==null?void 0:F.docs)==null?void 0:O.source},description:{story:"The Sort › submenu: hover, click, keyboard.",...(A=(B=p.parameters)==null?void 0:B.docs)==null?void 0:A.description}}};var q,N,L,H,$;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['kb:column-menu-sections'],
  name: '3 · Your own sections',
  args: {
    sections: ['sorting', 'grouping', 'pinning', 'hiding', 'export']
  },
  parameters: {
    hint: <>
                The screen added Hide and a section of its own (<i>Copy … values</i>).
                Open <b>Level</b> → <b>Hide column</b>. Untick sections in the controls:
                empty ones are skipped.
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
}`,...(L=(N=h.parameters)==null?void 0:N.docs)==null?void 0:L.source},description:{story:"The screen's own sections, in its order.",...($=(H=h.parameters)==null?void 0:H.docs)==null?void 0:$.description}}};var D,I,P,G,z;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(P=(I=y.parameters)==null?void 0:I.docs)==null?void 0:P.source},description:{story:"`columnMenu={false}`: a header click sorts.",...(z=(G=y.parameters)==null?void 0:G.docs)==null?void 0:z.description}}};var U,Z,_;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['kb:column-menu-playground'],
  args: {
    sections: ['sorting', 'grouping', 'pinning', 'hiding']
  },
  parameters: {
    hint: <>
                Everything together: tick and order the sections, switch the menu off.
            </>
  }
}`,...(_=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:_.source}}};const Le=["OpenMenu","Submenu","Sections","Off","Playground"];export{y as Off,d as OpenMenu,g as Playground,h as Sections,p as Submenu,Le as __namedExportsOrder,Ne as default};
