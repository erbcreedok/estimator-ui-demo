import{c as o,j as n,b as r,M as a,s,f as X}from"./products-CTiDOXRn.js";import{C as l,S as c,s as t}from"./scene-CB7jjebp.js";import{L as i}from"./checks-BwzfMUfK.js";const Y={title:"Tables/Table Core/Features/Grouping/Look/Group cell",id:"tables-table-core-features-grouping-look-group-cell",...X(t)},u={tags:["kb:group-cell-standard"],name:"1 · Standard",parameters:{...s(t,"Standard"),summary:"The standard group cell: −/+, checkbox, value, count."},args:{look:"standard",initialGrouping:["colour"]},argTypes:{look:{control:"select",options:l},initialGrouping:{control:!1}},render:e=>n.jsx(r,{args:e,children:n.jsx(c,{...e,hint:n.jsx(a,{text:"The standard cell: **−/+**, the group **checkbox**, the **value** and the **count**. Everything else is set on the grouped column, in `meta.groupCell`."})})}),play:async e=>{o(e)||await i.standard(e.canvasElement)}},g={tags:["kb:group-cell-left-edge"],name:"2 · Left edge",parameters:{...s(t,"LeftEdge"),summary:"A coloured edge on the left, by the value."},args:{look:"left-edge",initialGrouping:["colour"]},argTypes:{look:{control:"select",options:l},initialGrouping:{control:!1}},render:e=>n.jsx(r,{args:e,children:n.jsx(c,{...e,hint:n.jsx(a,{text:"`meta.groupCell.accent`: a colour by the value, drawn as the cell’s **left edge**."})})}),play:async e=>{o(e)||await i["left-edge"](e.canvasElement)}},p={tags:["kb:group-cell-right-edge"],name:"3 · Right edge",parameters:{...s(t,"RightEdge"),summary:"A coloured edge on the right."},args:{look:"right-edge",initialGrouping:["colour"]},argTypes:{look:{control:"select",options:l},initialGrouping:{control:!1}},render:e=>n.jsx(r,{args:e,children:n.jsx(c,{...e,hint:n.jsx(a,{text:"`accentSide: 'right'`: the same edge on the **right**."})})}),play:async e=>{o(e)||await i["right-edge"](e.canvasElement)}},d={tags:["kb:group-cell-tooltip"],name:"4 · Tooltip",parameters:{...s(t,"Tooltip"),summary:"A tooltip on the group value."},args:{look:"tooltip",initialGrouping:["colour"]},argTypes:{look:{control:"select",options:l},initialGrouping:{control:!1}},render:e=>n.jsx(r,{args:e,children:n.jsx(c,{...e,hint:n.jsx(a,{text:"`meta.groupCell.tooltip`: hover a group’s value for its tooltip."})})}),play:async e=>{o(e)||await i.tooltip(e.canvasElement)}},m={tags:["kb:group-cell-background"],name:"5 · Background",parameters:{...s(t,"Background"),summary:"A background by the value."},args:{look:"background",initialGrouping:["colour"]},argTypes:{look:{control:"select",options:l},initialGrouping:{control:!1}},render:e=>n.jsx(r,{args:e,children:n.jsx(c,{...e,hint:n.jsx(a,{text:"`meta.groupCell.style`: a **background** of the cell by the value."})})}),play:async e=>{o(e)||await i.background(e.canvasElement)}},h={tags:["kb:group-cell-own-css"],name:"6 · Own CSS",parameters:{...s(t,"OwnCss"),summary:"A class by the value, for your own CSS."},args:{look:"own-css",initialGrouping:["colour"]},argTypes:{look:{control:"select",options:l},initialGrouping:{control:!1}},render:e=>n.jsx(r,{args:e,children:n.jsx(c,{...e,hint:n.jsx(a,{text:"`meta.groupCell.className`: a class by the value (`look-red`), styled by the screen’s CSS."})})}),play:async e=>{o(e)||await i["own-css"](e.canvasElement)}},f={tags:["kb:group-cell-own-cell"],name:"7 · Own content",parameters:{...s(t,"OwnCell"),summary:"The screen draws the content of the cell."},args:{look:"own-cell",initialGrouping:["colour"]},argTypes:{look:{control:"select",options:l},initialGrouping:{control:!1}},render:e=>n.jsx(r,{args:e,children:n.jsx(c,{...e,hint:n.jsx(a,{text:"`meta.groupCell.render`: the screen’s own content in the cell’s sticky place — the value and the number of people."})})}),play:async e=>{o(e)||await i["own-cell"](e.canvasElement)}},y={tags:["kb:group-cell-wrap-content"],name:"8 · Wrap the standard content",parameters:{...s(t,"WrapContent"),summary:"The standard content inside the screen’s wrapper."},args:{look:"wrap-content",initialGrouping:["colour"]},argTypes:{look:{control:"select",options:l},initialGrouping:{control:!1}},render:e=>n.jsx(r,{args:e,children:n.jsx(c,{...e,hint:n.jsx(a,{text:"`render` gets the standard content (`content`): wrap it in a frame of your own."})})}),play:async e=>{o(e)||await i["wrap-content"](e.canvasElement)}},k={tags:["kb:group-cell-actions-inside"],name:"9 · Actions inside",parameters:{...s(t,"ActionsInside"),summary:"The standard content and a button of the screen’s."},args:{look:"actions-inside",initialGrouping:["colour"]},argTypes:{look:{control:"select",options:l},initialGrouping:{control:!1}},render:e=>n.jsx(r,{args:e,children:n.jsx(c,{...e,hint:n.jsx(a,{text:"`render` with `content` and a button beside it: an action for the group."})})}),play:async e=>{o(e)||await i["actions-inside"](e.canvasElement)}},x={tags:["kb:group-cell-whole-cell"],name:"10 · Whole cell",parameters:{...s(t,"WholeCell"),summary:"The screen’s card fills the whole cell."},args:{look:"whole-cell",initialGrouping:["colour"]},argTypes:{look:{control:"select",options:l},initialGrouping:{control:!1}},render:e=>n.jsx(r,{args:e,children:n.jsx(c,{...e,hint:n.jsx(a,{text:"`layout: 'fill'`: the screen’s card is the whole cell, edge to edge and the full height of the group."})})}),play:async e=>{o(e)||await i["whole-cell"](e.canvasElement)}};var w,C,O;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['kb:group-cell-standard'],
  name: '1 · Standard',
  parameters: {
    ...sceneCodeWith(source, 'Standard'),
    summary: 'The standard group cell: −/+, checkbox, value, count.'
  },
  args: {
    look: 'standard',
    initialGrouping: ['colour']
  },
  argTypes: {
    look: {
      control: 'select',
      options: CELL_LOOKS
    },
    initialGrouping: {
      control: false
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="The standard cell: **−/+**, the group **checkbox**, the **value** and the **count**. Everything else is set on the grouped column, in \`meta.groupCell\`." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await LOOK_ACTS.standard(ctx.canvasElement);
  }
}`,...(O=(C=u.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var S,b,L;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  tags: ['kb:group-cell-left-edge'],
  name: '2 · Left edge',
  parameters: {
    ...sceneCodeWith(source, 'LeftEdge'),
    summary: 'A coloured edge on the left, by the value.'
  },
  args: {
    look: 'left-edge',
    initialGrouping: ['colour']
  },
  argTypes: {
    look: {
      control: 'select',
      options: CELL_LOOKS
    },
    initialGrouping: {
      control: false
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="\`meta.groupCell.accent\`: a colour by the value, drawn as the cell’s **left edge**." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await LOOK_ACTS['left-edge'](ctx.canvasElement);
  }
}`,...(L=(b=g.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var T,v,G;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['kb:group-cell-right-edge'],
  name: '3 · Right edge',
  parameters: {
    ...sceneCodeWith(source, 'RightEdge'),
    summary: 'A coloured edge on the right.'
  },
  args: {
    look: 'right-edge',
    initialGrouping: ['colour']
  },
  argTypes: {
    look: {
      control: 'select',
      options: CELL_LOOKS
    },
    initialGrouping: {
      control: false
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="\`accentSide: 'right'\`: the same edge on the **right**." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await LOOK_ACTS['right-edge'](ctx.canvasElement);
  }
}`,...(G=(v=p.parameters)==null?void 0:v.docs)==null?void 0:G.source}}};var E,j,R;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['kb:group-cell-tooltip'],
  name: '4 · Tooltip',
  parameters: {
    ...sceneCodeWith(source, 'Tooltip'),
    summary: 'A tooltip on the group value.'
  },
  args: {
    look: 'tooltip',
    initialGrouping: ['colour']
  },
  argTypes: {
    look: {
      control: 'select',
      options: CELL_LOOKS
    },
    initialGrouping: {
      control: false
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="\`meta.groupCell.tooltip\`: hover a group’s value for its tooltip." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await LOOK_ACTS.tooltip(ctx.canvasElement);
  }
}`,...(R=(j=d.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var _,A,W;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['kb:group-cell-background'],
  name: '5 · Background',
  parameters: {
    ...sceneCodeWith(source, 'Background'),
    summary: 'A background by the value.'
  },
  args: {
    look: 'background',
    initialGrouping: ['colour']
  },
  argTypes: {
    look: {
      control: 'select',
      options: CELL_LOOKS
    },
    initialGrouping: {
      control: false
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="\`meta.groupCell.style\`: a **background** of the cell by the value." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await LOOK_ACTS.background(ctx.canvasElement);
  }
}`,...(W=(A=m.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var K,M,B;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['kb:group-cell-own-css'],
  name: '6 · Own CSS',
  parameters: {
    ...sceneCodeWith(source, 'OwnCss'),
    summary: 'A class by the value, for your own CSS.'
  },
  args: {
    look: 'own-css',
    initialGrouping: ['colour']
  },
  argTypes: {
    look: {
      control: 'select',
      options: CELL_LOOKS
    },
    initialGrouping: {
      control: false
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="\`meta.groupCell.className\`: a class by the value (\`look-red\`), styled by the screen’s CSS." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await LOOK_ACTS['own-css'](ctx.canvasElement);
  }
}`,...(B=(M=h.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var I,N,z;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ['kb:group-cell-own-cell'],
  name: '7 · Own content',
  parameters: {
    ...sceneCodeWith(source, 'OwnCell'),
    summary: 'The screen draws the content of the cell.'
  },
  args: {
    look: 'own-cell',
    initialGrouping: ['colour']
  },
  argTypes: {
    look: {
      control: 'select',
      options: CELL_LOOKS
    },
    initialGrouping: {
      control: false
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="\`meta.groupCell.render\`: the screen’s own content in the cell’s sticky place — the value and the number of people." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await LOOK_ACTS['own-cell'](ctx.canvasElement);
  }
}`,...(z=(N=f.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var F,P,q;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['kb:group-cell-wrap-content'],
  name: '8 · Wrap the standard content',
  parameters: {
    ...sceneCodeWith(source, 'WrapContent'),
    summary: 'The standard content inside the screen’s wrapper.'
  },
  args: {
    look: 'wrap-content',
    initialGrouping: ['colour']
  },
  argTypes: {
    look: {
      control: 'select',
      options: CELL_LOOKS
    },
    initialGrouping: {
      control: false
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="\`render\` gets the standard content (\`content\`): wrap it in a frame of your own." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await LOOK_ACTS['wrap-content'](ctx.canvasElement);
  }
}`,...(q=(P=y.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var D,H,J;k.parameters={...k.parameters,docs:{...(D=k.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ['kb:group-cell-actions-inside'],
  name: '9 · Actions inside',
  parameters: {
    ...sceneCodeWith(source, 'ActionsInside'),
    summary: 'The standard content and a button of the screen’s.'
  },
  args: {
    look: 'actions-inside',
    initialGrouping: ['colour']
  },
  argTypes: {
    look: {
      control: 'select',
      options: CELL_LOOKS
    },
    initialGrouping: {
      control: false
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="\`render\` with \`content\` and a button beside it: an action for the group." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await LOOK_ACTS['actions-inside'](ctx.canvasElement);
  }
}`,...(J=(H=k.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var Q,U,V;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ['kb:group-cell-whole-cell'],
  name: '10 · Whole cell',
  parameters: {
    ...sceneCodeWith(source, 'WholeCell'),
    summary: 'The screen’s card fills the whole cell.'
  },
  args: {
    look: 'whole-cell',
    initialGrouping: ['colour']
  },
  argTypes: {
    look: {
      control: 'select',
      options: CELL_LOOKS
    },
    initialGrouping: {
      control: false
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} hint={<Md text="\`layout: 'fill'\`: the screen’s card is the whole cell, edge to edge and the full height of the group." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await LOOK_ACTS['whole-cell'](ctx.canvasElement);
  }
}`,...(V=(U=x.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};const Z=["Standard","LeftEdge","RightEdge","Tooltip","Background","OwnCss","OwnCell","WrapContent","ActionsInside","WholeCell"],te=Object.freeze(Object.defineProperty({__proto__:null,ActionsInside:k,Background:m,LeftEdge:g,OwnCell:f,OwnCss:h,RightEdge:p,Standard:u,Tooltip:d,WholeCell:x,WrapContent:y,__namedExportsOrder:Z,default:Y},Symbol.toStringTag,{value:"Module"}));export{te as G};
