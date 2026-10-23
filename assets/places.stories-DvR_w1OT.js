import{s as J,S as i,a as t,b as N,c as V,_ as q}from"./scene-BrjB9l3a.js";import{c as n,j as a,b as o,M as s,p as S,d as f,s as l,e as b,g as B,f as G}from"./products-CTiDOXRn.js";import{c as H,l as K,n as Q,b as U,p as X,r as Y,d as Z}from"./checks-7aYUsQNN.js";const[r]=Object.values([q]),$={title:"Tables/Table Core/Features/Column chains/In the table",id:"tables-table-core-features-column-chains-places",...G(r)},c={tags:["kb:chains-collapse-expand"],name:"3 · Collapse and expand",parameters:{...l(r,"CollapseExpand",b({initialState:t})),summary:"The toggle in the header opens and folds a chain."},args:{initialState:"all folded"},argTypes:{initialState:f(t)},render:e=>a.jsx(o,{args:e,children:a.jsx(i,{initialState:S(t,e.initialState),hint:a.jsx(s,{text:"Click the toggle on **Country**: Location opens; the toggle on its last member folds it again."})})}),play:async e=>{n(e)||(await H(e.canvasElement),await J(e))}},d={tags:["kb:chains-reorder-inside"],name:"4 · Reorder inside a chain",parameters:{...l(r,"ReorderInside",b({initialState:t})),summary:"A drag inside an open chain reorders it; the first member is the one shown folded."},args:{initialState:"Location open"},argTypes:{initialState:f(t)},render:e=>a.jsx(o,{args:e,children:a.jsx(i,{initialState:S(t,e.initialState),hint:a.jsx(s,{text:"Location is open: drag **Tier** before **Country**. Fold the chain: Tier is the member shown."})})}),play:async e=>{n(e)||await Y(e.canvasElement)}},m={tags:["kb:chains-leave-and-join"],name:"5 · Leave and join",parameters:{...l(r,"LeaveAndJoin",b({initialState:t})),summary:"An optional member leaves by a drag out of the chain and joins back by a drag in."},args:{toolbar:!0,initialState:"Location open"},argTypes:{toolbar:{control:{type:"boolean"}},initialState:f(t)},render:e=>a.jsx(o,{args:e,children:a.jsx(i,{...e,initialState:S(t,e.initialState),hint:a.jsx(s,{text:"Location is open: drag **City** (optional) out, next to Email: it is a plain column now. Drag it back among the others: it joins. The Columns panel does the same, with a hint for what a drop does."})})}),play:async e=>{n(e)||(await K(e.canvasElement),await B(e))}},h={tags:["kb:chains-not-allowed"],name:"6 · What is not allowed",parameters:{...l(r,"NotAllowed",b({initialState:t})),summary:"A required member cannot leave; another column cannot land inside a chain."},args:{toolbar:!0,initialState:"Location open"},argTypes:{toolbar:{control:{type:"boolean"}},initialState:f(t)},render:e=>a.jsx(o,{args:e,children:a.jsx(i,{...e,initialState:S(t,e.initialState),hint:a.jsx(s,{text:"Drag **Country** (required) out of Location: refused, the columns do not move. Drag **Name** between Country and Tier: refused too."})})}),play:async e=>{n(e)||await Q(e.canvasElement)}},p={tags:["kb:chains-pinning"],name:"7 · Freezing a chain",parameters:{...l(r,"Pinning",b({initialState:t})),summary:"Freezing one member freezes the whole chain."},args:{toolbar:!0,initialState:"Location open"},argTypes:{toolbar:{control:{type:"boolean"}},initialState:f(t)},render:e=>a.jsx(o,{args:e,children:a.jsx(i,{...e,initialState:S(t,e.initialState),hint:a.jsx(s,{text:"In **Columns**, press *Freeze left* on the **Location** group: Country, Tier and City are frozen together."})})}),play:async e=>{n(e)||await X(e.canvasElement)}},u={tags:["kb:chains-outside-state"],name:"8 · A state the chains disagree with",parameters:{summary:"The chains settle a screen’s column order and say what they changed."},render:()=>a.jsx(N,{}),play:async e=>{n(e)||await U(e.canvasElement)}},g={tags:["kb:chains-switched-off"],name:"9 · Switched off",parameters:{...l(r,"SwitchedOff"),summary:"`enableColumnChains: false`: the table is plain v9."},args:{enableColumnChains:!1},argTypes:{enableColumnChains:{control:{type:"boolean"}}},render:e=>a.jsx(o,{args:e,children:a.jsx(i,{...e,hint:a.jsx(s,{text:"`enableColumnChains={false}`: every built-in behaves as if the feature were not there — all the columns, no toggle."})})}),play:async e=>{n(e)||(await Z(e.canvasElement),await V(e))}};var y,C,w;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['kb:chains-collapse-expand'],
  name: '3 · Collapse and expand',
  parameters: {
    ...sceneCodeWith(tableSource, 'CollapseExpand', presetCodes({
      initialState: STARTS
    })),
    summary: 'The toggle in the header opens and folds a chain.'
  },
  args: {
    initialState: 'all folded'
  },
  argTypes: {
    initialState: presetControl(STARTS)
  },
  render: args => <Remount args={args}>
            <Scene initialState={presetValue(STARTS, args.initialState)} hint={<Md text="Click the toggle on **Country**: Location opens; the toggle on its last member folds it again." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await collapseExpandAct(ctx.canvasElement);
    await startControlAct(ctx);
  }
}`,...(w=(C=c.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var x,T,A;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['kb:chains-reorder-inside'],
  name: '4 · Reorder inside a chain',
  parameters: {
    ...sceneCodeWith(tableSource, 'ReorderInside', presetCodes({
      initialState: STARTS
    })),
    summary: 'A drag inside an open chain reorders it; the first member is the one shown folded.'
  },
  args: {
    initialState: 'Location open'
  },
  argTypes: {
    initialState: presetControl(STARTS)
  },
  render: args => <Remount args={args}>
            <Scene initialState={presetValue(STARTS, args.initialState)} hint={<Md text="Location is open: drag **Tier** before **Country**. Fold the chain: Tier is the member shown." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await reorderInsideAct(ctx.canvasElement);
  }
}`,...(A=(T=d.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var v,R,j;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  tags: ['kb:chains-leave-and-join'],
  name: '5 · Leave and join',
  parameters: {
    ...sceneCodeWith(tableSource, 'LeaveAndJoin', presetCodes({
      initialState: STARTS
    })),
    summary: 'An optional member leaves by a drag out of the chain and joins back by a drag in.'
  },
  args: {
    toolbar: true,
    initialState: 'Location open'
  },
  argTypes: {
    toolbar: {
      control: {
        type: 'boolean'
      }
    },
    initialState: presetControl(STARTS)
  },
  render: args => <Remount args={args}>
            <Scene {...args} initialState={presetValue(STARTS, args.initialState)} hint={<Md text="Location is open: drag **City** (optional) out, next to Email: it is a plain column now. Drag it back among the others: it joins. The Columns panel does the same, with a hint for what a drop does." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await leaveAndJoinAct(ctx.canvasElement);
    await barControlAct(ctx);
  }
}`,...(j=(R=m.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var k,O,E;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['kb:chains-not-allowed'],
  name: '6 · What is not allowed',
  parameters: {
    ...sceneCodeWith(tableSource, 'NotAllowed', presetCodes({
      initialState: STARTS
    })),
    summary: 'A required member cannot leave; another column cannot land inside a chain.'
  },
  args: {
    toolbar: true,
    initialState: 'Location open'
  },
  argTypes: {
    toolbar: {
      control: {
        type: 'boolean'
      }
    },
    initialState: presetControl(STARTS)
  },
  render: args => <Remount args={args}>
                <Scene {...args} initialState={presetValue(STARTS, args.initialState)} hint={<Md text="Drag **Country** (required) out of Location: refused, the columns do not move. Drag **Name** between Country and Tier: refused too." />} />
            </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await notAllowedAct(ctx.canvasElement);
  }
}`,...(E=(O=h.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var L,_,z;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['kb:chains-pinning'],
  name: '7 · Freezing a chain',
  parameters: {
    ...sceneCodeWith(tableSource, 'Pinning', presetCodes({
      initialState: STARTS
    })),
    summary: 'Freezing one member freezes the whole chain.'
  },
  args: {
    toolbar: true,
    initialState: 'Location open'
  },
  argTypes: {
    toolbar: {
      control: {
        type: 'boolean'
      }
    },
    initialState: presetControl(STARTS)
  },
  render: args => <Remount args={args}>
            <Scene {...args} initialState={presetValue(STARTS, args.initialState)} hint={<Md text="In **Columns**, press *Freeze left* on the **Location** group: Country, Tier and City are frozen together." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await pinningAct(ctx.canvasElement);
  }
}`,...(z=(_=p.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var M,F,I;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  tags: ['kb:chains-outside-state'],
  name: '8 · A state the chains disagree with',
  parameters: {
    summary: 'The chains settle a screen’s column order and say what they changed.'
  },
  render: () => <OutsideOrderScene />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await outsideOrderAct(ctx.canvasElement);
  }
}`,...(I=(F=u.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var W,P,D;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['kb:chains-switched-off'],
  name: '9 · Switched off',
  parameters: {
    ...sceneCodeWith(tableSource, 'SwitchedOff'),
    summary: '\`enableColumnChains: false\`: the table is plain v9.'
  },
  args: {
    enableColumnChains: false
  },
  argTypes: {
    enableColumnChains: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="\`enableColumnChains={false}\`: every built-in behaves as if the feature were not there — all the columns, no toggle." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await switchedOffAct(ctx.canvasElement);
    await switchOnControlAct(ctx);
  }
}`,...(D=(P=g.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};const ee=["CollapseExpand","ReorderInside","LeaveAndJoin","NotAllowed","Pinning","OutsideState","SwitchedOff"],re=Object.freeze(Object.defineProperty({__proto__:null,CollapseExpand:c,LeaveAndJoin:m,NotAllowed:h,OutsideState:u,Pinning:p,ReorderInside:d,SwitchedOff:g,__namedExportsOrder:ee,default:$},Symbol.toStringTag,{value:"Module"}));export{re as P};
