import{c as le,j as r}from"./styles-DXLXEQ3H.js";import{w as i,u as g,a as S}from"./index-DLqD3z3M.js";import{M as ue,a as ce,r as ge,w as ae,T as u,R as m}from"./grouping-ways-code-rI-4u1W6.js";import{g as p,p as D,c as a,e as ne}from"./grouping-play-CrknfM6n.js";import{w as me}from"./grouping-ways-kit-BW-cfhgs.js";import{m as pe}from"./mini-kit-1oofpOGO.js";import{c as d}from"./play-kit-Bu4SXy9H.js";import{w as de}from"./scene-kit-DXifMYYP.js";import"./index-BjhrbhTf.js";import"./jsx-runtime-CEpjeC4Q.js";import"./index-D841zMOb.js";import"./TableCore-kOYdxPhk.js";import"./rich-cells-C4zdx3Ia.js";import"./RowActions-CWt-61bw.js";import"./TableStatusBar-BHCIeSi2.js";import"./panels-D6DlFR9J.js";import"./TableToolbar-C0bTLKMD.js";import"./createSvgIcon-s1BrOgA2.js";import"./employees-DtM5_3-O.js";import"./fixtures-CCjjPTo2.js";const j=new Intl.DateTimeFormat("en-GB",{day:"numeric",month:"short",year:"numeric"}),be=(s,e)=>{const t=e.map(o=>o.original.start).sort();return[t[0],t[t.length-1]]},we={USD:"$",EUR:"€",PLN:"zł"},he=(s,e)=>[...new Set(e.map(t=>we[t.original.currency]))].join(" "),fe=(s,e)=>`${s} ${e}${s===1?"":"s"}`,ke=(s,e)=>e.filter(t=>t.original.state!=="ok").length,ve={level:{aggregationFn:"uniqueCount",aggregatedCell:({getValue:s})=>fe(Number(s()),"level")},status:{aggregationFn:ke,aggregatedCell:({getValue:s})=>Number(s())?`${String(s())} need attention`:"all included"},rate:{aggregationFn:he,aggregatedCell:({getValue:s})=>String(s())},load:{aggregationFn:"mean",aggregatedCell:({getValue:s})=>r.jsxDEV("span",{"data-total-load":!0,children:["avg ",Math.round(Number(s())),"%"]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows-kit.tsx",lineNumber:70,columnNumber:4},void 0)},start:{aggregationFn:be,aggregatedCell:({getValue:s})=>{const[e,t]=s();return`${j.format(new Date(e))} – ${j.format(new Date(t))}`}}},b=()=>me([]).map(s=>({...s,...ve[s.id]})),ye=s=>s.map(e=>{var o;if(e.id!=="person")return e;const t=e.meta;return{...e,meta:le({...t,groupings:(o=t.groupings)==null?void 0:o.map(n=>n.id==="letter"?{...n,groupLayout:"rows"}:n)})}}),E={before:`// Totals: a column's aggregationFn (TanStack) adds its rows up, its
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
}`}},ie=s=>`{
  id: 'person',
  accessorKey: 'name',
  header: 'Person',
  cell: PersonCell,
  // The first column with content: its group rows show the group and the
  // count here, so it needs no total.
  meta: coreMeta({
    groupAsIs: false,
    groupings: [
      { id: 'letter', label: 'First letter', getValue: (e) => firstLetter(e.name)${s==="rows"?`,
        // People by letter: always group rows, whatever the table does.
        groupLayout: 'rows'`:""} },
      { id: 'surname', label: 'Surname letter', getValue: (e) => firstLetter(surnameOf(e.name)) },
    ],
  }),
}`,We={title:"Tables/Table Core/Grouping/Look/Rows",decorators:[de],render:ge,args:{...ce,groupLayout:"rows"},argTypes:ue,parameters:{...pe("\n**Groups as rows.** `groupLayout: 'rows'` draws each group as a header row in the body — −/+, the group checkbox, the value, the count — with its rows under it, as TanStack does, instead of a lane on the left. Everything else about grouping works the same: ways, resolvers, grouping-only columns, `hideFrom`, several levels, sorting the groups, chips, the Group panel.\n\n| What | How | Scene |\n|---|---|---|\n| Groups as header rows | `groupLayout=\"rows\"` on TableCore | 1 · Group rows |\n| Several levels | nested header rows, indented; each sticks under the header and the outer ones | 2 · Several levels |\n| Totals | a column's `aggregationFn` (count, mean, uniqueCount, your own) and `aggregatedCell`: in the group row, under the column | 3 · Totals |\n| One grouping always as rows | `groupLayout` on a column (`meta`) or a way: Person by first letter is rows in a table of lanes | 4 · Mixed |\n| Totals under lanes | `groupTotals=\"footer\"` (or per grouping): a totals row ends each group | 5 · Totals row under lanes |\n| The group row's menu | the value opens it: sort the groups, ungroup (`hideFrom: ['groupHeader.menu']` takes it away) | 6 · Group row menu |\n\nA group row lines up with the columns: the first column with content shows the group, the columns with a total show it. `meta.groupCell` (edge, tooltip, style, render) applies to a group row as to a lane cell.")}},l=(s,e=0)=>Array.from(s.querySelectorAll(`[data-group-row][data-group-level="${e}"]`)),x=(s,e)=>{var t;return((t=s.querySelector(`[data-group-cell="total"][data-column-id="${e}"]`))==null?void 0:t.textContent)??""},Ne=s=>{var e;return Number((e=s.querySelector("[data-group-count]"))==null?void 0:e.textContent)},T=s=>l(s).map(e=>{var t;return((t=e.querySelector("[data-group-value]"))==null?void 0:t.textContent)??""}),xe=(s,e)=>{const t=s.groupLayout==="rows";return r.jsxDEV(r.Fragment,{children:[t?r.jsxDEV(r.Fragment,{children:["Each ",r.jsxDEV("b",{children:"Team"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:58,columnNumber:26},void 0)," is a row of its own: ",r.jsxDEV("b",{children:"−"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:58,columnNumber:59},void 0)," folds it (the row stays), the checkbox selects the team, and it shows its count and the totals of the columns. No lane on the left."," ",r.jsxDEV(u,{update:e,set:{groupLayout:"lanes"},children:"Back to lanes here"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:61,columnNumber:21},void 0)," ","to compare."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:57,columnNumber:21},void 0):r.jsxDEV(r.Fragment,{children:["Lanes now."," ",r.jsxDEV(u,{update:e,set:{groupLayout:"rows"},children:"Groups as rows here"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:69,columnNumber:21},void 0),"."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:67,columnNumber:23},void 0)," ",r.jsxDEV(m,{update:e,start:{grouping:["team"],groupLayout:"rows"}},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:76,columnNumber:13},void 0),"."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:56,columnNumber:10},void 0)},N=s=>ae({before:E.before,own:{...E.own,person:ie("as the table")}},s),w={tags:["kb:group-rows-group-rows"],name:"1 · Group rows",args:{grouping:["team"]},parameters:{columns:b(),hint:xe,code:N},play:async s=>{if(d(s))return;const{canvasElement:e}=s;await p(e),await i(()=>a(l(e).length>1,"group rows")),a(!e.querySelector("[data-lane-id]"),"no lanes");const t=l(e)[0];a(t.querySelector('[data-group-cell="label"][data-column-id="person"]')&&Ne(t)>0,"the group and its count in the first column");const o=l(e).length;await g.click(S(t).getByRole("button",{name:"Collapse group"})),await i(()=>a(t.getAttribute("aria-expanded")==="false"&&l(e).length===o,"folded: the group row stays")),a(!e.querySelector("[data-collapsed-group]"),"no placeholder row"),await g.click(S(t).getByRole("button",{name:"Expand group"}))}},Ee=(s,e)=>r.jsxDEV(r.Fragment,{children:[r.jsxDEV("b",{children:"Team"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:125,columnNumber:9},void 0),", then ",r.jsxDEV("b",{children:"Level"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:125,columnNumber:27},void 0),": the level rows are indented under their team. Scroll down — the team row sticks under the header, the level row under it, until the next group pushes them away."," ",r.jsxDEV(u,{update:e,set:{grouping:["level","team"]},children:"Level first here"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:128,columnNumber:9},void 0)," ","·"," ",r.jsxDEV(m,{update:e,start:{grouping:["team","level"],groupLayout:"rows"}},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:134,columnNumber:9},void 0),"."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:124,columnNumber:48},void 0),h={tags:["kb:group-rows-several-levels"],name:"2 · Several levels",args:{grouping:["team","level"]},parameters:{columns:b(),hint:Ee,code:N},play:async s=>{if(d(s))return;const{canvasElement:e}=s,t=await p(e);await i(()=>a(l(e,1).length>0,"level rows"));const o=e.querySelector("[role=row]");t.scrollTop=250,await i(()=>{const n=l(e)[0].getBoundingClientRect().top,c=o.getBoundingClientRect().bottom;a(Math.abs(n-c)<2,`the team row sticks: ${n} vs ${c}`)}),t.scrollTop=0}},De=(s,e)=>r.jsxDEV(r.Fragment,{children:["The group row shows each column's total, under the column:"," ",r.jsxDEV("b",{children:"Person"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:172,columnNumber:9},void 0)," counts (",r.jsxDEV("code",{children:"count"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:172,columnNumber:31},void 0),"), ",r.jsxDEV("b",{children:"Level"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:172,columnNumber:52},void 0)," counts the levels (",r.jsxDEV("code",{children:"uniqueCount"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:173,columnNumber:9},void 0),"), ",r.jsxDEV("b",{children:"Status"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:173,columnNumber:36},void 0)," and ",r.jsxDEV("b",{children:"Rate"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:173,columnNumber:54},void 0)," use their own"," ",r.jsxDEV("code",{children:"aggregationFn"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:174,columnNumber:9},void 0),", ",r.jsxDEV("b",{children:"Load"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:174,columnNumber:37},void 0)," averages (",r.jsxDEV("code",{children:"mean"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:174,columnNumber:59},void 0),"),"," ",r.jsxDEV("b",{children:"Start"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:175,columnNumber:9},void 0)," gives the range — each drawn by its ",r.jsxDEV("code",{children:"aggregatedCell"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:175,columnNumber:58},void 0),". A column without an ",r.jsxDEV("code",{children:"aggregationFn"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:176,columnNumber:31},void 0)," shows nothing."," ",r.jsxDEV(u,{update:e,set:{grouping:["level"]},children:"Totals by Level here"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:177,columnNumber:9},void 0)," ","·"," ",r.jsxDEV(m,{update:e,start:{grouping:["team"],groupLayout:"rows"}},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:183,columnNumber:9},void 0),"."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:170,columnNumber:48},void 0),f={tags:["kb:group-rows-totals"],name:"3 · Totals",args:{grouping:["team"]},parameters:{columns:b(),hint:De,code:N},play:async s=>{if(d(s))return;const{canvasElement:e}=s;await p(e);const t=await i(()=>l(e)[0]),o=(n,c)=>a(c.test(x(t,n)),`${n} total, got ${x(t,n)}`);o("level",/^\d+ levels?$/),o("load",/^avg \d+%$/),o("rate",/^(\$|€|zł)( (\$|€|zł))*$/),o("start",/ – /),a(x(t,"period")==="","no aggregationFn, no total")}},Te=(s,e)=>{const t=(s.grouping??[])[0]==="person__letter";return r.jsxDEV(r.Fragment,{children:["The table draws groups as lanes, but ",r.jsxDEV("b",{children:"Person · First letter"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:220,columnNumber:50},void 0)," is always rows (its way says ",r.jsxDEV("code",{children:"groupLayout: 'rows'"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:221,columnNumber:39},void 0),")."," ",t?r.jsxDEV(r.Fragment,{children:["Letters outside: a letter row, then the ",r.jsxDEV("b",{children:"Team"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:223,columnNumber:61},void 0)," lane under it."," ",r.jsxDEV(u,{update:e,set:{grouping:["team","person__letter"]},children:"Team first here"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:224,columnNumber:21},void 0),": the Team lane spans the letter rows."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:222,columnNumber:29},void 0):r.jsxDEV(r.Fragment,{children:["Team outside: its lane spans the letter rows."," ",r.jsxDEV(u,{update:e,set:{grouping:["person__letter","team"]},children:"Letters first here"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:232,columnNumber:21},void 0),"."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:230,columnNumber:23},void 0)," ",r.jsxDEV(m,{update:e,start:{grouping:["person__letter","team"],groupLayout:"lanes"}},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:239,columnNumber:13},void 0),"."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:219,columnNumber:10},void 0)},k={tags:["kb:group-rows-mixed"],name:"4 · Mixed",args:{grouping:["person__letter","team"],groupLayout:"lanes"},parameters:{columns:ye(b()),hint:Te,code:s=>ae({before:E.before,own:{...E.own,person:ie("rows")}},s)},play:async s=>{if(d(s))return;const{canvasElement:e}=s;await p(e),await ne(e,["team"]),await i(()=>a(l(e).length>1,"letter rows")),a(T(e).every(t=>/^[A-Z]$/.test(t)),`letters, got ${T(e).join()}`)}},Se=(s,e)=>r.jsxDEV(r.Fragment,{children:["Lanes have no row across the columns, so their totals go in a row of their own at the end of each group: ",r.jsxDEV("code",{children:'groupTotals="footer"'},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:279,columnNumber:39},void 0)," ","(or ",r.jsxDEV("code",{children:"meta.groupTotals"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:280,columnNumber:13},void 0)," of one grouping). It is optional:"," ",r.jsxDEV(u,{update:e,set:{groupTotals:s.groupTotals==="footer"?"none":"footer"},children:s.groupTotals==="footer"?"turn it off here":"turn it on here"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:281,columnNumber:9},void 0),"."," ",r.jsxDEV(m,{update:e,start:{grouping:["team"],groupLayout:"lanes",groupTotals:"footer"}},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:287,columnNumber:9},void 0),"."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:277,columnNumber:48},void 0),v={tags:["kb:group-rows-totals-row-under-lanes"],name:"5 · Totals row under lanes",args:{grouping:["team"],groupLayout:"lanes",groupTotals:"footer"},parameters:{columns:b(),hint:Se,code:N},play:async s=>{var o,n;if(d(s))return;const{canvasElement:e}=s;await p(e),await ne(e,["team"]);const t=await i(()=>{const c=e.querySelectorAll("[data-totals-row]");return a(c.length>0,"totals rows"),c});a((n=(o=t[0].querySelector("[data-totals-label]"))==null?void 0:o.textContent)==null?void 0:n.startsWith("Total · "),"a totals row names its group"),a(/^\d+ levels?$/.test(x(t[0],"level")),"the totals under their columns")}},je=(s,e)=>r.jsxDEV(r.Fragment,{children:["Click a team's name in its row: the group menu — ",r.jsxDEV("b",{children:"Sort ›"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:326,columnNumber:63},void 0)," the groups, ",r.jsxDEV("b",{children:"Ungroup by Team"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:327,columnNumber:17},void 0),". The same menu a lane header has;"," ",r.jsxDEV("code",{children:"meta.hideFrom: ['groupHeader.menu']"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:328,columnNumber:9},void 0)," takes it away."," ",r.jsxDEV(u,{update:e,set:{sorting:[{id:"team",desc:!0}]},children:"Sort the teams Z–A here"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:329,columnNumber:9},void 0)," ","·"," ",r.jsxDEV(m,{update:e,start:{grouping:["team"],groupLayout:"rows"}},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:338,columnNumber:9},void 0),"."]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-rows.stories.tsx",lineNumber:325,columnNumber:46},void 0),y={tags:["kb:group-rows-group-row-menu"],name:"6 · Group row menu",args:{grouping:["team"]},parameters:{columns:b(),hint:je,code:N},play:async s=>{if(d(s))return;const{canvasElement:e}=s;await p(e);const t=await i(()=>l(e)[0].querySelector('[data-group-value][aria-haspopup="menu"]'));await g.click(t),await g.click(await i(()=>D().getByRole("menuitem",{name:"Sort"}))),await g.click(await i(()=>D().getByRole("menuitemradio",{name:"Sort Z–A"}))),await i(()=>{const o=T(e);a(o.length>1&&o.join()===[...o].sort().reverse().join(),`teams Z–A, got ${o.join()}`)}),await g.click(l(e)[0].querySelector("[data-group-value]")),await g.click(await i(()=>D().getByRole("menuitem",{name:"Ungroup by Team"}))),await i(()=>a(!l(e).length,"ungrouped"))}};var U,V,L,C,F;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(L=(V=w.parameters)==null?void 0:V.docs)==null?void 0:L.source},description:{story:"Each group a header row with its rows under it; folding keeps the row.",...(F=(C=w.parameters)==null?void 0:C.docs)==null?void 0:F.description}}};var R,$,A,O,_;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(A=($=h.parameters)==null?void 0:$.docs)==null?void 0:A.source},description:{story:"Nested header rows, indented; each sticks while its rows scroll.",...(_=(O=h.parameters)==null?void 0:O.docs)==null?void 0:_.description}}};var q,M,B,G,H;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(B=(M=f.parameters)==null?void 0:M.docs)==null?void 0:B.source},description:{story:"Totals of each column in the group row: TanStack aggregationFn + aggregatedCell.",...(H=(G=f.parameters)==null?void 0:G.docs)==null?void 0:H.description}}};var I,P,Z,z,K;k.parameters={...k.parameters,docs:{...(I=k.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(Z=(P=k.parameters)==null?void 0:P.docs)==null?void 0:Z.source},description:{story:"One grouping always as rows in a table of lanes: Person by first letter.",...(K=(z=k.parameters)==null?void 0:z.docs)==null?void 0:K.description}}};var W,Y,J,Q,X;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(J=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:J.source},description:{story:"Lanes with a totals row at the end of each group (optional).",...(X=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var ee,se,re,te,oe;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(re=(se=y.parameters)==null?void 0:se.docs)==null?void 0:re.source},description:{story:"The group value opens the group menu: sort the groups, ungroup.",...(oe=(te=y.parameters)==null?void 0:te.docs)==null?void 0:oe.description}}};const Ye=["GroupRows","SeveralLevels","Totals","Mixed","TotalsRowUnderLanes","GroupRowMenu"];export{y as GroupRowMenu,w as GroupRows,k as Mixed,h as SeveralLevels,f as Totals,v as TotalsRowUnderLanes,Ye as __namedExportsOrder,We as default};
