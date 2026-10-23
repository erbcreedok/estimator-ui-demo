import{S as m,_ as y}from"./scene-KH-578yJ.js";import{c as d,j as a,b,M as p,s as h,f as g}from"./products-CTiDOXRn.js";import{c as f,g as k}from"./checks-BTK7xNcN.js";const[r]=Object.values([y]),C={title:"Tables/Table Core/Features/Column visibility/Behaviour",id:"tables-table-core-features-column-visibility-behaviour",...g(r)},o={tags:["kb:visibility-grouped"],name:"6 · A grouped column",parameters:{...h(r,"GroupedColumn"),summary:"A grouped column is a lane: always drawn, its tick is off."},args:{toolbar:!0,columnMenu:!0},argTypes:{toolbar:{control:{type:"boolean"}},columnMenu:{control:{type:"boolean"}}},render:e=>a.jsx(b,{args:e,children:a.jsx(m,{...e,initialGrouping:["country"],hint:a.jsx(p,{text:"The table is grouped by **Country**, so the Country column is a lane — always drawn. Its tick in **Columns** is on and off (*Grouped: ungroup it to hide it*), and its menu has no *Hide column*. Ungroup, and it hides like any other."})})}),play:async e=>{d(e)||await k(e.canvasElement)}},t={tags:["kb:visibility-chain-member"],name:"7 · A member of a folded chain",parameters:{...h(r,"ChainMember"),summary:"A folded chain hides its members; their ticks stay on."},args:{toolbar:!0},argTypes:{toolbar:{control:{type:"boolean"}}},render:e=>a.jsx(b,{args:e,children:a.jsx(m,{...e,chains:[{id:"work",label:"Work",columns:["team","role"]}],hint:a.jsx(p,{text:"**Team** and **Role** are one chain, folded: only Team is drawn. Role’s tick in **Columns** is still on — the chain hides it, the user did not."})})}),play:async e=>{d(e)||await f(e.canvasElement)}};var n,s,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  tags: ['kb:visibility-grouped'],
  name: '6 · A grouped column',
  parameters: {
    ...sceneCodeWith(tableSource, 'GroupedColumn'),
    summary: 'A grouped column is a lane: always drawn, its tick is off.'
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
            <Scene {...args} initialGrouping={['country']} hint={<Md text="The table is grouped by **Country**, so the Country column is a lane — always drawn. Its tick in **Columns** is on and off (*Grouped: ungroup it to hide it*), and its menu has no *Hide column*. Ungroup, and it hides like any other." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await groupedAct(ctx.canvasElement);
  }
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var l,c,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  tags: ['kb:visibility-chain-member'],
  name: '7 · A member of a folded chain',
  parameters: {
    ...sceneCodeWith(tableSource, 'ChainMember'),
    summary: 'A folded chain hides its members; their ticks stay on.'
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
            <Scene {...args} chains={[{
      id: 'work',
      label: 'Work',
      columns: ['team', 'role']
    }]} hint={<Md text="**Team** and **Role** are one chain, folded: only Team is drawn. Role’s tick in **Columns** is still on — the chain hides it, the user did not." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await chainMemberAct(ctx.canvasElement);
  }
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const x=["GroupedColumn","ChainMember"],T=Object.freeze(Object.defineProperty({__proto__:null,ChainMember:t,GroupedColumn:o,__namedExportsOrder:x,default:C},Symbol.toStringTag,{value:"Module"}));export{T as B};
