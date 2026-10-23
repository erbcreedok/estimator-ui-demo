import{c as g,j as r,b as m,M as l,s as h,f}from"./products-CTiDOXRn.js";import{o as d,a as x}from"./checks-BwzfMUfK.js";import{O as y,S as b,s as i}from"./scene-CB7jjebp.js";const O={title:"Tables/Table Core/Features/Grouping/Basics",id:"tables-table-core-features-grouping-basics",...f(i)},a={tags:["kb:group-one-prop"],name:"1 · One prop",parameters:{...h(i,"OneProp"),summary:"`state.grouping` as a constant groups the rows."},args:{grouping:["team"]},argTypes:{grouping:{control:!1}},render:e=>r.jsx(m,{args:e,children:r.jsx(b,{...e,hint:r.jsx(l,{text:"The screen passes `state.grouping` = `['team']` as a constant: a lane for **Team** with a group for each team; the column leaves the table for its lane."})})}),play:async e=>{g(e)||await x(e.canvasElement)}},n={tags:["kb:group-external-control"],name:"2 · The screen owns the grouping",parameters:{summary:"The screen passes `state.grouping` with `onGroupingChange`."},render:()=>r.jsx(y,{}),play:async e=>{g(e)||await d(e.canvasElement)}};var s,t,o;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  tags: ['kb:group-one-prop'],
  name: '1 · One prop',
  parameters: {
    ...sceneCodeWith(source, 'OneProp'),
    summary: '\`state.grouping\` as a constant groups the rows.'
  },
  args: {
    grouping: ['team']
  },
  argTypes: {
    grouping: {
      control: false
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="The screen passes \`state.grouping\` = \`['team']\` as a constant: a lane for **Team** with a group for each team; the column leaves the table for its lane." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await oneStateAct(ctx.canvasElement);
  }
}`,...(o=(t=a.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var c,p,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  tags: ['kb:group-external-control'],
  name: '2 · The screen owns the grouping',
  parameters: {
    summary: 'The screen passes \`state.grouping\` with \`onGroupingChange\`.'
  },
  render: () => <OutsideScene />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await outsideAct(ctx.canvasElement);
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const T=["OneProp","ExternalControl"],E=Object.freeze(Object.defineProperty({__proto__:null,ExternalControl:n,OneProp:a,__namedExportsOrder:T,default:O},Symbol.toStringTag,{value:"Module"}));export{E as B};
