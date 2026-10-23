import{F as h,S as n,G as r,_ as w,R as b,D as m}from"./full-table-C6c0YjtD.js";import{c as S,t as R,h as i,y as l,j as a,b as G,M as f,p as s,d as g,s as T,e as O,f as x}from"./products-CTiDOXRn.js";import{S as E}from"./scene-B-pT2pmB.js";const[y]=Object.values([w]),P={title:"Tables/Table Core/Features/Row drag and drop/Playground",id:"tables-table-core-features-row-drag-playground",...x(y)},p=e=>({control:{type:"select"},options:Object.keys(e)}),t={tags:["kb:row-drag-playground"],name:"Playground",parameters:{...T(y,"Playground",O({initialGrouping:r,initialSorting:n}))},args:{enableRowDragging:"all",dropRule:"any",teamEditing:"free",initialGrouping:"by Team",initialSorting:"none",groupLayout:"rows",selection:!0,emptyGroup:!1,pinColumns:!1},argTypes:{enableRowDragging:p(m),dropRule:p(b),teamEditing:{control:{type:"radio"},options:["free","locked"]},initialGrouping:{...g(r)},initialSorting:{...g(n)},groupLayout:{control:{type:"radio"},options:["lanes","rows"]},selection:{control:{type:"boolean"}},emptyGroup:{control:{type:"boolean"}},pinColumns:{control:{type:"boolean"}}},render:e=>a.jsx(G,{args:e,children:a.jsx(E,{table:o=>a.jsx(h,{...o,...e,initialGrouping:s(r,e.initialGrouping),initialSorting:s(n,e.initialSorting)}),count:12,hint:a.jsx(f,{text:"Everything together: take a row by its handle (the selected rows go with it), drop it between rows or on a group. The controls below set which rows can be taken, the screen’s rule, whether Team can be written, the grouping, the sort, the layout of the groups, the checkboxes, an empty group and the frozen columns."})})}),play:async e=>{if(S(e))return;const o=e.canvasElement;await R(o),await i(()=>o.querySelector("[data-row-drag-handle]"),"the handles"),await l(e,{enableRowDragging:"none"}),await i(()=>!o.querySelector("[data-row-drag-handle]"),"enableRowDragging none: no row has a handle"),await l(e,{enableRowDragging:"all",initialGrouping:"none"}),await i(()=>!o.querySelector("[data-group-id]"),"no grouping: no groups")}};var u,c,d;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  tags: ['kb:row-drag-playground'],
  name: 'Playground',
  parameters: {
    ...sceneCodeWith(tableSource, 'Playground', presetCodes({
      initialGrouping: GROUPINGS,
      initialSorting: SORTINGS
    }))
  },
  args: {
    enableRowDragging: 'all',
    dropRule: 'any',
    teamEditing: 'free',
    initialGrouping: 'by Team',
    initialSorting: 'none',
    groupLayout: 'rows',
    selection: true,
    emptyGroup: false,
    pinColumns: false
  },
  argTypes: {
    enableRowDragging: names(DRAGGABLE),
    dropRule: names(RULES),
    teamEditing: {
      control: {
        type: 'radio'
      },
      options: ['free', 'locked']
    },
    initialGrouping: {
      ...presetControl(GROUPINGS)
    },
    initialSorting: {
      ...presetControl(SORTINGS)
    },
    groupLayout: {
      control: {
        type: 'radio'
      },
      options: ['lanes', 'rows']
    },
    selection: {
      control: {
        type: 'boolean'
      }
    },
    emptyGroup: {
      control: {
        type: 'boolean'
      }
    },
    pinColumns: {
      control: {
        type: 'boolean'
      }
    }
  },
  render: args => <Remount args={args}>
            <Scene table={props => <FullTable {...props} {...args as object} initialGrouping={presetValue(GROUPINGS, args.initialGrouping)} initialSorting={presetValue(SORTINGS, args.initialSorting)} />} count={12} hint={<Md text="Everything together: take a row by its handle (the selected rows go with it), drop it between rows or on a group. The controls below set which rows can be taken, the screen’s rule, whether Team can be written, the grouping, the sort, the layout of the groups, the checkboxes, an empty group and the frozen columns." />} />
        </Remount>,
  play: async ctx => {
    if (checksOff(ctx)) return;
    const c = ctx.canvasElement;
    await tableReady(c);
    await until(() => c.querySelector('[data-row-drag-handle]'), 'the handles');
    await setArgs(ctx, {
      enableRowDragging: 'none'
    });
    await until(() => !c.querySelector('[data-row-drag-handle]'), 'enableRowDragging none: no row has a handle');
    await setArgs(ctx, {
      enableRowDragging: 'all',
      initialGrouping: 'none'
    });
    await until(() => !c.querySelector('[data-group-id]'), 'no grouping: no groups');
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const k=["Playground"],j=Object.freeze(Object.defineProperty({__proto__:null,Playground:t,__namedExportsOrder:k,default:P},Symbol.toStringTag,{value:"Module"}));export{j as P};
