import{S as l,_ as m}from"./scene-BiGXqEVE.js";import{c as u,j as a,b as c,M as i,s as d,f as p}from"./products-CTiDOXRn.js";import{s as h}from"./checks-CPsh5bEU.js";const[s]=Object.values([m]),b={title:"Tables/Table Core/Features/Column order/Columns",id:"tables-table-core-features-column-order-columns",...p(s)},t={tags:["kb:order-column-setup"],name:"3 · What a column says",parameters:{...d(s,"ColumnSetup"),summary:"`meta.disableReorder`: no grip, no handle in the panel."},args:{toolbar:!0},argTypes:{toolbar:{control:{type:"boolean"}}},render:e=>a.jsx(c,{args:e,children:a.jsx(l,{...e,fixed:["team"],hint:a.jsx(i,{text:"**Team** has `meta.disableReorder`: no ⋮⋮ tab on its header and no handle in **Columns**. The others still move around it. The state may order any column: the switch limits only the user."})})}),play:async e=>{u(e)||await h(e.canvasElement)}};var n,o,r;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  tags: ['kb:order-column-setup'],
  name: '3 · What a column says',
  parameters: {
    ...sceneCodeWith(tableSource, 'ColumnSetup'),
    summary: '\`meta.disableReorder\`: no grip, no handle in the panel.'
  },
  args: {
    toolbar: true
  },
  argTypes: {
    toolbar: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} fixed={['team']} hint={<Md text="**Team** has \`meta.disableReorder\`: no ⋮⋮ tab on its header and no handle in **Columns**. The others still move around it. The state may order any column: the switch limits only the user." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await setupAct(ctx.canvasElement);
  }
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const y=["ColumnSetup"],C=Object.freeze(Object.defineProperty({__proto__:null,ColumnSetup:t,__namedExportsOrder:y,default:b},Symbol.toStringTag,{value:"Module"}));export{C};
