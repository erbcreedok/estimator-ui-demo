import{S as i,V as C,_ as M}from"./scene-KH-578yJ.js";import{c as l,j as n,b as c,M as u,s as h,f as R}from"./products-CTiDOXRn.js";import{b as A,v as H,h as j,d as O,e as L}from"./checks-BTK7xNcN.js";import{m as _}from"./controls-B40_76Du.js";const[r]=Object.values([M]),E={title:"Tables/Table Core/Features/Column visibility/Rules of the screen",id:"tables-table-core-features-column-visibility-rules-of-the-screen",...R(r)},t={tags:["kb:visibility-must-stay"],name:"8 · A column that must stay",parameters:{...h(r,"MustStay"),summary:"`enableHiding: false` on the column: its tick is off and it has no Hide column."},args:{toolbar:!0,columnMenu:!0},argTypes:{toolbar:{control:{type:"boolean"}},columnMenu:{control:{type:"boolean"}}},render:e=>n.jsx(c,{args:e,children:n.jsx(i,{...e,hint:n.jsx(u,{text:"**Name** says `enableHiding: false`: in **Columns** its tick is off (*Cannot be hidden*) and its header has no menu. The other columns hide as usual."})})}),play:async e=>{l(e)||await O(e.canvasElement)}},a={tags:["kb:visibility-panel-only"],name:"9 · Hiding only from the panel",parameters:{...h(r,"PanelOnly"),summary:"The column menu without `hidingSection`: hiding is the Columns panel’s."},args:{toolbar:!0,columnMenu:!0,menuWithoutHide:!0},argTypes:{toolbar:{control:{type:"boolean"}},columnMenu:{control:{type:"boolean"}},menuWithoutHide:{control:{type:"boolean"}}},render:e=>n.jsx(c,{args:e,children:n.jsx(i,{...e,hint:n.jsx(u,{text:"The screen’s `columnMenu` has no `hidingSection`: a header menu offers no *Hide column*; the **Columns** panel keeps its ticks."})})}),play:async e=>{l(e)||(await L(e.canvasElement),await _(e))}},S={toolbar:{control:{type:"boolean"}},columnMenu:{control:{type:"boolean"}},visibilityRule:{control:{type:"radio"},options:Object.keys(C)}},s={tags:["kb:visibility-at-least-three"],name:"10 · At least three columns",parameters:{...h(r,"AtLeastThree"),summary:"The screen owns `columnVisibility` and refuses a change that leaves fewer than three."},args:{toolbar:!0,columnMenu:!0,visibilityRule:"at least three"},argTypes:S,render:e=>n.jsx(c,{args:e,children:n.jsx(i,{...e,hint:n.jsx(u,{text:"The screen owns `columnVisibility` and refuses the change that would leave fewer than three columns: untick Role, Level, Country — the next tick does nothing."})})}),play:async e=>{l(e)||(await A(e.canvasElement),await H(e))}},o={tags:["kb:visibility-hides-together"],name:"11 · Two columns that hide together",parameters:{...h(r,"HidesTogether"),summary:"The screen’s handler widens a change: Role and Level go and come together."},args:{toolbar:!0,columnMenu:!0,visibilityRule:"role and level together"},argTypes:S,render:e=>n.jsx(c,{args:e,children:n.jsx(i,{...e,hint:n.jsx(u,{text:"The screen’s `onColumnVisibilityChange` hides **Role** and **Level** together: untick one in **Columns** and the other goes with it; tick one and both are back."})})}),play:async e=>{l(e)||await j(e.canvasElement)}};var m,d,y;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['kb:visibility-must-stay'],
  name: '8 · A column that must stay',
  parameters: {
    ...sceneCodeWith(tableSource, 'MustStay'),
    summary: '\`enableHiding: false\` on the column: its tick is off and it has no Hide column.'
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
            <Scene {...args} hint={<Md text="**Name** says \`enableHiding: false\`: in **Columns** its tick is off (*Cannot be hidden*) and its header has no menu. The other columns hide as usual." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await mustStayAct(ctx.canvasElement);
  }
}`,...(y=(d=t.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var g,b,p;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['kb:visibility-panel-only'],
  name: '9 · Hiding only from the panel',
  parameters: {
    ...sceneCodeWith(tableSource, 'PanelOnly'),
    summary: 'The column menu without \`hidingSection\`: hiding is the Columns panel’s.'
  },
  args: {
    toolbar: true,
    columnMenu: true,
    menuWithoutHide: true
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
    },
    menuWithoutHide: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="The screen’s \`columnMenu\` has no \`hidingSection\`: a header menu offers no *Hide column*; the **Columns** panel keeps its ticks." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await panelOnlyAct(ctx.canvasElement);
    await menuHideControlAct(ctx);
  }
}`,...(p=(b=a.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var f,T,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['kb:visibility-at-least-three'],
  name: '10 · At least three columns',
  parameters: {
    ...sceneCodeWith(tableSource, 'AtLeastThree'),
    summary: 'The screen owns \`columnVisibility\` and refuses a change that leaves fewer than three.'
  },
  args: {
    toolbar: true,
    columnMenu: true,
    visibilityRule: 'at least three'
  },
  argTypes: ruleArgTypes,
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="The screen owns \`columnVisibility\` and refuses the change that would leave fewer than three columns: untick Role, Level, Country — the next tick does nothing." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await atLeastThreeAct(ctx.canvasElement);
    await visibilityRuleControlAct(ctx);
  }
}`,...(v=(T=s.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var x,k,w;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['kb:visibility-hides-together'],
  name: '11 · Two columns that hide together',
  parameters: {
    ...sceneCodeWith(tableSource, 'HidesTogether'),
    summary: 'The screen’s handler widens a change: Role and Level go and come together.'
  },
  args: {
    toolbar: true,
    columnMenu: true,
    visibilityRule: 'role and level together'
  },
  argTypes: ruleArgTypes,
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="The screen’s \`onColumnVisibilityChange\` hides **Role** and **Level** together: untick one in **Columns** and the other goes with it; tick one and both are back." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await hidesTogetherAct(ctx.canvasElement);
  }
}`,...(w=(k=o.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const W=["MustStay","PanelOnly","AtLeastThree","HidesTogether"],z=Object.freeze(Object.defineProperty({__proto__:null,AtLeastThree:s,HidesTogether:o,MustStay:t,PanelOnly:a,__namedExportsOrder:W,default:E},Symbol.toStringTag,{value:"Module"}));export{z as R};
