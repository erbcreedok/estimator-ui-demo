import{S as r,_ as d}from"./scene-9u2Hg12_.js";import{j as t,b as h,M as c,p as u,d as g,s as m,e as p,f as b}from"./products-CTiDOXRn.js";import{S as i}from"./sizings-DRFY_sSL.js";const[l]=Object.values([d]),y={title:"Tables/Table Core/Features/Column sizing/Playground",id:"tables-table-core-features-column-sizing-playground",...b(l)},e={tags:["kb:fill-width-playground"],name:"Playground",parameters:m(l,"Playground",p({initialColumnSizing:i})),args:{set:"basic",fill:"fill",enableColumnResizing:!0,initialColumnSizing:"none"},argTypes:{set:{control:"radio",options:["basic","setup","few","fixed","many"],description:"The columns: what each says about its width."},fill:{control:"radio",options:["fill","natural"],description:"`fill` shares the spare width, `natural` keeps every size."},enableColumnResizing:{control:"boolean",description:"The handle on the edge of every header."},initialColumnSizing:{...g(i),description:"The widths the table starts with; a drag changes them."}},render:n=>t.jsx(h,{args:n,children:t.jsx(r,{...n,initialColumnSizing:u(i,n.initialColumnSizing),hint:t.jsx(c,{text:"Everything together: the controls below change the columns, the fill, the handles and the widths the table starts with; drag an edge, double-click it to give the width back."})})})};var a,s,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  tags: ['kb:fill-width-playground'],
  name: 'Playground',
  parameters: sceneCodeWith(tableSource, 'Playground', presetCodes({
    initialColumnSizing: SIZINGS
  })),
  args: {
    set: 'basic',
    fill: 'fill',
    enableColumnResizing: true,
    initialColumnSizing: 'none'
  },
  argTypes: {
    set: {
      control: 'radio',
      options: ['basic', 'setup', 'few', 'fixed', 'many'],
      description: 'The columns: what each says about its width.'
    },
    fill: {
      control: 'radio',
      options: ['fill', 'natural'],
      description: '\`fill\` shares the spare width, \`natural\` keeps every size.'
    },
    enableColumnResizing: {
      control: 'boolean',
      description: 'The handle on the edge of every header.'
    },
    initialColumnSizing: {
      ...presetControl(SIZINGS),
      description: 'The widths the table starts with; a drag changes them.'
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} initialColumnSizing={presetValue(SIZINGS, args.initialColumnSizing)} hint={<Md text="Everything together: the controls below change the columns, the fill, the handles and the widths the table starts with; drag an edge, double-click it to give the width back." />} />
        </Remount>
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const C=["Playground"];export{e as Playground,C as __namedExportsOrder,y as default};
