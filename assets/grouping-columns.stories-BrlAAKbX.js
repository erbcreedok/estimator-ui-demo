import{L as N}from"./grouping-lanes-kit-C7Fb2jxG.js";import{o as Y,w as G,c as U,k as D,K as Q,W as _}from"./grouping-ways-code-DK-8tfEK.js";import{H as z}from"./grouping-scenes-more-WLL5eXgm.js";import{j as J}from"./jsx-runtime-Cnbe3ryz.js";import{a as f,u as n,w as u}from"./index-iBx7lKYd.js";import{c as H}from"./places-Dp9r7e0L.js";import{g as L,c as o,d,b as m,e as r,p as i}from"./grouping-play-CTN_XQGq.js";import{h as l,o as c,c as B,g as S,s as X,A as Z}from"./grouping-ways-kit-BwgE6Z80.js";import{o as V,c as M}from"./grouping-ways-sort-play-BNOH-tMO.js";import{a as ee,c as te,d as ae,b as oe}from"./issues-nMSoXFwf.js";import{c as A}from"./play-kit-Bu4SXy9H.js";import{w as re}from"./scene-kit-BsKxVgS1.js";import{w as C}from"./story-kit-GExFh5PP.js";const ne={id:"country",accessorKey:"country",header:"Country",meta:H({groupingOnly:!0})},se={id:"contract",accessorFn:e=>e.per==="hour"?"Contractor":"Employee",header:"Contract",meta:H({groupingOnly:!0})},ie=["country","contract","issues"],le=e=>J.jsx(oe,{table:e}),j=async e=>{const t=await d(e,"Group"),a=f(t).queryAllByRole("button",{name:/^Group by /}).map(s=>s.getAttribute("aria-label")??s.textContent??"");return await m(),a.join()},ue=async e=>{ie.forEach(a=>o(!l(e,a),`${a} is never a column`));const t=await d(e,"Columns");["Country","Contract","Issues"].forEach(a=>o(!f(t).queryByText(a),`${a}: not in Columns`)),await m()},ce=async e=>{const a=(await d(e,"Sort")).textContent??"";return await m(),a},pe=async e=>{var s,g;await r(e,["contract"]),o((g=(s=e.querySelector('[data-chip="group"]'))==null?void 0:s.textContent)==null?void 0:g.includes("Contract"),"the Contract chip shows"),o(!(await ce(e)).includes("Contract"),"Contract is not in the Sorting panel, even grouped"),await n.click(e.querySelector("[data-clear-all]")),await r(e,[]);const t=(await j(e)).split(",");o(t.some(q=>q.includes("Contract")),"dropped, the Group panel offers Contract back"),o(t[0].includes("Person"),`Person first, got ${t[0]}`),o(t.slice(-2).join().includes("Contract")&&t.slice(-2).join().includes("Country"),`Contract and Country last, got ${t.slice(-2).join()}`);const a=await d(e,"Group");await n.click(f(a).getByRole("button",{name:"Group by Contract"})),await r(e,["contract"]),await m(),await n.click(e.querySelector("[data-clear-all]")),await r(e,[])},de=async e=>{const t=await d(e,"Group");await n.click(f(t).getByRole("button",{name:"Group by Country"})),await r(e,["country"]),await m(),await V(e,"country"),o(i().queryByRole("menuitem",{name:"Ungroup by Country"}),"Ungroup in its lane menu"),await M()},me=async e=>{o(!(await j(e)).includes("Issues"),"Issues is not offered in the Group panel");const t=e.querySelector("[data-issues-toggle]");await n.click(t),await r(e,["issues","country"]),await u(()=>{var s,g;return o(!((g=(s=e.querySelector('[data-chip="group"]'))==null?void 0:s.textContent)!=null&&g.includes("Issues")),"no Issues chip")}),await V(e,"issues");const a=i().getAllByRole("menuitem").map(s=>s.textContent??"");o(a.join()==="Sort",`only Sort, got ${a.join()}`),await M(),await n.click(t),await r(e,["country"])},ge={args:{grouping:["contract"],placeOrder:{toolbar:{first:["person"],last:["contract","country"]}},columnHideFrom:{contract:["toolbar.sorting"],issues:te}},parameters:{hint:Y,extra:[ne,se,ee],toolbarStart:le,docs:{description:{story:"Three columns the table never draws; each is offered to the user in other places (`meta.hideFrom`, the *column meta.hideFrom* control):\n\n| Column | hideFrom | The user |\n|---|---|---|\n| Country (in the data, not in the table) | — | groups by it from the Group panel, sees a chip, ungroups from its lane menu |\n| Contract (worked out from the pay) | `toolbar.sorting` | gets it from the screen (grouped at start), sees the chip, may drop it with *Clear all* and group by it again from the Group panel; its groups are never in the Sorting panel |\n| Issues | `toolbar`, `statusBar`, `columnHeader`, `columnMenu` | only the screen's **Issues** button turns it on and off; no chip; its lane menu only sorts |\n\nA grouping of the screen's own that the user cannot drop — of any column, drawn or not — and how it stays out of *Clear all* and of the one-grouping count is *Grouping › Columns › 8 · Hidden grouping*."}},code:e=>G({before:`// Columns that only group: never drawn, not in the Columns or Sort panels.
// Where the user may group by each: meta.hideFrom (see the controls).`,extra:{country:"{ id: 'country', accessorKey: 'country', header: 'Country', meta: coreMeta({ groupingOnly: true }) }",contract:`{
  id: 'contract',
  accessorFn: (e) => (e.per === 'hour' ? 'Contractor' : 'Employee'),
  header: 'Contract',
  meta: coreMeta({ groupingOnly: true }),
}`,issues:`{
  id: 'issues',
  accessorFn: (e) => ({ blocked: 'Blockers', excluded: 'Excluded', ok: 'Included' })[e.state],
  header: 'Issues',
  meta: coreMeta({ groupingOnly: true }),
}`},toolbarStart:"<IssuesToggle table={table} />",after:ae},e)},play:async e=>{if(A(e))return;const{canvasElement:t}=e;await L(t),await ue(t),await pe(t),await de(t),await me(t)}},k=async(e,t,a,s)=>{await c(e,t,a),await n.click(await u(()=>i().getByRole("menuitemradio",{name:s})))},p=(e,t,a)=>u(()=>o(S(e).length>0&&S(e).every(t),`${a}, got ${S(e).join()}`)),ye=async e=>{await r(e,["status"]),await p(e,t=>["Included","Needs attention"].includes(t),"Included / Needs attention")},we=async e=>{await n.click(f(l(e,"load")).getByRole("button",{name:/^Load/})),await n.click(await u(()=>i().getByRole("menuitem",{name:"Group by Load"}))),await r(e,["load"]);const t=["under 50%","50–90%","over 90%"];await p(e,a=>t.includes(a),"load bands")},he=async e=>{await c(e,"level","Level"),await n.click(await u(()=>i().getByRole("menuitemradio",{name:"First letter"}))),await r(e,["level__letter"]),o(l(e,"level"),"Level stays a column"),await p(e,s=>/^[BC]$/.test(s),"B / C"),await c(e,"level","Level");const t=await u(()=>i().getByRole("menuitemradio",{name:"First letter"}));o(t.getAttribute("aria-checked")==="true","First letter checked"),await n.click(i().getByRole("menuitemradio",{name:"As is"})),await r(e,["level"]),o(!l(e,"level"),"Level as is moves into its lane");const a=await d(e,"Group");o(!a.querySelector('[data-group-option="level"], [data-group-option="level__letter"]'),"one way per column in the Group panel"),await m()},be=async e=>{await c(e,"start","Start"),await n.click(await u(()=>i().getByRole("menuitemradio",{name:"Quarter"}))),await r(e,["start__quarter"]),await p(e,t=>/^Q[1-4] \d{4}$/.test(t),"quarters"),await c(e,"start","Start"),await n.click(await u(()=>i().getByRole("menuitemradio",{name:"Year"}))),await r(e,["start__year"]),await p(e,t=>/^\d{4}$/.test(t),"years")},fe=async e=>{await c(e,"person","Person"),await u(()=>o(B().join()==="First letter,Surname letter",`only the ways, got ${B().join()}`)),await n.click(i().getByRole("menuitemradio",{name:"First letter"})),await r(e,["person__letter"]),o(l(e,"person"),"Person stays a column"),await c(e,"person","Person"),await n.click(await u(()=>i().getByRole("menuitemradio",{name:"Surname letter"}))),await r(e,["person__surname"])},Ce=async e=>{await k(e,"rate","Rate","Amount"),await r(e,["rate__amount"]),o(l(e,"rate"),"Rate stays a column");const t=["0–50","50–100","100–500","500+"];await p(e,a=>t.includes(a),"amount bands"),await k(e,"rate","Rate","Currency"),await r(e,["rate__currency"]),await p(e,a=>["USD","EUR","PLN"].includes(a),"currencies")},Se=async e=>{await k(e,"period","Period","Length"),await r(e,["period__length"]),o(l(e,"period"),"Period stays a column");const t=["under 6 months","6–12 months","over a year"];await p(e,a=>t.includes(a),"lengths")},ke={args:{grouping:["status"]},parameters:{hint:U,ways:Z,resolvers:X,docs:{description:{story:"Every column groups its own way; open a header → *Group by …*.\n\n| Column | Groups by | How |\n|---|---|---|\n| Status | *Included* / *Needs attention* (Blocked and Excluded together) | `resolvers.getGroupingValue` — the table's resolver, for any column |\n| Load | *under 50%* / *50–90%* / *over 90%* | TanStack `getGroupingValue` on the column — no menu of ways |\n| Level | *As is* or *First letter* (B / C) | `meta.groupings` — a way keeps Level in the table, *As is* moves it into the lane |\n| Start | *As is*, *Quarter* or *Year* | `meta.groupings` with two ways |\n| Person | *First letter* or *Surname letter* | `meta.groupings` + `groupAsIs: false` — no *As is* |\n| Rate | *Amount* (0–50, 50–100, 100–500, 500+), *Currency*, *Per hour / month / year* | `meta.groupings` + `groupAsIs: false` |\n| Period | *Length* or *Start year* | `meta.groupings` + `groupAsIs: false` |"}},code:e=>G({before:`// Status — resolvers.getGroupingValue: what a row groups by, for the whole
// table. Gets the column's own value; Blocked and Excluded group together.
const resolvers: TableCoreResolvers<Employee> = {
  getGroupingValue: ({ column }, value) =>
    column.id === 'status' && value !== 'Included' ? 'Needs attention' : value,
}

const loadBand = (load: number) =>
  load < 50 ? 'under 50%' : load <= 90 ? '50–90%' : 'over 90%'
const quarterOf = (date: string) =>
  \`Q\${Math.ceil(Number(date.slice(5, 7)) / 3)} \${date.slice(0, 4)}\`
const amountBand = (pay: number) =>
  pay < 50 ? '0–50' : pay < 100 ? '50–100' : pay < 500 ? '100–500' : '500+'
const lengthBand = (months: number) =>
  months < 6 ? 'under 6 months' : months <= 12 ? '6–12 months' : 'over a year'`,own:{level:`{
  accessorKey: 'level',
  header: 'Level',
  cell: LevelCell,
  meta: coreMeta({
    // Level — Group by Level › As is / First letter. The way groups as
    // 'level__letter' and Level stays in the table while it does.
    groupings: [
      { id: 'letter', label: 'First letter', getValue: (e) => firstLetter(e.level) },
    ],
  }),
}`,load:`{
  id: 'load',
  accessorFn: loadOf,
  header: 'Load',
  cell: LoadCell,
  // Load — TanStack's own getGroupingValue: this column only (the cell still
  // shows the bar). No menu of ways: Group by Load groups in bands.
  getGroupingValue: (e) => loadBand(loadOf(e)),
}`,start:`{
  accessorKey: 'start',
  header: 'Start',
  cell: DateCell,
  meta: coreMeta({
    // Start — several ways: Group by Start › As is / Quarter / Year.
    groupings: [
      { id: 'quarter', label: 'Quarter', getValue: (e) => quarterOf(e.start) },
      { id: 'year', label: 'Year', getValue: (e) => e.start.slice(0, 4) },
    ],
  }),
}`,rate:`{
  id: 'rate',
  accessorKey: 'pay',
  header: 'Rate',
  cell: RateCell, // $30/h, €1,200/mo
  meta: coreMeta({
    // Rate — only its ways: the amount in bands, the currency, per what.
    groupAsIs: false,
    groupings: [
      { id: 'amount', label: 'Amount', getValue: (e) => amountBand(e.pay) },
      { id: 'currency', label: 'Currency', getValue: (e) => e.currency },
      { id: 'per', label: 'Per hour / month / year', getValue: (e) => e.per },
    ],
  }),
}`,period:`{
  id: 'period',
  accessorFn: (e) => \`\${e.start} – \${e.end}\`,
  header: 'Period',
  cell: PeriodCell, // 1 Mar 2026 – 28 Jul 2027, 16 mo
  meta: coreMeta({
    // Period — only its ways: the length or the year it starts.
    groupAsIs: false,
    groupings: [
      { id: 'length', label: 'Length', getValue: (e) => lengthBand(monthsBetween(e.start, e.end)) },
      { id: 'year', label: 'Start year', getValue: (e) => e.start.slice(0, 4) },
    ],
  }),
}`},props:["resolvers={resolvers}"]},e)},play:async e=>{if(A(e))return;const{canvasElement:t}=e;await L(t),await ye(t),await we(t),await he(t),await be(t),await fe(t),await Ce(t),await Se(t)}},Ge={args:Q,parameters:{hint:D,code:e=>G({},e)},play:async e=>{if(A(e))return;const{canvasElement:t}=e;await L(t),await r(t,["person__letter","level"]),o(l(t,"person"),"Person keeps its place (a way)"),o(l(t,"level"),"Level keeps its place (keep)"),await c(t,"status","Status"),await r(t,["status"]),o(!l(t,"status"),"Status moves into its lane")}},_e={title:"Tables/Table Core/Features/Grouping/Columns",decorators:[re],parameters:{layout:"fullscreen",docs:{description:{component:"Every column groups its own way, set in its `columnDef`: what a row groups by, more ways than *As is*, a column that only groups, whether the column leaves the table, where it is offered."}}}},y={tags:["kb:group-own-ways"],name:"5 · Own ways to group",...C(_,ke)},w={tags:["kb:group-grouping-only"],name:"6 · Grouping-only columns",...C(_,ge)},h={tags:["kb:group-keep-column"],name:"7 · Keep the column",...C(_,Ge)},b={tags:["kb:group-hidden-grouping"],name:"8 · Hidden grouping",...C(N,z)};var I,O,R;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['kb:group-own-ways'],
  name: '5 · Own ways to group',
  ...withKit(WAYS_KIT, ways.OwnWays)
}`,...(R=(O=y.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var E,x,K;w.parameters={...w.parameters,docs:{...(E=w.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['kb:group-grouping-only'],
  name: '6 · Grouping-only columns',
  ...withKit(WAYS_KIT, only.GroupingOnly)
}`,...(K=(x=w.parameters)==null?void 0:x.docs)==null?void 0:K.source}}};var P,T,F;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['kb:group-keep-column'],
  name: '7 · Keep the column',
  ...withKit(WAYS_KIT, ways.KeepColumn)
}`,...(F=(T=h.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var $,W,v;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  tags: ['kb:group-hidden-grouping'],
  name: '8 · Hidden grouping',
  ...withKit(LANES_KIT, more.HiddenGrouping)
}`,...(v=(W=b.parameters)==null?void 0:W.docs)==null?void 0:v.source}}};const Le=["OwnWays","GroupingOnly","KeepColumn","HiddenGrouping"],ve=Object.freeze(Object.defineProperty({__proto__:null,GroupingOnly:w,HiddenGrouping:b,KeepColumn:h,OwnWays:y,__namedExportsOrder:Le,default:_e},Symbol.toStringTag,{value:"Module"}));export{ve as C,b as H,y as O};
