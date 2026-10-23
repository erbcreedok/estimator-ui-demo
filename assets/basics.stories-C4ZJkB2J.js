import{O as h,e as u,S as x,E as s,_ as f}from"./scene-BrjB9l3a.js";import{c as l,j as t,b as C,M as E,p as y,d as b,s as g,e as O,f as w}from"./products-CTiDOXRn.js";import{o as S,a as _}from"./checks-7aYUsQNN.js";const[m]=Object.values([f]),P={title:"Tables/Table Core/Features/Column chains/Basics",id:"tables-table-core-features-column-chains-basics",...w(m)},n={tags:["kb:chains-one-prop"],name:"1 · One prop",parameters:{...g(m,"OneProp",O({expanded:s})),summary:"`chains` and `state.columnChainExpanded`: Location open, Contact folded."},args:{expanded:"Location open"},argTypes:{expanded:b(s)},render:e=>t.jsx(C,{args:e,children:t.jsx(x,{expanded:y(s,e.expanded),hint:t.jsx(E,{text:"`chains` define two chains; `state.columnChainExpanded` = `{ location: true }`: **Location** (Country, Tier, City) is open, **Contact** is folded to its first member, Email. Pick which chains are open in the controls."})})}),play:async e=>{l(e)||(await _(e.canvasElement),await u(e))}},a={tags:["kb:chains-external-control"],name:"2 · The screen owns the chains",parameters:{summary:"The screen passes the chains’ state with its change handlers."},render:()=>t.jsx(h,{}),play:async e=>{l(e)||await S(e.canvasElement)}};var o,r,c;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  tags: ['kb:chains-one-prop'],
  name: '1 · One prop',
  parameters: {
    ...sceneCodeWith(tableSource, 'OneProp', presetCodes({
      expanded: EXPANDED
    })),
    summary: '\`chains\` and \`state.columnChainExpanded\`: Location open, Contact folded.'
  },
  args: {
    expanded: 'Location open'
  },
  argTypes: {
    expanded: presetControl(EXPANDED)
  },
  render: args => <Remount args={args}>
            <Scene expanded={presetValue(EXPANDED, args.expanded)} hint={<Md text="\`chains\` define two chains; \`state.columnChainExpanded\` = \`{ location: true }\`: **Location** (Country, Tier, City) is open, **Contact** is folded to its first member, Email. Pick which chains are open in the controls." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await oneStateAct(ctx.canvasElement);
    await expandedControlAct(ctx);
  }
}`,...(c=(r=n.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};var i,d,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ['kb:chains-external-control'],
  name: '2 · The screen owns the chains',
  parameters: {
    summary: 'The screen passes the chains’ state with its change handlers.'
  },
  render: () => <OutsideScene />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await outsideAct(ctx.canvasElement);
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const T=["OneProp","ExternalControl"],D=Object.freeze(Object.defineProperty({__proto__:null,ExternalControl:a,OneProp:n,__namedExportsOrder:T,default:P},Symbol.toStringTag,{value:"Module"}));export{D as B};
