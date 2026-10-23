import{C as l,_ as i}from"./clipboard-table-CX-6fC6A.js";import{c,O as g,j as a,b as p,M as u,p as w,d as h,s as E,e as y,f as b}from"./products-CTiDOXRn.js";import{e as k,c as m,l as R,L as r,S as O}from"./controls-BCXw8klf.js";import{P as C}from"./people-scene-CnMRUXe9.js";const[d]=Object.values([i]),v={title:"Tables/Table Core/Features/Editing/Playground",id:"tables-table-core-features-editing-playground",...b(d)},t={tags:["kb:editing-playground"],name:"Playground",parameters:{...E(d,"Playground",y({lockedRow:r,startEditing:O}))},args:{startEditing:"doubleClick",readOnly:!1,lockedRow:"the third row"},argTypes:{...k,lockedRow:h(r)},render:e=>a.jsx(p,{args:e,children:a.jsx(C,{Table:l,startEditing:e.startEditing,readOnly:e.readOnly,lockedRow:w(r,e.lockedRow),readouts:!0,hint:a.jsx(u,{text:"Everything together: Enter, F2 or a double click edit, Enter and Tab save, Esc cancels, paste, Delete and Fill write. The controls below change what opens the editor (`startEditing`), switch `readOnly` and say which row the screen locks (`resolvers.getCanEdit`)."})})}),play:async e=>{c(e)||(await g(e.canvasElement),await m(e,"doubleClick"),await R(e))}};var n,s,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  tags: ['kb:editing-playground'],
  name: 'Playground',
  parameters: {
    ...sceneCodeWith(source, 'Playground', presetCodes({
      lockedRow: LOCKED_ROWS,
      startEditing: START_EDITING
    }))
  },
  args: {
    startEditing: 'doubleClick',
    readOnly: false,
    lockedRow: 'the third row'
  },
  argTypes: {
    ...editingArgTypes,
    lockedRow: presetControl(LOCKED_ROWS)
  },
  render: args => <Remount args={args}>
            <PeopleScene Table={ClipboardTable} startEditing={args.startEditing} readOnly={args.readOnly} lockedRow={presetValue(LOCKED_ROWS, args.lockedRow)} readouts hint={<Md text="Everything together: Enter, F2 or a double click edit, Enter and Tab save, Esc cancels, paste, Delete and Fill write. The controls below change what opens the editor (\`startEditing\`), switch \`readOnly\` and say which row the screen locks (\`resolvers.getCanEdit\`)." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await grid(ctx.canvasElement);
    await controlsAct(ctx, 'doubleClick');
    await lockedRowAct(ctx);
  }
}`,...(o=(s=t.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const P=["Playground"];export{t as Playground,P as __namedExportsOrder,v as default};
