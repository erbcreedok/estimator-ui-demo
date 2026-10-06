import{j as n}from"./jsx-runtime-Cnbe3ryz.js";import{c as I}from"./play-kit-Bu4SXy9H.js";import{c as we}from"./primitives-body-controls-B8Nqhv7L.js";import{a as p,f as h,c as m,d as O,e as a,h as d,s as k,P as me}from"./primitives-play-Dhsl9Hk3.js";import{r as M}from"./index-3dRrDZpt.js";import{G as fe,K as E,L as te,E as ye,Q as Se,J as ne,F as ae,h as $,N as Ge,B as le,c as xe,b as Te,f as be,O as ve}from"./menu-DvyBTqNz.js";import{j as f,r as s}from"./primitives-source-Cn11Ag2m.js";import{w as Ce}from"./scene-kit-BsKxVgS1.js";const y=["Name","Team","Salary"],j=(e,o)=>we(e,y,o),Re=["none","#FA4B4B","#2F6BFF"],D=h("The group is open (`aria-expanded`); closed, its rows are folded."),N=p("A coloured edge on the group's cell (the `meta.groupCell.accent` of a column): its colour. Without a colour: no edge.",m(...Re)),H=p("The side of the coloured edge (`left` is the default). Needs `accentColor`.",m("left","right")),re=e=>p(`The grouping level (\`data-group-level\`): 0 is the outer group.${e}`,{control:{type:"range",min:0,max:3}}),Ie={expanded:!0,level:0,accentColor:"#FA4B4B",accentSide:"left",height:144,frozen:"none",frozenEdge:!1,children:"GroupSticky > GroupSummary"},Oe={expanded:D,level:re(""),accentColor:N,accentSide:H,height:p("The lane cell spans all rows of its group (one row is 48px). Its `top` is the first row of the group.",{control:{type:"range",min:48,max:192,step:48}}),frozen:p("`frozen={{ side: 'left', offset: 0, edge }}`: the lane sticks in the left zone (`data-pinned=\"left\"`). A frozen lane stands in a `LaneTrack`, natively sticky, so scroll the table sideways to see it hold (the scene is scrolled). Not frozen: it scrolls with the rows.",m("none","left")),frozenEdge:{...h("`frozen={{ edge }}`: the lane is the zone's edge (`data-pinned-edge`), where the scroller draws the line and the shadow. Needs `frozen`."),name:"`frozen={{ edge }}`"},children:p("What the lane holds (its `children`; the lane has no adornments). `text`: as it is. `GroupSticky`: the content stays at the top while the rows scroll (`top` is under the header). `GroupSticky > GroupSummary`: exactly what the table draws in a lane (the default): −/+, checkbox, value, count, sticky under the header. `GroupSticky > own content`: your own nodes in the same sticky place (a badge, a button). `GroupFill`: your own card over the whole cell, edge to edge.",m("text","GroupSticky","GroupSticky > GroupSummary","GroupSticky > own content","GroupFill"))},ke={expanded:!0,level:0,accentColor:"none",accentSide:"left",label:["Name"],total:["Salary"],alignRight:["Salary"]},C={expanded:{...D,description:`GroupRow prop. ${D.description}`},level:re(" GroupRow prop."),accentColor:{...N,description:`GroupRow prop. ${N.description}`},accentSide:{...H,description:`GroupRow prop. ${H.description}`},label:j('<BodyCell groupCell="label">',"The cell shows the group (the label column)."),total:j('<BodyCell groupCell="total">',"The cell shows the column's total. A column in both lists gets `total`; a column in neither is an empty cell."),alignRight:j('<BodyCell align="right">',"The content sits at the right (numbers do, in their own font).")},_e={expanded:!0,collapsible:!0,selectable:!0,selected:!1,indeterminate:!1,count:3,tooltip:"",icon:"default",children:"text",open:!1},Ae={expanded:h("The group is open: the −/+ shows the state and its `aria-label` says Collapse / Expand."),collapsible:h("The −/+ shows."),selectable:h("The group checkbox shows."),selected:h("All of the group's rows are selected: the checkbox is ticked."),indeterminate:h("Some of the group's rows are selected: a dash, shown when `selected` is off."),count:p("The number of rows, shown after the value.",{control:{type:"number",min:0}}),tooltip:p("A tip over the value (the meta.groupCell tooltip). Empty: none.",{control:"text"}),icon:p("`icon={MyGroupIcon}`: a component that gets the state of the group (`open` or `closed`) and returns what to draw. `own`: a component of the scene (a plain − and +). In a table: the registry's `groupFold` and `groupUnfold`.",m("default","own")),children:p("The value (`data-group-value`): the text as it is, or a `GroupValueButton` that opens the group menu.",m("text","GroupValueButton")),open:{...h("`<GroupValueButton open>`: the menu it opens is open (`aria-expanded`). Needs the button."),name:"<GroupValueButton open>"}},Ee={totals:!0,groupId:"team:Dev",label:["Name"],total:["Salary"],alignRight:["Salary"]},je={totals:h("BodyRow prop. The totals row at the end of a group (groupTotals 'footer'): `data-totals-row`, tinted like a group and bold. Off: a plain row."),groupId:p("BodyRow prop. The group it belongs to (`data-group-id`).",{control:"text"}),label:C.label,total:C.total,alignRight:C.alignRight},b=()=>{},i=48,_=140,R=160,Le=380,De={r1:["Ada Lovelace","Dev","120 000"],r2:["Alan Turing","Dev","140 000"],r3:["Grace Hopper","Dev","100 000"],r4:["Linus Torvalds","Dev","110 000"]},W=(e,o)=>y.map((t,l)=>{let r="empty";return e.total.includes(t)?r="total":e.label.includes(t)&&(r="label"),{columnId:t,colIndex:l,groupCell:r,align:e.alignRight.includes(t)?"right":void 0,text:r==="empty"?void 0:o[t]}}),se=({cells:e,rowIndex:o})=>n.jsx(n.Fragment,{children:e.map(t=>n.jsx($,{columnId:t.columnId,rowIndex:o,colIndex:t.colIndex,groupCell:t.groupCell,align:t.align,width:_,children:t.text},t.columnId))}),B=({ids:e,first:o,gap:t,width:l})=>n.jsx(n.Fragment,{children:e.map((r,c)=>n.jsxs(le,{rowId:r,top:(o+c)*i,height:i,width:l,children:[t&&n.jsx(ve,{width:R}),y.map((u,g)=>n.jsx($,{rowId:r,columnId:u,rowIndex:o+c,colIndex:g,width:_,children:De[r][g]},u))]},r))}),ce=(e,o)=>e==="none"?{}:{accentColor:e,accentSide:o},A=({rows:e,width:o,frozen:t,children:l})=>{const r=M.useRef(null);return M.useLayoutEffect(()=>{const c=r.current;!c||!t||(c.scrollLeft=100,c.dataset.underLeft="true")},[t]),n.jsx(xe,{height:"auto",width:t?Le:o,children:n.jsx(Te,{ref:r,role:"grid",contentWidth:o,contentHeight:e*i,style:t?be("always"):void 0,children:l})})},Ne=()=>n.jsx("div",{style:{height:"100%",padding:12,background:"#E8F0FF"},children:"Own card"}),He=()=>n.jsxs("span",{"data-own-lane":!0,style:{display:"inline-flex",alignItems:"center",gap:8},children:[n.jsx("b",{children:"Dev"}),n.jsx("button",{type:"button",children:"Add"})]}),$e=e=>{const o=e.height/i,t=R+y.length*_,l=e.frozen!=="none",r={text:"Dev",GroupSticky:n.jsx(E,{top:0,children:"Dev"}),"GroupSticky > GroupSummary":n.jsx(E,{top:0,children:n.jsx(te,{expanded:!0,collapsible:!0,selectable:!0,selected:!1,indeterminate:!1,count:3,onToggle:b,onChange:b,children:n.jsx("span",{"data-group-value":!0,children:"Dev"})})}),"GroupSticky > own content":n.jsx(E,{top:0,children:n.jsx(He,{})}),GroupFill:n.jsx(fe,{children:n.jsx(Ne,{})})}[e.children],c=n.jsx(ye,{groupId:"team:Dev",level:e.level,expanded:e.expanded,...ce(e.accentColor,e.accentSide),left:l?void 0:0,frozen:l?{side:"left",offset:0,edge:e.frozenEdge}:void 0,width:R,top:0,height:e.height,children:r});return n.jsxs(A,{rows:o,width:t,frozen:l,children:[l?n.jsx(Se,{level:e.level,stickyLeft:0,left:0,width:R,children:c}):c,n.jsx(B,{ids:["r1","r2","r3","r4"].slice(0,o),first:0,gap:!0,width:t})]})},w=y.length*_,We={Name:"Dev",Salary:"360 000"},Be={Name:"Total · Dev",Salary:"360 000"},Fe=e=>n.jsxs(A,{rows:3,width:w,children:[n.jsx(ne,{top:0,height:3*i,width:w,children:n.jsx(ae,{groupId:"team:Dev",level:e.level,expanded:e.expanded,...ce(e.accentColor,e.accentSide),top:0,height:i,width:w,children:n.jsx(se,{cells:W(e,We),rowIndex:0})})}),n.jsx(B,{ids:["r1","r2"],first:1,width:w})]}),ze=e=>n.jsxs(A,{rows:2,width:w,children:[n.jsx(B,{ids:["r1"],first:0,width:w}),n.jsx(le,{rowId:`totals:${e.groupId}`,totals:e.totals,groupId:e.groupId,top:i,height:i,width:w,children:n.jsx(se,{cells:W(e,Be),rowIndex:1})})]}),Me=({state:e})=>n.jsx("b",{"data-own-group-icon":e,children:e==="open"?"−":"+"}),v=320,Pe=e=>n.jsx(A,{rows:1,width:v,children:n.jsx(ne,{top:0,height:i,width:v,children:n.jsx(ae,{groupId:"team:Dev",level:0,expanded:e.expanded,top:0,height:i,width:v,children:n.jsx($,{groupCell:"label",columnId:"Name",rowIndex:0,colIndex:0,width:v,children:n.jsx(te,{expanded:e.expanded,collapsible:e.collapsible,selectable:e.selectable,selected:e.selected,indeterminate:e.indeterminate,count:e.count,tooltip:e.tooltip||void 0,icon:e.icon==="own"?Me:void 0,onToggle:b,onChange:b,children:e.children==="text"?n.jsx("span",{"data-group-value":!0,children:"Dev"}):n.jsx(Ge,{open:e.open,onOpen:b,children:"Dev"})})})})})}),de=(e,o)=>e==="none"?void 0:o,ie=(e,o)=>{const t=Array.from(e.querySelectorAll("[data-group-cell]"));a(t.length===y.length,"a cell for each column"),W(o,{}).forEach((l,r)=>{const c=t[r],u=l.columnId;a(d(c,"data-group-cell")===l.groupCell,`${u}: data-group-cell follows groupCell`),a(d(c,"data-align")===(l.align??"left"),`${u}: data-align follows align`),a(!c.hasAttribute("data-cell"),`${u}: it is no cell of a data row`)})},Ue=async e=>{if(I(e))return;const o=e.args,t=await O(e.canvasElement,"[role=rowheader]");a(d(t,"aria-expanded")===String(o.expanded),"aria-expanded follows expanded"),a(d(t,"data-group-level")===String(o.level),"data-group-level follows level"),a(d(t,"data-accent")===de(o.accentColor,o.accentSide),"data-accent follows accentColor and accentSide"),a(t.style.height===`${o.height}px`,"the lane spans the rows of the group (height)");const l=o.frozen!=="none";a(d(t,"data-pinned")===(l?"left":void 0),"data-pinned follows frozen"),a(d(t,"data-pinned-edge")===(l&&o.frozenEdge?"left":void 0),"data-pinned-edge follows frozen.edge"),a(e.canvasElement.querySelector("[data-lane-track]")!==null===l,"a frozen lane stands in its track"),a(t.querySelector("[data-group-fill]")!==null==(o.children==="GroupFill"),"GroupFill draws the card over the cell"),a(t.querySelector("[data-group-count]")!==null==(o.children==="GroupSticky > GroupSummary"),"GroupSummary draws the standard content (the count is its mark)"),a(t.querySelector("[data-own-lane]")!==null==(o.children==="GroupSticky > own content"),"own content stands in the lane"),a(t.querySelector("[data-group-fill]")===null||o.children==="GroupFill","only GroupFill fills the cell"),a(e.canvasElement.querySelectorAll("[data-lane-gap]").length===o.height/i,"a LaneGap in each row of the group")},Ye=async e=>{if(I(e))return;const o=e.args,t=await O(e.canvasElement,"[data-group-row]");a(d(t,"aria-expanded")===String(o.expanded),"aria-expanded follows expanded"),a(d(t,"data-group-level")===String(o.level),"data-group-level follows level"),a(d(t,"data-accent")===de(o.accentColor,o.accentSide),"data-accent follows accentColor and accentSide"),a(e.canvasElement.querySelector("[data-group-row-track]").style.height===`${3*i}px`,"the track spans the rows of the group"),ie(t,o)},qe=async e=>{if(I(e))return;const o=e.args,t=await O(e.canvasElement,`[data-row-id="totals:${o.groupId}"]`);a(t.hasAttribute("data-totals-row")===o.totals,"data-totals-row follows totals"),a(d(t,"data-group-id")===o.groupId,"data-group-id follows groupId"),ie(t,o)},Ve=async e=>{if(I(e))return;const o=e.args,t=e.canvasElement,l=await O(t,"[data-group-count]");a(l.textContent===String(o.count),"the count is shown");const r=t.querySelector('button[aria-label$="group"]');a(r!==null===o.collapsible,"the −/+ follows collapsible"),r&&a(d(r,"aria-label")===(o.expanded?"Collapse group":"Expand group"),"the −/+ says what a click does");const c=t.querySelector("[role=checkbox]");if(a(c!==null===o.selectable,"the checkbox follows selectable"),c){const ge=o.indeterminate&&!o.selected;a(d(c,"aria-checked")===(ge?"mixed":String(o.selected)),"the checkbox follows selected and indeterminate")}const u=t.querySelector("[data-own-group-icon]");a(u!==null===(o.icon==="own"&&o.collapsible),"the own icon is drawn instead of the default"),u&&a(d(u,"data-own-group-icon")===(o.expanded?"open":"closed"),"the icon is asked for the state of the group");const g=t.querySelector("[data-group-value]");a(g!==null,"the value is shown"),g&&o.children==="GroupValueButton"&&a(d(g,"aria-expanded")===String(o.open),"aria-expanded follows GroupValueButton open"),g&&o.tooltip&&a(d(g,"aria-label")===o.tooltip,"the tooltip is over the value")},pe=(e,o)=>e==="none"?{}:{accentColor:e,accentSide:o==="left"?void 0:o},F=`const ROW_HEIGHT = 48
const COLUMN_WIDTH = 140
const columns = ['Name', 'Team', 'Salary']`,ue=e=>`{columns.map((label, colIndex) => (
  <BodyCell
    key={label}
    columnId={label}
    rowIndex={${e}}
    colIndex={colIndex}
    width={COLUMN_WIDTH}
    groupCell={groupCellOf(label)}
    align={alignOf(label)}
  >
    {textOf(label)}
  </BodyCell>
))}`,L=(e,o)=>`const ${e} = [${o.map(t=>`'${t}'`).join(", ")}]`,he=e=>`${L("labelColumns",e.label)}
${L("totalColumns",e.total)}
${L("rightColumns",e.alignRight)}
const groupCellOf = (label: string) =>
  labelColumns.includes(label) ? 'label' : totalColumns.includes(label) ? 'total' : 'empty'
const alignOf = (label: string) => (rightColumns.includes(label) ? 'right' : undefined)`,Xe=e=>e.frozen==="none"?{left:0}:{frozen:s(`{ side: 'left', offset: 0, edge: ${e.frozenEdge} }`)},Je=`const OwnContent = () => (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
    <b>Dev</b>
    <button type="button">Add</button>
  </span>
)`,Ke=`const OwnCard = () => (
  <div style={{ height: '100%', padding: 12, background: '#E8F0FF' }}>Own card</div>
)`,Qe=e=>{const o={text:"Dev",GroupSticky:"<GroupSticky top={0}>Dev</GroupSticky>","GroupSticky > GroupSummary":`<GroupSticky top={0}>
  <GroupSummary expanded collapsible selectable selected={false} indeterminate={false} count={3} onToggle={…} onChange={…}>
    <span data-group-value>Dev</span>
  </GroupSummary>
</GroupSticky>`,"GroupSticky > own content":`<GroupSticky top={0}>
  <OwnContent />
</GroupSticky>`,GroupFill:"<GroupFill><OwnCard /></GroupFill>"}[e.children],t=f("GroupLane",{groupId:"team:Dev",level:e.level,expanded:e.expanded?!0:s("false"),...pe(e.accentColor,e.accentSide),...Xe(e),width:s("LANE_WIDTH"),top:0,height:s(`${e.height/48} * ROW_HEIGHT`)},o),l=e.frozen==="none"?t:f("LaneTrack",{level:e.level,stickyLeft:0,left:0,width:s("LANE_WIDTH")},t);return`${F}
const LANE_WIDTH = 160
const width = LANE_WIDTH + columns.length * COLUMN_WIDTH
${e.children==="GroupFill"?`
${Ke}
`:""}${e.children==="GroupSticky > own content"?`
${Je}
`:""}
<TableRoot height="auto" width={${e.frozen==="none"?"width":380}}>
  <TableScroller role="grid" contentWidth={width} contentHeight={rows.length * ROW_HEIGHT}>
${z(l,"    ")}
    {rows.map((row, rowIndex) => (
      <BodyRow key={row.id} rowId={row.id} top={rowIndex * ROW_HEIGHT} height={ROW_HEIGHT} width={width}>
        <LaneGap width={LANE_WIDTH} />
        {columns.map((label, colIndex) => (
          <BodyCell key={label} rowId={row.id} columnId={label} rowIndex={rowIndex} colIndex={colIndex} width={COLUMN_WIDTH}>
            {row[label]}
          </BodyCell>
        ))}
      </BodyRow>
    ))}
  </TableScroller>
</TableRoot>`},z=(e,o)=>e.split(`
`).map(t=>t&&o+t).join(`
`),Ze=e=>{const o=f("GroupRow",{groupId:"team:Dev",level:e.level,expanded:e.expanded?!0:s("false"),...pe(e.accentColor,e.accentSide),top:0,height:s("ROW_HEIGHT"),width:s("width")},ue(0));return`${F}
const width = columns.length * COLUMN_WIDTH
${he(e)}
const textOf = (label: string) => ({ Name: 'Dev', Salary: '360 000' }[label])

// The group's rows stand under its header row; the track spans them, so the row sticks.
<GroupRowTrack top={0} height={3 * ROW_HEIGHT} width={width}>
${z(o,"  ")}
</GroupRowTrack>`},eo=e=>{const o=f("BodyRow",{rowId:s("`totals:${groupId}`"),totals:e.totals,groupId:s("groupId"),top:s("ROW_HEIGHT"),height:s("ROW_HEIGHT"),width:s("width")},ue(1));return`${F}
const width = columns.length * COLUMN_WIDTH
const groupId = '${e.groupId}'
${he(e)}
const textOf = (label: string) => ({ Name: 'Total · Dev', Salary: '360 000' }[label])

${o}`},oo=`const MyGroupIcon = ({ state }: GroupIconProps) => (
  <b>{state === 'open' ? '−' : '+'}</b>
)`,to=e=>{const o=e.children==="text"?"<span data-group-value>Dev</span>":f("GroupValueButton",{open:e.open,onOpen:s("openMenu")},"Dev"),t=f("GroupSummary",{expanded:e.expanded?!0:s("false"),collapsible:e.collapsible?!0:s("false"),selectable:e.selectable?!0:s("false"),selected:e.selected,indeterminate:e.indeterminate,count:e.count,tooltip:e.tooltip||void 0,icon:e.icon==="own"?s("MyGroupIcon"):void 0,onToggle:s("…"),onChange:s("…")},o);return`${e.icon==="own"?`${oo}

`:""}// the label cell of a group row
<BodyCell groupCell="label" columnId="name" rowIndex={0} colIndex={0} width={320}>
${z(t,"  ")}
</BodyCell>`},no={title:"Tables/Table Core/Primitives/Group",decorators:[Ce],parameters:me("The pieces of grouping, in a table's box: a lane's tall cell and its track, a group header row, the standard content of a group, a totals row; their cells are `BodyCell groupCell`. The name of a control is the code it gives; its row says what it does. The Code panel shows the pieces with the values of the controls.")},S={tags:["kb:primitives-group-lane"],name:"Group lane",args:Ie,argTypes:Oe,parameters:k(e=>Qe(e)),render:e=>n.jsx($e,{...e}),play:Ue},G={tags:["kb:primitives-group-row"],name:"Group row",args:ke,argTypes:C,parameters:k(e=>Ze(e)),render:e=>n.jsx(Fe,{...e}),play:Ye},x={tags:["kb:primitives-group-summary"],name:"Group summary",args:_e,argTypes:Ae,parameters:k(e=>to(e)),render:e=>n.jsx(Pe,{...e}),play:Ve},T={tags:["kb:primitives-totals-row"],name:"Totals row",args:Ee,argTypes:je,parameters:k(e=>eo(e)),render:e=>n.jsx(ze,{...e}),play:qe};var P,U,Y;S.parameters={...S.parameters,docs:{...(P=S.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['kb:primitives-group-lane'],
  name: 'Group lane',
  args: LANE_ARGS,
  argTypes: LANE_ARG_TYPES as never,
  parameters: sceneSource(args => laneCode(args as LaneArgs)),
  render: a => <GroupLaneRender {...a} />,
  play: playGroupLane
}`,...(Y=(U=S.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var q,V,X;G.parameters={...G.parameters,docs:{...(q=G.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['kb:primitives-group-row'],
  name: 'Group row',
  args: ROW_ARGS,
  argTypes: ROW_ARG_TYPES as never,
  parameters: sceneSource(args => groupRowCode(args as RowArgs)),
  render: a => <GroupRowRender {...a} />,
  play: playGroupRow
}`,...(X=(V=G.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var J,K,Q;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['kb:primitives-group-summary'],
  name: 'Group summary',
  args: SUMMARY_ARGS,
  argTypes: SUMMARY_ARG_TYPES as never,
  parameters: sceneSource(args => summaryCode(args as SummaryArgs)),
  render: a => <GroupSummaryRender {...a} />,
  play: playGroupSummary
}`,...(Q=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Z,ee,oe;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['kb:primitives-totals-row'],
  name: 'Totals row',
  args: TOTALS_ARGS,
  argTypes: TOTALS_ARG_TYPES as never,
  parameters: sceneSource(args => totalsRowCode(args as TotalsArgs)),
  render: a => <TotalsRowRender {...a} />,
  play: playTotalsRow
}`,...(oe=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};const ao=["GroupLaneScene","GroupRowScene","GroupSummaryScene","TotalsRowScene"],go=Object.freeze(Object.defineProperty({__proto__:null,GroupLaneScene:S,GroupRowScene:G,GroupSummaryScene:x,TotalsRowScene:T,__namedExportsOrder:ao,default:no},Symbol.toStringTag,{value:"Module"}));export{go as G,T,S as a,G as b,x as c};
