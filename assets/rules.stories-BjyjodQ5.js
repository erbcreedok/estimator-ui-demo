import{S as c,_ as F}from"./scene-DCjKWwYG.js";import{c as l,j as n,b as m,M as u,s as h,f as O}from"./products-CTiDOXRn.js";import{i as C,j as E,k as v,l as _,n as L,u as N}from"./checks-NmFlyDuA.js";import{P as U}from"./table-CSYHSR_6.js";const[t]=Object.values([F]),H={title:"Tables/Table Core/Features/Freezing/Rules of the screen",id:"tables-table-core-features-freezing-rules-of-the-screen",...O(t)},a={tags:["kb:freeze-both-sides"],name:"16 · Freeze at the left or the right",parameters:{...h(t,"BothSides"),summary:"A section of the screen’s own: two plain items instead of the Freeze submenu."},args:{columnMenu:!0,ownSection:"two-sides"},argTypes:{columnMenu:{control:{type:"boolean"}},ownSection:{control:{type:"radio"},options:["two-sides","up-to-here"]}},render:e=>n.jsx(m,{args:e,children:n.jsx(c,{...e,hint:n.jsx(u,{text:"The screen’s own section replaces the default *Freeze ›*: **Freeze at the left** and **Freeze at the right** are items of the column menu, each calling `pinColumn`; a frozen column keeps *Unfreeze column*."})})}),play:async e=>{l(e)||await C(e.canvasElement)}},r={tags:["kb:freeze-fixed-right"],name:"12 · Always frozen at the right",parameters:{...h(t,"FixedRight"),summary:"City and Email are frozen by the state and say `enablePinning: false` and `meta.disableReorder`."},args:{columnMenu:!0,enableRightPinning:!0},argTypes:{columnMenu:{control:{type:"boolean"}},enableRightPinning:{control:{type:"boolean"}}},render:e=>n.jsx(m,{args:e,children:n.jsx(c,{...e,unpinnable:["city","email"],fixed:["city","email"],initialPinning:{start:[],end:["city","email"]},hint:n.jsx(u,{text:"**City** and **Email** are frozen at the right by the state, with `enablePinning: false` and `meta.disableReorder`: no *Freeze* in their menu, no grip. The other columns freeze as usual."})})}),play:async e=>{l(e)||await E(e.canvasElement)}},o={tags:["kb:freeze-up-to-here"],name:"13 · Freeze up to here",parameters:{...h(t,"UpToHere"),summary:"A section of the screen’s own in the column menu sets `columnPinning` itself."},args:{columnMenu:!0,ownSection:"up-to-here"},argTypes:{columnMenu:{control:{type:"boolean"}},ownSection:{control:{type:"radio"},options:["two-sides","up-to-here"]}},render:e=>n.jsx(m,{args:e,children:n.jsx(c,{...e,hint:n.jsx(u,{text:"The screen adds a section to the column menu: **Freeze up to here** on Role freezes Name, Team and Role in one step (`table.setColumnPinning`)."})})}),play:async e=>{l(e)||await N(e.canvasElement)}},k={columnMenu:!0,toolbar:!0,enableRightPinning:!0},j={columnMenu:{control:{type:"boolean"}},toolbar:{control:{type:"boolean"}},enableRightPinning:{control:{type:"boolean"}},pinningRule:{control:{type:"radio"},options:Object.keys(U)}},s={tags:["kb:freeze-one-per-side"],name:"14 · One column per side",parameters:{...h(t,"OnePerSide"),summary:"The screen owns `columnPinning` and keeps the last one of each side."},args:{...k,pinningRule:"one per side"},argTypes:j,render:e=>n.jsx(m,{args:e,children:n.jsx(c,{...e,hint:n.jsx(u,{text:"The screen owns `columnPinning` and keeps the last column of each side: freeze Team, then Role at the left — Role replaces Team."})})}),play:async e=>{l(e)||(await _(e.canvasElement),await L(e))}},i={tags:["kb:freeze-max-two-left"],name:"15 · At most two at the left",parameters:{...h(t,"MaxTwoLeft"),summary:"The screen owns `columnPinning` and refuses a third column at the left."},args:{...k,pinningRule:"at most two at the left"},argTypes:j,render:e=>n.jsx(m,{args:e,children:n.jsx(c,{...e,hint:n.jsx(u,{text:"The screen owns `columnPinning` and refuses the third column at the left: freeze Name and Team, then Role — nothing happens."})})}),play:async e=>{l(e)||await v(e.canvasElement)}};var d,p,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  tags: ['kb:freeze-both-sides'],
  name: '16 · Freeze at the left or the right',
  parameters: {
    ...sceneCodeWith(tableSource, 'BothSides'),
    summary: 'A section of the screen’s own: two plain items instead of the Freeze submenu.'
  },
  args: {
    columnMenu: true,
    ownSection: 'two-sides'
  },
  argTypes: {
    columnMenu: {
      control: {
        type: 'boolean'
      }
    },
    ownSection: {
      control: {
        type: 'radio'
      },
      options: ['two-sides', 'up-to-here']
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="The screen’s own section replaces the default *Freeze ›*: **Freeze at the left** and **Freeze at the right** are items of the column menu, each calling \`pinColumn\`; a frozen column keeps *Unfreeze column*." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await bothSidesOwnAct(ctx.canvasElement);
  }
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var f,y,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['kb:freeze-fixed-right'],
  name: '12 · Always frozen at the right',
  parameters: {
    ...sceneCodeWith(tableSource, 'FixedRight'),
    summary: 'City and Email are frozen by the state and say \`enablePinning: false\` and \`meta.disableReorder\`.'
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
            <Scene {...args} unpinnable={['city', 'email']} fixed={['city', 'email']} initialPinning={{
      start: [],
      end: ['city', 'email']
    }} hint={<Md text="**City** and **Email** are frozen at the right by the state, with \`enablePinning: false\` and \`meta.disableReorder\`: no *Freeze* in their menu, no grip. The other columns freeze as usual." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await fixedRightAct(ctx.canvasElement);
  }
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var w,x,T;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['kb:freeze-up-to-here'],
  name: '13 · Freeze up to here',
  parameters: {
    ...sceneCodeWith(tableSource, 'UpToHere'),
    summary: 'A section of the screen’s own in the column menu sets \`columnPinning\` itself.'
  },
  args: {
    columnMenu: true,
    ownSection: 'up-to-here'
  },
  argTypes: {
    columnMenu: {
      control: {
        type: 'boolean'
      }
    },
    ownSection: {
      control: {
        type: 'radio'
      },
      options: ['two-sides', 'up-to-here']
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="The screen adds a section to the column menu: **Freeze up to here** on Role freezes Name, Team and Role in one step (\`table.setColumnPinning\`)." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await upToHereAct(ctx.canvasElement);
  }
}`,...(T=(x=o.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var R,z,S;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ['kb:freeze-one-per-side'],
  name: '14 · One column per side',
  parameters: {
    ...sceneCodeWith(tableSource, 'OnePerSide'),
    summary: 'The screen owns \`columnPinning\` and keeps the last one of each side.'
  },
  args: {
    ...ruleArgs,
    pinningRule: 'one per side'
  },
  argTypes: ruleArgTypes,
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="The screen owns \`columnPinning\` and keeps the last column of each side: freeze Team, then Role at the left — Role replaces Team." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await onePerSideAct(ctx.canvasElement);
    await pinningRuleControlAct(ctx);
  }
}`,...(S=(z=s.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var P,M,A;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  tags: ['kb:freeze-max-two-left'],
  name: '15 · At most two at the left',
  parameters: {
    ...sceneCodeWith(tableSource, 'MaxTwoLeft'),
    summary: 'The screen owns \`columnPinning\` and refuses a third column at the left.'
  },
  args: {
    ...ruleArgs,
    pinningRule: 'at most two at the left'
  },
  argTypes: ruleArgTypes,
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="The screen owns \`columnPinning\` and refuses the third column at the left: freeze Name and Team, then Role — nothing happens." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await maxTwoLeftAct(ctx.canvasElement);
  }
}`,...(A=(M=i.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};const W=["BothSides","FixedRight","UpToHere","OnePerSide","MaxTwoLeft"],D=Object.freeze(Object.defineProperty({__proto__:null,BothSides:a,FixedRight:r,MaxTwoLeft:i,OnePerSide:s,UpToHere:o,__namedExportsOrder:W,default:H},Symbol.toStringTag,{value:"Module"}));export{D as R};
