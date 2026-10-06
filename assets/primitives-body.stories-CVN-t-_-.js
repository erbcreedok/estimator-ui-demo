import{j as a}from"./jsx-runtime-Cnbe3ryz.js";import{j as h,r as i,f as be,w as Re}from"./primitives-source-Cn11Ag2m.js";import{c as re,r as ae,f as Se,S as se,I as de,B as Ee,a as ve,F as Ae,b as xe,N as _e,d as $e}from"./primitives-body-scenes-DoNoTMXL.js";import{c as m}from"./play-kit-Bu4SXy9H.js";import{d as p,e as n,h as l,f as v,a as R,c as A,b as z,s as g,P as Be}from"./primitives-play-Dhsl9Hk3.js";import{C as Oe,a as Pe,b as Ge,d as Le,e as ze,f as je,g as He,h as ke,F as Ne}from"./primitives-body-controls-B8Nqhv7L.js";import{a1 as Fe,B as $,h as C,$ as le,a0 as ce}from"./menu-DvyBTqNz.js";import{w as We}from"./scene-kit-BsKxVgS1.js";const Me=({side:e,offset:t,edge:o})=>`{ side: '${e}', offset: ${t}, edge: ${o} }`,qe=e=>{const[t,o]=[e,e];return`<span style={{ position: 'absolute', top: 0, bottom: 0, ${t}: 0, width: 8, background: 'linear-gradient(to ${o}, rgba(0,0,0,.14), transparent)' }} />`},De=e=>h("BodyCell",{rowId:e.rowId,columnId:e.columnId,rowIndex:e.rowIndex,colIndex:e.colIndex,selection:e.selection,align:e.align,width:typeof e.width=="string"?Re(e.width):e.width,frozen:e.frozen&&i(Me(e.frozen)),startAdornment:e.startAdornment?i("<Star />"):void 0,endAdornment:e.endAdornment?i("<Star />"):void 0,edge:e.edge?i(qe(e.edge)):void 0},e.text),ie=(e,t)=>`// inside a TableRoot: it gives the font and the colours the cells take
${h("BodyRow",{rowId:"r1",selected:e.selected,odd:e.odd,depth:e.depth||void 0,collapsedGroup:e.collapsedGroup,top:0,height:e.height,width:e.width},t.map(De).join(`
`))}`,Ye=(e,t,o,r)=>`const COLUMN_WIDTH = 120
const ROW_HEIGHT = 48
${be(e,t,o)}

// The row is wider than its scroller (scrolled to the right): a frozen cell sticks to its side.
<TableScroller
  role="grid"
  contentWidth={columns.length * COLUMN_WIDTH}
  style={{ width: ${r}, ...frozenEdgeVars('always') }}
>
  <BodyRow rowId="r1" top={0} height={ROW_HEIGHT} width={columns.length * COLUMN_WIDTH}>
    {columns.map((label, colIndex) => (
      <BodyCell
        key={label}
        rowId="r1"
        columnId={label}
        rowIndex={0}
        colIndex={colIndex}
        width={COLUMN_WIDTH}
        frozen={frozenOf(label)}
      >
        {value[label]}
      </BodyCell>
    ))}
  </BodyRow>
</TableScroller>`,he=e=>{const t=e.trim();if(t!=="")return/^\d+(\.\d+)?$/.test(t)?Number(t):t},j=e=>e.trim()==="auto"?void 0:he(e),Ue=e=>{const t=`<HeaderRow width={width}>
  {columns.map((label) => (
    <HeaderCell key={label} columnId={label} width={COLUMN_WIDTH}>
      <HeaderLabelButton sortable={false}>{label}</HeaderLabelButton>
    </HeaderCell>
  ))}
</HeaderRow>
${e.empty?"<TableEmpty>No data</TableEmpty>":`<div style={{ position: 'relative', height: rows.length * ROW_HEIGHT }}>
  {rows.map((row, rowIndex) => (
    <BodyRow key={row.id} rowId={row.id} top={rowIndex * ROW_HEIGHT} height={ROW_HEIGHT} width={width}>
      {columns.map((label, colIndex) => (
        <BodyCell key={label} rowId={row.id} columnId={label} rowIndex={rowIndex} colIndex={colIndex} width={COLUMN_WIDTH}>
          {row[label]}
        </BodyCell>
      ))}
    </BodyRow>
  ))}
</div>`}`,o=h("TableRoot",{height:he(e.height),width:j(e.rootWidth)},h("TableScroller",{role:e.role,rowCount:e.rowCount,colCount:e.colCount,readOnly:e.readOnly,contentWidth:i("width"),contentHeight:j(e.contentHeight)},t));return`const COLUMN_WIDTH = 200
const ROW_HEIGHT = 48
const width = ${e.width} // the sum of the columns or more

${o}`},B=(e,t)=>{var s,d;const o=t.columnId;n(l(e,"data-selection")===t.selection,`${o}: data-selection`),n(l(e,"data-align")===(t.align??"left"),`${o}: data-align follows align`),n(l(e,"data-pinned")===((s=t.frozen)==null?void 0:s.side),`${o}: data-pinned follows frozen`),n(l(e,"data-pinned-edge")===((d=t.frozen)!=null&&d.edge?t.frozen.side:void 0),`${o}: data-pinned-edge is on the last cell of the zone`);const r=c=>e.querySelectorAll(c).length;n(r('[data-adornment="start"] svg[aria-label="star"]')===+!!t.startAdornment,`${o}: startAdornment stands before the content`),n(r('[data-adornment="end"] svg[aria-label="star"]')===+!!t.endAdornment,`${o}: endAdornment stands after the content`),n(!!e.querySelector("[data-edge]")==!!t.edge,`${o}: edge is drawn inside the cell`)},me=(e,t)=>{const o=e.querySelector(`[data-cell][data-column-id="${t}"]`);return n(o,`${t}: the cell is rendered`),o},O=(e,t)=>p(e,`[data-cell][data-column-id="${t}"]`),Xe=async e=>{if(m(e))return;const t=await O(e.canvasElement,"salary");B(t,re(e.args))},Ze=async e=>{if(m(e))return;const t=e.args,o=await p(e.canvasElement,"[role=row]");n(l(o,"data-selected")==="true"===(t.selected&&!t.collapsedGroup),"data-selected follows selected"),n(l(o,"data-odd")==="true"===(t.odd&&!t.collapsedGroup),"data-odd follows odd"),n(l(o,"data-depth")===(t.depth?String(t.depth):void 0),"data-depth follows depth"),n(o.hasAttribute("data-collapsed-group")===t.collapsedGroup,"data-collapsed-group follows collapsedGroup"),n(o.style.height===`${t.height}px`,"the height of the row"),await O(e.canvasElement,"name"),ae(t).forEach(r=>B(me(e.canvasElement,r.columnId),r))},Ve=async e=>{if(m(e))return;const t=e.args;await O(e.canvasElement,"name"),Se(t).forEach(r=>{const s=me(e.canvasElement,r.columnId);B(s,{...r}),r.frozen&&n(s.style[r.frozen.side]===`${r.frozen.offset}px`,`${r.columnId}: sticks at its offset`)});const o=await p(e.canvasElement,"[role=grid]");n(o.style.width===`${se}px`,"the scroller is narrower than the row")},H=e=>{const t=e.trim();return t==="auto"?"":/^\d+(\.\d+)?$/.test(t)?`${t}px`:t},Je=async e=>{var d;if(m(e))return;const t=e.args,o=await p(e.canvasElement,`[role=${t.role}]`);n(l(o,"aria-rowcount")===String(t.rowCount),"aria-rowcount follows rowCount"),n(l(o,"aria-colcount")===String(t.colCount),"aria-colcount follows colCount"),n(l(o,"aria-readonly")==="true"===t.readOnly,"aria-readonly follows readOnly");const r=o.firstElementChild;n(r.style.width===`${t.width}px`,"the sheet has the width (contentWidth)"),n(r.style.height===H(t.contentHeight),"the sheet has the height (contentHeight; none: its content decides)");const s=o.parentElement;n(s.style.width===H(t.rootWidth),"the root has the width (none: it fills its container)"),n(((d=e.canvasElement.textContent)==null?void 0:d.includes("No data"))===t.empty,"TableEmpty follows empty")},Ke=e=>p(e.canvasElement,'[data-column-id="name"]'),pe=(e,t)=>{const o=e.querySelector("[data-tree-toggle]");n(o!==null==(t.state!=="leaf"),"a leaf has no button, the others have"),o&&(n(l(o,"aria-expanded")===String(t.state==="open"),"aria-expanded follows state"),n(l(o,"aria-label")===(t.state==="open"?"Collapse row":"Expand row"),"aria-label says what a click does"));const r=e.querySelector("[data-own-tree]");n(r!==null==(t.icon==="own"),"the own icon is drawn instead of the default"),r?(n(l(r,"data-own-tree")===t.state,"the icon is asked for the state of the row (leaf too)"),n(r.style.transform.includes("scaleX(-1)")===t.mirrored,"the icon gets mirrored")):o&&t.mirrored&&n(o.querySelector("span").style.transform==="scaleX(-1)","the default icon turns round when mirrored")},Qe=async e=>{var G;if(m(e))return;const t=e.args,o=e.canvasElement,r=await p(o,'[data-row-id="r1"] [data-column-id="name"]'),s=r.querySelector("[data-tree-indent]");n(s!==null,"TreeIndent stands in the start adornment"),n(s.style.getPropertyValue("--tree-depth")===String(t.depth),"the indent follows depth"),n(Math.round(s.getBoundingClientRect().width)===t.depth*20,"the indent is the depth times the tree indent (20px)"),n((s==null?void 0:s.closest('[data-adornment="start"]'))===((G=r.querySelector("[data-tree-toggle], [data-tree-indent]"))==null?void 0:G.closest('[data-adornment="start"]')),"the indent and the chevron stand in the same adornment"),pe(r,t);const d=r.querySelector("[data-tree-toggle]");d&&n(l(d,"tabindex")===(t.tabIndex==="0"?void 0:t.tabIndex),"tabindex follows tabIndex (0 is the default, not written)");const c=S=>o.querySelector(`[data-row-id="${S}"]`);["e1","e2","e3","e4"].forEach((S,Ce)=>{const L=[0,1,2,1][Ce],_=c(S).querySelector("[data-tree-indent]");n((_==null?void 0:_.style.getPropertyValue("--tree-depth"))===String(L),`example ${S}: the indent is level ${L}`)}),n(c("e3").querySelector("[data-tree-toggle]")===null,"example: a leaf has no button"),n(c("e4").querySelector('[data-adornment="end"] [data-tree-toggle]')!==null&&c("e4").querySelector('[data-adornment="start"] [data-tree-indent]')!==null,"example: the chevron at the end, the indent in front")},et=async e=>{if(m(e))return;const t=e.args,o=await Ke(e);n(o.hasAttribute("data-tree-cell"),"the getter marks the cell (data-tree-cell)"),n(l(o,"data-tree-depth")===(t.depth?String(t.depth):void 0),"data-tree-depth follows depth"),pe(o,t);const r=t.placement==="end"?"end":"start";n(t.state==="leaf"?o.querySelector(`[data-adornment="${r}"]`)!==null:o.querySelector(`[data-adornment="${r}"] [data-tree-toggle]`)!==null,"the chevron stands at the placement"),n(o.querySelector('[data-adornment="start"] [data-tree-indent]')!==null==t.depth>0,"the indent stands in front of the content from level 1");const s=c=>o.querySelectorAll(`[data-adornment="${c}"] svg[aria-label="star"]`).length;n(s("start")===Number(t.startAdornment),"the cell's own startAdornment stands next to the tree's"),n(s("end")===Number(t.endAdornment),"the cell's own endAdornment stands next to the tree's");const d=o.querySelector("[data-cell-content]");n((d==null?void 0:d.textContent)==="Ada Lovelace","the content stays")},ge=`const MyTreeIcon = ({ state, mirrored }: TreeIconProps) => (
  <span style={{ display: 'inline-flex', transform: mirrored ? 'scaleX(-1)' : undefined }}>
    {{ open: '−', closed: '+', leaf: '•' }[state]}
  </span>
)`,we="const toggleRow = () => setExpanded((open) => !open) // what a click on the chevron means is yours",tt=(e,t="Ada Lovelace",o="r1")=>`<BodyCell rowId="${o}" columnId="name" rowIndex={0} colIndex={0}${e}>
  ${t}
</BodyCell>`,ot=`// cell: the ids and the place of each cell. The same two pieces by hand,
// a tree of three levels...
<BodyCell {...cell} startAdornment={<><TreeIndent depth={0} /><TreeToggle state="open" onToggle={toggleRow} /></>}>Account</BodyCell>
<BodyCell {...cell} startAdornment={<><TreeIndent depth={1} /><TreeToggle state="closed" onToggle={toggleRow} /></>}>Program</BodyCell>
<BodyCell {...cell} startAdornment={<><TreeIndent depth={2} /><TreeToggle state="leaf" /></>}>Project</BodyCell>

// ...and the chevron at the end of the cell: the indent stays in front
<BodyCell {...cell} startAdornment={<TreeIndent depth={1} />} endAdornment={<TreeToggle state="open" onToggle={toggleRow} />}>Program</BodyCell>`,nt=e=>{const t=h("TreeToggle",{state:e.state,mirrored:e.mirrored,icon:e.icon==="own"?i("MyTreeIcon"):void 0,tabIndex:e.tabIndex==="0"?void 0:-1,onToggle:i("toggleRow")});return`${e.icon==="own"?`${ge}

`:""}${we}

// inside a TableRoot, in a row: it gives the font and the colours
${tt(`
  startAdornment={
    <>
      ${h("TreeIndent",{depth:e.depth})}
${t.split(`
`).map(o=>`      ${o}`).join(`
`)}
    </>
  }
`)}

${ot}`},rt=e=>{const t=`const tree = {
  depth: ${e.depth},
  state: '${e.state}',
  onToggle: toggleRow,${e.placement==="end"?`
  placement: 'end',`:""}${e.mirrored?`
  mirrored: true,`:""}${e.icon==="own"?`
  icon: MyTreeIcon,`:""}
}`,o=[e.startAdornment&&"startAdornment: <Star />",e.endAdornment&&"endAdornment: <Star />"].filter(Boolean),r=o.length?`treeCellProps(tree, { ${o.join(", ")} })`:"treeCellProps(tree)",s=o.length?`// Star: any icon of yours
`:"";return`${e.icon==="own"?`${ge}

`:""}${s}${we}
${t}

// The getter returns the cell's props: the adornments and the data-tree-* hooks.
<BodyCell rowId="r1" columnId="name" rowIndex={0} colIndex={0} {...${r}}>
  Ada Lovelace
</BodyCell>`},ue=e=>R(`${e} a component that gets the state of the row (\`open\`, \`closed\`, \`leaf\`) and \`mirrored\`, and returns what is needed: one icon turned round, one shown or hidden, a different icon for each state. \`own\`: a component of the scene that draws a different mark for each state, including \`leaf\`, which the default draws as nothing. In a table: \`slots.treeIcon\`.`,A("default","own")),fe="Draw the icon mirrored. The piece does not guess the writing direction: you say it, and the `icon` component gets `mirrored` (the default one turns its chevron round). In a table: `treeMirrored`.",ye=e=>R(`${e} \`closed\` / \`open\`: the row has children, hidden / shown: the chevron points right / down, a button. \`leaf\`: no children: no button, only the space the chevron would take, so the content stays aligned.`,A("closed","open","leaf")),Te=e=>R(`${e} The level: each level indents by the theme's tree indent (\`theme={{ treeIndent }}\`). 0: no indent.`,{control:{type:"range",min:0,max:4}}),at={depth:1,state:"closed",mirrored:!1,icon:"default",tabIndex:"0"},st={depth:Te("`<TreeIndent depth>`."),state:ye("`<TreeToggle state>`."),mirrored:v(fe),icon:ue("`<TreeToggle icon={MyTreeIcon}>`:"),tabIndex:R("`<TreeToggle tabIndex>`: `-1` inside a body cell in the spreadsheet mode, where the active cell reaches the chevron with the keyboard.",A("0","-1"))},dt={depth:1,state:"closed",placement:"start",mirrored:!1,icon:"default",startAdornment:!1,endAdornment:!1},lt={depth:{...Te("`treeCellProps({ depth })`."),name:"`treeCellProps({ depth })`"},state:{...ye("`treeCellProps({ state })`."),name:"`treeCellProps({ state })`"},placement:{...R("`treeCellProps({ placement })`: where the chevron stands: in front of the content (`start`, the default) or after it, at the end of the cell (`end`). The indent stays in front of the content. In a table: `treePlacement` of `TableCore`.",A("start","end")),name:"`treeCellProps({ placement })`"},mirrored:{...v(fe),name:"`treeCellProps({ mirrored })`"},icon:{...ue("`treeCellProps({ icon })`:"),name:"`treeCellProps({ icon })`"},startAdornment:{...v("Node prop. On: the cell's own `startAdornment={<Star />}`, given to the getter as `own`: it stands next to the tree's, after the chevron."),name:"`treeCellProps(tree, { startAdornment })`"},endAdornment:{...v("Node prop. On: the cell's own `endAdornment={<Star />}`, given to the getter as `own`: it stands before the chevron when the chevron is at the end."),name:"`treeCellProps(tree, { endAdornment })`"}},P=()=>{},x=200,b=x+120,Ie=({state:e,mirrored:t})=>a.jsx("span",{"data-own-tree":e,style:{display:"inline-flex",transform:t?"scaleX(-1)":void 0},children:{open:"−",closed:"+",leaf:"•"}[e]}),ct=({children:e,...t})=>a.jsx(de,{height:48,width:b,children:a.jsxs($,{rowId:"r1",top:0,height:48,width:b,children:[a.jsx(C,{rowId:"r1",columnId:"name",rowIndex:0,colIndex:0,width:x,...t,children:e}),a.jsx(C,{rowId:"r1",columnId:"team",rowIndex:0,colIndex:1,width:120,children:"Neighbour"})]})}),E=({id:e,text:t,depth:o,state:r,atEnd:s})=>{const d=a.jsx(ce,{state:r,onToggle:r==="leaf"?void 0:P}),c=a.jsx(le,{depth:o});return a.jsx($,{rowId:e,top:k[e],height:48,width:b,children:a.jsx(C,{rowId:e,columnId:"name",rowIndex:k[e]/48,colIndex:0,width:x,startAdornment:s?c:a.jsxs(a.Fragment,{children:[c,d]}),endAdornment:s?d:void 0,children:t})})},k={e1:48,e2:96,e3:144,e4:192},it=e=>a.jsxs(de,{height:240,width:b,children:[a.jsxs($,{rowId:"r1",top:0,height:48,width:b,children:[a.jsx(C,{rowId:"r1",columnId:"name",rowIndex:0,colIndex:0,width:x,startAdornment:a.jsxs(a.Fragment,{children:[a.jsx(le,{depth:e.depth}),a.jsx(ce,{state:e.state,mirrored:e.mirrored,icon:e.icon==="own"?Ie:void 0,tabIndex:e.tabIndex==="0"?void 0:-1,onToggle:P})]}),children:"Ada Lovelace"}),a.jsx(C,{rowId:"r1",columnId:"team",rowIndex:0,colIndex:1,width:120,children:"Neighbour"})]}),a.jsx(E,{id:"e1",text:"Account",depth:0,state:"open"}),a.jsx(E,{id:"e2",text:"Program",depth:1,state:"closed"}),a.jsx(E,{id:"e3",text:"Project",depth:2,state:"leaf"}),a.jsx(E,{id:"e4",text:"Program (chevron at the end)",depth:1,state:"open",atEnd:!0})]}),ht=e=>a.jsx(ct,{...Fe({depth:e.depth,state:e.state,onToggle:P,placement:e.placement,mirrored:e.mirrored,icon:e.icon==="own"?Ie:void 0},{startAdornment:e.startAdornment?a.jsx(z,{}):void 0,endAdornment:e.endAdornment?a.jsx(z,{}):void 0}),children:"Ada Lovelace"}),mt={title:"Tables/Table Core/Primitives/Body",decorators:[We],parameters:Be("The frame of the table and the pieces of its body. A piece gets what to show (ids, flags, where a frozen cell sticks, the selection flag) and its content as `children`. The name of a control is the code it gives; its row says what it does. The Code panel shows the pieces with the values of the controls.")},w={tags:["kb:primitives-body-cell"],name:"Body cell",args:Pe,argTypes:Oe,parameters:g(e=>{const t=e;return ie({selected:!1,odd:!1,depth:0,collapsedGroup:!1,height:48,width:$e(t.width)},[re(t),_e])}),render:e=>Ee(e),play:Xe},u={tags:["kb:primitives-body-row"],name:"Body row",args:Le,argTypes:Ge,parameters:g(e=>{const t=e;return ie({selected:t.selected,odd:t.odd,depth:t.depth,collapsedGroup:t.collapsedGroup,height:t.height,width:t.width},ae(t))}),render:e=>ve(e),play:Ze},f={tags:["kb:primitives-frame"],name:"Table root and scroller",args:ke,argTypes:He,parameters:g(e=>Ue(e)),render:e=>xe(e),play:Je},y={tags:["kb:primitives-body-frozen"],name:"Frozen body cells",args:je,argTypes:ze,parameters:g(e=>Ye(Ne,e.frozenLeft,e.frozenRight,se)),render:e=>a.jsx(Ae,{...e}),play:Ve},T={tags:["kb:primitives-tree-pieces"],name:"Tree indent and toggle",args:at,argTypes:st,parameters:g(e=>nt(e)),render:e=>it(e),play:Qe},I={tags:["kb:primitives-tree-cell"],name:"Tree cell (treeCellProps)",args:dt,argTypes:lt,parameters:g(e=>rt(e)),render:e=>ht(e),play:et};var N,F,W;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ['kb:primitives-body-cell'],
  name: 'Body cell',
  args: CELL_ARGS,
  argTypes: CELL_ARG_TYPES as never,
  parameters: sceneSource(args => {
    const a = args as CellArgs;
    return bodyRowCode({
      selected: false,
      odd: false,
      depth: 0,
      collapsedGroup: false,
      height: 48,
      width: cellRowWidth(a.width)
    }, [cellSpecOf(a), NEIGHBOUR]);
  }),
  render: a => BodyCellRender(a),
  play: playBodyCell
}`,...(W=(F=w.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var M,q,D;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['kb:primitives-body-row'],
  name: 'Body row',
  args: ROW_ARGS,
  argTypes: ROW_ARG_TYPES as never,
  parameters: sceneSource(args => {
    const a = args as RowArgs;
    return bodyRowCode({
      selected: a.selected,
      odd: a.odd,
      depth: a.depth,
      collapsedGroup: a.collapsedGroup,
      height: a.height,
      width: a.width
    }, rowCellsOf(a));
  }),
  render: a => BodyRowRender(a),
  play: playBodyRow
}`,...(D=(q=u.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var Y,U,X;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  tags: ['kb:primitives-frame'],
  name: 'Table root and scroller',
  args: FRAME_ARGS as FrameOwn,
  argTypes: FRAME_ARG_TYPES as never,
  parameters: sceneSource(args => frameCode(args as FrameOwn)),
  render: a => FrameRender(a),
  play: playFrame
}`,...(X=(U=f.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,V,J;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['kb:primitives-body-frozen'],
  name: 'Frozen body cells',
  args: FROZEN_ARGS,
  argTypes: FROZEN_ARG_TYPES as never,
  parameters: sceneSource(args => frozenBodyCode(FROZEN_COLUMNS, (args as FrozenArgs).frozenLeft, (args as FrozenArgs).frozenRight, SCROLLER_WIDTH)),
  render: a => <FrozenBodyRender {...a} />,
  play: playFrozenBody
}`,...(J=(V=y.parameters)==null?void 0:V.docs)==null?void 0:J.source}}};var K,Q,ee;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['kb:primitives-tree-pieces'],
  name: 'Tree indent and toggle',
  args: PIECES_ARGS,
  argTypes: PIECES_ARG_TYPES as never,
  parameters: sceneSource(args => piecesCode(args as PiecesArgs)),
  render: a => TreePiecesRender(a),
  play: playTreePieces
}`,...(ee=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var te,oe,ne;I.parameters={...I.parameters,docs:{...(te=I.parameters)==null?void 0:te.docs,source:{originalSource:`{
  tags: ['kb:primitives-tree-cell'],
  name: 'Tree cell (treeCellProps)',
  args: TREE_CELL_ARGS,
  argTypes: TREE_CELL_ARG_TYPES as never,
  parameters: sceneSource(args => treeCellCode(args as TreeCellArgs)),
  render: a => TreeCellRender(a),
  play: playTreeCell
}`,...(ne=(oe=I.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};const pt=["BodyCellScene","BodyRowScene","TableRootScene","FrozenBodyScene","TreePiecesScene","TreeCellScene"],bt=Object.freeze(Object.defineProperty({__proto__:null,BodyCellScene:w,BodyRowScene:u,FrozenBodyScene:y,TableRootScene:f,TreeCellScene:I,TreePiecesScene:T,__namedExportsOrder:pt,default:mt},Symbol.toStringTag,{value:"Module"}));export{bt as B,y as F,f as T,w as a,u as b,T as c,I as d};
