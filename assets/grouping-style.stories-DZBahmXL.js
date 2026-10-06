import{j as a}from"./jsx-runtime-Cnbe3ryz.js";import{a as p,u as $,w as m}from"./index-iBx7lKYd.js";import{c as je}from"./places-Dp9r7e0L.js";import{a as R,b as Fe,C as He}from"./fixtures-P-DSdYmm.js";import{r as Ue}from"./index-3dRrDZpt.js";import{c}from"./play-kit-Bu4SXy9H.js";import{m as Ie,M as _e,c as qe}from"./mini-kit-DReMkWYx.js";import{w as De}from"./grouping-ways-kit-BwgE6Z80.js";import{w as Pe,S as Xe,d as Ve}from"./scene-kit-BsKxVgS1.js";import"./TableCore-Y75h2oha.js";import"./index-C0mjCMcL.js";import"./index-DKTdOcjh.js";import"./table-core-base-DFRq_Vzl.js";import"./styles-HzBmg0bt.js";import"./icons-849xEHsl.js";import"./menu-DvyBTqNz.js";import"./TableStatusBar-4NxO8OsQ.js";import"./status-bar-CYB7-jUm.js";import"./panel-controls-DNzRkyVB.js";import"./SortingPanel-CpobHppH.js";import"./TableToolbar-DTYEmPN-.js";import"./toolbar-C5VRlWnq.js";import"./pin-controls-NGLUwJXC.js";import"./employees-CL5oqWiT.js";import"./grouping-play-CTN_XQGq.js";import"./rich-cells-BHJWCIPe.js";import"./RowActions-BSIeJGF9.js";const T={all:"unset",cursor:"pointer",padding:"2px 8px",borderRadius:4,border:"1px solid #C9CCD6",background:"#fff",fontSize:12},Be=({table:e,group:t,value:o,count:r})=>{const[l,b]=Ue.useState(!1),d=R[o],g=e.getPreGroupedRowModel().rows.length,M=t.getIsExpanded(),A=String(o),L=t.getIsAllSubRowsSelected();return a.jsxs("div",{"data-custom-group-cell":"card",style:{boxSizing:"border-box",height:"100%",display:"flex",flexDirection:"column",gap:8,padding:10,borderRadius:8,background:`${d}22`,border:`1px solid ${d}`,fontWeight:400},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("button",{type:"button","aria-label":M?`Fold ${A}`:`Open ${A}`,onClick:()=>t.toggleExpanded(),style:{...T,border:0,background:"none"},children:M?"▾":"▸"}),a.jsx("b",{"data-group-value":!0,children:A}),a.jsxs("span",{style:{marginLeft:"auto",color:"#6C6F80"},children:[r," of ",g]})]}),a.jsx("div",{style:{height:6,borderRadius:3,background:"#E6E8EE"},children:a.jsx("div",{"data-share":!0,style:{width:`${Math.round(r/g*100)}%`,height:"100%",borderRadius:3,background:d}})}),a.jsxs("div",{style:{display:"flex",gap:6,flexWrap:"wrap"},children:[a.jsx("button",{type:"button","aria-pressed":L,onClick:()=>t.toggleSelected(!L),style:T,children:L?"Unselect all":"Select all"}),a.jsx("button",{type:"button",onClick:()=>b(!0),style:T,children:"Notify"})]}),l&&a.jsxs("span",{"data-notified":!0,role:"status",style:{fontSize:12},children:["Sent to ",r," people"]})]})},B={Red:"At risk",Amber:"Needs attention",Green:"On track"},s=e=>({...qe("colour","Colour",120),cell:Fe,meta:je({sort:{order:He},groupCell:e})}),ze=De([]),Ye=56,Ke=e=>({...e,sceneCode:G,docs:{...e.docs,source:Ve(G)}}),G=(e,t)=>{const o=String(t.code);return e.enableMultiGroup!==!1?o:o.includes("<TableCore ")?o.replace("<TableCore ","<TableCore enableMultiGroup={false} "):`${o}

// One grouping at a time for the user (on by default).
<TableCore enableMultiGroup={false} … />`},Ot={title:"Tables/Table Core/Features/Grouping/Look/Group cell",decorators:[Pe],args:{enableMultiGroup:!1},argTypes:{enableMultiGroup:{name:"enableMultiGroup",description:"Several levels by the user: *Then by* in the column menu. Off: a new grouping replaces the old one.",control:"boolean",table:{category:"switches"}}},render:(e,{parameters:t})=>{const{lane:o,rows:r,css:l}=t;return a.jsxs(Xe,{children:[l&&a.jsx("style",{children:l}),a.jsx(_e,{columns:[o,...ze],grouping:[o.id],rows:r,rowHeight:Ye,enableMultiGroup:e.enableMultiGroup})]})},parameters:Ke(Ie("\nA **group cell** is the tall cell of a lane: one per group, with **−/+**, the group **checkbox**, the **value** and the **count**. Everything about it is set on the grouped column, in `meta.groupCell`; the scenes below go from the smallest change to a cell of your own.\n\n| What | How | Scene |\n|---|---|---|\n| The value | the column's own `cell` renderer, given the group value | 1 · Standard |\n| A coloured edge | `accent: (value) => colour`, `accentSide: 'left' \\| 'right'` (default left) | 2 · Left edge, 3 · Right edge |\n| A tooltip on the value | `tooltip: (value) => text` | 4 · Tooltip |\n| A background (any inline style) | `style: (value) => CSSProperties` | 5 · Background |\n| Your own CSS | `className: (value) => string` + your stylesheet; the cell also has `data-group-level`, `data-accent` | 6 · Own CSS |\n| Your own content in the cell | `render(context) => ReactNode` — in the sticky content area | 7 · Own content |\n| The standard content, and more | `render` with `context.content` | 8 · Wrap the standard content |\n| Actions inside | `render` with the group row: `group.toggleExpanded()`, `group.toggleSelected()`, your own | 9 · Actions inside |\n| The whole cell replaced | `render` + `layout: 'fill'`: your content is the cell, edge to edge, the group's full height | 10 · Whole cell |\n\n**`render` gets** `{ table, column, group, value, count, level, content }`: `group` is the TanStack group row (`getIsExpanded`, `toggleExpanded`, `getIsAllSubRowsSelected`, `toggleSelected`, `subRows` …), `content` the standard −/+, checkbox, value and count. With `layout: 'content'` (default) whatever `render` returns stays in view while the group's rows scroll (the table keeps it sticky, do not make it sticky yourself); with `layout: 'fill'` it fills the whole cell and scrolls with it. The coloured edge still applies.\n\n**Clicks and keys.** A group cell is not a body cell: a click in it makes no active cell, and the grid does not take the keys of controls in it — Tab reaches your buttons, Enter / Space press them.\n\nWhat rows group by (Status as Needs attention, Load in bands, Level two ways, a grouping-only column) is in *Grouping › Columns*."))},n=(e,t)=>{if(!e)throw new Error(`Story check failed: ${t}`)},u=e=>m(()=>{const t=Array.from(e.querySelectorAll('[data-group-level="0"]'));return n(t.length>0,"group cells"),t}),Ge=e=>`rgb(${[1,3,5].map(t=>parseInt(e.slice(t,t+2),16)).join(", ")})`,h=e=>{var t;return((t=e.querySelector("[data-group-value]"))==null?void 0:t.textContent)??""},Ne=async(e,t)=>(await u(e)).forEach(o=>{const r=R[h(o)];n(o.getAttribute("data-accent")===t&&getComputedStyle(o).boxShadow.includes(Ge(r)),`${h(o)}: ${t} edge ${r}`)}),We=async(e,t)=>{const o=e.querySelector("[role=grid]"),r=o.querySelector("[role=row]"),[l]=await u(e),b=l.querySelector(t);o.scrollTop=Math.min(120,l.offsetHeight/2),await m(()=>{const d=b.getBoundingClientRect().top,g=r.getBoundingClientRect().bottom;n(d>=g-1&&d<=g+24,`content right under the header while scrolling: ${d} vs ${g}`)}),o.scrollTop=0},i=`const colourColumn: ColumnDef<Employee> = {
  accessorKey: 'colour',
  header: 'Colour',
  // The lane draws the value with the column's own cell (the dot).
  cell: ({ getValue }) => <><Dot colour={getValue()} /> {getValue()}</>,`,y={tags:["kb:group-cell-standard"],name:"1 · Standard",parameters:{lane:s(),code:`${i}
}

<TableCore columns={[colourColumn, …]} initialState={{ grouping: ['colour'] }} />`},play:async e=>{if(c(e))return;const[t]=await u(e.canvasElement);n(!t.hasAttribute("data-accent"),"no edge"),n(p(t).getByRole("button",{name:/group$/}),"standard −/+")}},C={tags:["kb:group-cell-left-edge"],name:"2 · Left edge",parameters:{lane:s({accent:e=>R[e]}),code:`${i}
  meta: coreMeta({
    groupCell: {
      accent: (c: Colour) => ({ Red: '#FA4B4B', Amber: '#F5A623', Green: '#67A300' })[c],
    },
  }),
}`},play:async e=>{c(e)||await Ne(e.canvasElement,"left")}},f={tags:["kb:group-cell-right-edge"],name:"3 · Right edge",parameters:{lane:s({accent:e=>R[e],accentSide:"right"}),code:`${i}
  meta: coreMeta({
    groupCell: {
      accent: (c: Colour) => COLOUR_HEX[c],
      accentSide: 'right',
    },
  }),
}`},play:async e=>{c(e)||await Ne(e.canvasElement,"right")}},w={tags:["kb:group-cell-tooltip"],name:"4 · Tooltip",parameters:{lane:s({tooltip:e=>B[e]}),code:`${i}
  meta: coreMeta({
    groupCell: {
      tooltip: (c: Colour) =>
        ({ Red: 'At risk', Amber: 'Needs attention', Green: 'On track' })[c],
    },
  }),
}`},play:async e=>{if(c(e))return;const[t]=await u(e.canvasElement);await $.hover(t.querySelector("[data-group-value]")),await m(()=>n(p(document.body).getByRole("tooltip").textContent===B[h(t)],"tooltip of the value"))}},N={Red:"#FDECEC",Amber:"#FEF4E1",Green:"#EEF6E3"},k={tags:["kb:group-cell-background"],name:"5 · Background",parameters:{lane:s({style:e=>({background:N[e]})}),code:`${i}
  meta: coreMeta({
    groupCell: {
      // Any inline style by value: background, font, borders …
      style: (c: Colour) => ({
        background: ({ Red: '#FDECEC', Amber: '#FEF4E1', Green: '#EEF6E3' })[c],
      }),
    },
  }),
}`},play:async e=>{c(e)||(await u(e.canvasElement)).forEach(t=>{const o=N[h(t)];n(getComputedStyle(t).backgroundColor===Ge(o),`${h(t)}: background ${o}`)})}},W=`.group-cell {
  background: repeating-linear-gradient(135deg, #fff 0 8px, #f5f6fa 8px 16px);
}
.group-cell [data-group-value] {
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.group-cell--red { border-left: 4px solid #fa4b4b; }
.group-cell--amber { border-left: 4px solid #f5a623; }
.group-cell--green { border-left: 4px solid #67a300; }`,x={tags:["kb:group-cell-own-css"],name:"6 · Own CSS",parameters:{css:W,lane:s({className:e=>`group-cell group-cell--${e.toLowerCase()}`}),code:`/* your stylesheet */
${W}

${i}
  meta: coreMeta({
    groupCell: {
      // A class by value; the cell also has data-group-level and data-accent.
      className: (c: Colour) => \`group-cell group-cell--\${c.toLowerCase()}\`,
    },
  }),
}`},play:async e=>{c(e)||(await u(e.canvasElement)).forEach(t=>{const o=h(t).toLowerCase();n(t.classList.contains(`group-cell--${o}`),`${o}: its class`),n(getComputedStyle(t).borderLeftWidth==="4px"&&getComputedStyle(t.querySelector("[data-group-value]")).textTransform==="uppercase",`${o}: styled by the own CSS`)})}},Je=({value:e,count:t})=>a.jsxs("div",{"data-custom-group-cell":"badge",style:{display:"grid",gap:4},children:[a.jsx("span",{style:{justifySelf:"start",padding:"2px 10px",borderRadius:12,color:"#fff",background:R[e]},children:a.jsx("span",{"data-group-value":!0,children:String(e)})}),a.jsxs("span",{style:{fontWeight:400,color:"#6C6F80"},children:[t," people"]})]}),v={tags:["kb:group-cell-own-cell"],name:"7 · Own content",parameters:{lane:s({render:e=>a.jsx(Je,{...e})}),code:`const Badge = ({ value, count }: GroupCellContext<Employee>) => (
  <div style={{ position: 'sticky', top: 8 }}>
    <span className="badge" style={{ background: COLOUR_HEX[value] }}>{value}</span>
    <span>{count} people</span>
  </div>
)

${i}
  meta: coreMeta({
    // As an element, so the cell may keep its own state (hooks).
    groupCell: { render: (context) => <Badge {...context} /> },
  }),
}`},play:async e=>{if(c(e))return;const[t]=await u(e.canvasElement);n(t.querySelector('[data-custom-group-cell="badge"]'),"the badge"),n(!p(t).queryByRole("button",{name:/group$/}),"no standard −/+")}},Qe=({content:e,group:t})=>{const o=t.getLeafRows().map(l=>l.original.rate),r=Math.round(o.reduce((l,b)=>l+b,0)/o.length);return a.jsxs("div",{"data-custom-group-cell":"wrap",style:{display:"grid",gap:6},children:[e,a.jsxs("span",{"data-average":!0,style:{fontWeight:400,color:"#6C6F80"},children:["Average rate ",r]})]})},S={tags:["kb:group-cell-wrap-content"],name:"8 · Wrap the standard content",parameters:{lane:s({render:e=>a.jsx(Qe,{...e})}),code:`const WithAverage = ({ content, group }: GroupCellContext<Employee>) => {
  const rates = group.getLeafRows().map((r) => r.original.rate)
  const average = Math.round(rates.reduce((a, b) => a + b, 0) / rates.length)

  return (
    <>
      {content /* −/+, checkbox, value, count */}
      <span>Average rate {average}</span>
    </>
  )
}

${i}
  meta: coreMeta({ groupCell: { render: (context) => <WithAverage {...context} /> } }),
}`},play:async e=>{var o;if(c(e))return;const[t]=await u(e.canvasElement);n(p(t).getByRole("button",{name:"Collapse group"}),"standard −/+ kept"),n(/^Average rate \d+$/.test(((o=t.querySelector("[data-average]"))==null?void 0:o.textContent)??""),"own line"),await We(e.canvasElement,'[data-custom-group-cell="wrap"]')}},E={tags:["kb:group-cell-actions-inside"],name:"9 · Actions inside",parameters:{lane:s({render:e=>a.jsx(Be,{...e})}),code:`const ColourCard = ({ table, group, value, count }: GroupCellContext<Employee>) => {
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

${i}
  meta: coreMeta({ groupCell: { render: (context) => <ColourCard {...context} /> } }),
}`},play:async e=>{if(c(e))return;const[t]=await u(e.canvasElement),o=p(t);await $.click(o.getByRole("button",{name:"Select all"})),await m(()=>n(o.getByRole("button",{name:"Unselect all"}),"selected")),o.getByRole("button",{name:"Notify"}).focus(),await $.keyboard("{Enter}"),await m(()=>n(o.getByRole("status"),"Enter ran Notify")),n(!e.canvasElement.querySelector('[data-selection="active"]'),"no active cell"),await We(e.canvasElement,'[data-custom-group-cell="card"]')}},O={tags:["kb:group-cell-whole-cell"],name:"10 · Whole cell",parameters:{lane:s({layout:"fill",render:e=>a.jsx(Be,{...e})}),code:`// The same card as in 9 · Actions inside, now the whole cell.
${i}
  meta: coreMeta({
    groupCell: {
      layout: 'fill', // edge to edge, the group's full height; scrolls with it
      render: (context) => <ColourCard {...context} />, // height: 100%
    },
  }),
}`},play:async e=>{if(c(e))return;const[t]=await u(e.canvasElement),o=t.querySelector('[data-group-fill] [data-custom-group-cell="card"]');n(o,"the card is the cell"),n(Math.abs(o.offsetHeight-t.clientHeight)<=2,`card ${o.offsetHeight}px fills the cell ${t.clientHeight}px`),await $.click(p(o).getByRole("button",{name:"Select all"})),await m(()=>n(p(o).getByRole("button",{name:"Unselect all"}),"actions work in the whole cell"))}};var j,F,H,U,I;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(H=(F=y.parameters)==null?void 0:F.docs)==null?void 0:H.source},description:{story:"No `meta.groupCell`: −/+, checkbox, the value through the column's own `cell` renderer, the count.",...(I=(U=y.parameters)==null?void 0:U.docs)==null?void 0:I.description}}};var _,q,D,P,X;C.parameters={...C.parameters,docs:{...(_=C.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(D=(q=C.parameters)==null?void 0:q.docs)==null?void 0:D.source},description:{story:"`accent`: a left edge of the value's colour.",...(X=(P=C.parameters)==null?void 0:P.docs)==null?void 0:X.description}}};var V,z,Y,K,J;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(Y=(z=f.parameters)==null?void 0:z.docs)==null?void 0:Y.source},description:{story:"`accentSide: 'right'`: the edge on the right, as Issues in the legacy Resource Plan.",...(J=(K=f.parameters)==null?void 0:K.docs)==null?void 0:J.description}}};var Q,Z,ee,te,oe;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ee=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"`tooltip`: a text on the group value, by value. Hover *Red*.",...(oe=(te=w.parameters)==null?void 0:te.docs)==null?void 0:oe.description}}};var ae,ne,re,le,ce;k.parameters={...k.parameters,docs:{...(ae=k.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(re=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:re.source},description:{story:"`style`: any inline style by value — here the background.",...(ce=(le=k.parameters)==null?void 0:le.docs)==null?void 0:ce.description}}};var se,ue,ie,de,pe;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ie=(ue=x.parameters)==null?void 0:ue.docs)==null?void 0:ie.source},description:{story:"`className`: a class by value, styled by your own CSS — stripes, uppercase, a thick left border.",...(pe=(de=x.parameters)==null?void 0:de.docs)==null?void 0:pe.description}}};var ge,me,he,be,ye;v.parameters={...v.parameters,docs:{...(ge=v.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(he=(me=v.parameters)==null?void 0:me.docs)==null?void 0:he.source},description:{story:"`render`: your own content in the cell — here a badge and the count; no −/+ or checkbox unless you draw them. It stays in view while the rows scroll.",...(ye=(be=v.parameters)==null?void 0:be.docs)==null?void 0:ye.description}}};var Ce,fe,we,ke,xe;S.parameters={...S.parameters,docs:{...(Ce=S.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(we=(fe=S.parameters)==null?void 0:fe.docs)==null?void 0:we.source},description:{story:"`render` with `context.content`: keep −/+, checkbox, value and count, add your own line (the average rate).",...(xe=(ke=S.parameters)==null?void 0:ke.docs)==null?void 0:xe.description}}};var ve,Se,Ee,Oe,Re;E.parameters={...E.parameters,docs:{...(ve=E.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Ee=(Se=E.parameters)==null?void 0:Se.docs)==null?void 0:Ee.source},description:{story:"Buttons inside: fold, select the group, an action of the screen. Clicks and keys stay theirs.",...(Re=(Oe=E.parameters)==null?void 0:Oe.docs)==null?void 0:Re.description}}};var $e,Ae,Le,Te,Me;O.parameters={...O.parameters,docs:{...($e=O.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Le=(Ae=O.parameters)==null?void 0:Ae.docs)==null?void 0:Le.source},description:{story:"`layout: 'fill'`: the card is the whole cell — edge to edge, the full height of the group.",...(Me=(Te=O.parameters)==null?void 0:Te.docs)==null?void 0:Me.description}}};const Rt=["Standard","LeftEdge","RightEdge","Tooltip","Background","OwnCss","OwnCell","WrapContent","ActionsInside","WholeCell"];export{E as ActionsInside,k as Background,C as LeftEdge,v as OwnCell,x as OwnCss,f as RightEdge,y as Standard,w as Tooltip,O as WholeCell,S as WrapContent,Rt as __namedExportsOrder,Ot as default};
