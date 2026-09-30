import{j as a,c as Ge}from"./styles-DXLXEQ3H.js";import{a as p,u as R,w as m}from"./index-DLqD3z3M.js";import{a as O,b as Ve,C as We}from"./fixtures-CCjjPTo2.js";import{r as je}from"./index-BjhrbhTf.js";import{c as s}from"./play-kit-Bu4SXy9H.js";import{m as Fe,M as He,c as Ie}from"./mini-kit-1oofpOGO.js";import{w as _e}from"./grouping-ways-kit-BW-cfhgs.js";import{w as qe,S as Pe,d as Xe}from"./scene-kit-DXifMYYP.js";import"./jsx-runtime-CEpjeC4Q.js";import"./index-D841zMOb.js";import"./TableCore-kOYdxPhk.js";import"./TableStatusBar-BHCIeSi2.js";import"./panels-D6DlFR9J.js";import"./TableToolbar-C0bTLKMD.js";import"./createSvgIcon-s1BrOgA2.js";import"./employees-DtM5_3-O.js";import"./grouping-play-CrknfM6n.js";import"./rich-cells-C4zdx3Ia.js";import"./RowActions-CWt-61bw.js";const A={all:"unset",cursor:"pointer",padding:"2px 8px",borderRadius:4,border:"1px solid #C9CCD6",background:"#fff",fontSize:12},Le=({table:e,group:t,value:o,count:n})=>{const[l,h]=je.useState(!1),d=O[o],g=e.getPreGroupedRowModel().rows.length,U=t.getIsExpanded(),D=String(o),$=t.getIsAllSubRowsSelected();return a.jsxDEV("div",{"data-custom-group-cell":"card",style:{boxSizing:"border-box",height:"100%",display:"flex",flexDirection:"column",gap:8,padding:10,borderRadius:8,background:`${d}22`,border:`1px solid ${d}`,fontWeight:400},children:[a.jsxDEV("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsxDEV("button",{type:"button","aria-label":U?`Fold ${D}`:`Open ${D}`,onClick:()=>t.toggleExpanded(),style:{...A,border:0,background:"none"},children:U?"▾":"▸"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/group-cells.tsx",lineNumber:57,columnNumber:5},void 0),a.jsxDEV("b",{"data-group-value":!0,children:D},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/group-cells.tsx",lineNumber:65,columnNumber:5},void 0),a.jsxDEV("span",{style:{marginLeft:"auto",color:"#6C6F80"},children:[n," of ",g]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/group-cells.tsx",lineNumber:66,columnNumber:5},void 0)]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/group-cells.tsx",lineNumber:56,columnNumber:4},void 0),a.jsxDEV("div",{style:{height:6,borderRadius:3,background:"#E6E8EE"},children:a.jsxDEV("div",{"data-share":!0,style:{width:`${Math.round(n/g*100)}%`,height:"100%",borderRadius:3,background:d}},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/group-cells.tsx",lineNumber:71,columnNumber:5},void 0)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/group-cells.tsx",lineNumber:70,columnNumber:4},void 0),a.jsxDEV("div",{style:{display:"flex",gap:6,flexWrap:"wrap"},children:[a.jsxDEV("button",{type:"button","aria-pressed":$,onClick:()=>t.toggleSelected(!$),style:A,children:$?"Unselect all":"Select all"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/group-cells.tsx",lineNumber:82,columnNumber:5},void 0),a.jsxDEV("button",{type:"button",onClick:()=>h(!0),style:A,children:"Notify"},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/group-cells.tsx",lineNumber:90,columnNumber:5},void 0)]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/group-cells.tsx",lineNumber:81,columnNumber:4},void 0),l&&a.jsxDEV("span",{"data-notified":!0,role:"status",style:{fontSize:12},children:["Sent to ",n," people"]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/group-cells.tsx",lineNumber:95,columnNumber:5},void 0)]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/group-cells.tsx",lineNumber:39,columnNumber:3},void 0)},L={Red:"At risk",Amber:"Needs attention",Green:"On track"},c=e=>({...Ie("colour","Colour",120),cell:Ve,meta:Ge({sort:{order:We},groupCell:e})}),ze=_e([]),Ye=56,Ke=e=>({...e,sceneCode:T,docs:{...e.docs,source:Xe(T)}}),T=(e,t)=>{const o=String(t.code);return e.enableMultiGroup!==!1?o:o.includes("<TableCore ")?o.replace("<TableCore ","<TableCore enableMultiGroup={false} "):`${o}

// One grouping at a time for the user (on by default).
<TableCore enableMultiGroup={false} … />`},ft={title:"Tables/Table Core/Grouping/Look/Group cell",decorators:[qe],args:{enableMultiGroup:!1},argTypes:{enableMultiGroup:{name:"enableMultiGroup",description:"Several levels by the user: *Then by* in the column menu. Off: a new grouping replaces the old one.",control:"boolean",table:{category:"switches"}}},render:(e,{parameters:t})=>{const{lane:o,rows:n,css:l}=t;return a.jsxDEV(Pe,{children:[l&&a.jsxDEV("style",{children:l},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-style.stories.tsx",lineNumber:106,columnNumber:25},void 0),a.jsxDEV(He,{columns:[o,...ze],grouping:[o.id],rows:n,rowHeight:Ye,enableMultiGroup:e.enableMultiGroup},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-style.stories.tsx",lineNumber:107,columnNumber:17},void 0)]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-style.stories.tsx",lineNumber:105,columnNumber:12},void 0)},parameters:Ke(Fe("\nA **group cell** is the tall cell of a lane: one per group, with **−/+**, the group **checkbox**, the **value** and the **count**. Everything about it is set on the grouped column, in `meta.groupCell`; the scenes below go from the smallest change to a cell of your own.\n\n| What | How | Scene |\n|---|---|---|\n| The value | the column's own `cell` renderer, given the group value | 1 · Standard |\n| A coloured edge | `accent: (value) => colour`, `accentSide: 'left' \\| 'right'` (default left) | 2 · Left edge, 3 · Right edge |\n| A tooltip on the value | `tooltip: (value) => text` | 4 · Tooltip |\n| A background (any inline style) | `style: (value) => CSSProperties` | 5 · Background |\n| Your own CSS | `className: (value) => string` + your stylesheet; the cell also has `data-group-level`, `data-accent` | 6 · Own CSS |\n| Your own content in the cell | `render(context) => ReactNode` — in the sticky content area | 7 · Own content |\n| The standard content, and more | `render` with `context.content` | 8 · Wrap the standard content |\n| Actions inside | `render` with the group row: `group.toggleExpanded()`, `group.toggleSelected()`, your own | 9 · Actions inside |\n| The whole cell replaced | `render` + `layout: 'fill'`: your content is the cell, edge to edge, the group's full height | 10 · Whole cell |\n\n**`render` gets** `{ table, column, group, value, count, level, content }`: `group` is the TanStack group row (`getIsExpanded`, `toggleExpanded`, `getIsAllSubRowsSelected`, `toggleSelected`, `subRows` …), `content` the standard −/+, checkbox, value and count. With `layout: 'content'` (default) whatever `render` returns stays in view while the group's rows scroll (the table keeps it sticky, do not make it sticky yourself); with `layout: 'fill'` it fills the whole cell and scrolls with it. The coloured edge still applies.\n\n**Clicks and keys.** A group cell is not a body cell: a click in it makes no active cell, and the grid does not take the keys of controls in it — Tab reaches your buttons, Enter / Space press them.\n\nWhat rows group by (Status as Needs attention, Load in bands, Level two ways, a grouping-only column) is in *Grouping › Columns*."))},r=(e,t)=>{if(!e)throw new Error(`Story check failed: ${t}`)},i=e=>m(()=>{const t=Array.from(e.querySelectorAll('[data-group-level="0"]'));return r(t.length>0,"group cells"),t}),Te=e=>`rgb(${[1,3,5].map(t=>parseInt(e.slice(t,t+2),16)).join(", ")})`,b=e=>{var t;return((t=e.querySelector("[data-group-value]"))==null?void 0:t.textContent)??""},Me=async(e,t)=>(await i(e)).forEach(o=>{const n=O[b(o)];r(o.getAttribute("data-accent")===t&&getComputedStyle(o).boxShadow.includes(Te(n)),`${b(o)}: ${t} edge ${n}`)}),Be=async(e,t)=>{const o=e.querySelector("[role=grid]"),n=o.querySelector("[role=row]"),[l]=await i(e),h=l.querySelector(t);o.scrollTop=Math.min(120,l.offsetHeight/2),await m(()=>{const d=h.getBoundingClientRect().top,g=n.getBoundingClientRect().bottom;r(d>=g-1&&d<=g+24,`content right under the header while scrolling: ${d} vs ${g}`)}),o.scrollTop=0},u=`const colourColumn: ColumnDef<Employee> = {
  accessorKey: 'colour',
  header: 'Colour',
  // The lane draws the value with the column's own cell (the dot).
  cell: ({ getValue }) => <><Dot colour={getValue()} /> {getValue()}</>,`,y={tags:["kb:group-cell-standard"],name:"1 · Standard",parameters:{lane:c(),code:`${u}
}

<TableCore columns={[colourColumn, …]} initialState={{ grouping: ['colour'] }} />`},play:async e=>{if(s(e))return;const[t]=await i(e.canvasElement);r(!t.hasAttribute("data-accent"),"no edge"),r(p(t).getByRole("button",{name:/group$/}),"standard −/+")}},f={tags:["kb:group-cell-left-edge"],name:"2 · Left edge",parameters:{lane:c({accent:e=>O[e]}),code:`${u}
  meta: coreMeta({
    groupCell: {
      accent: (c: Colour) => ({ Red: '#FA4B4B', Amber: '#F5A623', Green: '#67A300' })[c],
    },
  }),
}`},play:async e=>{s(e)||await Me(e.canvasElement,"left")}},k={tags:["kb:group-cell-right-edge"],name:"3 · Right edge",parameters:{lane:c({accent:e=>O[e],accentSide:"right"}),code:`${u}
  meta: coreMeta({
    groupCell: {
      accent: (c: Colour) => COLOUR_HEX[c],
      accentSide: 'right',
    },
  }),
}`},play:async e=>{s(e)||await Me(e.canvasElement,"right")}},C={tags:["kb:group-cell-tooltip"],name:"4 · Tooltip",parameters:{lane:c({tooltip:e=>L[e]}),code:`${u}
  meta: coreMeta({
    groupCell: {
      tooltip: (c: Colour) =>
        ({ Red: 'At risk', Amber: 'Needs attention', Green: 'On track' })[c],
    },
  }),
}`},play:async e=>{if(s(e))return;const[t]=await i(e.canvasElement);await R.hover(t.querySelector("[data-group-value]")),await m(()=>r(p(document.body).getByRole("tooltip").textContent===L[b(t)],"tooltip of the value"))}},M={Red:"#FDECEC",Amber:"#FEF4E1",Green:"#EEF6E3"},x={tags:["kb:group-cell-background"],name:"5 · Background",parameters:{lane:c({style:e=>({background:M[e]})}),code:`${u}
  meta: coreMeta({
    groupCell: {
      // Any inline style by value: background, font, borders …
      style: (c: Colour) => ({
        background: ({ Red: '#FDECEC', Amber: '#FEF4E1', Green: '#EEF6E3' })[c],
      }),
    },
  }),
}`},play:async e=>{s(e)||(await i(e.canvasElement)).forEach(t=>{const o=M[b(t)];r(getComputedStyle(t).backgroundColor===Te(o),`${b(t)}: background ${o}`)})}},B=`.group-cell {
  background: repeating-linear-gradient(135deg, #fff 0 8px, #f5f6fa 8px 16px);
}
.group-cell [data-group-value] {
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.group-cell--red { border-left: 4px solid #fa4b4b; }
.group-cell--amber { border-left: 4px solid #f5a623; }
.group-cell--green { border-left: 4px solid #67a300; }`,w={tags:["kb:group-cell-own-css"],name:"6 · Own CSS",parameters:{css:B,lane:c({className:e=>`group-cell group-cell--${e.toLowerCase()}`}),code:`/* your stylesheet */
${B}

${u}
  meta: coreMeta({
    groupCell: {
      // A class by value; the cell also has data-group-level and data-accent.
      className: (c: Colour) => \`group-cell group-cell--\${c.toLowerCase()}\`,
    },
  }),
}`},play:async e=>{s(e)||(await i(e.canvasElement)).forEach(t=>{const o=b(t).toLowerCase();r(t.classList.contains(`group-cell--${o}`),`${o}: its class`),r(getComputedStyle(t).borderLeftWidth==="4px"&&getComputedStyle(t.querySelector("[data-group-value]")).textTransform==="uppercase",`${o}: styled by the own CSS`)})}},Je=({value:e,count:t})=>a.jsxDEV("div",{"data-custom-group-cell":"badge",style:{display:"grid",gap:4},children:[a.jsxDEV("span",{style:{justifySelf:"start",padding:"2px 10px",borderRadius:12,color:"#fff",background:O[e]},children:a.jsxDEV("span",{"data-group-value":!0,children:String(e)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-style.stories.tsx",lineNumber:364,columnNumber:13},void 0)},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-style.stories.tsx",lineNumber:357,columnNumber:9},void 0),a.jsxDEV("span",{style:{fontWeight:400,color:"#6C6F80"},children:[t," people"]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-style.stories.tsx",lineNumber:366,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-style.stories.tsx",lineNumber:353,columnNumber:35},void 0),v={tags:["kb:group-cell-own-cell"],name:"7 · Own content",parameters:{lane:c({render:e=>a.jsxDEV(Je,{...e},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-style.stories.tsx",lineNumber:378,columnNumber:52},void 0)}),code:`const Badge = ({ value, count }: GroupCellContext<Employee>) => (
  <div style={{ position: 'sticky', top: 8 }}>
    <span className="badge" style={{ background: COLOUR_HEX[value] }}>{value}</span>
    <span>{count} people</span>
  </div>
)

${u}
  meta: coreMeta({
    // As an element, so the cell may keep its own state (hooks).
    groupCell: { render: (context) => <Badge {...context} /> },
  }),
}`},play:async e=>{if(s(e))return;const[t]=await i(e.canvasElement);r(t.querySelector('[data-custom-group-cell="badge"]'),"the badge"),r(!p(t).queryByRole("button",{name:/group$/}),"no standard −/+")}},Qe=({content:e,group:t})=>{const o=t.getLeafRows().map(l=>l.original.rate),n=Math.round(o.reduce((l,h)=>l+h,0)/o.length);return a.jsxDEV("div",{"data-custom-group-cell":"wrap",style:{display:"grid",gap:6},children:[e,a.jsxDEV("span",{"data-average":!0,style:{fontWeight:400,color:"#6C6F80"},children:["Average rate ",n]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-style.stories.tsx",lineNumber:416,columnNumber:13},void 0)]},void 0,!0,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-style.stories.tsx",lineNumber:411,columnNumber:10},void 0)},E={tags:["kb:group-cell-wrap-content"],name:"8 · Wrap the standard content",parameters:{lane:c({render:e=>a.jsxDEV(Qe,{...e},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-style.stories.tsx",lineNumber:431,columnNumber:52},void 0)}),code:`const WithAverage = ({ content, group }: GroupCellContext<Employee>) => {
  const rates = group.getLeafRows().map((r) => r.original.rate)
  const average = Math.round(rates.reduce((a, b) => a + b, 0) / rates.length)

  return (
    <>
      {content /* −/+, checkbox, value, count */}
      <span>Average rate {average}</span>
    </>
  )
}

${u}
  meta: coreMeta({ groupCell: { render: (context) => <WithAverage {...context} /> } }),
}`},play:async e=>{var o;if(s(e))return;const[t]=await i(e.canvasElement);r(p(t).getByRole("button",{name:"Collapse group"}),"standard −/+ kept"),r(/^Average rate \d+$/.test(((o=t.querySelector("[data-average]"))==null?void 0:o.textContent)??""),"own line"),await Be(e.canvasElement,'[data-custom-group-cell="wrap"]')}},S={tags:["kb:group-cell-actions-inside"],name:"9 · Actions inside",parameters:{lane:c({render:e=>a.jsxDEV(Le,{...e},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-style.stories.tsx",lineNumber:466,columnNumber:52},void 0)}),code:`const ColourCard = ({ table, group, value, count }: GroupCellContext<Employee>) => {
  const [sent, setSent] = useState(false)
  const selected = group.getIsAllSubRowsSelected()

  return (
    <div className="card">
      <button onClick={() => group.toggleExpanded()}>
        {group.getIsExpanded() ? '▾' : '▸'}
      </button>
      <b>{value}</b> {count} of {table.getPreGroupedRowModel().rows.length}
      <button onClick={() => group.toggleSelected(!selected)}>
        {selected ? 'Unselect all' : 'Select all'}
      </button>
      <button onClick={() => setSent(true)}>Notify</button>
      {sent && <span role="status">Sent to {count} people</span>}
    </div>
  )
}

${u}
  meta: coreMeta({ groupCell: { render: (context) => <ColourCard {...context} /> } }),
}`},play:async e=>{if(s(e))return;const[t]=await i(e.canvasElement),o=p(t);await R.click(o.getByRole("button",{name:"Select all"})),await m(()=>r(o.getByRole("button",{name:"Unselect all"}),"selected")),o.getByRole("button",{name:"Notify"}).focus(),await R.keyboard("{Enter}"),await m(()=>r(o.getByRole("status"),"Enter ran Notify")),r(!e.canvasElement.querySelector('[data-selection="active"]'),"no active cell"),await Be(e.canvasElement,'[data-custom-group-cell="card"]')}},N={tags:["kb:group-cell-whole-cell"],name:"10 · Whole cell",parameters:{lane:c({layout:"fill",render:e=>a.jsxDEV(Le,{...e},void 0,!1,{fileName:"/Users/giyers/Desktop/pnl-simulation-ui-kb/packages/libs/table-core/src/stories/grouping-style.stories.tsx",lineNumber:518,columnNumber:52},void 0)}),code:`// The same card as in 9 · Actions inside, now the whole cell.
${u}
  meta: coreMeta({
    groupCell: {
      layout: 'fill', // edge to edge, the group's full height; scrolls with it
      render: (context) => <ColourCard {...context} />, // height: 100%
    },
  }),
}`},play:async e=>{if(s(e))return;const[t]=await i(e.canvasElement),o=t.querySelector('[data-group-fill] [data-custom-group-cell="card"]');r(o,"the card is the cell"),r(Math.abs(o.offsetHeight-t.clientHeight)<=2,`card ${o.offsetHeight}px fills the cell ${t.clientHeight}px`),await R.click(p(o).getByRole("button",{name:"Select all"})),await m(()=>r(p(o).getByRole("button",{name:"Unselect all"}),"actions work in the whole cell"))}};var G,V,W,j,F;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['kb:group-cell-standard'],
  name: '1 · Standard',
  parameters: {
    lane: colour(),
    code: \`\${COLOUR_CODE}
}

<TableCore columns={[colourColumn, …]} initialState={{ grouping: ['colour'] }} />\`
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const [block] = await blocks(ctx.canvasElement);
    check(!block.hasAttribute('data-accent'), 'no edge');
    check(within(block).getByRole('button', {
      name: /group$/
    }), 'standard −/+');
  }
}`,...(W=(V=y.parameters)==null?void 0:V.docs)==null?void 0:W.source},description:{story:"No `meta.groupCell`: −/+, checkbox, the value through the column's own `cell` renderer, the count.",...(F=(j=y.parameters)==null?void 0:j.docs)==null?void 0:F.description}}};var H,I,_,q,P;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  tags: ['kb:group-cell-left-edge'],
  name: '2 · Left edge',
  parameters: {
    lane: colour({
      accent: (c: Colour) => COLOUR_HEX[c]
    }),
    code: \`\${COLOUR_CODE}
  meta: coreMeta({
    groupCell: {
      accent: (c: Colour) => ({ Red: '#FA4B4B', Amber: '#F5A623', Green: '#67A300' })[c],
    },
  }),
}\`
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    await expectEdge(ctx.canvasElement, 'left');
  }
}`,...(_=(I=f.parameters)==null?void 0:I.docs)==null?void 0:_.source},description:{story:"`accent`: a left edge of the value's colour.",...(P=(q=f.parameters)==null?void 0:q.docs)==null?void 0:P.description}}};var X,z,Y,K,J;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['kb:group-cell-right-edge'],
  name: '3 · Right edge',
  parameters: {
    lane: colour({
      accent: (c: Colour) => COLOUR_HEX[c],
      accentSide: 'right'
    }),
    code: \`\${COLOUR_CODE}
  meta: coreMeta({
    groupCell: {
      accent: (c: Colour) => COLOUR_HEX[c],
      accentSide: 'right',
    },
  }),
}\`
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    await expectEdge(ctx.canvasElement, 'right');
  }
}`,...(Y=(z=k.parameters)==null?void 0:z.docs)==null?void 0:Y.source},description:{story:"`accentSide: 'right'`: the edge on the right, as Issues in the legacy Resource Plan.",...(J=(K=k.parameters)==null?void 0:K.docs)==null?void 0:J.description}}};var Q,Z,ee,te,oe;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ['kb:group-cell-tooltip'],
  name: '4 · Tooltip',
  parameters: {
    lane: colour({
      tooltip: (c: Colour) => TOOLTIP[c]
    }),
    code: \`\${COLOUR_CODE}
  meta: coreMeta({
    groupCell: {
      tooltip: (c: Colour) =>
        ({ Red: 'At risk', Amber: 'Needs attention', Green: 'On track' })[c],
    },
  }),
}\`
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const [block] = await blocks(ctx.canvasElement);
    await userEvent.hover(block.querySelector('[data-group-value]') as HTMLElement);
    await waitFor(() => check(within(document.body).getByRole('tooltip').textContent === TOOLTIP[valueOf(block) as Colour], 'tooltip of the value'));
  }
}`,...(ee=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"`tooltip`: a text on the group value, by value. Hover *Red*.",...(oe=(te=C.parameters)==null?void 0:te.docs)==null?void 0:oe.description}}};var ae,re,ne,le,se;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  tags: ['kb:group-cell-background'],
  name: '5 · Background',
  parameters: {
    lane: colour({
      style: (c: Colour) => ({
        background: TINT[c]
      })
    }),
    code: \`\${COLOUR_CODE}
  meta: coreMeta({
    groupCell: {
      // Any inline style by value: background, font, borders …
      style: (c: Colour) => ({
        background: ({ Red: '#FDECEC', Amber: '#FEF4E1', Green: '#EEF6E3' })[c],
      }),
    },
  }),
}\`
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    (await blocks(ctx.canvasElement)).forEach(block => {
      const hex = TINT[valueOf(block) as Colour];
      check(getComputedStyle(block).backgroundColor === rgb(hex), \`\${valueOf(block)}: background \${hex}\`);
    });
  }
}`,...(ne=(re=x.parameters)==null?void 0:re.docs)==null?void 0:ne.source},description:{story:"`style`: any inline style by value — here the background.",...(se=(le=x.parameters)==null?void 0:le.docs)==null?void 0:se.description}}};var ce,ie,ue,de,pe;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  tags: ['kb:group-cell-own-css'],
  name: '6 · Own CSS',
  parameters: {
    css: OWN_CSS,
    lane: colour({
      className: (c: Colour) => \`group-cell group-cell--\${c.toLowerCase()}\`
    }),
    code: \`/* your stylesheet */
\${OWN_CSS}

\${COLOUR_CODE}
  meta: coreMeta({
    groupCell: {
      // A class by value; the cell also has data-group-level and data-accent.
      className: (c: Colour) => \\\`group-cell group-cell--\\\${c.toLowerCase()}\\\`,
    },
  }),
}\`
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    (await blocks(ctx.canvasElement)).forEach(block => {
      const name = valueOf(block).toLowerCase();
      check(block.classList.contains(\`group-cell--\${name}\`), \`\${name}: its class\`);
      check(getComputedStyle(block).borderLeftWidth === '4px' && getComputedStyle(block.querySelector('[data-group-value]') as HTMLElement).textTransform === 'uppercase', \`\${name}: styled by the own CSS\`);
    });
  }
}`,...(ue=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:ue.source},description:{story:"`className`: a class by value, styled by your own CSS — stripes, uppercase, a thick left border.",...(pe=(de=w.parameters)==null?void 0:de.docs)==null?void 0:pe.description}}};var ge,me,be,he,ye;v.parameters={...v.parameters,docs:{...(ge=v.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  tags: ['kb:group-cell-own-cell'],
  name: '7 · Own content',
  parameters: {
    lane: colour({
      render: (ctx: GroupCellContext<Employee>) => <Badge {...ctx} />
    }),
    code: \`const Badge = ({ value, count }: GroupCellContext<Employee>) => (
  <div style={{ position: 'sticky', top: 8 }}>
    <span className="badge" style={{ background: COLOUR_HEX[value] }}>{value}</span>
    <span>{count} people</span>
  </div>
)

\${COLOUR_CODE}
  meta: coreMeta({
    // As an element, so the cell may keep its own state (hooks).
    groupCell: { render: (context) => <Badge {...context} /> },
  }),
}\`
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const [block] = await blocks(ctx.canvasElement);
    check(block.querySelector('[data-custom-group-cell="badge"]'), 'the badge');
    check(!within(block).queryByRole('button', {
      name: /group$/
    }), 'no standard −/+');
  }
}`,...(be=(me=v.parameters)==null?void 0:me.docs)==null?void 0:be.source},description:{story:"`render`: your own content in the cell — here a badge and the count; no −/+ or checkbox unless you draw them. It stays in view while the rows scroll.",...(ye=(he=v.parameters)==null?void 0:he.docs)==null?void 0:ye.description}}};var fe,ke,Ce,xe,we;E.parameters={...E.parameters,docs:{...(fe=E.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  tags: ['kb:group-cell-wrap-content'],
  name: '8 · Wrap the standard content',
  parameters: {
    lane: colour({
      render: (ctx: GroupCellContext<Employee>) => <WithAverage {...ctx} />
    }),
    code: \`const WithAverage = ({ content, group }: GroupCellContext<Employee>) => {
  const rates = group.getLeafRows().map((r) => r.original.rate)
  const average = Math.round(rates.reduce((a, b) => a + b, 0) / rates.length)

  return (
    <>
      {content /* −/+, checkbox, value, count */}
      <span>Average rate {average}</span>
    </>
  )
}

\${COLOUR_CODE}
  meta: coreMeta({ groupCell: { render: (context) => <WithAverage {...context} /> } }),
}\`
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const [block] = await blocks(ctx.canvasElement);
    check(within(block).getByRole('button', {
      name: 'Collapse group'
    }), 'standard −/+ kept');
    check(/^Average rate \\d+$/.test(block.querySelector('[data-average]')?.textContent ?? ''), 'own line');
    await expectStaysInView(ctx.canvasElement, '[data-custom-group-cell="wrap"]');
  }
}`,...(Ce=(ke=E.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source},description:{story:"`render` with `context.content`: keep −/+, checkbox, value and count, add your own line (the average rate).",...(we=(xe=E.parameters)==null?void 0:xe.docs)==null?void 0:we.description}}};var ve,Ee,Se,Ne,Oe;S.parameters={...S.parameters,docs:{...(ve=S.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  tags: ['kb:group-cell-actions-inside'],
  name: '9 · Actions inside',
  parameters: {
    lane: colour({
      render: (ctx: GroupCellContext<Employee>) => <ColourCard {...ctx} />
    }),
    code: \`const ColourCard = ({ table, group, value, count }: GroupCellContext<Employee>) => {
  const [sent, setSent] = useState(false)
  const selected = group.getIsAllSubRowsSelected()

  return (
    <div className="card">
      <button onClick={() => group.toggleExpanded()}>
        {group.getIsExpanded() ? '▾' : '▸'}
      </button>
      <b>{value}</b> {count} of {table.getPreGroupedRowModel().rows.length}
      <button onClick={() => group.toggleSelected(!selected)}>
        {selected ? 'Unselect all' : 'Select all'}
      </button>
      <button onClick={() => setSent(true)}>Notify</button>
      {sent && <span role="status">Sent to {count} people</span>}
    </div>
  )
}

\${COLOUR_CODE}
  meta: coreMeta({ groupCell: { render: (context) => <ColourCard {...context} /> } }),
}\`
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const [block] = await blocks(ctx.canvasElement);
    const card = within(block);
    await userEvent.click(card.getByRole('button', {
      name: 'Select all'
    }));
    await waitFor(() => check(card.getByRole('button', {
      name: 'Unselect all'
    }), 'selected'));
    card.getByRole('button', {
      name: 'Notify'
    }).focus();
    await userEvent.keyboard('{Enter}');
    await waitFor(() => check(card.getByRole('status'), 'Enter ran Notify'));
    check(!ctx.canvasElement.querySelector('[data-selection="active"]'), 'no active cell');
    await expectStaysInView(ctx.canvasElement, '[data-custom-group-cell="card"]');
  }
}`,...(Se=(Ee=S.parameters)==null?void 0:Ee.docs)==null?void 0:Se.source},description:{story:"Buttons inside: fold, select the group, an action of the screen. Clicks and keys stay theirs.",...(Oe=(Ne=S.parameters)==null?void 0:Ne.docs)==null?void 0:Oe.description}}};var Re,De,$e,Ae,Ue;N.parameters={...N.parameters,docs:{...(Re=N.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  tags: ['kb:group-cell-whole-cell'],
  name: '10 · Whole cell',
  parameters: {
    lane: colour({
      layout: 'fill',
      render: (ctx: GroupCellContext<Employee>) => <ColourCard {...ctx} />
    }),
    code: \`// The same card as in 9 · Actions inside, now the whole cell.
\${COLOUR_CODE}
  meta: coreMeta({
    groupCell: {
      layout: 'fill', // edge to edge, the group's full height; scrolls with it
      render: (context) => <ColourCard {...context} />, // height: 100%
    },
  }),
}\`
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    const [block] = await blocks(ctx.canvasElement);
    const card = block.querySelector<HTMLElement>('[data-group-fill] [data-custom-group-cell="card"]') as HTMLElement;
    check(card, 'the card is the cell');
    check(Math.abs(card.offsetHeight - block.clientHeight) <= 2, \`card \${card.offsetHeight}px fills the cell \${block.clientHeight}px\`);
    await userEvent.click(within(card).getByRole('button', {
      name: 'Select all'
    }));
    await waitFor(() => check(within(card).getByRole('button', {
      name: 'Unselect all'
    }), 'actions work in the whole cell'));
  }
}`,...($e=(De=N.parameters)==null?void 0:De.docs)==null?void 0:$e.source},description:{story:"`layout: 'fill'`: the card is the whole cell — edge to edge, the full height of the group.",...(Ue=(Ae=N.parameters)==null?void 0:Ae.docs)==null?void 0:Ue.description}}};const kt=["Standard","LeftEdge","RightEdge","Tooltip","Background","OwnCss","OwnCell","WrapContent","ActionsInside","WholeCell"];export{S as ActionsInside,x as Background,f as LeftEdge,v as OwnCell,w as OwnCss,k as RightEdge,y as Standard,C as Tooltip,N as WholeCell,E as WrapContent,kt as __namedExportsOrder,ft as default};
