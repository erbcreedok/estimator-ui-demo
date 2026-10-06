import{C as R,L as z,f as P,g as w,l as T,h as L,i as C,j as S}from"./freezing-hints-ktsXkKrU.js";import{F,c as i,f as O}from"./freezing-page-BBwiIMYl.js";import{b as k,l as A,d as _,f as E}from"./freezing-play-mBtlZnru.js";const I={...F,title:"Tables/Table Core/Features/Freezing/Two sides",parameters:O("`state.columnPinning.right` freezes at the right whatever the UI. These scenes are about what the default menu and panel offer: `enableRightPinning` — both sides (a *Freeze* submenu, *Left* / *Right*), `enableLeftPinning={false}` — only the right, `meta.pinOnly` — one side for a column, a chain freezes whole at the side picked. Your own rules: Resolvers.")},s=y=>y,e={tags:["kb:freeze-left-and-right"],name:"5 · Left and right",args:z,parameters:{...s({set:"all",owner:"screen",hint:T}),controls:i(["columnMenu","toolbar","enableRightPinning","enableColumnPinning","pinnedLeft","pinnedRight"]),docs:{description:{story:'`enableRightPinning`: the column menu has *Freeze column ›* with *Left* and *Right* (like *Sort ›* and *Group by ›*); a frozen column keeps them, its side ticked — the other one moves it across without unfreezing, *Unfreeze column* takes it off. The Columns panel has *← Freeze →*: the arrows show on hover, nothing shifts, the lit one is the side and unfreezes. Both are the default answer of `getPinActions` (`group: "Freeze column"`).'}}},play:A},n={tags:["kb:freeze-two-sides-right-only"],name:"6 · Right only",args:w,parameters:{...s({set:"all",owner:"screen",hint:L}),controls:i(["columnMenu","toolbar","enableLeftPinning","enableRightPinning","enableColumnPinning","pinnedRight"]),docs:{description:{story:"`enableLeftPinning={false}` with `enableRightPinning`: the table freezes only at the right. No submenu — one plain *Freeze column* in the menu and *Freeze* in the Columns panel, both to the right. Turn the left side on again and the submenu comes back."}}},play:E},t={tags:["kb:freeze-side-per-column"],name:"7 · A side per column",args:P,parameters:{...s({set:"all",owner:"screen",hint:C}),controls:i(["columnMenu","toolbar","enableRightPinning","pinOnlyLeft","pinOnlyRight","unpinnable","pinnedLeft","pinnedRight"]),docs:{description:{story:'The table offers both sides; a column narrows it in its `columnDef`: `meta.pinOnly: "left"` or `"right"` — the menu says *Freeze column to the left* / *to the right*, the Columns panel keeps its *← Freeze →* with the one arrow; `enablePinning: false` — no *Freeze* at all. Name and Workload here are frozen by the state at their side and the user cannot change it: `pinOnly` with `enablePinning: false`. The state still freezes any column anywhere; the switches limit the user only.'}}},play:_},a={tags:["kb:freeze-chain-sides"],name:"8 · A chain across the sides",args:R,parameters:{...s({set:"all",owner:"screen",hint:S}),controls:i(["columnMenu","toolbar","enableRightPinning","chained","pinnedLeft","pinnedRight"]),docs:{description:{story:"Country and City are one column chain. Freezing either member freezes the chain whole, at the side picked (*Left* / *Right*), in its order on screen; *Left* on the other side moves the whole chain across. In the Columns panel the chain has one *← Freeze →*."}}},play:k};var r,o,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  tags: ['kb:freeze-left-and-right'],
  name: '5 · Left and right',
  args: LEFT_RIGHT_START,
  parameters: {
    ...scene({
      set: 'all',
      owner: 'screen',
      hint: leftAndRight
    }),
    controls: controlsOf(['columnMenu', 'toolbar', 'enableRightPinning', 'enableColumnPinning', 'pinnedLeft', 'pinnedRight']),
    docs: {
      description: {
        story: '\`enableRightPinning\`: the column menu has *Freeze column ›* with *Left* and *Right* (like *Sort ›* and *Group by ›*); a frozen column keeps them, its side ticked — the other one moves it across without unfreezing, *Unfreeze column* takes it off. The Columns panel has *← Freeze →*: the arrows show on hover, nothing shifts, the lit one is the side and unfreezes. Both are the default answer of \`getPinActions\` (\`group: "Freeze column"\`).'
      }
    }
  },
  play: leftAndRightPlay
}`,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var h,c,m;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['kb:freeze-two-sides-right-only'],
  name: '6 · Right only',
  args: RIGHT_ONLY_START,
  parameters: {
    ...scene({
      set: 'all',
      owner: 'screen',
      hint: rightOnly
    }),
    controls: controlsOf(['columnMenu', 'toolbar', 'enableLeftPinning', 'enableRightPinning', 'enableColumnPinning', 'pinnedRight']),
    docs: {
      description: {
        story: '\`enableLeftPinning={false}\` with \`enableRightPinning\`: the table freezes only at the right. No submenu — one plain *Freeze column* in the menu and *Freeze* in the Columns panel, both to the right. Turn the left side on again and the submenu comes back.'
      }
    }
  },
  play: rightOnlyPlay
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var g,d,u;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  tags: ['kb:freeze-side-per-column'],
  name: '7 · A side per column',
  args: PER_COLUMN_START,
  parameters: {
    ...scene({
      set: 'all',
      owner: 'screen',
      hint: perColumn
    }),
    controls: controlsOf(['columnMenu', 'toolbar', 'enableRightPinning', 'pinOnlyLeft', 'pinOnlyRight', 'unpinnable', 'pinnedLeft', 'pinnedRight']),
    docs: {
      description: {
        story: 'The table offers both sides; a column narrows it in its \`columnDef\`: \`meta.pinOnly: "left"\` or \`"right"\` — the menu says *Freeze column to the left* / *to the right*, the Columns panel keeps its *← Freeze →* with the one arrow; \`enablePinning: false\` — no *Freeze* at all. Name and Workload here are frozen by the state at their side and the user cannot change it: \`pinOnly\` with \`enablePinning: false\`. The state still freezes any column anywhere; the switches limit the user only.'
      }
    }
  },
  play: perColumnPlay
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var f,p,b;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['kb:freeze-chain-sides'],
  name: '8 · A chain across the sides',
  args: CHAIN_SIDES_START,
  parameters: {
    ...scene({
      set: 'all',
      owner: 'screen',
      hint: chainSides
    }),
    controls: controlsOf(['columnMenu', 'toolbar', 'enableRightPinning', 'chained', 'pinnedLeft', 'pinnedRight']),
    docs: {
      description: {
        story: 'Country and City are one column chain. Freezing either member freezes the chain whole, at the side picked (*Left* / *Right*), in its order on screen; *Left* on the other side moves the whole chain across. In the Columns panel the chain has one *← Freeze →*.'
      }
    }
  },
  play: chainSidesPlay
}`,...(b=(p=a.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};const M=["LeftAndRight","RightOnly","PerColumn","ChainSides"],H=Object.freeze(Object.defineProperty({__proto__:null,ChainSides:a,LeftAndRight:e,PerColumn:t,RightOnly:n,__namedExportsOrder:M,default:I},Symbol.toStringTag,{value:"Module"}));export{a as C,e as L,t as P,n as R,H as S};
