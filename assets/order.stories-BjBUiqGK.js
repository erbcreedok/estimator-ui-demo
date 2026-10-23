import{O,F as j,_,a as A}from"./order-table-Be873fAN.js";import{c as l,j as r,b as i,M as c,d as W,s as w,e as C,f as F}from"./products-CTiDOXRn.js";import{h as H,p,H as u}from"./handlers-DXU2ZPok.js";import{m as K,a as L,r as N,b as z,k as P}from"./checks-Df_c61wn.js";import{S as d}from"./scene-B-pT2pmB.js";const[g]=Object.values([_]),[D]=Object.values([A]),q={title:"Tables/Table Core/Features/Row drag and drop/Order",id:"tables-table-core-features-row-drag-order",...F(g)},s={tags:["kb:row-drag-move-row"],name:"1 · Move a row",parameters:{...w(g,"MoveRow",C({onRowsMove:p(u,["flipRows"])})),summary:"The handle takes a row: a ghost follows the pointer, a line shows where it would stand, and the screen puts the row there (`onRowsReorder`). Esc leaves everything as it was."},args:{enableRowDragging:!0,onRowsMove:"without a handler"},argTypes:{enableRowDragging:{control:{type:"boolean"}},onRowsMove:{...W(p(u,["flipRows"]))}},render:e=>r.jsx(i,{args:e,children:r.jsx(d,{table:({rows:o,onRowsReorder:t})=>r.jsx(O,{rows:o,onRowsReorder:t,enableRowDragging:e.enableRowDragging,onRowsMove:H(e.onRowsMove)}),hint:r.jsx(c,{text:"Take a row by its **handle** and drag it between two others: a line shows the place. **Esc** while you drag puts everything back. `enableRowDragging` turns the handles on and off. With `flipRows()` the rows slide into their new places; more in [Rows on the move](tables-table-core-features-rows-on-the-move-overview--docs)."})})}),play:async e=>{l(e)||(await K(e.canvasElement),await L(e.canvasElement))}},a={tags:["kb:row-drag-several-rows"],name:"2 · Move several rows",parameters:{...w(D,"SeveralRows"),summary:"When the row you take is selected, all the selected rows go with it, in the order they stand."},args:{selection:!0},argTypes:{selection:{control:{type:"boolean"}}},render:e=>r.jsx(i,{args:e,children:r.jsx(d,{table:({rows:o,onRowsReorder:t})=>r.jsx(j,{rows:o,onRowsReorder:t,...e}),hint:r.jsx(c,{text:"Tick **two rows**, then take one of them: the ghost says **+1**, the hint counts the rows, and both go together."})})}),play:async e=>{l(e)||await z(e.canvasElement)}},n={tags:["kb:row-drag-rule"],name:"3 · A rule of the screen",parameters:{...w(D,"RuleOfTheScreen"),summary:"`canDrop` is the screen’s rule: true, or the reason, which the hint shows in red."},args:{dropRule:"nothing above the first row"},argTypes:{dropRule:{control:{type:"select"},options:["any","nothing above the first row"]}},render:e=>r.jsx(i,{args:e,children:r.jsx(d,{table:({rows:o,onRowsReorder:t})=>r.jsx(j,{rows:o,onRowsReorder:t,...e}),hint:r.jsx(c,{text:"The rule says **the first row stays first**: drop a row above it and the hint says why; drop it anywhere else and it moves. The rule is the screen’s: pick another one in the controls."})})}),play:async e=>{l(e)||await N(e.canvasElement)}},h={tags:["kb:row-drag-keys"],name:"4 · With the keys",parameters:{...w(g,"WithTheKeys"),summary:'Focus the handle: Space takes the row, ↑ and ↓ move it over the rows, Enter drops it, Esc leaves it. The hint is read out (`role="status"`).'},args:{enableRowDragging:!0},argTypes:{enableRowDragging:{control:{type:"boolean"}}},render:e=>r.jsx(i,{args:e,children:r.jsx(d,{table:({rows:o,onRowsReorder:t})=>r.jsx(O,{rows:o,onRowsReorder:t,...e}),hint:r.jsx(c,{text:"**Tab** to a handle, press **Space**: the row is taken and a line shows where it would stand. **↓** and **↑** move the line, **Enter** drops the row there, **Esc** leaves it. On a phone: **hold** the handle for a moment, then drag."})})}),play:async e=>{l(e)||await P(e.canvasElement)}};var m,R,v;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['kb:row-drag-move-row'],
  name: '1 · Move a row',
  parameters: {
    ...sceneCodeWith(orderSource, 'MoveRow', presetCodes({
      onRowsMove: pick(HANDLERS, ['flipRows'])
    })),
    summary: 'The handle takes a row: a ghost follows the pointer, a line shows where it would stand, and the screen puts the row there (\`onRowsReorder\`). Esc leaves everything as it was.'
  },
  args: {
    enableRowDragging: true,
    onRowsMove: 'without a handler'
  },
  argTypes: {
    enableRowDragging: {
      control: {
        type: 'boolean'
      }
    },
    onRowsMove: {
      ...presetControl(pick(HANDLERS, ['flipRows']))
    }
  },
  render: args => <Remount args={args}>
            <Scene table={({
      rows,
      onRowsReorder
    }) => <OrderTable rows={rows} onRowsReorder={onRowsReorder} enableRowDragging={args.enableRowDragging} onRowsMove={handlerFor(args.onRowsMove)} />} hint={<Md text="Take a row by its **handle** and drag it between two others: a line shows the place. **Esc** while you drag puts everything back. \`enableRowDragging\` turns the handles on and off. With \`flipRows()\` the rows slide into their new places; more in [Rows on the move](tables-table-core-features-rows-on-the-move-overview--docs)." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await moveRowAct(ctx.canvasElement);
    await touchAct(ctx.canvasElement);
  }
}`,...(v=(R=s.parameters)==null?void 0:R.docs)==null?void 0:v.source}}};var y,b,f;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  tags: ['kb:row-drag-several-rows'],
  name: '2 · Move several rows',
  parameters: {
    ...sceneCodeWith(flatSource, 'SeveralRows'),
    summary: 'When the row you take is selected, all the selected rows go with it, in the order they stand.'
  },
  args: {
    selection: true
  },
  argTypes: {
    selection: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: args => <Remount args={args}>
            <Scene table={({
      rows,
      onRowsReorder
    }) => <FlatTable rows={rows} onRowsReorder={onRowsReorder} {...args} />} hint={<Md text="Tick **two rows**, then take one of them: the ghost says **+1**, the hint counts the rows, and both go together." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await severalAct(ctx.canvasElement);
  }
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var k,T,x;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  tags: ['kb:row-drag-rule'],
  name: '3 · A rule of the screen',
  parameters: {
    ...sceneCodeWith(flatSource, 'RuleOfTheScreen'),
    summary: '\`canDrop\` is the screen’s rule: true, or the reason, which the hint shows in red.'
  },
  args: {
    dropRule: 'nothing above the first row'
  },
  argTypes: {
    dropRule: {
      control: {
        type: 'select'
      },
      options: ['any', 'nothing above the first row']
    }
  },
  render: args => <Remount args={args}>
            <Scene table={({
      rows,
      onRowsReorder
    }) => <FlatTable rows={rows} onRowsReorder={onRowsReorder} {...args} />} hint={<Md text="The rule says **the first row stays first**: drop a row above it and the hint says why; drop it anywhere else and it moves. The rule is the screen’s: pick another one in the controls." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await ruleAct(ctx.canvasElement);
  }
}`,...(x=(T=n.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var S,E,M;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['kb:row-drag-keys'],
  name: '4 · With the keys',
  parameters: {
    ...sceneCodeWith(orderSource, 'WithTheKeys'),
    summary: 'Focus the handle: Space takes the row, ↑ and ↓ move it over the rows, Enter drops it, Esc leaves it. The hint is read out (\`role="status"\`).'
  },
  args: {
    enableRowDragging: true
  },
  argTypes: {
    enableRowDragging: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: args => <Remount args={args}>
            <Scene table={({
      rows,
      onRowsReorder
    }) => <OrderTable rows={rows} onRowsReorder={onRowsReorder} {...args} />} hint={<Md text="**Tab** to a handle, press **Space**: the row is taken and a line shows where it would stand. **↓** and **↑** move the line, **Enter** drops the row there, **Esc** leaves it. On a phone: **hold** the handle for a moment, then drag." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await keysAct(ctx.canvasElement);
  }
}`,...(M=(E=h.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};const B=["MoveRow","SeveralRows","RuleOfTheScreen","WithTheKeys"],V=Object.freeze(Object.defineProperty({__proto__:null,MoveRow:s,RuleOfTheScreen:n,SeveralRows:a,WithTheKeys:h,__namedExportsOrder:B,default:q},Symbol.toStringTag,{value:"Module"}));export{V as O};
