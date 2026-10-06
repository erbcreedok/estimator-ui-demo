import{j as l,r}from"./primitives-source-Cn11Ag2m.js";import{a as i,f as u,c as k,d as p,e as a,h as d,s as I,P as ce}from"./primitives-play-Dhsl9Hk3.js";import{c as y}from"./play-kit-Bu4SXy9H.js";import{j as n}from"./jsx-runtime-Cnbe3ryz.js";import{h as m,z as oe,I as de,Y as ie,Z as ue,c as he,H as me,d as j,W as be,i as we,e as pe,B as Ie,U as ye}from"./menu-DvyBTqNz.js";import{M as xe,P as ge}from"./icons-849xEHsl.js";import{I as Ce}from"./primitives-body-scenes-DoNoTMXL.js";import{w as Te}from"./scene-kit-BsKxVgS1.js";const H=e=>e?!0:r("false"),E=(e,t)=>e.split(`
`).map(o=>o&&t+o).join(`
`),ae=(e,t)=>t==="none"?void 0:r(`<Checkbox label="${e}" checked={${t==="checked"}} onChange={toggleRow} />`),B=`const ROW_HEIGHT = 48
const UTILITY_WIDTH = 48
const NAME_WIDTH = 160`,Se=e=>{const t=l("UtilityCell",{number:e.number==="none"?void 0:Number(e.number),checkbox:ae("Select row",e.checkbox),selected:H(e.selected)}),o=e.startAdornment?l("BodyCell",{rowId:"r1",columnId:"name",rowIndex:0,colIndex:0,width:r("UTILITY_WIDTH + NAME_WIDTH"),startAdornment:r(`
${E(t,"    ")}
  `)},"Ada Lovelace"):`${l("BodyCell",{rowId:"r1",columnId:"row",rowIndex:0,colIndex:0,width:r("UTILITY_WIDTH"),align:"center"},t)}
${l("BodyCell",{rowId:"r1",columnId:"name",rowIndex:0,colIndex:1,width:r("NAME_WIDTH")},"Ada Lovelace")}`;return`${B}
const toggleRow = () => … // what a tick means is yours

// inside a TableRoot, in a row: the pointer over the row swaps the number for the checkbox
${l("BodyRow",{rowId:"r1",top:0,height:r("ROW_HEIGHT"),width:r("UTILITY_WIDTH + NAME_WIDTH")},o)}`},Re=e=>{const t=l("UtilityHeader",{numbered:H(e.numbered),anySelected:H(e.anySelected),selectAll:ae("Select all rows",e.selectAll)});return`${B}
const toggleAll = () => … // what a tick means is yours

// the utility column's header: its content is drawn as is (PlainHeaderContent), not as a label
<HeaderRow gripSpace={false} width={UTILITY_WIDTH + NAME_WIDTH}>
  <HeaderCell columnId="row" width={UTILITY_WIDTH} align="center">
    <PlainHeaderContent>
${E(t,"      ")}
    </PlainHeaderContent>
  </HeaderCell>
  <HeaderCell columnId="name" width={NAME_WIDTH}>
    <HeaderLabelButton sortable={false}>Name</HeaderLabelButton>
  </HeaderCell>
</HeaderRow>`},_=e=>`${B}

// inside a TableRoot, in a row
<BodyRow rowId="r1" top={0} height={ROW_HEIGHT} width={UTILITY_WIDTH + NAME_WIDTH}>
${E(e,"  ")}
</BodyRow>`,ve=e=>_(l("BodyCell",{rowId:"r1",columnId:"name",rowIndex:0,colIndex:0,width:r("UTILITY_WIDTH + NAME_WIDTH"),startAdornment:r(l("RowNumberLabel",{value:e.value}))},"Ada Lovelace")),ke=e=>`const [checked, setChecked] = useState(${e.checked})

${_(l("BodyCell",{rowId:"r1",columnId:"row",rowIndex:0,colIndex:0,width:r("UTILITY_WIDTH"),align:"center"},l("Checkbox",{label:e.label,checked:r("checked"),indeterminate:e.indeterminate,disabled:e.disabled,onChange:r("setChecked")})))}`,Ae=e=>`// ${e.icon==="minus"?"MinusCircleIcon":"PlusCircleIcon"}: any icon of yours
${_(l("BodyCell",{rowId:"r1",columnId:"name",rowIndex:0,colIndex:0,width:r("UTILITY_WIDTH + NAME_WIDTH"),endAdornment:r(l("IconButton",{"aria-label":e.label,onClick:r("collapseGroup")},e.icon==="minus"?"<MinusCircleIcon />":"<PlusCircleIcon />"))},"Dev"))}`,_e=e=>`${e.icon==="own"?`const OwnDots = () => <span>…</span>

`:""}${_(l("BodyCell",{rowId:"r1",columnId:"name",rowIndex:0,colIndex:0,width:r("UTILITY_WIDTH + NAME_WIDTH"),endAdornment:r(l("RowMenuButton",{label:e.label==="Row Actions"?void 0:e.label,reveal:e.reveal==="always"?void 0:e.reveal,expanded:e.expanded,icon:e.icon==="own"?r("<OwnDots />"):void 0,onClick:r("openRowMenu")}))},"Dev"))}`,re=k("none","unchecked","checked"),fe={number:"7",checkbox:"unchecked",selected:!1,startAdornment:!1},He={number:i("`<UtilityCell number>`: the row's number on screen; it shows when given. From 1000 it is cut with an ellipsis and the full number is the tooltip (`title`).",k("none","7","1200")),checkbox:i("`<UtilityCell checkbox>`: the row checkbox (a node); it shows when given. With a number, the number shows and the pointer over the row, the focus in the cell or a selected row swaps it for the checkbox: put the pointer on the row.",re),selected:u("`<UtilityCell selected>`: the row (or a part of it) is selected: the checkbox stays instead of the number (`data-selected`)."),startAdornment:{...u("Where it stands. Off: in a column of its own, as the cell's `children` (the utility column, 48px, centred). On: in a normal column, as its `startAdornment`, before the content."),name:"<BodyCell startAdornment={<UtilityCell />}>"}},Ee={numbered:!0,selectAll:"unchecked",anySelected:!1},Be={numbered:u('`<UtilityHeader numbered>`: the "#" shows.'),selectAll:i('`<UtilityHeader selectAll>`: the select-all checkbox (a node); it shows when given, and with a "#" the pointer over the header swaps the "#" for it: put the pointer on the header.',re),anySelected:u('`<UtilityHeader anySelected>`: some row is selected: the select-all stays shown instead of the "#" (`data-any-selected`).')},Ue={value:1200},Ne={value:i("`<RowNumberLabel value>`: the row's number on screen. From 1000 it is cut with an ellipsis and the full number is the tooltip (`title`).",{control:{type:"number",min:1}})},Me={checked:!1,indeterminate:!1,disabled:!1,label:"Select row"},je={checked:u("`<Checkbox checked>`: the box is ticked (`aria-checked`). Click it: the scene gives the new value back, as a screen does."),indeterminate:u('`<Checkbox indeterminate>`: a dash (`aria-checked="mixed"`), shown when `checked` is off.'),disabled:u("`<Checkbox disabled>`: it does not react, is dimmed and is no Tab stop."),label:i("`<Checkbox label>`: the accessible name (`aria-label`); the box has no text.",{control:"text"})},De={icon:"minus",label:"Collapse group"},Oe={icon:i("`children`: the icon inside the button (the −/+ of a group).",k("minus","plus")),label:i("`<IconButton aria-label>`: the accessible name; the button has no text.",{control:"text"})},Le={label:"Row Actions",reveal:"always",expanded:!1,icon:"registry"},We={label:i('`<RowMenuButton label>`: the accessible name. Default: "Row Actions".',{control:"text"}),reveal:i("`<RowMenuButton reveal>`: `always` shows it; `hover` shows it when the row is hovered, it has focus or its menu is open. Hover the row to see it.",k("always","hover")),expanded:u("`<RowMenuButton expanded>`: its menu is open (`aria-expanded`, a tint)."),icon:i("`<RowMenuButton icon>`: the ⋮: the registry's `rowActions`, or your own node.",k("registry","own"))},v=e=>e!==null&&getComputedStyle(e).opacity!=="0"&&getComputedStyle(e).visibility!=="hidden",Ge=async e=>{if(y(e))return;const t=e.args,o=e.canvasElement,s=await p(o,"[data-numbered]"),b=t.number!=="none",w=t.checkbox!=="none";if(a(s.querySelector("[data-row-number]")!==null===b,"the number shows when given"),a(s.querySelector("[role=checkbox]")!==null===w,"the checkbox shows when given"),a(d(s,"data-selected")===String(w&&t.selected),"data-selected follows selected, with a checkbox"),a(s.closest('[data-adornment="start"]')!==null===t.startAdornment,"it stands in the start adornment or in the cell"),b&&w){const c=s.closest("[data-cell]"),M=s.querySelector("[data-row-check]"),le=s.querySelector("[data-row-number]");c.blur(),a(v(M)===t.selected,"the checkbox hides until the row is hovered, focused or selected"),c.focus(),a(v(M),"the focus in the cell shows the checkbox"),a(!v(le),"and hides the number"),c.blur()}},Pe=async e=>{if(y(e))return;const t=e.args,o=e.canvasElement,s=await p(o,"[data-numbered]"),b=t.selectAll!=="none";if(a(s.querySelector("[data-row-number-hash]")!==null===t.numbered,'the "#" follows numbered'),a(s.querySelector("[role=checkbox]")!==null===b,"select all shows when given"),a(d(s,"data-any-selected")===String(b&&t.anySelected),"data-any-selected follows anySelected, with select all"),t.numbered&&b){const w=s.querySelector("[data-select-all]"),c=s.querySelector("[role=checkbox]");c==null||c.blur(),a(v(w)===t.anySelected,"select all hides until the header is hovered, focused or a row is selected"),c==null||c.focus(),a(v(w),"the focus on select all shows it"),c==null||c.blur()}},Ye=async e=>{if(y(e))return;const t=e.args.value,o=await p(e.canvasElement,"[data-row-number]");a(o.textContent===String(t),"it shows the value"),a(d(o,"title")===(t>=1e3?String(t):void 0),"from 1000 the full number is the title"),a(o.closest('[data-adornment="start"]')!==null,"it stands in the start adornment")},$e=async e=>{if(y(e))return;const t=e.args,o=await p(e.canvasElement,"[role=checkbox]"),s=t.indeterminate&&!t.checked;a(d(o,"aria-checked")===(s?"mixed":String(t.checked)),"aria-checked follows checked and indeterminate"),a(d(o,"aria-label")===t.label,"aria-label follows label"),a(d(o,"aria-disabled")===String(t.disabled),"aria-disabled follows disabled"),a(d(o,"tabindex")===(t.disabled?"-1":"0"),"a disabled checkbox is no Tab stop")},qe=async e=>{if(y(e))return;const t=e.args,o=await p(e.canvasElement,"button");a(d(o,"aria-label")===t.label,"aria-label follows label"),a(o.querySelector("svg")!==null,"it draws its icon"),a(o.closest('[data-adornment="end"]')!==null,"it stands in the end adornment")},Ke=async e=>{if(y(e))return;const t=e.args,o=await p(e.canvasElement,"button");a(d(o,"aria-label")===t.label,"aria-label follows label"),a(d(o,"aria-haspopup")==="menu","it says it opens a menu"),a(d(o,"aria-expanded")===String(t.expanded),"aria-expanded follows expanded"),a(d(o,"data-reveal")===t.reveal,"data-reveal follows reveal"),a(o.querySelector("[data-own-dots]")!==null==(t.icon==="own"),"the icon can be your own node"),a(o.textContent===(t.icon==="own"?"…":"⋮"),"the registry draws the ⋮"),a(getComputedStyle(o).opacity==="0"==(t.reveal==="hover"&&!t.expanded),"a hover button is hidden until the row is hovered, focused or open")},{useArgs:Xe}=__STORYBOOK_MODULE_PREVIEW_API__,U=()=>{},D=48,f=48,N=160,h=f+N,se=(e,t)=>t==="none"?void 0:n.jsx(oe,{label:e,checked:t==="checked",onChange:U}),A=({children:e})=>n.jsx(Ce,{height:D,width:h,children:n.jsx(Ie,{rowId:"r1",top:0,height:D,width:h,children:e})}),O=e=>n.jsx(ye,{number:e.number==="none"?void 0:Number(e.number),checkbox:se("Select row",e.checkbox),selected:e.selected}),Fe=e=>n.jsx(A,{children:e.startAdornment?n.jsx(m,{rowId:"r1",columnId:"name",rowIndex:0,colIndex:0,width:h,tabIndex:0,startAdornment:O(e),children:"Ada Lovelace"}):n.jsxs(n.Fragment,{children:[n.jsx(m,{rowId:"r1",columnId:"row",rowIndex:0,colIndex:0,width:f,align:"center",tabIndex:0,children:O(e)}),n.jsx(m,{rowId:"r1",columnId:"name",rowIndex:0,colIndex:1,width:N,tabIndex:0,children:"Ada Lovelace"})]})}),ze=e=>n.jsx(he,{height:"auto",width:h,children:n.jsxs(me,{gripSpace:!1,width:h,children:[n.jsx(j,{columnId:"row",width:f,align:"center",children:n.jsx(be,{children:n.jsx(we,{numbered:e.numbered,anySelected:e.anySelected,selectAll:se("Select all rows",e.selectAll)})})}),n.jsx(j,{columnId:"name",width:N,children:n.jsx(pe,{sortable:!1,children:"Name"})})]})}),Ve=e=>n.jsx(A,{children:n.jsx(m,{rowId:"r1",columnId:"name",rowIndex:0,colIndex:0,width:h,startAdornment:n.jsx(ue,{value:e.value}),children:"Ada Lovelace"})}),Ze=e=>{const[,t]=Xe();return n.jsx(A,{children:n.jsx(m,{rowId:"r1",columnId:"row",rowIndex:0,colIndex:0,width:f,align:"center",children:n.jsx(oe,{label:e.label,checked:e.checked,indeterminate:e.indeterminate,disabled:e.disabled,onChange:o=>t({checked:o})})})})},Je=e=>n.jsx(A,{children:n.jsx(m,{rowId:"r1",columnId:"name",rowIndex:0,colIndex:0,width:h,endAdornment:n.jsx(de,{"aria-label":e.label,onClick:U,children:e.icon==="minus"?n.jsx(xe,{}):n.jsx(ge,{})}),children:"Dev"})}),Qe=()=>n.jsx("span",{"data-own-dots":!0,children:"…"}),et=e=>n.jsx(A,{children:n.jsx(m,{rowId:"r1",columnId:"name",rowIndex:0,colIndex:0,width:h,endAdornment:n.jsx(ie,{label:e.label,reveal:e.reveal,expanded:e.expanded,icon:e.icon==="own"?n.jsx(Qe,{}):void 0,onClick:U}),children:"Dev"})}),tt={title:"Tables/Table Core/Primitives/Utility",decorators:[Te],parameters:ce("The pieces of the utility column — the row number and the checkbox in one place, the checkbox, the small icon button — in a row or a header cell, in a table's box. The name of a control is the code it gives; its row says what it does. The Code panel shows the pieces with the values of the controls.")},x={tags:["kb:primitives-utility-cell"],name:"Utility cell",args:fe,argTypes:He,parameters:I(e=>Se(e)),render:e=>Fe(e),play:Ge},g={tags:["kb:primitives-utility-header"],name:"Utility header",args:Ee,argTypes:Be,parameters:I(e=>Re(e)),render:e=>ze(e),play:Pe},C={tags:["kb:primitives-row-number"],name:"Row number",args:Ue,argTypes:Ne,parameters:I(e=>ve(e)),render:e=>Ve(e),play:Ye},T={tags:["kb:primitives-checkbox"],name:"Checkbox",args:Me,argTypes:je,parameters:I(e=>ke(e)),render:e=>Ze(e),play:$e},S={tags:["kb:primitives-icon-button"],name:"Icon button",args:De,argTypes:Oe,parameters:I(e=>Ae(e)),render:e=>Je(e),play:qe},R={tags:["kb:primitives-row-menu-button"],name:"Row menu button",args:Le,argTypes:We,parameters:I(e=>_e(e)),render:e=>et(e),play:Ke};var L,W,G;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['kb:primitives-utility-cell'],
  name: 'Utility cell',
  args: CELL_ARGS as CellArgs,
  argTypes: CELL_ARG_TYPES as never,
  parameters: sceneSource(args => utilityCellCode(args as CellArgs)),
  render: a => UtilityCellRender(a),
  play: playUtilityCell
}`,...(G=(W=x.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var P,Y,$;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['kb:primitives-utility-header'],
  name: 'Utility header',
  args: HEADER_ARGS as HeaderArgs,
  argTypes: HEADER_ARG_TYPES as never,
  parameters: sceneSource(args => utilityHeaderCode(args as HeaderArgs)),
  render: a => UtilityHeaderRender(a),
  play: playUtilityHeader
}`,...($=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var q,K,X;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:`{
  tags: ['kb:primitives-row-number'],
  name: 'Row number',
  args: NUMBER_ARGS,
  argTypes: NUMBER_ARG_TYPES as never,
  parameters: sceneSource(args => rowNumberCode(args as NumberArgs)),
  render: a => RowNumberRender(a),
  play: playRowNumber
}`,...(X=(K=C.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var F,z,V;T.parameters={...T.parameters,docs:{...(F=T.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['kb:primitives-checkbox'],
  name: 'Checkbox',
  args: CHECKBOX_ARGS,
  argTypes: CHECKBOX_ARG_TYPES as never,
  parameters: sceneSource(args => checkboxSceneCode(args as CheckboxArgs)),
  render: a => CheckboxRender(a),
  play: playCheckbox
}`,...(V=(z=T.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var Z,J,Q;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  tags: ['kb:primitives-icon-button'],
  name: 'Icon button',
  args: ICON_ARGS as IconArgs,
  argTypes: ICON_ARG_TYPES as never,
  parameters: sceneSource(args => iconButtonCode(args as IconArgs)),
  render: a => IconButtonRender(a),
  play: playIconButton
}`,...(Q=(J=S.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var ee,te,ne;R.parameters={...R.parameters,docs:{...(ee=R.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  tags: ['kb:primitives-row-menu-button'],
  name: 'Row menu button',
  args: MENU_BUTTON_ARGS,
  argTypes: MENU_BUTTON_ARG_TYPES as never,
  parameters: sceneSource(args => rowMenuButtonCode(args as MenuButtonArgs)),
  render: a => RowMenuButtonRender(a),
  play: playRowMenuButton
}`,...(ne=(te=R.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};const nt=["UtilityCellScene","UtilityHeaderScene","RowNumberScene","CheckboxScene","IconButtonScene","RowMenuButtonScene"],ut=Object.freeze(Object.defineProperty({__proto__:null,CheckboxScene:T,IconButtonScene:S,RowMenuButtonScene:R,RowNumberScene:C,UtilityCellScene:x,UtilityHeaderScene:g,__namedExportsOrder:nt,default:tt},Symbol.toStringTag,{value:"Module"}));export{T as C,S as I,C as R,ut as U,x as a,g as b,R as c};
