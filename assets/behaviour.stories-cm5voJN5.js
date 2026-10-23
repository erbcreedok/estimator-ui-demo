import{S as t,_ as b}from"./scene-BiGXqEVE.js";import{c as o,j as a,b as v,M as c,s as x,f as z}from"./products-CTiDOXRn.js";import{c as C,e as A,z as E}from"./checks-CPsh5bEU.js";const[y]=Object.values([b]),k={title:"Tables/Table Core/Features/Column order/Behaviour",id:"tables-table-core-features-column-order-behaviour",...z(y)},n={tags:["kb:reorder-esc-cancels"],name:"4 · Esc cancels",parameters:{summary:"Esc during a drag puts the columns back."},render:()=>a.jsx(t,{hint:a.jsx(c,{text:"Start dragging **Country** to the left and press **Esc** before you let go: the columns go back to where the drag began."})}),play:async e=>{o(e)||await A(e.canvasElement)}},r={tags:["kb:reorder-zones"],name:"5 · A column moves inside its zone",parameters:{summary:"A column moves only inside its zone; a drag never freezes."},render:()=>a.jsx(t,{initialPinning:{start:["name","team"],end:[]},hint:a.jsx(c,{text:"**Name** and **Team** are frozen at the left from the start. Drag **Team** before **Name**: they swap — the frozen order is `state.columnPinning`. Drag **Role** before Name: it stays where it was — a column moves only inside its zone, and a drag never freezes or unfreezes."})}),play:async e=>{o(e)||await E(e.canvasElement)}},s={tags:["kb:reorder-chain"],name:"6 · A chain moves as one",parameters:{...x(y,"Chain"),summary:"A required member cannot leave its chain; another column moves as usual."},args:{chainsOpen:!0},argTypes:{chainsOpen:{control:{type:"boolean"}}},render:e=>a.jsx(v,{args:e,children:a.jsx(t,{...e,chains:[{id:"location",label:"Location",columns:["country","city"]}],hint:a.jsx(c,{text:"**Country** and **City** are one chain, open. Drag **Country** before **Team**: refused — a required member cannot leave its chain (the columns do not move). Another column moves as usual."})})}),play:async e=>{o(e)||await C(e.canvasElement)}};var i,m,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ['kb:reorder-esc-cancels'],
  name: '4 · Esc cancels',
  parameters: {
    summary: 'Esc during a drag puts the columns back.'
  },
  render: () => <Scene hint={<Md text="Start dragging **Country** to the left and press **Esc** before you let go: the columns go back to where the drag began." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await escAct(ctx.canvasElement);
  }
}`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,d,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['kb:reorder-zones'],
  name: '5 · A column moves inside its zone',
  parameters: {
    summary: 'A column moves only inside its zone; a drag never freezes.'
  },
  render: () => <Scene initialPinning={{
    start: ['name', 'team'],
    end: []
  }} hint={<Md text="**Name** and **Team** are frozen at the left from the start. Drag **Team** before **Name**: they swap — the frozen order is \`state.columnPinning\`. Drag **Role** before Name: it stays where it was — a column moves only inside its zone, and a drag never freezes or unfreezes." />} />,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await zonesAct(ctx.canvasElement);
  }
}`,...(h=(d=r.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var g,f,p;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['kb:reorder-chain'],
  name: '6 · A chain moves as one',
  parameters: {
    ...sceneCodeWith(tableSource, 'Chain'),
    summary: 'A required member cannot leave its chain; another column moves as usual.'
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
            <Scene {...args} chains={[{
      id: 'location',
      label: 'Location',
      columns: ['country', 'city']
    }]} hint={<Md text="**Country** and **City** are one chain, open. Drag **Country** before **Team**: refused — a required member cannot leave its chain (the columns do not move). Another column moves as usual." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await chainAct(ctx.canvasElement);
  }
}`,...(p=(f=s.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};const w=["EscCancels","Zones","Chain"],_=Object.freeze(Object.defineProperty({__proto__:null,Chain:s,EscCancels:n,Zones:r,__namedExportsOrder:w,default:k},Symbol.toStringTag,{value:"Module"}));export{_ as B};
