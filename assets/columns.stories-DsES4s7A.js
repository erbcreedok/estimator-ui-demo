import{S as i,_ as m}from"./scene-9u2Hg12_.js";import{c as l,j as s,b as c,M as u,s as p,f as d}from"./products-CTiDOXRn.js";import{b as g}from"./checks-BFc4Mdy7.js";const[r]=Object.values([m]),f={title:"Tables/Table Core/Features/Column sizing/Columns",id:"tables-table-core-features-column-sizing-columns",...d(r)},a={tags:["kb:sizing-column-setup"],name:"3 · What a column says",parameters:{...p(r,"ColumnSetup"),summary:"`size`, `minSize`, `maxSize`, `enableResizing: false` and `meta.grow: false` in a column."},args:{set:"setup"},argTypes:{set:{control:{type:"radio"},options:["basic","setup"]}},render:e=>s.jsx(c,{args:e,children:s.jsx(i,{...e,hint:s.jsx(u,{text:"Drag **Name**: it stops at 140 and at 260 (`minSize`, `maxSize`). **Team** has no handle (`enableResizing: false`). **Level** does not take spare width (`meta.grow: false`)."})})}),play:async e=>{l(e)||await g(e.canvasElement)}};var n,t,o;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  tags: ['kb:sizing-column-setup'],
  name: '3 · What a column says',
  parameters: {
    ...sceneCodeWith(tableSource, 'ColumnSetup'),
    summary: '\`size\`, \`minSize\`, \`maxSize\`, \`enableResizing: false\` and \`meta.grow: false\` in a column.'
  },
  args: {
    set: 'setup'
  },
  argTypes: {
    set: {
      control: {
        type: 'radio'
      },
      options: ['basic', 'setup']
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="Drag **Name**: it stops at 140 and at 260 (\`minSize\`, \`maxSize\`). **Team** has no handle (\`enableResizing: false\`). **Level** does not take spare width (\`meta.grow: false\`)." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await setupAct(ctx.canvasElement);
  }
}`,...(o=(t=a.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const b=["ColumnSetup"],x=Object.freeze(Object.defineProperty({__proto__:null,ColumnSetup:a,__namedExportsOrder:b,default:f},Symbol.toStringTag,{value:"Module"}));export{x as C};
