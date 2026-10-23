import{c as l,j as r,b as h,M as c,p as u,d as m,s as w,e as d,f}from"./products-CTiDOXRn.js";import{s as p,a as F,S as v,b as o}from"./scene-D--uP8Uf.js";import{F as s}from"./filters-CUv8qRVT.js";const b={title:"Tables/Table Core/Features/Filtering/On the server",id:"tables-table-core-features-filtering-server",...f(o)},t={tags:["kb:filter-on-the-server"],name:"6 · On the server",parameters:{...w(o,"OnTheServer",d({initialFilters:s})),summary:"`manualFiltering`: the field writes the filter, the server answers with the rows that match."},args:{initialFilters:"none"},argTypes:{initialFilters:m(s)},render:e=>r.jsx(h,{args:e,children:r.jsx(v,{initialFilters:u(s,e.initialFilters),countryField:!0,hint:r.jsx(c,{text:"`manualFiltering`: type **pol** in the field above the table (the screen’s own, the table has none). The screen writes `state.columnFilters`, the table waits and does not filter the rows it has. The server answers with the matching rows and the status bar counts the rows it found (`rowCount`). **Select all** takes the rows that came, out of the rows there are."})})}),play:async e=>{l(e)||(await p(e.canvasElement),await F(e))}};var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  tags: ['kb:filter-on-the-server'],
  name: '6 · On the server',
  parameters: {
    ...sceneCodeWith(source, 'OnTheServer', presetCodes({
      initialFilters: FILTERS
    })),
    summary: '\`manualFiltering\`: the field writes the filter, the server answers with the rows that match.'
  },
  args: {
    initialFilters: 'none'
  },
  argTypes: {
    initialFilters: presetControl(FILTERS)
  },
  render: args => <Remount args={args}>
            <ServerScene initialFilters={presetValue(FILTERS, args.initialFilters)} countryField hint={<Md text="\`manualFiltering\`: type **pol** in the field above the table (the screen’s own, the table has none). The screen writes \`state.columnFilters\`, the table waits and does not filter the rows it has. The server answers with the matching rows and the status bar counts the rows it found (\`rowCount\`). **Select all** takes the rows that came, out of the rows there are." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    await serverFilterAct(ctx.canvasElement);
    await startFilterControlAct(ctx);
  }
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const g=["OnTheServer"],O=Object.freeze(Object.defineProperty({__proto__:null,OnTheServer:t,__namedExportsOrder:g,default:b},Symbol.toStringTag,{value:"Module"}));export{O as S};
