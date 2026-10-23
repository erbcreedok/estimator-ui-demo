import{M as o,_ as c}from"./scene-CA7bFVvb.js";import{j as s,b as d,M as h,p,d as u,s as m,e as b,f as g}from"./products-CTiDOXRn.js";import{F as r}from"./filters-CUv8qRVT.js";import"./rows-l3LcChQt.js";const[l]=Object.values([c]),w={title:"Tables/Table Core/Features/Filtering/Playground",id:"tables-table-core-features-filtering-playground",...g(l)},e={tags:["kb:filter-playground"],name:"Playground",parameters:m(l,"Playground",b({initialFilters:r})),args:{set:"basic",enableFilters:!0,initialFilters:"none"},argTypes:{set:{control:"radio",options:["basic","setup"],description:"The columns: plain, or each with what it says (Team never filters, Level by its start)."},initialFilters:{...u(r),description:"The filters the table starts with."}},render:t=>s.jsx(d,{args:t,children:s.jsx(o,{...t,initialFilters:p(r,t.initialFilters),hint:s.jsx(h,{text:"The screen’s own field calls `column.setFilterValue`: the controls below switch filtering (`enableFilters`), pick the filters the table starts with and change the columns (Team never filters, Level filters by its start)."})})})};var i,a,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ['kb:filter-playground'],
  name: 'Playground',
  parameters: sceneCodeWith(tableSource, 'Playground', presetCodes({
    initialFilters: FILTERS
  })),
  args: {
    set: 'basic',
    enableFilters: true,
    initialFilters: 'none'
  },
  argTypes: {
    set: {
      control: 'radio',
      options: ['basic', 'setup'],
      description: 'The columns: plain, or each with what it says (Team never filters, Level by its start).'
    },
    initialFilters: {
      ...presetControl(FILTERS),
      description: 'The filters the table starts with.'
    }
  },
  render: args => <Remount args={args}>
            <MethodScene {...args} initialFilters={presetValue(FILTERS, args.initialFilters)} hint={<Md text="The screen’s own field calls \`column.setFilterValue\`: the controls below switch filtering (\`enableFilters\`), pick the filters the table starts with and change the columns (Team never filters, Level filters by its start)." />} />
        </Remount>
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const v=["Playground"];export{e as Playground,v as __namedExportsOrder,w as default};
