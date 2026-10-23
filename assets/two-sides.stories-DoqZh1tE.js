import{S as s,_ as C}from"./scene-DCjKWwYG.js";import{c as l,j as n,b as c,M as h,s as g,aa as S,f as O}from"./products-CTiDOXRn.js";import{c as M,d as L,f as A,g as j}from"./checks-NmFlyDuA.js";import{s as k}from"./controls-umORIRv-.js";const[o]=Object.values([C]),v={title:"Tables/Table Core/Features/Freezing/Two sides",id:"tables-table-core-features-freezing-two-sides",...O(o)},t={tags:["kb:freeze-left-and-right"],name:"8 · Left and right",parameters:{...g(o,"LeftAndRight"),summary:"`enableRightPinning`: Freeze offers Left and Right."},args:{columnMenu:!0,enableRightPinning:!0},argTypes:{columnMenu:{control:{type:"boolean"}},enableRightPinning:{control:{type:"boolean"}}},render:e=>n.jsx(c,{args:e,children:n.jsx(s,{...e,hint:n.jsx(h,{text:"`enableRightPinning` is on beside the left one: *Freeze ›* in the menu has **Left** and **Right**, the panel has **←** and **→**."})})}),play:async e=>{l(e)||(S(e.canvasElement),await L(e.canvasElement),await k(e))}},a={tags:["kb:freeze-two-sides-right-only"],name:"9 · The right side only",parameters:{...g(o,"RightOnly"),summary:"`enableLeftPinning: false` with `enableRightPinning`: one plain Freeze, to the right."},args:{columnMenu:!0,enableLeftPinning:!1,enableRightPinning:!0},argTypes:{columnMenu:{control:{type:"boolean"}},enableLeftPinning:{control:{type:"boolean"}},enableRightPinning:{control:{type:"boolean"}}},render:e=>n.jsx(c,{args:e,children:n.jsx(s,{...e,hint:n.jsx(h,{text:"`enableLeftPinning={false}` and `enableRightPinning`: the only side is the right, so *Freeze column* is a plain item, with no submenu."})})}),play:async e=>{l(e)||await j(e.canvasElement)}},i={tags:["kb:freeze-side-per-column"],name:"10 · A side for each column",parameters:{...g(o,"PerColumn"),summary:"`meta.pinOnly`: a column freezes at one side only."},args:{columnMenu:!0,enableRightPinning:!0},argTypes:{columnMenu:{control:{type:"boolean"}},enableRightPinning:{control:{type:"boolean"}}},render:e=>n.jsx(c,{args:e,children:n.jsx(s,{...e,pinOnly:{left:["name"],right:["email"]},hint:n.jsx(h,{text:"**Name** has `meta.pinOnly: 'left'` and **Email** `'right'`: each offers its own side only (*Freeze column to the left*, *…to the right*); **Role** has both."})})}),play:async e=>{l(e)||await A(e.canvasElement)}},r={tags:["kb:freeze-chain-sides"],name:"11 · A chain across the sides",parameters:{...g(o,"ChainSides"),summary:"A chain freezes whole at the side picked for it."},args:{columnMenu:!0,enableRightPinning:!0,chainsOpen:!0},argTypes:{columnMenu:{control:{type:"boolean"}},enableRightPinning:{control:{type:"boolean"}},chainsOpen:{control:{type:"boolean"}}},render:e=>n.jsx(c,{args:e,children:n.jsx(s,{...e,chains:[{id:"location",label:"Location",columns:["country","city"]}],initialPinning:{start:["name"],end:[]},hint:n.jsx(h,{text:"**Country** and **City** are one chain. *Freeze › Right* on Country puts the whole chain at the right, *Left* moves it back: a chain follows its first member, never half of it."})})}),play:async e=>{l(e)||await M(e.canvasElement)}};var m,u,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['kb:freeze-left-and-right'],
  name: '8 · Left and right',
  parameters: {
    ...sceneCodeWith(tableSource, 'LeftAndRight'),
    summary: '\`enableRightPinning\`: Freeze offers Left and Right.'
  },
  args: {
    columnMenu: true,
    enableRightPinning: true
  },
  argTypes: {
    columnMenu: {
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
            <Scene {...args} hint={<Md text="\`enableRightPinning\` is on beside the left one: *Freeze ›* in the menu has **Left** and **Right**, the panel has **←** and **→**." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    fillsCard(ctx.canvasElement);
    await bothSidesAct(ctx.canvasElement);
    await sidesControlAct(ctx);
  }
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var f,p,b;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['kb:freeze-two-sides-right-only'],
  name: '9 · The right side only',
  parameters: {
    ...sceneCodeWith(tableSource, 'RightOnly'),
    summary: '\`enableLeftPinning: false\` with \`enableRightPinning\`: one plain Freeze, to the right.'
  },
  args: {
    columnMenu: true,
    enableLeftPinning: false,
    enableRightPinning: true
  },
  argTypes: {
    columnMenu: {
      control: {
        type: 'boolean'
      }
    },
    enableLeftPinning: {
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
            <Scene {...args} hint={<Md text="\`enableLeftPinning={false}\` and \`enableRightPinning\`: the only side is the right, so *Freeze column* is a plain item, with no submenu." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await rightOnlyAct(ctx.canvasElement);
  }
}`,...(b=(p=a.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var y,R,P;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['kb:freeze-side-per-column'],
  name: '10 · A side for each column',
  parameters: {
    ...sceneCodeWith(tableSource, 'PerColumn'),
    summary: '\`meta.pinOnly\`: a column freezes at one side only.'
  },
  args: {
    columnMenu: true,
    enableRightPinning: true
  },
  argTypes: {
    columnMenu: {
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
            <Scene {...args} pinOnly={{
      left: ['name'],
      right: ['email']
    }} hint={<Md text="**Name** has \`meta.pinOnly: 'left'\` and **Email** \`'right'\`: each offers its own side only (*Freeze column to the left*, *…to the right*); **Role** has both." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await perColumnAct(ctx.canvasElement);
  }
}`,...(P=(R=i.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var x,w,z;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['kb:freeze-chain-sides'],
  name: '11 · A chain across the sides',
  parameters: {
    ...sceneCodeWith(tableSource, 'ChainSides'),
    summary: 'A chain freezes whole at the side picked for it.'
  },
  args: {
    columnMenu: true,
    enableRightPinning: true,
    chainsOpen: true
  },
  argTypes: {
    columnMenu: {
      control: {
        type: 'boolean'
      }
    },
    enableRightPinning: {
      control: {
        type: 'boolean'
      }
    },
    chainsOpen: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} chains={[{
      id: 'location',
      label: 'Location',
      columns: ['country', 'city']
    }]} initialPinning={{
      start: ['name'],
      end: []
    }} hint={<Md text="**Country** and **City** are one chain. *Freeze › Right* on Country puts the whole chain at the right, *Left* moves it back: a chain follows its first member, never half of it." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await chainSidesAct(ctx.canvasElement);
  }
}`,...(z=(w=r.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const T=["LeftAndRight","RightOnly","PerColumn","ChainSides"],N=Object.freeze(Object.defineProperty({__proto__:null,ChainSides:r,LeftAndRight:t,PerColumn:i,RightOnly:a,__namedExportsOrder:T,default:v},Symbol.toStringTag,{value:"Module"}));export{N as T};
