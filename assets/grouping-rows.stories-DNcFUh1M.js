import{j as a}from"./jsx-runtime-Cnbe3ryz.js";import{w as l,u as g,a as L}from"./index-iBx7lKYd.js";import{M as ie,a as ce,r as ue,w as ne,T as c,R as p}from"./grouping-ways-code-DK-8tfEK.js";import{g as m,p as E,c as n,e as se}from"./grouping-play-CTN_XQGq.js";import{c as ge}from"./places-Dp9r7e0L.js";import{w as pe}from"./grouping-ways-kit-BwgE6Z80.js";import{m as me}from"./mini-kit-DReMkWYx.js";import{c as d}from"./play-kit-Bu4SXy9H.js";import{w as de}from"./scene-kit-BsKxVgS1.js";import"./index-3dRrDZpt.js";import"./table-core-base-DFRq_Vzl.js";import"./rich-cells-BHJWCIPe.js";import"./RowActions-BSIeJGF9.js";import"./TableCore-Y75h2oha.js";import"./index-C0mjCMcL.js";import"./index-DKTdOcjh.js";import"./styles-HzBmg0bt.js";import"./icons-849xEHsl.js";import"./menu-DvyBTqNz.js";import"./TableStatusBar-4NxO8OsQ.js";import"./status-bar-CYB7-jUm.js";import"./panel-controls-DNzRkyVB.js";import"./SortingPanel-CpobHppH.js";import"./TableToolbar-DTYEmPN-.js";import"./toolbar-C5VRlWnq.js";import"./pin-controls-NGLUwJXC.js";import"./employees-CL5oqWiT.js";import"./fixtures-P-DSdYmm.js";const C=new Intl.DateTimeFormat("en-GB",{day:"numeric",month:"short",year:"numeric"}),we=(t,e)=>{const o=e.map(r=>r.original.start).sort();return[o[0],o[o.length-1]]},he={USD:"$",EUR:"€",PLN:"zł"},ve=(t,e)=>[...new Set(e.map(o=>he[o.original.currency]))].join(" "),ye=(t,e)=>`${t} ${e}${t===1?"":"s"}`,fe=(t,e)=>e.filter(o=>o.original.state!=="ok").length,xe={level:{aggregationFn:"uniqueCount",aggregatedCell:({getValue:t})=>ye(Number(t()),"level")},status:{aggregationFn:fe,aggregatedCell:({getValue:t})=>Number(t())?`${String(t())} need attention`:"all included"},rate:{aggregationFn:ve,aggregatedCell:({getValue:t})=>String(t())},load:{aggregationFn:"mean",aggregatedCell:({getValue:t})=>a.jsxs("span",{"data-total-load":!0,children:["avg ",Math.round(Number(t())),"%"]})},start:{aggregationFn:we,aggregatedCell:({getValue:t})=>{const[e,o]=t();return`${C.format(new Date(e))} – ${C.format(new Date(o))}`}}},w=()=>pe([]).map(t=>({...t,...xe[t.id]})),be=t=>t.map(e=>{var r;if(e.id!=="person")return e;const o=e.meta;return{...e,meta:ge({...o,groupings:(r=o.groupings)==null?void 0:r.map(s=>s.id==="letter"?{...s,groupLayout:"rows"}:s)})}}),S={before:`// Totals: a column's aggregationFn (TanStack) adds its rows up, its
// aggregatedCell draws the total — in the group row, or a totals row.
const SYMBOL = { USD: '$', EUR: '€', PLN: 'zł' }
const plural = (n: number, word: string) => \`\${n} \${word}\${n === 1 ? '' : 's'}\`
const startRange: AggregationFn<Employee> = (_, rows) => {
  const dates = rows.map((r) => r.original.start).sort()
  return [dates[0], dates[dates.length - 1]]
}
const currencies: AggregationFn<Employee> = (_, rows) =>
  [...new Set(rows.map((r) => SYMBOL[r.original.currency]))].join(' ')
const needAttention: AggregationFn<Employee> = (_, rows) =>
  rows.filter((r) => r.original.state !== 'ok').length`,own:{level:`{
  accessorKey: 'level', header: 'Level', cell: LevelCell,
  aggregationFn: 'uniqueCount',
  aggregatedCell: ({ getValue }) => plural(getValue(), 'level'),
}`,status:`{
  id: 'status', accessorFn: (e) => STATUS[e.state], header: 'Status', cell: StatusCell,
  aggregationFn: needAttention,
  aggregatedCell: ({ getValue }) => (getValue() ? \`\${getValue()} need attention\` : 'all included'),
}`,rate:`{
  id: 'rate', accessorKey: 'pay', header: 'Rate', cell: RateCell,
  aggregationFn: currencies,
}`,load:`{
  id: 'load', accessorFn: loadOf, header: 'Load', cell: LoadCell,
  aggregationFn: 'mean',
  aggregatedCell: ({ getValue }) => \`avg \${Math.round(getValue())}%\`,
}`,start:`{
  accessorKey: 'start', header: 'Start', cell: DateCell,
  aggregationFn: startRange,
  aggregatedCell: ({ getValue }) => formatRange(getValue()),
}`}},le=t=>`{
  id: 'person',
  accessorKey: 'name',
  header: 'Person',
  cell: PersonCell,
  // The first column with content: its group rows show the group and the
  // count here, so it needs no total.
  meta: coreMeta({
    groupAsIs: false,
    groupings: [
      { id: 'letter', label: 'First letter', getValue: (e) => firstLetter(e.name)${t==="rows"?`,
        // People by letter: always group rows, whatever the table does.
        groupLayout: 'rows'`:""} },
      { id: 'surname', label: 'Surname letter', getValue: (e) => firstLetter(surnameOf(e.name)) },
    ],
  }),
}`,ot={title:"Tables/Table Core/Features/Grouping/Look/Rows",decorators:[de],render:ue,args:{...ce,groupLayout:"rows"},argTypes:ie,parameters:{...me("\n**Groups as rows.** `groupLayout: 'rows'` draws each group as a header row in the body — −/+, the group checkbox, the value, the count — with its rows under it, as TanStack does, instead of a lane on the left. Everything else about grouping works the same: ways, resolvers, grouping-only columns, `hideFrom`, several levels, sorting the groups, chips, the Group panel.\n\n| What | How | Scene |\n|---|---|---|\n| Groups as header rows | `groupLayout=\"rows\"` on TableCore | 1 · Group rows |\n| Several levels | nested header rows, indented; each sticks under the header and the outer ones | 2 · Several levels |\n| Totals | a column's `aggregationFn` (count, mean, uniqueCount, your own) and `aggregatedCell`: in the group row, under the column | 3 · Totals |\n| One grouping always as rows | `groupLayout` on a column (`meta`) or a way: Person by first letter is rows in a table of lanes | 4 · Mixed |\n| Totals under lanes | `groupTotals=\"footer\"` (or per grouping): a totals row ends each group | 5 · Totals row under lanes |\n| The group row's menu | the value opens it: sort the groups, ungroup (`hideFrom: ['groupHeader.menu']` takes it away) | 6 · Group row menu |\n\nA group row lines up with the columns: the first column with content shows the group, the columns with a total show it. `meta.groupCell` (edge, tooltip, style, render) applies to a group row as to a lane cell.")}},i=(t,e=0)=>Array.from(t.querySelectorAll(`[data-group-row][data-group-level="${e}"]`)),k=(t,e)=>{var o;return((o=t.querySelector(`[data-group-cell="total"][data-column-id="${e}"]`))==null?void 0:o.textContent)??""},Te=t=>{var e;return Number((e=t.querySelector("[data-group-count]"))==null?void 0:e.textContent)},j=t=>i(t).map(e=>{var o;return((o=e.querySelector("[data-group-value]"))==null?void 0:o.textContent)??""}),ke=(t,e)=>{const o=t.groupLayout==="rows";return a.jsxs(a.Fragment,{children:[o?a.jsxs(a.Fragment,{children:["Each ",a.jsx("b",{children:"Team"})," is a row of its own: ",a.jsx("b",{children:"−"})," folds it (the row stays), the checkbox selects the team, and it shows its count and the totals of the columns. No lane on the left."," ",a.jsx(c,{update:e,set:{groupLayout:"lanes"},children:"Back to lanes here"})," ","to compare."]}):a.jsxs(a.Fragment,{children:["Lanes now."," ",a.jsx(c,{update:e,set:{groupLayout:"rows"},children:"Groups as rows here"}),"."]})," ",a.jsx(p,{update:e,start:{grouping:["team"],groupLayout:"rows"}}),"."]})},T=t=>ne({before:S.before,own:{...S.own,person:le("as the table")}},t),h={tags:["kb:group-rows-group-rows"],name:"1 · Group rows",args:{grouping:["team"]},parameters:{columns:w(),hint:ke,code:T},play:async t=>{if(d(t))return;const{canvasElement:e}=t;await m(e),await l(()=>n(i(e).length>1,"group rows")),n(!e.querySelector("[data-lane-id]"),"no lanes");const o=i(e)[0];n(o.querySelector('[data-group-cell="label"][data-column-id="person"]')&&Te(o)>0,"the group and its count in the first column");const r=i(e).length;await g.click(L(o).getByRole("button",{name:"Collapse group"})),await l(()=>n(o.getAttribute("aria-expanded")==="false"&&i(e).length===r,"folded: the group row stays")),n(!e.querySelector("[data-collapsed-group]"),"no placeholder row"),await g.click(L(o).getByRole("button",{name:"Expand group"}))}},Se=(t,e)=>a.jsxs(a.Fragment,{children:[a.jsx("b",{children:"Team"}),", then ",a.jsx("b",{children:"Level"}),": the level rows are indented under their team. Scroll down — the team row sticks under the header, the level row under it, until the next group pushes them away."," ",a.jsx(c,{update:e,set:{grouping:["level","team"]},children:"Level first here"})," ","·"," ",a.jsx(p,{update:e,start:{grouping:["team","level"],groupLayout:"rows"}}),"."]}),v={tags:["kb:group-rows-several-levels"],name:"2 · Several levels",args:{grouping:["team","level"]},parameters:{columns:w(),hint:Se,code:T},play:async t=>{if(d(t))return;const{canvasElement:e}=t,o=await m(e);await l(()=>n(i(e,1).length>0,"level rows"));const r=e.querySelector("[role=row]");o.scrollTop=250,await l(()=>{const s=i(e)[0].getBoundingClientRect().top,u=r.getBoundingClientRect().bottom;n(Math.abs(s-u)<2,`the team row sticks: ${s} vs ${u}`)}),o.scrollTop=0}},Ee=(t,e)=>a.jsxs(a.Fragment,{children:["The group row shows each column's total, under the column:"," ",a.jsx("b",{children:"Person"})," counts (",a.jsx("code",{children:"count"}),"), ",a.jsx("b",{children:"Level"})," counts the levels (",a.jsx("code",{children:"uniqueCount"}),"), ",a.jsx("b",{children:"Status"})," and ",a.jsx("b",{children:"Rate"})," use their own"," ",a.jsx("code",{children:"aggregationFn"}),", ",a.jsx("b",{children:"Load"})," averages (",a.jsx("code",{children:"mean"}),"),"," ",a.jsx("b",{children:"Start"})," gives the range — each drawn by its ",a.jsx("code",{children:"aggregatedCell"}),". A column without an ",a.jsx("code",{children:"aggregationFn"})," shows nothing."," ",a.jsx(c,{update:e,set:{grouping:["level"]},children:"Totals by Level here"})," ","·"," ",a.jsx(p,{update:e,start:{grouping:["team"],groupLayout:"rows"}}),"."]}),y={tags:["kb:group-rows-totals"],name:"3 · Totals",args:{grouping:["team"]},parameters:{columns:w(),hint:Ee,code:T},play:async t=>{if(d(t))return;const{canvasElement:e}=t;await m(e);const o=await l(()=>i(e)[0]),r=(s,u)=>n(u.test(k(o,s)),`${s} total, got ${k(o,s)}`);r("level",/^\d+ levels?$/),r("load",/^avg \d+%$/),r("rate",/^(\$|€|zł)( (\$|€|zł))*$/),r("start",/ – /),n(k(o,"period")==="","no aggregationFn, no total")}},je=(t,e)=>{const o=(t.grouping??[])[0]==="person__letter";return a.jsxs(a.Fragment,{children:["The table draws groups as lanes, but ",a.jsx("b",{children:"Person · First letter"})," is always rows (its way says ",a.jsx("code",{children:"groupLayout: 'rows'"}),")."," ",o?a.jsxs(a.Fragment,{children:["Letters outside: a letter row, then the ",a.jsx("b",{children:"Team"})," lane under it."," ",a.jsx(c,{update:e,set:{grouping:["team","person__letter"]},children:"Team first here"}),": the Team lane spans the letter rows."]}):a.jsxs(a.Fragment,{children:["Team outside: its lane spans the letter rows."," ",a.jsx(c,{update:e,set:{grouping:["person__letter","team"]},children:"Letters first here"}),"."]})," ",a.jsx(p,{update:e,start:{grouping:["person__letter","team"],groupLayout:"lanes"}}),"."]})},f={tags:["kb:group-rows-mixed"],name:"4 · Mixed",args:{grouping:["person__letter","team"],groupLayout:"lanes"},parameters:{columns:be(w()),hint:je,code:t=>ne({before:S.before,own:{...S.own,person:le("rows")}},t)},play:async t=>{if(d(t))return;const{canvasElement:e}=t;await m(e),await se(e,["team"]),await l(()=>n(i(e).length>1,"letter rows")),n(j(e).every(o=>/^[A-Z]$/.test(o)),`letters, got ${j(e).join()}`)}},Le=(t,e)=>a.jsxs(a.Fragment,{children:["Lanes have no row across the columns, so their totals go in a row of their own at the end of each group: ",a.jsx("code",{children:'groupTotals="footer"'})," ","(or ",a.jsx("code",{children:"meta.groupTotals"})," of one grouping). It is optional:"," ",a.jsx(c,{update:e,set:{groupTotals:t.groupTotals==="footer"?"none":"footer"},children:t.groupTotals==="footer"?"turn it off here":"turn it on here"}),"."," ",a.jsx(p,{update:e,start:{grouping:["team"],groupLayout:"lanes",groupTotals:"footer"}}),"."]}),x={tags:["kb:group-rows-totals-row-under-lanes"],name:"5 · Totals row under lanes",args:{grouping:["team"],groupLayout:"lanes",groupTotals:"footer"},parameters:{columns:w(),hint:Le,code:T},play:async t=>{var r,s;if(d(t))return;const{canvasElement:e}=t;await m(e),await se(e,["team"]);const o=await l(()=>{const u=e.querySelectorAll("[data-totals-row]");return n(u.length>0,"totals rows"),u});n((s=(r=o[0].querySelector("[data-totals-label]"))==null?void 0:r.textContent)==null?void 0:s.startsWith("Total · "),"a totals row names its group"),n(/^\d+ levels?$/.test(k(o[0],"level")),"the totals under their columns")}},Ce=(t,e)=>a.jsxs(a.Fragment,{children:["Click a team's name in its row: the group menu — ",a.jsx("b",{children:"Sort ›"})," the groups, ",a.jsx("b",{children:"Ungroup by Team"}),". The same menu a lane header has;"," ",a.jsx("code",{children:"meta.hideFrom: ['groupHeader.menu']"})," takes it away."," ",a.jsx(c,{update:e,set:{sorting:[{id:"team",desc:!0}]},children:"Sort the teams Z–A here"})," ","·"," ",a.jsx(p,{update:e,start:{grouping:["team"],groupLayout:"rows"}}),"."]}),b={tags:["kb:group-rows-group-row-menu"],name:"6 · Group row menu",args:{grouping:["team"]},parameters:{columns:w(),hint:Ce,code:T},play:async t=>{if(d(t))return;const{canvasElement:e}=t;await m(e);const o=await l(()=>i(e)[0].querySelector('[data-group-value][aria-haspopup="menu"]'));await g.click(o),await g.click(await l(()=>E().getByRole("menuitem",{name:"Sort"}))),await g.click(await l(()=>E().getByRole("menuitemradio",{name:"Sort Z–A"}))),await l(()=>{const r=j(e);n(r.length>1&&r.join()===[...r].sort().reverse().join(),`teams Z–A, got ${r.join()}`)}),await g.click(i(e)[0].querySelector("[data-group-value]")),await g.click(await l(()=>E().getByRole("menuitem",{name:"Ungroup by Team"}))),await l(()=>n(!i(e).length,"ungrouped"))}};var F,R,$,A,O;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['kb:group-rows-group-rows'],
  name: '1 · Group rows',
  args: {
    grouping: ['team']
  },
  parameters: {
    columns: rowsColumns(),
    hint: groupRowsHint,
    code
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    await waitFor(() => check(groupRows(canvasElement).length > 1, 'group rows'));
    check(!canvasElement.querySelector('[data-lane-id]'), 'no lanes');
    const first = groupRows(canvasElement)[0];
    check(first.querySelector('[data-group-cell="label"][data-column-id="person"]') && countOf(first) > 0, 'the group and its count in the first column');
    const before = groupRows(canvasElement).length;
    await userEvent.click(within(first).getByRole('button', {
      name: 'Collapse group'
    }));
    await waitFor(() => check(first.getAttribute('aria-expanded') === 'false' && groupRows(canvasElement).length === before, 'folded: the group row stays'));
    check(!canvasElement.querySelector('[data-collapsed-group]'), 'no placeholder row');
    await userEvent.click(within(first).getByRole('button', {
      name: 'Expand group'
    }));
  }
}`,...($=(R=h.parameters)==null?void 0:R.docs)==null?void 0:$.source},description:{story:"Each group a header row with its rows under it; folding keeps the row.",...(O=(A=h.parameters)==null?void 0:A.docs)==null?void 0:O.description}}};var _,q,M,B,G;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['kb:group-rows-several-levels'],
  name: '2 · Several levels',
  args: {
    grouping: ['team', 'level']
  },
  parameters: {
    columns: rowsColumns(),
    hint: levelsHint,
    code
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    const scroller = await grid(canvasElement);
    await waitFor(() => check(groupRows(canvasElement, 1).length > 0, 'level rows'));
    const header = canvasElement.querySelector('[role=row]') as HTMLElement;
    scroller.scrollTop = 250;
    await waitFor(() => {
      const top = groupRows(canvasElement)[0].getBoundingClientRect().top;
      const bottom = header.getBoundingClientRect().bottom;
      check(Math.abs(top - bottom) < 2, \`the team row sticks: \${top} vs \${bottom}\`);
    });
    scroller.scrollTop = 0;
  }
}`,...(M=(q=v.parameters)==null?void 0:q.docs)==null?void 0:M.source},description:{story:"Nested header rows, indented; each sticks while its rows scroll.",...(G=(B=v.parameters)==null?void 0:B.docs)==null?void 0:G.description}}};var H,I,P,N,U;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['kb:group-rows-totals'],
  name: '3 · Totals',
  args: {
    grouping: ['team']
  },
  parameters: {
    columns: rowsColumns(),
    hint: totalsHint,
    code
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    const first = await waitFor(() => groupRows(canvasElement)[0]);
    const expectTotal = (id: string, pattern: RegExp) => check(pattern.test(totalIn(first, id)), \`\${id} total, got \${totalIn(first, id)}\`);
    expectTotal('level', /^\\d+ levels?$/);
    expectTotal('load', /^avg \\d+%$/);
    expectTotal('rate', /^(\\$|€|zł)( (\\$|€|zł))*$/);
    expectTotal('start', / – /);
    check(totalIn(first, 'period') === '', 'no aggregationFn, no total');
  }
}`,...(P=(I=y.parameters)==null?void 0:I.docs)==null?void 0:P.source},description:{story:"Totals of each column in the group row: TanStack aggregationFn + aggregatedCell.",...(U=(N=y.parameters)==null?void 0:N.docs)==null?void 0:U.description}}};var V,D,Z,z,K;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  tags: ['kb:group-rows-mixed'],
  name: '4 · Mixed',
  args: {
    grouping: ['person__letter', 'team'],
    groupLayout: 'lanes'
  },
  parameters: {
    columns: lettersAsRows(rowsColumns()),
    hint: mixedHint,
    code: (args: WaysArgs) => waysCode({
      before: TOTALS_CODE.before,
      own: {
        ...TOTALS_CODE.own,
        person: personCode('rows')
      }
    }, args)
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    await expectLanes(canvasElement, ['team']);
    await waitFor(() => check(groupRows(canvasElement).length > 1, 'letter rows'));
    check(valuesOf(canvasElement).every(v => /^[A-Z]$/.test(v)), \`letters, got \${valuesOf(canvasElement).join()}\`);
  }
}`,...(Z=(D=f.parameters)==null?void 0:D.docs)==null?void 0:Z.source},description:{story:"One grouping always as rows in a table of lanes: Person by first letter.",...(K=(z=f.parameters)==null?void 0:z.docs)==null?void 0:K.description}}};var W,Y,J,Q,X;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['kb:group-rows-totals-row-under-lanes'],
  name: '5 · Totals row under lanes',
  args: {
    grouping: ['team'],
    groupLayout: 'lanes',
    groupTotals: 'footer'
  },
  parameters: {
    columns: rowsColumns(),
    hint: footerHint,
    code
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    await expectLanes(canvasElement, ['team']);
    const footers = await waitFor(() => {
      const rows = canvasElement.querySelectorAll('[data-totals-row]');
      check(rows.length > 0, 'totals rows');
      return rows;
    });
    check(footers[0].querySelector('[data-totals-label]')?.textContent?.startsWith('Total · '), 'a totals row names its group');
    check(/^\\d+ levels?$/.test(totalIn(footers[0], 'level')), 'the totals under their columns');
  }
}`,...(J=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:J.source},description:{story:"Lanes with a totals row at the end of each group (optional).",...(X=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var ee,te,ae,oe,re;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  tags: ['kb:group-rows-group-row-menu'],
  name: '6 · Group row menu',
  args: {
    grouping: ['team']
  },
  parameters: {
    columns: rowsColumns(),
    hint: menuHint,
    code
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const {
      canvasElement
    } = ctx;
    await grid(canvasElement);
    const value = await waitFor(() => groupRows(canvasElement)[0].querySelector('[data-group-value][aria-haspopup="menu"]') as HTMLElement);
    await userEvent.click(value);
    await userEvent.click(await waitFor(() => page().getByRole('menuitem', {
      name: 'Sort'
    })));
    await userEvent.click(await waitFor(() => page().getByRole('menuitemradio', {
      name: 'Sort Z–A'
    })));
    await waitFor(() => {
      const values = valuesOf(canvasElement);
      check(values.length > 1 && values.join() === [...values].sort().reverse().join(), \`teams Z–A, got \${values.join()}\`);
    });
    await userEvent.click(groupRows(canvasElement)[0].querySelector('[data-group-value]') as HTMLElement);
    await userEvent.click(await waitFor(() => page().getByRole('menuitem', {
      name: 'Ungroup by Team'
    })));
    await waitFor(() => check(!groupRows(canvasElement).length, 'ungrouped'));
  }
}`,...(ae=(te=b.parameters)==null?void 0:te.docs)==null?void 0:ae.source},description:{story:"The group value opens the group menu: sort the groups, ungroup.",...(re=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:re.description}}};const rt=["GroupRows","SeveralLevels","Totals","Mixed","TotalsRowUnderLanes","GroupRowMenu"];export{b as GroupRowMenu,h as GroupRows,f as Mixed,v as SeveralLevels,y as Totals,x as TotalsRowUnderLanes,rt as __namedExportsOrder,ot as default};
