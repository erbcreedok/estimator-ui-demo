import{a as H,F as U,c as $,f as B}from"./freezing-page-BBwiIMYl.js";import{j as e}from"./jsx-runtime-Cnbe3ryz.js";import{R as a,P as X}from"./feature-hints-BLpBNgTy.js";import{u as D,w as G}from"./index-iBx7lKYd.js";import{g as i,m as v}from"./freezing-play-mBtlZnru.js";import{c as u,o as Z,p as q}from"./grouping-play-CTN_XQGq.js";import"./feature-code-Dlz2p9Ie.js";import"./index-3dRrDZpt.js";import"./TableCore-Y75h2oha.js";import"./index-C0mjCMcL.js";import"./index-DKTdOcjh.js";import"./table-core-base-DFRq_Vzl.js";import"./places-Dp9r7e0L.js";import"./styles-HzBmg0bt.js";import"./icons-849xEHsl.js";import"./menu-DvyBTqNz.js";import"./TableStatusBar-4NxO8OsQ.js";import"./status-bar-CYB7-jUm.js";import"./panel-controls-DNzRkyVB.js";import"./SortingPanel-CpobHppH.js";import"./TableToolbar-DTYEmPN-.js";import"./toolbar-C5VRlWnq.js";import"./pin-controls-NGLUwJXC.js";import"./employees-CL5oqWiT.js";import"./fixtures-P-DSdYmm.js";import"./scene-kit-BsKxVgS1.js";import"./play-kit-Bu4SXy9H.js";const l={columnMenu:!0,toolbar:!0},_={...l,rules:"both-sides",pinnedLeft:["name"],pinnedRight:["workload"]},J=(t,n)=>e.jsxs(e.Fragment,{children:["The default freezes at the left only. This team's"," ",e.jsx("code",{children:"getPinActions"})," gives every column ",e.jsx("i",{children:"Freeze at the left"})," and"," ",e.jsx("i",{children:"Freeze at the right"})," (in ",e.jsx("b",{children:"Columns"})," the short ",e.jsx("i",{children:"To left"})," /"," ",e.jsx("i",{children:"To right"}),"). Open ",e.jsx("b",{children:"Role"})," → ",e.jsx("b",{children:"Freeze at the right"}),": it sticks at the right edge, after Workload; the right zone gets its edge while something is still to scroll. ",e.jsx("b",{children:"Columns"})," lists the right zone at the bottom.",e.jsx(a,{args:t,update:n,start:_})]}),I={...l,rules:"fixed-right",pinnedLeft:["name"],pinnedRight:H},K=(t,n)=>e.jsxs(e.Fragment,{children:["Workload and End are always frozen at the right: the screen puts them in"," ",e.jsx("code",{children:"state.columnPinning.right"}),", ",e.jsx("code",{children:"getPinActions"})," gives them no action and ",e.jsx("code",{children:"canMoveColumn"})," keeps them from being dragged. Open ",e.jsx("b",{children:"Workload"}),": no Freeze items. The other columns freeze at the left as usual.",e.jsx(a,{args:t,update:n,start:I})]}),W={...l,rules:"up-to-here",pinnedLeft:[],pinnedRight:[]},Q=(t,n)=>e.jsxs(e.Fragment,{children:["No column freezes on its own: pick one, and the side becomes every column from its edge up to it (",e.jsx("code",{children:"pinUpTo"}),"). Open ",e.jsx("b",{children:"Role"})," →"," ",e.jsx("b",{children:"Freeze up to here"}),": Name, Team, Role. Then ",e.jsx("b",{children:"Team"})," →"," ",e.jsx("b",{children:"Freeze up to here"}),": the zone shrinks. ",e.jsx("b",{children:"Email"})," →"," ",e.jsx("b",{children:"Freeze from here to the right"}),": Email to the last column.",e.jsx(a,{args:t,update:n,start:W})]}),C={...l,rules:"one-per-side",pinnedLeft:["name"],pinnedRight:["workload"]},V=(t,n)=>e.jsxs(e.Fragment,{children:["One column per side: freezing another one replaces it. Open ",e.jsx("b",{children:"Team"})," →"," ",e.jsx("b",{children:"Freeze at the left"}),": Name leaves the zone. ",e.jsx("b",{children:"Email"})," →"," ",e.jsx("b",{children:"Freeze at the right"}),": Workload leaves.",e.jsx(a,{args:t,update:n,start:C})]}),L={...l,rules:"max-two-left",pinnedLeft:["name","team"],pinnedRight:[]},Y=(t,n)=>e.jsxs(e.Fragment,{children:["At most 2 on the left, and only Workload may go to the right. The left is full: ",e.jsx("b",{children:"Role"}),"'s ",e.jsx("i",{children:"Freeze column"})," is shown but off, with why."," ",e.jsx(X,{args:t,update:n,presets:[["Only Name at the left here",{pinnedLeft:["name"]}]]})," ",e.jsx("b",{children:"Workload"})," → ",e.jsx("b",{children:"Freeze at the right"}),"; no other column has it.",e.jsx(a,{args:t,update:n,start:L})]}),w=(t,n)=>Array.from(t.querySelectorAll(`[data-header-id][data-pinned="${n}"]`)).map(r=>r.dataset.headerId),o=(t,n,r,M)=>G(()=>u(w(t,n).join()===r.join(),`${M}: ${n} ${r.join()}, got ${w(t,n).join()}`)),s=async(t,n,r)=>{await Z(t,n),await D.click(q().getByRole("menuitem",{name:r}))},ee=i(async({canvasElement:t})=>{await s(t,"Role","Freeze at the right"),await o(t,"right",["workload","role"],"PIN-15"),await s(t,"Team","Freeze at the left"),await o(t,"left",["name","team"],"PIN-15")}),te=i(async({canvasElement:t})=>{const n=await v(t,"Workload");u(!n.some(r=>/freeze/i.test(r)),`PIN-16: Workload has no Freeze items, ${n}`),await o(t,"right",["workload","end"],"PIN-16")}),ne=i(async({canvasElement:t})=>{await s(t,"Role","Freeze up to here"),await o(t,"left",["name","team","role"],"PIN-17"),await s(t,"Team","Freeze up to here"),await o(t,"left",["name","team"],"PIN-17: shrinks too")}),re=i(async({canvasElement:t})=>{await s(t,"Team","Freeze at the left"),await o(t,"left",["team"],"PIN-18"),await s(t,"Email","Freeze at the right"),await o(t,"right",["email"],"PIN-18")}),oe=i(async({canvasElement:t})=>{const n=await v(t,"Role");u(n.some(r=>r.includes("At most 2 on the left")),`PIN-19: the left is full, ${n}`),u(!n.some(r=>/right/i.test(r)),`PIN-19: no right for Role, ${n}`),await s(t,"Workload","Freeze at the right"),await o(t,"right",["workload"],"PIN-19")}),Ne={...U,title:"Tables/Table Core/Features/Freezing/Resolvers",parameters:B("Every team freezes its own way. The place asks `column.getPinActions(place)`; the `getPinActions` resolver gets the default answer (freeze left / unfreeze) and returns the team's. Each action carries the whole next `columnPinning`; the helpers `withPinned`, `withoutPinned`, `pinUpTo` build it. Drags ask `canMoveColumn`.")},h=t=>t,c=$(["rules","pinnedLeft","pinnedRight"]),d={tags:["kb:freeze-both-sides"],name:"15 · Both sides",args:_,parameters:{...h({set:"all",owner:"screen",hint:J}),controls:c,docs:{description:{story:"A `getPinActions` that offers *Freeze at the left* and *Freeze at the right*; in the Columns panel, where the row has little room, the short *To left* / *To right*. The right zone sticks at the right edge in the order of `state.columnPinning.right`; its first column draws the edge while something is still to scroll."}}},play:ee},m={tags:["kb:freeze-fixed-right"],name:"16 · A fixed set at the right",args:I,parameters:{...h({set:"all",owner:"screen",hint:K}),controls:c,docs:{description:{story:"The screen freezes Workload and End at the right; the user cannot change it: no actions for them (`getPinActions`) and no drag (`canMoveColumn`)."}}},play:te},p={tags:["kb:freeze-up-to-here"],name:"17 · Freeze up to here",args:W,parameters:{...h({set:"all",owner:"screen",hint:Q}),controls:c,docs:{description:{story:"The user picks a column, and the whole side changes: every column from its edge up to it (`pinUpTo`, in the order on screen, a chain whole)."}}},play:ne},g={tags:["kb:freeze-one-per-side"],name:"18 · One per side",args:C,parameters:{...h({set:"all",owner:"screen",hint:V}),controls:c,docs:{description:{story:"Each action's `next` keeps only the new column on its side: freezing another one replaces it."}}},play:re},f={tags:["kb:freeze-max-two-left"],name:"19 · At most 2 left, Workload right",args:L,parameters:{...h({set:"all",owner:"screen",hint:Y}),controls:c,docs:{description:{story:"A full left side keeps the action, off, with why (`disabledReason`): the menu and the panel show it. Only Workload gets *Freeze at the right*."}}},play:oe};var T,x,z;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['kb:freeze-both-sides'],
  name: '15 · Both sides',
  args: BOTH_START,
  parameters: {
    ...scene({
      set: 'all',
      owner: 'screen',
      hint: bothSides
    }),
    controls: CONTROLS,
    docs: {
      description: {
        story: 'A \`getPinActions\` that offers *Freeze at the left* and *Freeze at the right*; in the Columns panel, where the row has little room, the short *To left* / *To right*. The right zone sticks at the right edge in the order of \`state.columnPinning.right\`; its first column draws the edge while something is still to scroll.'
      }
    }
  },
  play: bothSidesPlay
}`,...(z=(x=d.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var y,k,P;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['kb:freeze-fixed-right'],
  name: '16 · A fixed set at the right',
  args: FIXED_START,
  parameters: {
    ...scene({
      set: 'all',
      owner: 'screen',
      hint: fixedRight
    }),
    controls: CONTROLS,
    docs: {
      description: {
        story: 'The screen freezes Workload and End at the right; the user cannot change it: no actions for them (\`getPinActions\`) and no drag (\`canMoveColumn\`).'
      }
    }
  },
  play: fixedRightPlay
}`,...(P=(k=m.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var b,j,R;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['kb:freeze-up-to-here'],
  name: '17 · Freeze up to here',
  args: UP_TO_START,
  parameters: {
    ...scene({
      set: 'all',
      owner: 'screen',
      hint: upToHere
    }),
    controls: CONTROLS,
    docs: {
      description: {
        story: 'The user picks a column, and the whole side changes: every column from its edge up to it (\`pinUpTo\`, in the order on screen, a chain whole).'
      }
    }
  },
  play: upToHerePlay
}`,...(R=(j=p.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var F,O,S;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['kb:freeze-one-per-side'],
  name: '18 · One per side',
  args: ONE_START,
  parameters: {
    ...scene({
      set: 'all',
      owner: 'screen',
      hint: onePerSide
    }),
    controls: CONTROLS,
    docs: {
      description: {
        story: "Each action's \`next\` keeps only the new column on its side: freezing another one replaces it."
      }
    }
  },
  play: onePerSidePlay
}`,...(S=(O=g.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var A,E,N;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ['kb:freeze-max-two-left'],
  name: '19 · At most 2 left, Workload right',
  args: MAX_TWO_START,
  parameters: {
    ...scene({
      set: 'all',
      owner: 'screen',
      hint: maxTwo
    }),
    controls: CONTROLS,
    docs: {
      description: {
        story: 'A full left side keeps the action, off, with why (\`disabledReason\`): the menu and the panel show it. Only Workload gets *Freeze at the right*.'
      }
    }
  },
  play: maxTwoPlay
}`,...(N=(E=f.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const ve=["BothSides","FixedRight","UpToHere","OnePerSide","MaxTwoLeft"];export{d as BothSides,m as FixedRight,f as MaxTwoLeft,g as OnePerSide,p as UpToHere,ve as __namedExportsOrder,Ne as default};
