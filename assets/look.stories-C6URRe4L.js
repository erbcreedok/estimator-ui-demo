import{S as i,_ as x}from"./scene-CB7jjebp.js";import{c as s,j as n,b,M as o,s as w,f as z}from"./products-CTiDOXRn.js";import{u as k,p as C}from"./checks-BwzfMUfK.js";import{h as T}from"./checks-NmFlyDuA.js";const[c]=Object.values([x]),S={title:"Tables/Table Core/Features/Freezing/Look",id:"tables-table-core-features-freezing-look",...z(c)},t={tags:["kb:freeze-with-grouping"],name:"1 · With grouping lanes",parameters:{summary:"The lane of a frozen grouped column sticks."},render:()=>n.jsx(i,{narrow:!0,initialGrouping:["team"],initialPinning:{start:["team"],end:[]},hint:n.jsx(o,{text:"The frozen zone holds more than columns: **Team** is frozen, so its lane sticks at the left while the table scrolls sideways. All of it comes from `state.columnPinning.start`."})}),play:async e=>{s(e)||await C(e.canvasElement)}},a={tags:["kb:freeze-chains"],name:"2 · With column chains",parameters:{...w(c,"WithChains"),summary:"A chain freezes as a whole."},args:{chainsOpen:!0},argTypes:{chainsOpen:{control:{type:"boolean"}}},render:e=>n.jsx(b,{args:e,children:n.jsx(i,{...e,narrow:!0,set:"location",chains:[{id:"location",label:"Location",columns:["country","tier","city"]}],initialSelection:{},initialPinning:{start:["name","country"],end:[]},hint:n.jsx(o,{text:"The **Location** chain is frozen as a whole: Country, Tier and City stick after Name. A chain follows its first member — `country` in `state.columnPinning.start`."})})}),play:async e=>{s(e)||await T(e.canvasElement)}},r={tags:["kb:freeze-utility-column"],name:"3 · Utility column",parameters:{...w(c,"UtilityColumn"),summary:"Row numbers and checkboxes frozen first."},args:{utility:!0},argTypes:{utility:{control:{type:"boolean"}}},render:e=>n.jsx(b,{args:e,children:n.jsx(i,{...e,narrow:!0,initialGrouping:["team"],hint:n.jsx(o,{text:"The screen adds `createUtilityColumn` and freezes it first, before Name: row numbers and checkboxes stay while the table scrolls."})})}),play:async e=>{s(e)||await k(e.canvasElement)}};var l,m,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  tags: ['kb:freeze-with-grouping'],
  name: '1 · With grouping lanes',
  parameters: {
    summary: 'The lane of a frozen grouped column sticks.'
  },
  render: () => <Scene narrow initialGrouping={['team']} initialPinning={{
    start: ['team'],
    end: []
  }} hint={<Md text="The frozen zone holds more than columns: **Team** is frozen, so its lane sticks at the left while the table scrolls sideways. All of it comes from \`state.columnPinning.start\`." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await pinnedLaneAct(ctx.canvasElement);
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,f,p;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['kb:freeze-chains'],
  name: '2 · With column chains',
  parameters: {
    ...sceneCodeWith(tableSource, 'WithChains'),
    summary: 'A chain freezes as a whole.'
  },
  args: {
    chainsOpen: true
  },
  argTypes: {
    chainsOpen: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} narrow set="location" chains={[{
      id: 'location',
      label: 'Location',
      columns: ['country', 'tier', 'city']
    }]} initialSelection={{}} initialPinning={{
      start: ['name', 'country'],
      end: []
    }} hint={<Md text="The **Location** chain is frozen as a whole: Country, Tier and City stick after Name. A chain follows its first member — \`country\` in \`state.columnPinning.start\`." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await frozenChainAct(ctx.canvasElement);
  }
}`,...(p=(f=a.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};var y,d,g;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['kb:freeze-utility-column'],
  name: '3 · Utility column',
  parameters: {
    ...sceneCodeWith(tableSource, 'UtilityColumn'),
    summary: 'Row numbers and checkboxes frozen first.'
  },
  args: {
    utility: true
  },
  argTypes: {
    utility: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} narrow initialGrouping={['team']} hint={<Md text="The screen adds \`createUtilityColumn\` and freezes it first, before Name: row numbers and checkboxes stay while the table scrolls." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await utilityColumnAct(ctx.canvasElement);
  }
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};const j=["WithGrouping","WithChains","UtilityColumn"],v=Object.freeze(Object.defineProperty({__proto__:null,UtilityColumn:r,WithChains:a,WithGrouping:t,__namedExportsOrder:j,default:S},Symbol.toStringTag,{value:"Module"}));export{v as L};
