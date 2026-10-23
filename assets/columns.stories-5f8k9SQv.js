import{S as s,_ as i}from"./scene-DCjKWwYG.js";import{c as u,j as t,b as m,M as c,s as p,f as b}from"./products-CTiDOXRn.js";import{s as f}from"./checks-NmFlyDuA.js";const[r]=Object.values([i]),y={title:"Tables/Table Core/Features/Freezing/Columns",id:"tables-table-core-features-freezing-columns",...b(r)},n={tags:["kb:freeze-column-setup"],name:"3 · What a column says",parameters:{...p(r,"ColumnSetup"),summary:"`enablePinning: false`, `meta.pinOnly`: no Freeze, one side only."},args:{columnMenu:!0,toolbar:!0,enableRightPinning:!0},argTypes:{columnMenu:{control:{type:"boolean"}},toolbar:{control:{type:"boolean"}},enableRightPinning:{control:{type:"boolean"}}},render:e=>t.jsx(m,{args:e,children:t.jsx(s,{...e,unpinnable:["level"],pinOnly:{left:["team"]},hint:t.jsx(c,{text:"**Level** has `enablePinning: false`: no *Freeze* in its menu or in the panel. **Team** has `meta.pinOnly: 'left'`: it freezes at the left only, whatever the table offers. The state may freeze any column."})})}),play:async e=>{u(e)||await f(e.canvasElement)}};var a,o,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  tags: ['kb:freeze-column-setup'],
  name: '3 · What a column says',
  parameters: {
    ...sceneCodeWith(tableSource, 'ColumnSetup'),
    summary: '\`enablePinning: false\`, \`meta.pinOnly\`: no Freeze, one side only.'
  },
  args: {
    columnMenu: true,
    toolbar: true,
    enableRightPinning: true
  },
  argTypes: {
    columnMenu: {
      control: {
        type: 'boolean'
      }
    },
    toolbar: {
      control: {
        type: 'boolean'
      }
    },
    enableRightPinning: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} unpinnable={['level']} pinOnly={{
      left: ['team']
    }} hint={<Md text="**Level** has \`enablePinning: false\`: no *Freeze* in its menu or in the panel. **Team** has \`meta.pinOnly: 'left'\`: it freezes at the left only, whatever the table offers. The state may freeze any column." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await setupAct(ctx.canvasElement);
  }
}`,...(l=(o=n.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const g=["ColumnSetup"],O=Object.freeze(Object.defineProperty({__proto__:null,ColumnSetup:n,__namedExportsOrder:g,default:y},Symbol.toStringTag,{value:"Module"}));export{O as C};
