import{S as l,_ as r}from"./scene-KH-578yJ.js";import{c as u,j as t,b as c,M as m,s as d,f as b}from"./products-CTiDOXRn.js";import{s as p}from"./checks-BTK7xNcN.js";const[i]=Object.values([r]),h={title:"Tables/Table Core/Features/Column visibility/Columns",id:"tables-table-core-features-column-visibility-columns",...b(i)},n={tags:["kb:visibility-column-setup"],name:"3 · What a column says",parameters:{...d(i,"ColumnSetup"),summary:"`enableHiding: false` in a column: its tick is off and its menu has no Hide column."},args:{toolbar:!0,columnMenu:!0},argTypes:{toolbar:{control:{type:"boolean"}},columnMenu:{control:{type:"boolean"}}},render:e=>t.jsx(c,{args:e,children:t.jsx(l,{...e,hint:t.jsx(m,{text:"**Name** has `enableHiding: false`: its tick in **Columns** is off (*Cannot be hidden*) and its menu has no *Hide column*. The state may still hide it: the switch limits only the user."})})}),play:async e=>{u(e)||await p(e.canvasElement)}};var s,a,o;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  tags: ['kb:visibility-column-setup'],
  name: '3 · What a column says',
  parameters: {
    ...sceneCodeWith(tableSource, 'ColumnSetup'),
    summary: '\`enableHiding: false\` in a column: its tick is off and its menu has no Hide column.'
  },
  args: {
    toolbar: true,
    columnMenu: true
  },
  argTypes: {
    toolbar: {
      control: {
        type: 'boolean'
      }
    },
    columnMenu: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="**Name** has \`enableHiding: false\`: its tick in **Columns** is off (*Cannot be hidden*) and its menu has no *Hide column*. The state may still hide it: the switch limits only the user." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await setupAct(ctx.canvasElement);
  }
}`,...(o=(a=n.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const f=["ColumnSetup"],S=Object.freeze(Object.defineProperty({__proto__:null,ColumnSetup:n,__namedExportsOrder:f,default:h},Symbol.toStringTag,{value:"Module"}));export{S as C};
