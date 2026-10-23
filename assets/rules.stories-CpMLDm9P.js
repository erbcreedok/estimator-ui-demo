import{S as R,a as x,M as S,_}from"./scene-BiGXqEVE.js";import{c as o,j as r,b as y,M as T,s as c,f as k}from"./products-CTiDOXRn.js";import{n as v,r as M,b as O,d as A}from"./checks-CPsh5bEU.js";const{useArgs:j}=__STORYBOOK_MODULE_PREVIEW_API__,[s]=Object.values([_]),E={title:"Tables/Table Core/Features/Column order/Rules of the screen",id:"tables-table-core-features-column-order-rules-of-the-screen",...k(s)},C={orderRule:{control:{type:"select"},options:Object.keys(x)}},a={tags:["kb:reorder-name-first"],name:"9 · Name stays first",parameters:{...c(s,"NameFirst"),summary:"The screen owns `columnOrder` and refuses a change that puts a column before Name."},args:{orderRule:"nothing before Name"},argTypes:C,render:e=>r.jsx(y,{args:e,children:r.jsx(R,{...e,hint:r.jsx(T,{text:"The table keeps its order and refuses a change that puts a column before **Name**: drag Team before Name — nothing moves; drag Level before Team — it goes."})})}),play:async e=>{o(e)||(await v(e.canvasElement),await M(e))}},n={tags:["kb:reorder-screen-mode"],name:"10 · The screen’s mode",parameters:{...c(s,"ScreenMode"),summary:"`enableColumnReorder` follows the screen’s mode: locked, nobody drags."},args:{enableColumnReorder:!0},argTypes:{enableColumnReorder:{control:{type:"boolean"}}},render:function(l){const[,N]=j();return r.jsx(S,{enableColumnReorder:l.enableColumnReorder,onToggle:()=>N({enableColumnReorder:!l.enableColumnReorder})})},play:async e=>{o(e)||await A(e.canvasElement)}},t={tags:["kb:reorder-not-last"],name:"11 · Nothing goes last",parameters:{...c(s,"NotLast"),summary:"The screen refuses a change that puts a column at the end."},args:{orderRule:"nothing last"},argTypes:C,render:e=>r.jsx(y,{args:e,children:r.jsx(R,{...e,hint:r.jsx(T,{text:"The table keeps its order and refuses a change that puts a column at the end of the table: drag Name to the end — nothing moves; drag Level before Team — it goes."})})}),play:async e=>{o(e)||await O(e.canvasElement)}};var m,d,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['kb:reorder-name-first'],
  name: '9 · Name stays first',
  parameters: {
    ...sceneCodeWith(tableSource, 'NameFirst'),
    summary: 'The screen owns \`columnOrder\` and refuses a change that puts a column before Name.'
  },
  args: {
    orderRule: 'nothing before Name'
  },
  argTypes: ruleControl,
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="The table keeps its order and refuses a change that puts a column before **Name**: drag Team before Name — nothing moves; drag Level before Team — it goes." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await nameFirstAct(ctx.canvasElement);
    await ruleControlAct(ctx);
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,i,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['kb:reorder-screen-mode'],
  name: '10 · The screen’s mode',
  parameters: {
    ...sceneCodeWith(tableSource, 'ScreenMode'),
    summary: '\`enableColumnReorder\` follows the screen’s mode: locked, nobody drags.'
  },
  args: {
    enableColumnReorder: true
  },
  argTypes: {
    enableColumnReorder: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: function Render(args) {
    const [, updateArgs] = useArgs<ModeArgs>();
    return <ModeScene enableColumnReorder={args.enableColumnReorder} onToggle={() => updateArgs({
      enableColumnReorder: !args.enableColumnReorder
    })} />;
  },
  play: async ctx => {
    if (checksOff(ctx)) return;
    await screenModeAct(ctx.canvasElement);
  }
}`,...(h=(i=n.parameters)==null?void 0:i.docs)==null?void 0:h.source}}};var b,p,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['kb:reorder-not-last'],
  name: '11 · Nothing goes last',
  parameters: {
    ...sceneCodeWith(tableSource, 'NotLast'),
    summary: 'The screen refuses a change that puts a column at the end.'
  },
  args: {
    orderRule: 'nothing last'
  },
  argTypes: ruleControl,
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="The table keeps its order and refuses a change that puts a column at the end of the table: drag Name to the end — nothing moves; drag Level before Team — it goes." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await notLastAct(ctx.canvasElement);
  }
}`,...(f=(p=t.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const w=["NameFirst","ScreenMode","NotLast"],P=Object.freeze(Object.defineProperty({__proto__:null,NameFirst:a,NotLast:t,ScreenMode:n,__namedExportsOrder:w,default:E},Symbol.toStringTag,{value:"Module"}));export{P as R};
