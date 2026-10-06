import{C as x,c as L,r as T,a as v,w as N,l as z,p as _,f as $,b as I,d as M,e as l,g as D}from"./feature-code-Dlz2p9Ie.js";import{j as a}from"./jsx-runtime-Cnbe3ryz.js";import{c as j}from"./TableToolbar-DTYEmPN-.js";import{c as G}from"./places-Dp9r7e0L.js";import{p as m,w as B}from"./table-core-base-DFRq_Vzl.js";import{l as U,w as H}from"./scene-kit-BsKxVgS1.js";const W=["none","gradient glow","badge"],P={frozenEdge:{left:"onScroll",right:"onScroll"},edgeSx:{},edgeSlot:"none",edgeRowAttrs:!1},Z=({side:e,scrolled:n})=>a.jsx("span",{"aria-hidden":!0,style:{position:"absolute",top:0,bottom:0,[e==="left"?"right":"left"]:0,width:n?14:2,background:`linear-gradient(to ${e}, rgba(0, 138, 206, 0.55), transparent)`,transition:"width 150ms",pointerEvents:"none"}}),J=({side:e,part:n,scrolled:t})=>n==="header"?a.jsx("span",{"aria-hidden":!0,style:{position:"absolute",top:2,[e==="left"?"right":"left"]:4,padding:"0 6px",borderRadius:8,fontSize:10,lineHeight:"16px",color:"#fff",background:t?"#D93A3A":"#ACAFBF"},children:e==="left"?"frozen":"frozen ·"}):null,K={none:{},"gradient glow":{frozenEdge:Z},badge:{frozenEdge:J}},X=e=>K[e.edgeSlot],V={none:"","gradient glow":`// A glow that grows when content goes under the zone.
const GlowEdge = ({ side, scrolled }: FrozenEdgeSlotProps) => (
  <span
    aria-hidden
    style={{
      position: 'absolute',
      top: 0,
      bottom: 0,
      [side === 'left' ? 'right' : 'left']: 0,
      width: scrolled ? 14 : 2,
      background: \`linear-gradient(to \${side}, rgba(0, 138, 206, 0.55), transparent)\`,
      transition: 'width 150ms',
      pointerEvents: 'none',
    }}
  />
)`,badge:`// A badge on the header at the edge, lit while content is under the zone.
const BadgeEdge = ({ side, part, scrolled }: FrozenEdgeSlotProps) =>
  part === 'header' ? (
    <span
      aria-hidden
      style={{
        position: 'absolute',
        top: 2,
        [side === 'left' ? 'right' : 'left']: 4,
        padding: '0 6px',
        borderRadius: 8,
        fontSize: 10,
        color: '#fff',
        background: scrolled ? '#D93A3A' : '#ACAFBF',
      }}
    >
      frozen
    </span>
  ) : null`},Y={none:"","gradient glow":"GlowEdge",badge:"BadgeEdge"},E=(e,n)=>JSON.stringify(e)===JSON.stringify(n),c=e=>E(e.frozenEdge,P.frozenEdge)?void 0:e.frozenEdge,h=e=>E(e.edgeSx,{})?void 0:e.edgeSx,q=e=>e.edgeRowAttrs?n=>({"data-team":n.original.team}):void 0,g=(e,n="")=>{if(e===null||typeof e!="object")return typeof e=="string"?`'${e}'`:String(e);const t=Object.entries(e);if(t.length===0)return"{}";const o=`${n}  `;return`{
${t.map(([i,s])=>{const F=/^[A-Za-z_$][\w$]*$/.test(i)?i:`'${i}'`;return`${o}${F}: ${g(s,o)}`}).join(`,
`)},
${n}}`},Q=["default","both-sides","fixed-right","up-to-here","one-per-side","max-two-left"],u=["workload","end"],S=(e,n,t,o)=>({id:`pin-${t}`,kind:"pin",label:o,next:B(e.getState().columnPinning,t,n.getPinBlock())}),ee={"columnMenu.pinning":{left:"Freeze at the left",right:"Freeze at the right"},"toolbar.columns":{left:"To left",right:"To right"}},p=(e,n,t,o)=>n.getIsPinned()||!t.length?t:["left","right"].map(i=>S(e,n,i,ee[o][i])),ne=(e,n)=>({...e,[n]:(e[n]??[]).slice(-1)}),te=e=>e.map(n=>n.kind==="pin"?{...n,next:ne(n.next,n.id==="pin-left"?"left":"right")}:n),b={default:{},"both-sides":{getPinActions:({table:e,column:n,place:t},o)=>p(e,n,o,t)},"fixed-right":{getPinActions:({column:e},n)=>u.includes(e.id)?[]:n,canMoveColumn:({column:e,zone:n},t)=>t&&!(n==="right"&&u.includes(e.id))},"up-to-here":{getPinActions:({table:e,column:n},t)=>t.length?[{id:"pin-up-to-left",kind:"pin",label:"Freeze up to here",next:m(e,n,"left")},{id:"pin-up-to-right",kind:"pin",label:"Freeze from here to the right",next:m(e,n,"right")},...t.filter(o=>o.kind==="unpin")]:[]},"one-per-side":{getPinActions:({table:e,column:n,place:t},o)=>te(p(e,n,o,t))},"max-two-left":{getPinActions:({table:e,column:n},t)=>{const o=e.getState().columnPinning.left??[],i=t.map(s=>s.id==="pin-left"&&o.length>=2?{...s,disabledReason:"At most 2 on the left"}:s);return n.id!=="workload"||n.getIsPinned()?i:[...i,S(e,n,"right","Freeze at the right")]}}},oe={canMoveColumn:({before:e},n)=>n&&e!=="name"},ie=(e,n)=>{if(n&&b[e].canMoveColumn)throw new Error(`"Name stays first" and the ${e} rules both set canMoveColumn: write them as one`);return{...b[e],...n&&oe}},d={"both-sides":`// Freeze left or right: the default gives Freeze left / Unfreeze.
const pinAt = (table, column, side, label) => ({
  id: \`pin-\${side}\`,
  kind: 'pin',
  label,
  next: withPinned(table.getState().columnPinning, side, column.getPinBlock()),
})
// The Columns panel row has little room: short labels there.
const LABELS = {
  'columnMenu.pinning': { left: 'Freeze at the left', right: 'Freeze at the right' },
  'toolbar.columns': { left: 'To left', right: 'To right' },
}
const bothSides = (table, column, list, place) =>
  column.getIsPinned() || !list.length
    ? list
    : ['left', 'right'].map((side) => pinAt(table, column, side, LABELS[place][side]))`};d["one-per-side"]=`${d["both-sides"]}

// A new one replaces the side's column.
const keepLast = (state, side) => ({ ...state, [side]: state[side].slice(-1) })
const onePerSide = (list) =>
  list.map((a) =>
    a.kind === 'pin' ? { ...a, next: keepLast(a.next, a.id === 'pin-left' ? 'left' : 'right') } : a
  )`;d["max-two-left"]=`const pinRight = (table, column) => ({
  id: 'pin-right',
  kind: 'pin',
  label: 'Freeze at the right',
  next: withPinned(table.getState().columnPinning, 'right', [column.id]),
})`;const le={default:[],"both-sides":["getPinActions: ({ table, column, place }, list) => bothSides(table, column, list, place),"],"fixed-right":[`// Workload and End: always frozen at the right, no action, never dragged.
getPinActions: ({ column }, list) => (FIXED_RIGHT.includes(column.id) ? [] : list),
canMoveColumn: ({ column, zone }, can) =>
  can && !(zone === 'right' && FIXED_RIGHT.includes(column.id)),`],"up-to-here":[`// Pick a column: the side becomes everything from its edge to it.
getPinActions: ({ table, column }, list) =>
  list.length
    ? [
        { id: 'pin-up-to-left', kind: 'pin', label: 'Freeze up to here', next: pinUpTo(table, column, 'left') },
        { id: 'pin-up-to-right', kind: 'pin', label: 'Freeze from here to the right', next: pinUpTo(table, column, 'right') },
        ...list.filter((a) => a.kind === 'unpin'),
      ]
    : [],`],"one-per-side":["getPinActions: ({ table, column, place }, list) => onePerSide(bothSides(table, column, list, place)),"],"max-two-left":[`// At most 2 on the left; only Workload may go to the right.
getPinActions: ({ table, column }, list) => {
  const left = table.getState().columnPinning.left ?? []
  const limited = list.map((a) =>
    a.id === 'pin-left' && left.length >= 2 ? { ...a, disabledReason: 'At most 2 on the left' } : a
  )

  return column.id === 'workload' && !column.getIsPinned() ? [...limited, pinRight(table, column)] : limited
},`]},re=`// Name stays first: nothing lands before it (and it has meta.disableReorder).
canMoveColumn: ({ before }, can) => can && before !== 'name',`,ae=(e,n)=>({helpers:[e==="fixed-right"&&"const FIXED_RIGHT = ['workload', 'end']",d[e]].filter(t=>typeof t=="string"),resolvers:[...le[e],...n?[re]:[]],imports:[["both-sides","one-per-side","max-two-left"].includes(e)&&"withPinned",e==="up-to-here"&&"pinUpTo"].filter(t=>typeof t=="string")}),R=[["name",190],["team",130],["role",160],["level",90],["country",130],["city",140],["email",240],["rate",90],["start",120],["end",120]],se=e=>`${e.rate*7%100}%`,de={id:"workload",accessorFn:se,header:"Workload",size:110},r=[...R.map(([e])=>e),"workload"],ce=(e,n)=>({...n.fixed.includes(e)&&{disableReorder:!0},...n.pinOnlyLeft.includes(e)&&{pinOnly:"left"},...n.pinOnlyRight.includes(e)&&{pinOnly:"right"}}),y=(e,n,t)=>{const o=ce(n,t);return{...e,...t.unpinnable.includes(n)&&{enablePinning:!1},...Object.keys(o).length>0&&{meta:G(o)}}},he=e=>[...R.map(([n,t])=>y(_(n,t),n,e)),y(de,"workload",e)],ge={id:"location",label:"Location",columns:["country","city"]},C={...x,pinnedLeft:["name"],pinnedRight:[],enableColumnPinning:!0,enableLeftPinning:!0,enableRightPinning:!1,unpinnable:[],fixed:[],pinOnlyLeft:[],pinOnlyRight:[],chained:!1,rules:"default",nameFirst:!1,...P},k=N(C),f=e=>({left:e.pinnedLeft,right:e.pinnedRight}),O=[["Name",{left:["name"],right:[]}],["Name, Team, Role",{left:["name","team","role"],right:[]}],["Email",{left:["email"],right:[]}],["Workload at the right",{left:[],right:["workload"]}],["Name left, Workload right",{left:["name"],right:["workload"]}],["Name, Team left, Email, Workload right",{left:["name","team"],right:["email","workload"]}],["Nothing frozen",{left:[],right:[]}]],w=(e,n)=>n.length>0&&a.jsxs(a.Fragment,{children:["frozen ",e," ",U(n.map(t=>a.jsx("b",{children:z(t)},t)),5)]}),fe=({args:e})=>a.jsxs("span",{"data-hint-now":!0,style:{display:"block",marginTop:4,color:"#6C6F80"},children:["Now: ",w("at the left",e.pinnedLeft),e.pinnedLeft.length>0&&e.pinnedRight.length>0&&"; ",w("at the right",e.pinnedRight),!e.pinnedLeft.length&&!e.pinnedRight.length&&"nothing frozen",".",!e.enableColumnPinning&&" enableColumnPinning is off: the user cannot freeze or unfreeze."]}),me={argsOf:k,sliceOf:f,withSlice:e=>({pinnedLeft:e.left??[],pinnedRight:e.right??[]}),report:(e,n)=>{var t;return(t=e.onColumnPinningChange)==null?void 0:t.call(e,n)},columns:(e,n)=>he(n),columnsKey:(e,n)=>JSON.stringify([n.unpinnable,n.fixed,n.pinOnlyLeft,n.pinOnlyRight,n.columnHideFrom]),tableProps:(e,n)=>({...c(e)&&{frozenEdge:c(e)},...h(e)&&{sx:h(e)},...e.edgeSlot!=="none"&&{slots:X(e)},...e.edgeRowAttrs&&{getRowProps:q(e)},enableColumnPinning:e.enableColumnPinning,enableLeftPinning:e.enableLeftPinning,enableRightPinning:e.enableRightPinning,state:{columnPinning:f(e),...e.chained&&{columnChainExpanded:{location:!0}}},chains:e.chained?[ge]:void 0,onColumnPinningChange:n,resolvers:ie(e.rules,e.nameFirst)}),controls:[j()],outside:O,Now:fe},ue=T(me),A={pinnedLeft:{name:"state.columnPinning.left",description:"The frozen columns, in frozen order (the order you tick them in). The one source: edit it here, or freeze in the table.",options:r,control:"check",table:{category:"state"}},pinnedRight:{name:"state.columnPinning.right",description:"The columns frozen at the right, in frozen order: the first one draws the edge.",options:r,control:"check",table:{category:"state"}},enableColumnPinning:{name:"enableColumnPinning",description:"Freezing by the user: *Freeze* in the Columns panel and the column menu. Off: nothing to click; `state.columnPinning` still freezes.",control:"boolean",table:{category:"switches"}},enableLeftPinning:{name:"enableLeftPinning",description:"The default *Freeze* offers the left side. Off with `enableRightPinning` on: a table that freezes only at the right (one plain *Freeze*). Both off: no *Freeze* (like `enableColumnPinning={false}`, but the state still applies).",control:"boolean",table:{category:"switches"}},enableRightPinning:{name:"enableRightPinning",description:"The default *Freeze* (column menu, Columns panel) also offers the right side. With the left side on too: a *Freeze* submenu, Left / Right; alone (`enableLeftPinning` off): one *Freeze* to the right. Off: one *Freeze column*, to the left. `state.columnPinning.right` freezes either way; your own `getPinActions` resolver is not affected.",control:"boolean",table:{category:"switches"}},...L("toolbar={(table) => <TableToolbar table={table} controls={[columnsControl()]} />}"),unpinnable:{name:"column enablePinning: false",description:"Columns the user cannot freeze or unfreeze (TanStack column option). The state may still freeze them.",options:r,control:"check",table:{category:"columns"}},pinOnlyLeft:{name:"column meta.pinOnly: 'left'",description:"Columns the user freezes only at the left: one plain *Freeze*, even when the table offers both sides.",options:r,control:"check",table:{category:"columns"}},pinOnlyRight:{name:"column meta.pinOnly: 'right'",description:"Columns the user freezes only at the right.",options:r,control:"check",table:{category:"columns"}},chained:{name:"chains: Country + City",description:"Country and City are one column chain: the chain freezes whole, at the side picked.",control:"boolean",table:{category:"columns"}},fixed:{name:"column meta.disableReorder",description:"Columns the user cannot drag, frozen or not.",options:r,control:"check",table:{category:"columns"}},rules:{name:"resolvers: the team's rules",description:"`getPinActions` (and `canMoveColumn`) over the default answer: freeze at both sides, a fixed right set, freeze up to here, one per side, at most 2 on the left with only Workload at the right.",options:Q,control:"radio",table:{category:"resolvers"}},nameFirst:{name:"canMoveColumn: Name stays first",description:"Nothing lands before Name. With `meta.disableReorder` on Name it never moves.",control:"boolean",table:{category:"resolvers"}},frozenEdge:{name:"frozenEdge",description:"The edge of a frozen zone for each side and each state — at rest, and scrolled (content under the zone; the right one: still to scroll). Any value: a mode (`'onScroll'`, `'line'`, `'always'`) or `{ rest, scrolled }` per side, each a look `{ line, shadow, width, shadowSize, shadowBlur }` (any colours and CSS lengths, `false` = none) or `false`. Edit the JSON.",control:"object",table:{category:"edge"}},edgeSx:{name:"sx",description:'MUI `sx` on the table: styles for this table only, nested selectors reach its parts — `[role="columnheader"]`, `[data-cell]`, `[data-pinned-edge]`, the scroller\'s `[data-under-left="true"]`, a row\'s attributes. Grey on the cells and gold on the headers, green on some rows, your own shadows: one object. Edit the JSON.',control:"object",table:{category:"edge"}},edgeSlot:{name:"slots.frozenEdge",description:"A component of your own drawn inside every cell at the edge of a frozen zone, with `side`, `part` (header / cell / group) and `scrolled`: a gradient, a badge, anything.",options:W,control:"select",table:{category:"edge"}},edgeRowAttrs:{name:"getRowProps: data-team",description:'Rows carry `data-team`, so `sx` can paint rows by their data: `[role="row"][data-team="Data"] [data-pinned-edge]`.',control:"boolean",table:{category:"edge"}},onColumnPinningChange:{action:"onColumnPinningChange",table:{disable:!0}}},Fe=v(A),pe="// A share of the rate: the column teams freeze at the right.\nconst workloadOf = (e: Employee) => `${(e.rate * 7) % 100}%`",be=(e,n)=>({fields:[l(`accessorKey: '${e}'`),l(`header: '${z(e)}'`),...n.unpinnable.includes(e)?[l("enablePinning: false","the user cannot freeze or unfreeze it")]:[]],meta:[...n.fixed.includes(e)?[l("disableReorder: true","cannot be dragged")]:[],...n.pinOnlyLeft.includes(e)?[l("pinOnly: 'left'","frozen by the user only at the left")]:[],...n.pinOnlyRight.includes(e)?[l("pinOnly: 'right'","frozen by the user only at the right")]:[]]}),ye=(e,n)=>{const t=be(e,n);return e!=="workload"?t:{...t,fields:[l("id: 'workload'"),l("accessorFn: workloadOf"),...t.fields.slice(1)]}},we=(e,n)=>I([pe,...n],r.map(t=>{var o;return M(ye(t,e),{hideFrom:(o=e.columnHideFrom)==null?void 0:o[t]})})),ze=(e,n)=>e.replace(/^/gm,n),Pe=e=>{const n=c(e),t=h(e);return[!!n&&`// The edge of a frozen zone: a look (or false) per side and state. Unnamed parts are the theme's.
      frozenEdge={${g(n,"      ")}}`,!!t&&`// Styles for this table only (MUI sx): by cell type, by row, by the scroll state.
      sx={${g(t,"      ")}}`,e.edgeSlot!=="none"&&`// A component of your own inside every cell at the edge of a frozen zone.
      slots={{ frozenEdge: ${Y[e.edgeSlot]} }}`,e.edgeRowAttrs&&`// Rows carry an attribute, so sx can paint rows by their data.
      getRowProps={(row) => ({ 'data-team': row.original.team })}`]},Ee=(e,n)=>{const t=k(e),o=n,i=ae(t.rules,t.nameFirst);return $({args:t,params:o,slice:{key:"columnPinning",type:"ColumnPinningState",value:f(t),note:"The one source of the frozen columns: the table, the buttons, a saved view."},columns:we(t,[...i.helpers,...t.edgeSlot!=="none"?[V[t.edgeSlot]]:[]]),switches:[!t.enableColumnPinning&&`// The user cannot freeze or unfreeze; state.columnPinning still freezes.
      enableColumnPinning={false}`,!t.enableLeftPinning&&`// Freeze does not offer the left side.
      enableLeftPinning={false}`,t.enableRightPinning&&`// Freeze offers the right side too (with the left: a Left / Right submenu).
      enableRightPinning`],toolbar:{controls:"[columnsControl()]",imports:["columnsControl"],note:"Only the Columns button (the default controls also have Group, Sort)."},extra:[...Pe(t),t.chained&&`// Country and City freeze together, at the side picked.
      chains={[{ id: 'location', label: 'Location', columns: ['country', 'city'] }]}`,i.resolvers.length>0&&`// The team's rules: resolvers over the default answer.
      resolvers={{
${ze(i.resolvers.join(`
`),"        ")}
      }}`],outside:O,imports:i.imports})},xe={decorators:[H],render:ue,args:C,argTypes:A},Le=e=>D(Ee,e);export{P as E,xe as F,u as a,Fe as c,Le as f};
