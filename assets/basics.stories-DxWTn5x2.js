import{O as b,S as y,_ as d}from"./scene-KH-578yJ.js";import{c as u,j as a,b as f,M as h,p as V,d as S,s as I,e as g,f as x}from"./products-CTiDOXRn.js";import{o as v,a as C}from"./checks-BTK7xNcN.js";import{v as E}from"./controls-B40_76Du.js";import{V as n}from"./presets-DuCk3XAW.js";const[p]=Object.values([d]),O={title:"Tables/Table Core/Features/Column visibility/Basics",id:"tables-table-core-features-column-visibility-basics",...x(p)},s={tags:["kb:visibility-one-prop"],name:"1 · One prop",parameters:{...I(p,"OneProp",g({columnVisibility:n})),summary:"`state.columnVisibility` as a constant hides columns."},args:{columnVisibility:"Role and Email"},argTypes:{columnVisibility:S(n)},render:e=>a.jsx(f,{args:e,children:a.jsx(y,{columnVisibility:V(n,e.columnVisibility),hint:a.jsx(h,{text:"The screen passes `state.columnVisibility` as a constant — by default `{ role: false, email: false }`: **Role** and **Email** are not drawn. Pick another in the controls."})})}),play:async e=>{u(e)||(await C(e.canvasElement),await E(e))}},t={tags:["kb:visibility-external-control"],name:"2 · The screen owns the state",parameters:{summary:"The screen passes `state.columnVisibility` with `onColumnVisibilityChange`."},render:()=>a.jsx(b,{}),play:async e=>{u(e)||await v(e.canvasElement)}};var i,r,o;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ['kb:visibility-one-prop'],
  name: '1 · One prop',
  parameters: {
    ...sceneCodeWith(tableSource, 'OneProp', presetCodes({
      columnVisibility: VISIBILITIES
    })),
    summary: '\`state.columnVisibility\` as a constant hides columns.'
  },
  args: {
    columnVisibility: 'Role and Email'
  },
  argTypes: {
    columnVisibility: presetControl(VISIBILITIES)
  },
  render: args => <Remount args={args}>
            <Scene columnVisibility={presetValue(VISIBILITIES, args.columnVisibility)} hint={<Md text="The screen passes \`state.columnVisibility\` as a constant — by default \`{ role: false, email: false }\`: **Role** and **Email** are not drawn. Pick another in the controls." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await oneStateAct(ctx.canvasElement);
    await visibilityControlAct(ctx);
  }
}`,...(o=(r=s.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var l,c,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  tags: ['kb:visibility-external-control'],
  name: '2 · The screen owns the state',
  parameters: {
    summary: 'The screen passes \`state.columnVisibility\` with \`onColumnVisibilityChange\`.'
  },
  render: () => <OutsideScene />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await outsideAct(ctx.canvasElement);
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const T=["OneProp","ExternalControl"],B=Object.freeze(Object.defineProperty({__proto__:null,ExternalControl:t,OneProp:s,__namedExportsOrder:T,default:O},Symbol.toStringTag,{value:"Module"}));export{B};
