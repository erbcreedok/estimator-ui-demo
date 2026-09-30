import{s as V,S as q,b as D,w as G,W as k}from"./grouping-ways-code-rI-4u1W6.js";import{j as F,c as H}from"./styles-DXLXEQ3H.js";import{u as a,w as i}from"./index-DLqD3z3M.js";import{g as j,e as l,c as s,p as n}from"./grouping-play-CrknfM6n.js";import{s as Z,a as M,w as U,o as I,h as g}from"./grouping-ways-kit-BW-cfhgs.js";import{e as u,s as p,o as A,a as f,b as m,f as S,l as d,c as P}from"./grouping-ways-sort-play-C961SKxJ.js";import{a as R,b as K,c as $,d as Q}from"./issues-DfzTsQBU.js";import{c as O}from"./play-kit-Bu4SXy9H.js";import{w as Y}from"./scene-kit-DXifMYYP.js";import"./mini-kit-1oofpOGO.js";import"./index-BjhrbhTf.js";import"./TableCore-kOYdxPhk.js";import"./jsx-runtime-CEpjeC4Q.js";import"./index-D841zMOb.js";import"./TableStatusBar-BHCIeSi2.js";import"./panels-D6DlFR9J.js";import"./TableToolbar-C0bTLKMD.js";import"./createSvgIcon-s1BrOgA2.js";import"./employees-DtM5_3-O.js";import"./fixtures-CCjjPTo2.js";import"./rich-cells-C4zdx3Ia.js";import"./RowActions-CWt-61bw.js";const W=`// How each lane sorts its groups — the lane menu's Sort › shows these words.
// A way to group: meta.groupings[].sort (and its own sortingFn); a column
// grouped as is: its meta.sort. Unset: A–Z / Z–A.
const quarterKey = (quarter: string) => {
  const [q, year] = quarter.split(' ')
  return Number(year) * 4 + Number(q.slice(1))
}

// Status: Blocked and Excluded group as Needs attention (the groups sort by
// that value, not by their first row).
const resolvers: TableCoreResolvers<Employee> = {
  getGroupingValue: ({ column }, value) =>
    column.id === 'status' && value !== 'Included' ? 'Needs attention' : value,
}`,J={level:`{
  accessorKey: 'level',
  header: 'Level',
  cell: LevelCell,
  meta: coreMeta({
    // Grouped as is, Level keeps its column; lane and header share the sort.
    whenGrouped: 'keep',
    sort: { order: ['B1', 'B2', 'B3', 'C1'], labels: { asc: 'Junior first', desc: 'Senior first' } },
    groupings: [{ id: 'letter', label: 'First letter', getValue: (e) => e.level.slice(0, 1) }],
  }),
}`,rate:`{
  id: 'rate',
  accessorKey: 'pay',
  header: 'Rate',
  cell: RateCell,
  meta: coreMeta({
    groupAsIs: false,
    groupings: [
      {
        id: 'amount', label: 'Amount', getValue: (e) => amountBand(e.pay),
        // A fixed order with own words.
        sort: { order: ['0–50', '50–100', '100–500', '500+'], labels: { asc: 'Low first', desc: 'High first' } },
      },
      // No sort: Sort A–Z / Z–A.
      { id: 'currency', label: 'Currency', getValue: (e) => e.currency },
      {
        id: 'per', label: 'Per hour / month / year', getValue: (e) => e.per,
        sort: { order: ['hour', 'month', 'year'], labels: { asc: 'Hourly first', desc: 'Yearly first' } },
      },
    ],
  }),
}`,start:`{
  accessorKey: 'start',
  header: 'Start',
  cell: DateCell,
  meta: coreMeta({
    groupings: [
      {
        id: 'quarter', label: 'Quarter', getValue: (e) => quarterOf(e.start),
        // Dates by an own comparison: 'Q3 2025' before 'Q1 2026'.
        sort: { type: 'date', labels: { asc: 'Earliest first', desc: 'Latest first' } },
        sortingFn: (a, b, id) =>
          quarterKey(String(a.getValue(id))) - quarterKey(String(b.getValue(id))),
      },
      { id: 'year', label: 'Year', getValue: (e) => e.start.slice(0, 4) },
    ],
  }),
}`,period:`{
  id: 'period',
  accessorFn: (e) => \`\${e.start} – \${e.end}\`,
  header: 'Period',
  cell: PeriodCell,
  meta: coreMeta({
    groupAsIs: false,
    groupings: [
      {
        id: 'length', label: 'Length', getValue: (e) => lengthBand(monthsBetween(e.start, e.end)),
        sort: { order: ['under 6 months', '6–12 months', 'over a year'], labels: { asc: 'Shortest first', desc: 'Longest first' } },
      },
      { id: 'year', label: 'Start year', getValue: (e) => e.start.slice(0, 4) },
    ],
  }),
}`},z=e=>F.jsxDEV(K,{table:e},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-ways-sort.tsx",lineNumber:47,columnNumber:2},void 0),b=async(e,t)=>{const r=g(e,t);await a.click(r.querySelector('[aria-haspopup="menu"]')),await i(()=>n().getByRole("menu"))},c=async e=>a.click(await i(()=>n().getByRole("menuitemradio",{name:e}))),L=["0–50","50–100","100–500","500+"],X=["B1","B2","B3","C1"],v=async e=>{var t,r,o;await l(e,["rate__amount"]),await u(e,[...L].reverse()),s((r=(t=p(e))==null?void 0:t.textContent)==null?void 0:r.includes("Rate · Amount"),`the way's sort is a chip, got ${(o=p(e))==null?void 0:o.textContent}`),await A(e,"rate__amount"),await a.click(n().getByRole("menuitem",{name:"Sort"})),await i(()=>s(f().join()==="Low first,High first ✓",`own words, got ${f().join()}`)),await c("Low first"),await u(e,L),await I(e,"rate","Rate"),await c("Currency"),await l(e,["rate__currency"]),await i(()=>s(!p(e),"the Amount sort went with it")),await m(e,"rate__currency","Sort Z–A"),await u(e,["USD","PLN","EUR"])},ee=async e=>{var t;await b(e,"level"),await a.click(n().getByRole("menuitem",{name:"Then by Level"})),await c("As is"),await l(e,["rate__currency","level"]),s(g(e,"level"),"Level stays in the table"),await m(e,"level","Senior first"),await u(e,[...X].reverse(),{level:1,inside:S(e,0)}),s(((t=g(e,"level"))==null?void 0:t.getAttribute("aria-sort"))==="descending","the Level header shows the lane sort"),await u(e,["USD","PLN","EUR"])},te=async e=>{const t=d(e,0).join(),r=d(e,1,S(e,0)).join();await b(e,"rate"),await a.click(n().getByRole("menuitem",{name:"Sort"})),await c("Sort descending"),await i(()=>{var o;return s(((o=g(e,"rate"))==null?void 0:o.getAttribute("aria-sort"))==="descending","rows sorted by Rate")}),s(d(e,0).join()===t,"outer groups stay"),s(d(e,1,S(e,0)).join()===r,"inner groups stay")},re=async e=>{await I(e,"start","Start"),await c("Quarter"),await l(e,["start__quarter"]),await m(e,"start__quarter","Latest first");const t=r=>{const[o,w]=r.split(" ");return Number(w)*4+Number(o.slice(1))};await i(()=>{const r=d(e,0).map(t);s(r.length>1&&r.every((o,w)=>w===0||r[w-1]>o),`latest quarter first, got ${d(e,0).join(", ")}`)}),await I(e,"period","Period"),await c("Length"),await m(e,"period__length","Longest first"),await u(e,["over a year","6–12 months","under 6 months"])},se=async e=>{await b(e,"status"),await a.click(n().getByRole("menuitem",{name:"Group by Status"})),await l(e,["status"]),await m(e,"status","Sort Z–A"),await u(e,["Needs attention","Included"])},oe={args:q,parameters:{hint:V,columns:M(),resolvers:Z,docs:{description:{story:`Open a lane header → *Sort ›*. The words and the order are the client's:

| Lane | Sort › | How |
|---|---|---|
| Rate · Amount | *Low first* / *High first* | \`meta.groupings[].sort\`: a fixed order with own words |
| Rate · Per | *Hourly first* / *Yearly first* | the same, another order |
| Rate · Currency, Person · First letter, Start · Year | *Sort A–Z* / *Z–A* | no \`sort\`: text |
| Start · Quarter | *Earliest first* / *Latest first* | \`sort: { type: 'date' }\` and its own \`sortingFn\` (Q3 2025 before Q1 2026) |
| Period · Length | *Shortest first* / *Longest first* | a fixed order |
| Level (keeps its column) | *Junior first* / *Senior first* | \`meta.sort\` of the column; the header shows the same sort |
| Status (a resolver value) | *Sort A–Z* / *Z–A* | groups sort by *Needs attention* / *Included*, not by their first row |

Each lane sorts only its own groups, so its *Sort ›* changes only its own sort (no *Then by*). A way's sort is a chip and is in the Sort panel while it groups, and goes when its grouping goes. A sort of rows (Rate › Sort descending) orders only the rows inside the groups and replaces only the row sorts.`}},code:e=>G({before:W,own:J,props:["resolvers={resolvers}"]},e)},play:async e=>{if(O(e))return;const{canvasElement:t}=e;await j(t),await v(t),await ee(t),await te(t),await re(t),await se(t)}},ae={...R,meta:H({...R.meta,hideFrom:$})},N=["Blockers","Excluded","Included"],ie=async e=>{await A(e,"issues");const t=n().getAllByRole("menuitem").map(r=>r.textContent??"");s(t.join()==="Sort",`only Sort, got ${t.join()}`),await a.click(n().getByRole("menuitem",{name:"Sort"})),await c("Included first"),await u(e,[...N].reverse()),s(!p(e),"no chip: Issues is hidden from the status bar")},ne=async e=>{await m(e,"team","Sort Z–A"),await i(()=>{var r,o;return s((o=(r=p(e))==null?void 0:r.textContent)==null?void 0:o.includes("Team"),"Team sort chip")});const t=()=>d(e,1,S(e,0));await i(()=>{const r=t();s(r.length>1&&r.join()===[...r].sort().reverse().join(),`teams Z–A inside, got ${r.join(", ")}`)}),await b(e,"person"),await a.click(n().getByRole("menuitem",{name:"Sort"})),await c("Sort A–Z"),await i(()=>{var r;return s(((r=g(e,"person"))==null?void 0:r.getAttribute("aria-sort"))==="ascending","rows by Person")}),await u(e,[...N].reverse()),s(t().join()===[...t()].sort().reverse().join(),"the Team lane keeps Z–A")},ue=async e=>{const t=e.querySelector("[data-issues-toggle]");await a.click(t),await l(e,["team"]),await a.click(t),await l(e,["issues","team"]),await A(e,"issues"),await a.click(n().getByRole("menuitem",{name:"Sort"})),await i(()=>s(f().join()==="Blockers first,Included first",`not sorted again, got ${f().join()}`)),await P()},le={args:{grouping:["issues","team"]},parameters:{hint:D,columns:U([]),extra:[ae],toolbarStart:z,docs:{description:{story:"Issues is the screen's: only its **Issues** button turns it on and off; it is hidden from the toolbar, the status bar, the header and the column menu lists (`meta.hideFrom`). Its lane menu still sorts its groups — *Blockers first* / *Included first*, from `meta.sort` — and has no *Ungroup*. The user's own sorts, of the Team lane or of rows (Person), leave the Issues sort; turning Issues off drops it."}},code:e=>G({extra:{issues:`{
  id: 'issues',
  accessorFn: (e) => ({ blocked: 'Blockers', excluded: 'Excluded', ok: 'Included' })[e.state],
  header: 'Issues',
  meta: coreMeta({
    groupingOnly: true,
    // Hidden everywhere but its lane menu ('groupHeader.menu' would hide that too).
    hideFrom: ['toolbar', 'statusBar', 'columnHeader', 'columnMenu'],
    sort: { order: ['Blockers', 'Excluded', 'Included'], labels: { asc: 'Blockers first', desc: 'Included first' } },
  }),
}`},toolbarStart:"<IssuesToggle table={table} />",after:Q},e)},play:async e=>{if(O(e))return;const{canvasElement:t}=e;await j(t),await l(t,["issues","team"]),await ie(t),await ne(t),await ue(t)}},Ge={...k,title:"Tables/Table Core/Grouping/Group sorting",decorators:[Y],parameters:{...k.parameters,docs:{...k.parameters.docs,description:{component:"A lane's menu sorts its groups: *Sort ›* with the kind of the way (`meta.groupings[].sort` / `sortingFn`) or of the column (`meta.sort`). A lane sort orders only its own groups; the rows keep their own sorts."}}}},h={tags:["kb:group-sort-groups"],name:"10 · Sort the groups",...oe},y={tags:["kb:group-sort-issues-groups"],name:"11 · Sort the Issues groups",...le};var B,E,_;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  tags: ['kb:group-sort-groups'],
  name: '10 · Sort the groups',
  ...sorts.SortGroups
}`,...(_=(E=h.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var C,T,x;y.parameters={...y.parameters,docs:{...(C=y.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['kb:group-sort-issues-groups'],
  name: '11 · Sort the Issues groups',
  ...sorts.SortIssuesGroups
}`,...(x=(T=y.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};const je=["SortGroups","SortIssuesGroups"];export{h as SortGroups,y as SortIssuesGroups,je as __namedExportsOrder,Ge as default};
