import{S as l,_ as j}from"./scene-9u2Hg12_.js";import{c as i,j as t,b as c,M as m,s as f,f as S}from"./products-CTiDOXRn.js";import{f as T,c as v,d as O,m as M}from"./checks-BFc4Mdy7.js";const[o]=Object.values([j]),z={title:"Tables/Table Core/Features/Column sizing/Fill width",id:"tables-table-core-features-column-sizing-fill-width",...S(o)},a={tags:["kb:fill-width-few-columns"],name:"5 · Few columns fill the width",parameters:{...f(o,"FewColumns"),summary:"Columns narrower than the table stretch to the full width."},args:{set:"few"},argTypes:{set:{control:{type:"radio"},options:["few","basic"]}},render:e=>t.jsx(c,{args:e,children:t.jsx(l,{...e,hint:t.jsx(m,{text:"Three columns of 100–150 px in a wide frame: they share the spare width in proportion to their sizes, as in the legacy Resource Plan."})})}),play:async e=>{i(e)||await T(e.canvasElement)}},s={tags:["kb:fill-width-fixed-width-column"],name:"6 · A fixed-width column",parameters:{...f(o,"FixedWidthColumn"),summary:"`meta.grow: false` keeps a column at its size."},args:{set:"fixed"},argTypes:{set:{control:{type:"radio"},options:["fixed","basic"]}},render:e=>t.jsx(c,{args:e,children:t.jsx(l,{...e,hint:t.jsx(m,{text:"**Team** says `meta.grow: false`: it stays 120 px, the other columns share the rest."})})}),play:async e=>{i(e)||await O(e.canvasElement)}},n={tags:["kb:fill-width-many-columns"],name:"7 · Many columns scroll",parameters:{...f(o,"ManyColumns"),summary:"Columns that do not fit keep their size; the table scrolls."},args:{set:"many"},argTypes:{set:{control:{type:"radio"},options:["many","basic"]}},render:e=>t.jsx(c,{args:e,children:t.jsx(l,{...e,hint:t.jsx(m,{text:"Ten columns of 170 px do not fit: none shrinks, the table scrolls sideways."})})}),play:async e=>{i(e)||await M(e.canvasElement)}},r={tags:["kb:fill-width-fill-off"],name:"8 · Fill off",parameters:{...f(o,"FillOff"),summary:'`fill="natural"` keeps every column at its size.'},args:{fill:"natural"},argTypes:{fill:{control:{type:"radio"},options:["fill","natural"]}},render:e=>t.jsx(c,{args:e,children:t.jsx(l,{...e,hint:t.jsx(m,{text:'`fill="natural"`: every column keeps its size, the row is narrower than the frame.'})})}),play:async e=>{i(e)||await v(e.canvasElement)}};var u,d,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['kb:fill-width-few-columns'],
  name: '5 · Few columns fill the width',
  parameters: {
    ...sceneCodeWith(tableSource, 'FewColumns'),
    summary: 'Columns narrower than the table stretch to the full width.'
  },
  args: {
    set: 'few'
  },
  argTypes: {
    set: {
      control: {
        type: 'radio'
      },
      options: ['few', 'basic']
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="Three columns of 100–150 px in a wide frame: they share the spare width in proportion to their sizes, as in the legacy Resource Plan." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await fewAct(ctx.canvasElement);
  }
}`,...(h=(d=a.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var p,y,w;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  tags: ['kb:fill-width-fixed-width-column'],
  name: '6 · A fixed-width column',
  parameters: {
    ...sceneCodeWith(tableSource, 'FixedWidthColumn'),
    summary: '\`meta.grow: false\` keeps a column at its size.'
  },
  args: {
    set: 'fixed'
  },
  argTypes: {
    set: {
      control: {
        type: 'radio'
      },
      options: ['fixed', 'basic']
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="**Team** says \`meta.grow: false\`: it stays 120 px, the other columns share the rest." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await fixedAct(ctx.canvasElement);
  }
}`,...(w=(y=s.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var x,g,b;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['kb:fill-width-many-columns'],
  name: '7 · Many columns scroll',
  parameters: {
    ...sceneCodeWith(tableSource, 'ManyColumns'),
    summary: 'Columns that do not fit keep their size; the table scrolls.'
  },
  args: {
    set: 'many'
  },
  argTypes: {
    set: {
      control: {
        type: 'radio'
      },
      options: ['many', 'basic']
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="Ten columns of 170 px do not fit: none shrinks, the table scrolls sideways." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await manyAct(ctx.canvasElement);
  }
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var k,C,F;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['kb:fill-width-fill-off'],
  name: '8 · Fill off',
  parameters: {
    ...sceneCodeWith(tableSource, 'FillOff'),
    summary: '\`fill="natural"\` keeps every column at its size.'
  },
  args: {
    fill: 'natural'
  },
  argTypes: {
    fill: {
      control: {
        type: 'radio'
      },
      options: ['fill', 'natural']
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text='\`fill="natural"\`: every column keeps its size, the row is narrower than the frame.' />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await fillOffAct(ctx.canvasElement);
  }
}`,...(F=(C=r.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};const R=["FewColumns","FixedWidthColumn","ManyColumns","FillOff"],W=Object.freeze(Object.defineProperty({__proto__:null,FewColumns:a,FillOff:r,FixedWidthColumn:s,ManyColumns:n,__namedExportsOrder:R,default:z},Symbol.toStringTag,{value:"Module"}));export{W as F};
