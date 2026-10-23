import{a as i,f as u,c as A,d as w,e as a,g as d,s as b,P as we}from"./primitives-play-COclK1bJ.js";import{c as p,j as o,aN as m,cK as ae,di as be,cW as D,dn as pe,cL as re,aI as Ie,aJ as ye,aK as M,cH as ge,cI as se,aL as xe,aF as Ce,cJ as ve,v as Te}from"./products-CTiDOXRn.js";import{j as l,r}from"./primitives-source-Cn11Ag2m.js";import{I as Re}from"./scenes-5UQYIVOD.js";const le=e=>e?!0:r("false"),E=(e,t)=>e.split(`
`).map(n=>n&&t+n).join(`
`),ce=(e,t)=>t==="none"?void 0:r(`<Checkbox label="${e}" checked={${t==="checked"}} onChange={toggleRow} />`),de=(e,t)=>{var n;return e&&t?`<UtilitySwap
  states={{ hover: true, focus: true, selected: true }}
  base={${e.raw}}
  instead={${t.raw}}
/>`:((n=e??t)==null?void 0:n.raw)??""},U=`const ROW_HEIGHT = 48
const UTILITY_WIDTH = 48
const NAME_WIDTH = 160`,Se=e=>{const t=l("UtilityCell",{selected:le(e.selected)},de(e.number==="none"?void 0:r(`<RowNumberLabel value={${e.number}} />`),ce("Select row",e.checkbox))),n=e.startAdornment?l("BodyCell",{rowId:"r1",columnId:"name",rowIndex:0,colIndex:0,width:r("UTILITY_WIDTH + NAME_WIDTH"),startAdornment:r(`
${E(t,"    ")}
  `)},"Ada Lovelace"):`${l("BodyCell",{rowId:"r1",columnId:"row",rowIndex:0,colIndex:0,width:r("UTILITY_WIDTH"),align:"center"},t)}
${l("BodyCell",{rowId:"r1",columnId:"name",rowIndex:0,colIndex:1,width:r("NAME_WIDTH")},"Ada Lovelace")}`;return`${U}
const toggleRow = () => … // what a tick means is yours

// inside a TableRoot, in a row: the pointer over the row swaps the number for the checkbox
${l("BodyRow",{rowId:"r1",top:0,height:r("ROW_HEIGHT"),width:r("UTILITY_WIDTH + NAME_WIDTH")},n)}`},ke=e=>{const t=l("UtilityCell",{selected:le(e.anySelected)},de(e.numbered?r("<span data-row-number-hash>#</span>"):void 0,ce("Select all rows",e.selectAll)));return`${U}
const toggleAll = () => … // what a tick means is yours

// the utility column's header: its content is drawn as is (PlainHeaderContent), not as a label
<HeaderRow width={UTILITY_WIDTH + NAME_WIDTH}>
  <HeaderCell columnId="row" width={UTILITY_WIDTH} align="center">
    <PlainHeaderContent>
${E(t,"      ")}
    </PlainHeaderContent>
  </HeaderCell>
  <HeaderCell columnId="name" width={NAME_WIDTH}>
    <HeaderLabelButton sortable={false}>Name</HeaderLabelButton>
  </HeaderCell>
</HeaderRow>`},_=e=>`${U}

// inside a TableRoot, in a row
<BodyRow rowId="r1" top={0} height={ROW_HEIGHT} width={UTILITY_WIDTH + NAME_WIDTH}>
${E(e,"  ")}
</BodyRow>`,Ae=e=>_(l("BodyCell",{rowId:"r1",columnId:"name",rowIndex:0,colIndex:0,width:r("UTILITY_WIDTH + NAME_WIDTH"),startAdornment:r(l("RowNumberLabel",{value:e.value}))},"Ada Lovelace")),fe=e=>`const [checked, setChecked] = useState(${e.checked})

${_(l("BodyCell",{rowId:"r1",columnId:"row",rowIndex:0,colIndex:0,width:r("UTILITY_WIDTH"),align:"center"},l("Checkbox",{label:e.label,checked:r("checked"),indeterminate:e.indeterminate,disabled:e.disabled,onChange:r("setChecked")})))}`,_e=e=>`// ${e.icon==="minus"?"MinusCircleIcon":"PlusCircleIcon"}: any icon of yours
${_(l("BodyCell",{rowId:"r1",columnId:"name",rowIndex:0,colIndex:0,width:r("UTILITY_WIDTH + NAME_WIDTH"),endAdornment:r(l("IconButton",{"aria-label":e.label,onClick:r("collapseGroup")},e.icon==="minus"?"<MinusCircleIcon />":"<PlusCircleIcon />"))},"Dev"))}`,He=e=>`${e.icon==="own"?`const OwnDots = () => <span>…</span>

`:""}${_(l("BodyCell",{rowId:"r1",columnId:"name",rowIndex:0,colIndex:0,width:r("UTILITY_WIDTH + NAME_WIDTH"),endAdornment:r(l("RowMenuButton",{label:e.label==="Row Actions"?void 0:e.label,reveal:e.reveal==="always"?void 0:e.reveal,expanded:e.expanded,icon:e.icon==="own"?r("<OwnDots />"):void 0,onClick:r("openRowMenu")}))},"Dev"))}`,ie=A("none","unchecked","checked"),Ee={number:"7",checkbox:"unchecked",selected:!1,startAdornment:!1},Ue={number:i("`<RowNumberLabel value>`: the row's number on screen; it stands in the cell when given. From 1000 it is cut with an ellipsis and the full number is the tooltip (`title`).",A("none","7","1200")),checkbox:i("`<UtilitySwap instead>`: the row checkbox (a node); it stands in the cell when given. With a number, the number shows and the pointer over the row, the focus in the cell or a selected row swaps it for the checkbox: put the pointer on the row.",ie),selected:u("`<UtilityCell selected>`: the row (or a part of it) is selected: the checkbox stays instead of the number (`data-selected`, the `selected` state of `UtilitySwap`)."),startAdornment:{...u("Where it stands. Off: in a column of its own, as the cell's `children` (the utility column, 48px, centred). On: in a normal column, as its `startAdornment`, before the content."),name:"<BodyCell startAdornment={<UtilityCell />}>"}},Be={numbered:!0,selectAll:"unchecked",anySelected:!1},Ne={numbered:u('The "#" stands in the header cell (the base of the `<UtilitySwap>`).'),selectAll:i('`<UtilitySwap instead>`: the select-all checkbox (a node); it stands in the header cell when given, and with a "#" the pointer over the header swaps the "#" for it: put the pointer on the header.',ie),anySelected:u('`<UtilityCell selected>` of the header: some row is selected: the select-all stays shown instead of the "#" (`data-selected`).')},je={value:1200},De={value:i("`<RowNumberLabel value>`: the row's number on screen. From 1000 it is cut with an ellipsis and the full number is the tooltip (`title`).",{control:{type:"number",min:1}})},Me={checked:!1,indeterminate:!1,disabled:!1,label:"Select row"},Le={checked:u("`<Checkbox checked>`: the box is ticked (`aria-checked`). Click it: the scene gives the new value back, as a screen does."),indeterminate:u('`<Checkbox indeterminate>`: a dash (`aria-checked="mixed"`), shown when `checked` is off.'),disabled:u("`<Checkbox disabled>`: it does not react, is dimmed and is no Tab stop."),label:i("`<Checkbox label>`: the accessible name (`aria-label`); the box has no text.",{control:"text"})},Oe={icon:"minus",label:"Collapse group"},We={icon:i("`children`: the icon inside the button (the −/+ of a group).",A("minus","plus")),label:i("`<IconButton aria-label>`: the accessible name; the button has no text.",{control:"text"})},Ge={label:"Row Actions",reveal:"always",expanded:!1,icon:"registry"},Ye={label:i('`<RowMenuButton label>`: the accessible name. Default: "Row Actions".',{control:"text"}),reveal:i("`<RowMenuButton reveal>`: `always` shows it; `hover` shows it when the row is hovered, it has focus or its menu is open. Hover the row to see it.",A("always","hover")),expanded:u("`<RowMenuButton expanded>`: its menu is open (`aria-expanded`, a tint)."),icon:i("`<RowMenuButton icon>`: the ⋮: the registry's `rowActions`, or your own node.",A("registry","own"))},k=e=>e!==null&&getComputedStyle(e).opacity!=="0"&&getComputedStyle(e).visibility!=="hidden",Pe=async e=>{var g;if(p(e))return;const t=e.args,n=e.canvasElement,s=await w(n,"[data-utility]"),I=t.number!=="none",y=t.checkbox!=="none";if(a(s.querySelector("[data-row-number]")!==null===I,"the number shows when given"),a(s.querySelector("[role=checkbox]")!==null===y,"the checkbox shows when given"),a(d(s,"data-selected")===String(t.selected),"data-selected follows selected"),a(s.closest('[data-adornment="start"]')!==null===t.startAdornment,"it stands in the start adornment or in the cell"),I&&y){const c=s.closest("[data-cell]"),j=((g=s.querySelector("[role=checkbox]"))==null?void 0:g.closest("[data-on-hover]"))??null,me=s.querySelector("[data-row-number]");c.blur(),a(k(j)===t.selected,"the checkbox hides until the row is hovered, focused or selected"),c.focus(),a(k(j),"the focus in the cell shows the checkbox"),a(!k(me),"and hides the number"),c.blur()}},$e=async e=>{var y;if(p(e))return;const t=e.args,n=e.canvasElement,s=await w(n,"[data-utility]"),I=t.selectAll!=="none";if(a(s.querySelector("[data-row-number-hash]")!==null===t.numbered,'the "#" follows numbered'),a(s.querySelector("[role=checkbox]")!==null===I,"select all shows when given"),a(d(s,"data-selected")===String(t.anySelected),"data-selected follows anySelected"),t.numbered&&I){const g=((y=s.querySelector("[role=checkbox]"))==null?void 0:y.closest("[data-on-hover]"))??null,c=s.querySelector("[role=checkbox]");c==null||c.blur(),a(k(g)===t.anySelected,"select all hides until the header is hovered, focused or a row is selected"),c==null||c.focus(),a(k(g),"the focus on select all shows it"),c==null||c.blur()}},qe=async e=>{if(p(e))return;const t=e.args.value,n=await w(e.canvasElement,"[data-row-number]");a(n.textContent===String(t),"it shows the value"),a(d(n,"title")===(t>=1e3?String(t):void 0),"from 1000 the full number is the title"),a(n.closest('[data-adornment="start"]')!==null,"it stands in the start adornment")},Ke=async e=>{if(p(e))return;const t=e.args,n=await w(e.canvasElement,"[role=checkbox]"),s=t.indeterminate&&!t.checked;a(d(n,"aria-checked")===(s?"mixed":String(t.checked)),"aria-checked follows checked and indeterminate"),a(d(n,"aria-label")===t.label,"aria-label follows label"),a(d(n,"aria-disabled")===String(t.disabled),"aria-disabled follows disabled"),a(d(n,"tabindex")===(t.disabled?"-1":"0"),"a disabled checkbox is no Tab stop")},Fe=async e=>{if(p(e))return;const t=e.args,n=await w(e.canvasElement,"button");a(d(n,"aria-label")===t.label,"aria-label follows label"),a(n.querySelector("svg")!==null,"it draws its icon"),a(n.closest('[data-adornment="end"]')!==null,"it stands in the end adornment")},Xe=async e=>{if(p(e))return;const t=e.args,n=await w(e.canvasElement,"button");a(d(n,"aria-label")===t.label,"aria-label follows label"),a(d(n,"aria-haspopup")==="menu","it says it opens a menu"),a(d(n,"aria-expanded")===String(t.expanded),"aria-expanded follows expanded"),a(d(n,"data-reveal")===t.reveal,"data-reveal follows reveal"),a(n.querySelector("[data-own-dots]")!==null==(t.icon==="own"),"the icon can be your own node"),a(n.textContent===(t.icon==="own"?"…":"⋮"),"the registry draws the ⋮"),a(getComputedStyle(n).opacity==="0"==(t.reveal==="hover"&&!t.expanded),"a hover button is hidden until the row is hovered, focused or open")},{useArgs:Je}=__STORYBOOK_MODULE_PREVIEW_API__,B=()=>{},L=48,H=48,N=160,h=H+N,ue=(e,t)=>t==="none"?void 0:o.jsx(ae,{label:e,checked:t==="checked",onChange:B}),f=({children:e})=>o.jsx(Re,{height:L,width:h,children:o.jsx(Ce,{rowId:"r1",top:0,height:L,width:h,children:e})}),ze={hover:!0,focus:!0,selected:!0},he=(e,t)=>e&&t?o.jsx(ve,{states:ze,base:e,instead:t}):e??t,O=e=>o.jsx(se,{selected:e.selected,children:he(e.number==="none"?void 0:o.jsx(re,{value:Number(e.number)}),ue("Select row",e.checkbox))}),Ve=e=>o.jsx(f,{children:e.startAdornment?o.jsx(m,{rowId:"r1",columnId:"name",rowIndex:0,colIndex:0,width:h,tabIndex:0,startAdornment:O(e),children:"Ada Lovelace"}):o.jsxs(o.Fragment,{children:[o.jsx(m,{rowId:"r1",columnId:"row",rowIndex:0,colIndex:0,width:H,align:"center",tabIndex:0,children:O(e)}),o.jsx(m,{rowId:"r1",columnId:"name",rowIndex:0,colIndex:1,width:N,tabIndex:0,children:"Ada Lovelace"})]})}),Qe=e=>o.jsx(Ie,{height:"auto",width:h,children:o.jsxs(ye,{width:h,children:[o.jsx(M,{columnId:"row",width:H,align:"center",children:o.jsx(ge,{children:o.jsx(se,{selected:e.anySelected,children:he(e.numbered?o.jsx("span",{"data-row-number-hash":!0,children:"#"}):void 0,ue("Select all rows",e.selectAll))})})}),o.jsx(M,{columnId:"name",width:N,children:o.jsx(xe,{sortable:!1,children:"Name"})})]})}),Ze=e=>o.jsx(f,{children:o.jsx(m,{rowId:"r1",columnId:"name",rowIndex:0,colIndex:0,width:h,startAdornment:o.jsx(re,{value:e.value}),children:"Ada Lovelace"})}),et=e=>{const[,t]=Je();return o.jsx(f,{children:o.jsx(m,{rowId:"r1",columnId:"row",rowIndex:0,colIndex:0,width:H,align:"center",children:o.jsx(ae,{label:e.label,checked:e.checked,indeterminate:e.indeterminate,disabled:e.disabled,onChange:n=>t({checked:n})})})})},tt=e=>o.jsx(f,{children:o.jsx(m,{rowId:"r1",columnId:"name",rowIndex:0,colIndex:0,width:h,endAdornment:o.jsx(be,{"aria-label":e.label,onClick:B,children:e.icon==="minus"?D.groupFold:D.groupUnfold}),children:"Dev"})}),nt=()=>o.jsx("span",{"data-own-dots":!0,children:"…"}),ot=e=>o.jsx(f,{children:o.jsx(m,{rowId:"r1",columnId:"name",rowIndex:0,colIndex:0,width:h,endAdornment:o.jsx(pe,{label:e.label,reveal:e.reveal,expanded:e.expanded,icon:e.icon==="own"?o.jsx(nt,{}):void 0,onClick:B}),children:"Dev"})}),at={title:"Tables/Table Core/Primitives/Utility",decorators:[Te],parameters:we("The pieces of the utility column — the row number and the checkbox in one place, the checkbox, the small icon button — in a row or a header cell, in a table's box. The name of a control is the code it gives; its row says what it does. The Code panel shows the pieces with the values of the controls.")},x={tags:["kb:primitives-utility-cell"],name:"Utility cell",args:Ee,argTypes:Ue,parameters:b(e=>Se(e)),render:e=>Ve(e),play:Pe},C={tags:["kb:primitives-utility-header"],name:"Utility header",args:Be,argTypes:Ne,parameters:b(e=>ke(e)),render:e=>Qe(e),play:$e},v={tags:["kb:primitives-row-number"],name:"Row number",args:je,argTypes:De,parameters:b(e=>Ae(e)),render:e=>Ze(e),play:qe},T={tags:["kb:primitives-checkbox"],name:"Checkbox",args:Me,argTypes:Le,parameters:b(e=>fe(e)),render:e=>et(e),play:Ke},R={tags:["kb:primitives-icon-button"],name:"Icon button",args:Oe,argTypes:We,parameters:b(e=>_e(e)),render:e=>tt(e),play:Fe},S={tags:["kb:primitives-row-menu-button"],name:"Row menu button",args:Ge,argTypes:Ye,parameters:b(e=>He(e)),render:e=>ot(e),play:Xe};var W,G,Y;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['kb:primitives-utility-cell'],
  name: 'Utility cell',
  args: CELL_ARGS as CellArgs,
  argTypes: CELL_ARG_TYPES as never,
  parameters: sceneSource(args => utilityCellCode(args as CellArgs)),
  render: a => UtilityCellRender(a),
  play: playUtilityCell
}`,...(Y=(G=x.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};var P,$,q;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['kb:primitives-utility-header'],
  name: 'Utility header',
  args: HEADER_ARGS as HeaderArgs,
  argTypes: HEADER_ARG_TYPES as never,
  parameters: sceneSource(args => utilityHeaderCode(args as HeaderArgs)),
  render: a => UtilityHeaderRender(a),
  play: playUtilityHeader
}`,...(q=($=C.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var K,F,X;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['kb:primitives-row-number'],
  name: 'Row number',
  args: NUMBER_ARGS,
  argTypes: NUMBER_ARG_TYPES as never,
  parameters: sceneSource(args => rowNumberCode(args as NumberArgs)),
  render: a => RowNumberRender(a),
  play: playRowNumber
}`,...(X=(F=v.parameters)==null?void 0:F.docs)==null?void 0:X.source}}};var J,z,V;T.parameters={...T.parameters,docs:{...(J=T.parameters)==null?void 0:J.docs,source:{originalSource:`{
  tags: ['kb:primitives-checkbox'],
  name: 'Checkbox',
  args: CHECKBOX_ARGS,
  argTypes: CHECKBOX_ARG_TYPES as never,
  parameters: sceneSource(args => checkboxSceneCode(args as CheckboxArgs)),
  render: a => CheckboxRender(a),
  play: playCheckbox
}`,...(V=(z=T.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var Q,Z,ee;R.parameters={...R.parameters,docs:{...(Q=R.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ['kb:primitives-icon-button'],
  name: 'Icon button',
  args: ICON_ARGS as IconArgs,
  argTypes: ICON_ARG_TYPES as never,
  parameters: sceneSource(args => iconButtonCode(args as IconArgs)),
  render: a => IconButtonRender(a),
  play: playIconButton
}`,...(ee=(Z=R.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,oe;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
  tags: ['kb:primitives-row-menu-button'],
  name: 'Row menu button',
  args: MENU_BUTTON_ARGS,
  argTypes: MENU_BUTTON_ARG_TYPES as never,
  parameters: sceneSource(args => rowMenuButtonCode(args as MenuButtonArgs)),
  render: a => RowMenuButtonRender(a),
  play: playRowMenuButton
}`,...(oe=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};const rt=["UtilityCellScene","UtilityHeaderScene","RowNumberScene","CheckboxScene","IconButtonScene","RowMenuButtonScene"],it=Object.freeze(Object.defineProperty({__proto__:null,CheckboxScene:T,IconButtonScene:R,RowMenuButtonScene:S,RowNumberScene:v,UtilityCellScene:x,UtilityHeaderScene:C,__namedExportsOrder:rt,default:at},Symbol.toStringTag,{value:"Module"}));export{T as C,R as I,v as R,it as U,x as a,C as b,S as c};
