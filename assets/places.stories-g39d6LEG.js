import{S as p,_ as b}from"./scene-BiGXqEVE.js";import{c as d,g as f,j as a,b as h,M as u,s as g,ag as y,f as v}from"./products-CTiDOXRn.js";import{p as w,h as x}from"./checks-CPsh5bEU.js";import{g as C}from"./controls-B7VJbFXN.js";const[o]=Object.values([b]),T={title:"Tables/Table Core/Features/Column order/In the table",id:"tables-table-core-features-column-order-places",...v(o)},t={tags:["kb:reorder-drag-column"],name:"7 · Drag the header",parameters:{...g(o,"HeaderDrag"),summary:"The grip of a header: a copy follows the pointer, the columns move while you drag."},args:{gripPlacement:"top"},argTypes:{gripPlacement:{control:"radio",options:["top","start"]}},render:e=>a.jsx(h,{args:e,children:a.jsx(p,{...e,hint:a.jsx(u,{text:"Hover **Role**: a tab with ⋮⋮ sticks out above the header (`gripPlacement: 'top'`; `'start'` puts the dots before the title). Drag it before **Team**: a copy of the header follows the pointer and the columns move while you drag. Watch `state.columnOrder`."})})}),play:async e=>{d(e)||(await x(e.canvasElement),await y(e.canvasElement),await C(e))}},r={tags:["kb:reorder-in-panel"],name:"8 · The Columns panel",parameters:{...g(o,"ColumnsPanel"),summary:"A handle in the Columns panel moves a column, like the header."},args:{toolbar:!0},argTypes:{toolbar:{control:{type:"boolean"}}},render:e=>a.jsx(h,{args:e,children:a.jsx(p,{...e,hint:a.jsx(u,{text:"Open **Columns**: drag a ⋮⋮ handle, or focus it and press **↓** / **↑**. The panel moves a column exactly as the header does."})})}),play:async e=>{d(e)||(await w(e.canvasElement),await f(e))}};var n,s,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  tags: ['kb:reorder-drag-column'],
  name: '7 · Drag the header',
  parameters: {
    ...sceneCodeWith(tableSource, 'HeaderDrag'),
    summary: 'The grip of a header: a copy follows the pointer, the columns move while you drag.'
  },
  args: {
    gripPlacement: 'top'
  },
  argTypes: {
    gripPlacement: {
      control: 'radio',
      options: ['top', 'start']
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="Hover **Role**: a tab with ⋮⋮ sticks out above the header (\`gripPlacement: 'top'\`; \`'start'\` puts the dots before the title). Drag it before **Team**: a copy of the header follows the pointer and the columns move while you drag. Watch \`state.columnOrder\`." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await headerAct(ctx.canvasElement);
    await gripTabAct(ctx.canvasElement);
    await gripControlAct(ctx);
  }
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,m,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  tags: ['kb:reorder-in-panel'],
  name: '8 · The Columns panel',
  parameters: {
    ...sceneCodeWith(tableSource, 'ColumnsPanel'),
    summary: 'A handle in the Columns panel moves a column, like the header.'
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
            <Scene {...args} hint={<Md text="Open **Columns**: drag a ⋮⋮ handle, or focus it and press **↓** / **↑**. The panel moves a column exactly as the header does." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await panelAct(ctx.canvasElement);
    await barControlAct(ctx);
  }
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const P=["HeaderDrag","ColumnsPanel"],O=Object.freeze(Object.defineProperty({__proto__:null,ColumnsPanel:r,HeaderDrag:t,__namedExportsOrder:P,default:T},Symbol.toStringTag,{value:"Module"}));export{O as P};
