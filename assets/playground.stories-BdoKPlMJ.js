import{S as l,_ as d}from"./scene-DY5gZaw6.js";import{j as n,b as h,M as u,p as c,d as g,s as p,e as m,f as b}from"./products-CTiDOXRn.js";import{P as r}from"./sortings-CKkx76aO.js";import"./rows-l3LcChQt.js";const[i]=Object.values([d]),T={title:"Tables/Table Core/Features/Sorting/Playground",id:"tables-table-core-features-sorting-playground",...b(i)},t={tags:["kb:sort-playground"],name:"Playground",parameters:p(i,"Playground",m({initialSorting:r})),args:{set:"kinds",enableSorting:!0,enableMultiSort:!0,columnMenu:!0,toolbar:!0,statusBar:!0,initialSorting:"none"},argTypes:{set:{control:"radio",options:["basic","kinds","hidden"],description:"The columns: plain, each with its kind of sort, or with a screen’s own hidden sort."},initialSorting:{...g(r),description:"The sorts the table starts with. The Status and Rank sorts belong to the `hidden` columns."}},render:e=>n.jsx(h,{args:e,children:n.jsx(l,{...e,initialSorting:c(r,e.initialSorting),hint:n.jsx(u,{text:"Everything together: the controls below switch sorting, several sorts, the column menu, the toolbar and the status bar, and pick the sort the table starts with; the columns change what each header says."})})})};var s,o,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  tags: ['kb:sort-playground'],
  name: 'Playground',
  parameters: sceneCodeWith(tableSource, 'Playground', presetCodes({
    initialSorting: PLAYGROUND_SORTINGS
  })),
  args: {
    set: 'kinds',
    enableSorting: true,
    enableMultiSort: true,
    columnMenu: true,
    toolbar: true,
    statusBar: true,
    initialSorting: 'none'
  },
  argTypes: {
    set: {
      control: 'radio',
      options: ['basic', 'kinds', 'hidden'],
      description: 'The columns: plain, each with its kind of sort, or with a screen’s own hidden sort.'
    },
    initialSorting: {
      ...presetControl(PLAYGROUND_SORTINGS),
      description: 'The sorts the table starts with. The Status and Rank sorts belong to the \`hidden\` columns.'
    }
  },
  render: args => <Remount args={args}>
            <Scene {...args} initialSorting={presetValue(PLAYGROUND_SORTINGS, args.initialSorting)} hint={<Md text="Everything together: the controls below switch sorting, several sorts, the column menu, the toolbar and the status bar, and pick the sort the table starts with; the columns change what each header says." />} />
        </Remount>
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const k=["Playground"];export{t as Playground,k as __namedExportsOrder,T as default};
